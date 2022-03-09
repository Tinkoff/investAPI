##Пример подключения на Golang

```golang
package main

import (
 "context"
 "crypto/tls"
 "fmt"
 "golang.org/x/oauth2"
 "google.golang.org/grpc"
 "google.golang.org/grpc/credentials"
 "google.golang.org/grpc/credentials/oauth"
 "log"
 "os"
 t "tink-grpc-robot/Tinkoff/investAPI"
)

func main() {

 conn, err := grpc.Dial("invest-public-api.tinkoff.ru:443",
  grpc.WithTransportCredentials(credentials.NewTLS(&tls.Config{})),
  grpc.WithPerRPCCredentials(oauth.NewOauthAccess(&oauth2.Token{
   AccessToken: os.Getenv("TINK_TOKEN"),
  })))
 if err != nil {
  log.Fatalf("did not connect: %v", err)
 }
 defer conn.Close()

 instr, err := t.NewInstrumentsServiceClient(conn).GetInstrumentBy(context.Background(), &t.InstrumentRequest{
  IdType:    t.InstrumentIdType_INSTRUMENT_ID_TYPE_TICKER,
  ClassCode: "SPBXM",
  Id:        "SPCE",
 })
 if err != nil {
  panic(err)
 }

 dataStream, err := t.NewMarketDataStreamServiceClient(conn).MarketDataStream(context.Background())
 err = dataStream.Send(&t.MarketDataRequest{
  Payload: &t.MarketDataRequest_SubscribeCandlesRequest{
   SubscribeCandlesRequest: &t.SubscribeCandlesRequest{
    SubscriptionAction: t.SubscriptionAction_SUBSCRIPTION_ACTION_SUBSCRIBE,
    Instruments: []*t.CandleInstrument{
     {
      Figi:     instr.Instrument.Figi,
      Interval: t.SubscriptionInterval_SUBSCRIPTION_INTERVAL_ONE_MINUTE,
     },
    },
   },
  },
 })
 if err != nil {
  panic(err)
 }

 for {
  recv, err := dataStream.Recv()
  if err != nil {
   panic(err)
  }
  fmt.Println(recv.Payload)
 }

}
```
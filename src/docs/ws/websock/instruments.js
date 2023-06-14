import { useQuasar } from 'Quasar'
import { useStore } from 'vuex'
import { ref, onUpdated } from 'vue'
import axios from 'axios'
import * as R from 'ramda'
import map from 'https://unpkg.com/ramda@0.29.0/es/map.js'
import take from 'https://unpkg.com/ramda@0.29.0/es/take.js'
import splitEvery from 'https://unpkg.com/ramda@0.29.0/es/splitEvery.js'
import filter from 'https://unpkg.com/ramda@0.29.0/es/filter.js'
import sum from 'https://unpkg.com/ramda@0.29.0/es/sum.js'

const groupByChunk = (instruments) => {
    return map(
            instruments => { return { label: 'Chunk ' + instruments.length, instruments }; },
            take(
                10,
                splitEvery(
                    150,
                    filter(
                        instrument => instrument.apiTradeAvailableFlag == true,
                        instruments
                    )
                )
            )
        )
}

const buildCandlesReq = (chunk) => {
    return {
        subscribeCandlesRequest: {
             subscriptionAction: 'SUBSCRIPTION_ACTION_SUBSCRIBE',
             instruments: map( instrument => { return {interval: 'SUBSCRIPTION_INTERVAL_ONE_MINUTE', instrumentId: instrument.uid }; }, chunk.instruments),
         }
    }
}


const buildOrderBookReq = (chunk) => {
    return {
        subscribeOrderBookRequest: {
              subscriptionAction: 'SUBSCRIPTION_ACTION_SUBSCRIBE',
              instruments: map( instrument => { return { depth: 10, instrumentId: instrument.uid }; }, chunk.instruments),
          }
    }
}

const toPrice = (q) => {
    if (!q) return 0
    return q.units + ((q.nano > 0)? q.nano / 1000000000: 0)
}

const stringifyOrderBook = (orderbook) => {
    if (!orderbook) return ''
    var bids = map( bid=>" bid: " + toPrice(bid.price) +" v:" + bid.quantity, take(2, orderbook.bids))
    var asks = map( ask=>" ask: " + toPrice(ask.price) +" v:" + ask.quantity, take(2, orderbook.asks))
    return bids.join() + asks.join()
}

const stringifyCandle = (candle) => {
    if (!candle) return ''
    var open = toPrice(candle.open)
    var close = toPrice(candle.close)
    var high = toPrice(candle.high)
    var low = toPrice(candle.low)
    return `open: ${open} close: ${close} high: ${high} low: ${low} volume:${candle.volume}`;
}


async function loadInstrumentsChunks(token) {
    const instruments = await axios.post(
        'https://invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService/Shares',
        { instrumentStatus: 'INSTRUMENT_STATUS_BASE'},
        { headers: {
            'Authorization': 'Bearer ' + token
        }}
    )
    const arrOfInstruments = instruments.data.instruments
    return { instruments: arrOfInstruments, chunks: groupByChunk(arrOfInstruments) }
}



const WSockViewComponent  = {
      template: `
        <div class="q-pa-md">
        <q-layout view="hHh Lpr lff" container style="height: 700px" class="rounded-borders">
            <q-header elevated>
                <q-toolbar>
                <q-btn-group>
                    <q-btn icon-right="settings" label="Auth" @click="setupSecret" size="sm" color="black">
                        <q-tooltip :offset="[0, 8]">Login</q-tooltip>
                    </q-btn>
                    <q-btn icon-right="download" label="Instruments" @click="loadInstruments" size="sm" color="black">
                        <q-tooltip :offset="[0, 8]">Reload instruments</q-tooltip>
                    </q-btn>
                    <q-btn icon-right="close" label="Disconnect" @click="doDisconnect" size="sm" color="black">
                        <q-tooltip :offset="[0, 8]">Disconnect</q-tooltip>
                    </q-btn>
                </q-btn-group>
                </q-toolbar>
          </q-header>

         <q-page-container>
            <q-page padding>
                   <p v-if="error" class="bg-negative">{{error}}</p>
                   <q-card>
                      <q-card-section>
                      <label class="text-subtitle2">{{ reportStr }}</label>
                      <q-table title="WebSockets"
                                :rows="websockets"
                                :columns="webSocketColumns"
                                row-key="uid"
                     />
                      <q-table title="Instruments"
                                  :rows="instruments"
                                  :columns="columns"
                                  row-key="uid"
                       />
                      </q-card-section>
                   </q-card>

              <!-- place QPageScroller at end of page -->
              <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
                <q-btn fab icon="keyboard_arrow_up"  />
              </q-page-scroller>
            </q-page>
         </q-page-container>
        </q-layout>
        </div>
      `,
        data () {
            return {
              token: null,
              leftDrawerOpen: true,
              errorShow: true,
              splitterModel: 30,
              streams: [],
              columns: [
                { name:'uid', label: 'uid', field: 'uid', align: 'left' },
                { name:'ticker', label: 'ticker', field: 'ticker', align: 'left' },
                { name:'name', label: 'name', field: 'name', align: 'left' },
                { name:'orderbook', label:'orderbook', field: (row) => stringifyOrderBook(row.orderbook), align: 'left'  },
                { name:'candle', label:'candle', field: (row) => stringifyCandle(row.candle), align: 'left'  },
              ],
              webSocketColumns: [
                { name:'id', label: 'id', field: 'id', align: 'left' },
                { name:'status', label: 'status', field: (row) => (row.state == 1)?'Online':'Disconnected', align: 'left' },
                { name:'candleCount', label: 'candleCount', field: 'candleCount', align: 'left' },
                { name:'candleRps', label: 'candleRps', field: 'candleRps', align: 'left' },
                { name:'orderBookCount', label: 'orderBookCount', field: 'orderBookCount', align: 'left' },
                { name:'orderBookRps', label: 'orderBookRps', field: 'orderBookRps', align: 'left' },
                { name:'lastMessageAt', label: 'lastMessageAt', field: 'lastMessageAt', align: 'left' },
                { name:'error', label: 'error', field: 'error', align: 'left' },
              ],
            }
          },
        mounted () {
            this.$store.dispatch('loadInstruments')
        },
        computed: {
          methods() {
            return [
            '/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream',
            '/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PortfolioStream',
            '/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PositionsStream',
            '/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream',

            ]
          },
          instrumentChunks() {
            return this.$store.state.instrumentChunks;
          },
          instruments() {
            return this.$store.state.instruments;
          },
          error() {
            return this.$store.state.error;
          },
          websockets() {
            return Object.values(this.$store.state.websockets)
          },
          reportStr() {
            var state = this.$store.state;
            var allSockets = Object.values(state.websockets);
            var totalSocks = allSockets.length
            var openSocks = filter(wsConn => wsConn.state == 1, allSockets).length
            var totalCandles = sum(map(ws=>ws.candleCount || 0, allSockets))
            var totalOrderBooks = sum(map(ws=>ws.orderBookCount || 0, allSockets))
            var runningTime = Math.max(1, (state.lastMessageAt - state.startedAt) / 1000);
            var rps = Math.floor((totalCandles + totalOrderBooks) / runningTime);
            return `websocket total sockets:${totalSocks} open sockets:${openSocks} candles events:${totalCandles} orderbook events:${totalOrderBooks} rps:${rps}`;
          },
        },
        methods: {
            doSend() {
                this.$store.dispatch('connect', this.request)
            },
            doDisconnect() {
                this.$store.dispatch('disconnect')
            },
            loadInstruments() {
                this.$store.dispatch('loadInstruments')
            },
        }
    }

const WSockView = {
   setup() {
       const $q = useQuasar();
       const $store = useStore();
       function setupSecret() {
           $q.dialog({
                   title: 'Settings',
                   message: 'Enter auth token',
                   prompt: {
                     model: $store.state.token,
                     type: 'text'
                   },
                   cancel: true,
                   persistent: true
                 }).onOk(data => {
                   $store.commit('onAuthToken', data)
                   // console.log('>>>> OK, received', data)
                 }).onCancel(() => {
                   // console.log('>>>> Cancel')
                 }).onDismiss(() => {
                   // console.log('I am triggered on both OK and Cancel')
                 })
       }
       function notifyOk(msg) {
           $q.notify({
                     type: 'positive',
                     position: 'top-right',
                     message: msg
                   })
       }
       function notifyError(error) {
                $q.notify({
                     type: 'negative',
                     position: 'top-right',
                     message: error
                   })
       }
       onUpdated(() => {
           if ($store.state.error) {
               notifyError($store.state.error)
           }
       });
       //$store.commit('init', {notifyOk, notifyError})
       return {setupSecret, notifyOk, notifyError};
    },
    ...WSockViewComponent }

const WStore =  {
state() {
   return {
       mode: null,
       method: 'unknown',
       request: { json: '{}'},
       responses: [],
       instruments: [],
       instrumentChunks: [],
       connection_state: -1,
       websockets: {},
       url: "wss://invest-public-api.tinkoff.ru/ws/",
       method: "tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream",
       error: null,
       token: (sessionStorage)?sessionStorage.getItem("tinkoff.auth.token"): null,
       isLoading: true,
       startedAt: 0,
       lastMessageAt: 0,
       inMsgRps: 0,
   }
},
mutations: {
   onMessage(state, data) {
     var runningTime = Math.max(1, (state.lastMessageAt - state.startedAt) / 1000);
     var wsConn = state.websockets[data.wsId];
     var q = wsConn.queue;
     var payload = data.payload;
     if (payload.candle) {
        var instrument = filter(instrumentVal => instrumentVal.uid == payload.candle.instrument_uid, state.instruments)[0]
        if (instrument) instrument.candle = payload.candle;
        wsConn.candleCount++;
        wsConn.candleRps = Math.floor(wsConn.candleCount/runningTime)
     }
     if (payload.orderbook) {
        var instrument = filter(instrumentVal => instrumentVal.uid == payload.orderbook.instrument_uid, state.instruments)[0]
        if (instrument) instrument.orderbook = payload.orderbook;
        wsConn.orderBookCount++;
        wsConn.orderBookRps = Math.floor(wsConn.orderBookCount/runningTime)
     }
     if (q.length > 100) {
        q = wsConn.queue = take(50, q)
     }
     q.push(payload)
     state.lastMessageAt = new Date().getTime()
     wsConn.lastMessageAt = new Date().toString()
   },
   onError(state, error) {
     state.error = error
   },
   onConnectPending(state, wsConn) {
        state.websockets[wsConn.id] = wsConn
   },
   onConnected(state, wsConn) {
        state.error = null;
        state.websockets[wsConn.id].state = 1;
        state.startedAt = new Date().getTime()
   },
   onDisconnect(state, wsConn) {
        if (wsConn == null) state.websockets = {}
        if (wsConn) state.websockets[wsConn.id].state = 0
   },
   onChunkError(state, wsConn) {
    if (wsConn) state.websockets[wsConn.id] = wsConn;
   },
   onSend(state, request) {

   },
   onAuthToken(state, token) {
        state.token = token;
        if (sessionStorage) sessionStorage.setItem("tinkoff.auth.token", token)
   },
   onInstrumentLoadStart(state) {
        state.isLoading = true;
        state.error = null;
   },
   onInstrumentsLoaded(state, instrumentResponse) {
        state.isLoading = false;
        state.instruments = instrumentResponse.instruments
        state.instrumentChunks = [];
        instrumentResponse.chunks.forEach(chunk => {
            state.instrumentChunks.push({
                id: state.instrumentChunks.length,
                ...chunk
            })
        })
   }
},
actions: {
    connect(context) {
       var state = context.state;
       try {
          if (!state.token) {
            console.error('token required', chunk)
            context.commit('onError', 'token required');
            return;
          }
          state.instrumentChunks.forEach(chunk => {
                     var wsConn = {
                          id: chunk.id,
                          chunk: chunk,
                          state: -1,
                          queue: [],
                          requestCandles: buildCandlesReq(chunk),
                          requestOrderBook: buildOrderBookReq(chunk),
                          candleCount: 0,
                          orderBookCount: 0,
                          startedAt: new Date().getTime(),
                          lastMessageAt: 0
                      };
                      var ws = new WebSocket(state.url + state.method, ["json-proto", state.token.trim()])
                      wsConn.connection = ws;
                      ws.onmessage = (e) => {
                          var data = JSON.parse(e.data);
                          context.commit('onMessage', {payload: data, wsId: wsConn.id});
                      }
                      ws.onerror = (error) => {
                       console.log('error', error);
                       wsConn.error = error;
                       context.commit('onChunkError', wsConn);
                       ws.close();
                       context.commit('onDisconnect', wsConn);
                      }
                      ws.onopen = function () {
                        ws.send(JSON.stringify(wsConn.requestCandles));
                        ws.send(JSON.stringify(wsConn.requestOrderBook));
                        context.commit('onConnected', wsConn);
                      };
                      ws.onclose = (event) => {
                          console.log('The connection has been closed', event);
                          context.commit('onDisconnect', wsConn);
                     };
                       console.log('ws created', ws, chunk);
                       context.commit('onConnectPending', wsConn);
          })

       } catch (error) {
        console.error('error', error)
        context.commit('onError', error);
       }
    },
    disconnect(context) {
        var state = context.state;
        var allWsCons = Object.values(state.websockets)
        for (var ws in allWsCons) {
            if (ws.connection)
                ws.connection.close()
        }
        context.commit('onDisconnect');
    },
    async loadInstruments(context) {
        context.commit('onInstrumentLoadStart');
        try {
            context.commit('onInstrumentsLoaded', await loadInstrumentsChunks(context.state.token))
            context.dispatch('connect')
        } catch(error) {
            context.commit('onError', error)
        }
    }
}
}

export { WSockView, WStore }
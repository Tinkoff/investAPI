figi_list=figi.txt
token=insert_token_here
current_year=$(date +%Y)
url=https://invest-public-api.tinkoff.ru/history-data
function download {
  local figi=$1
  local year=$2
  local file_name=${figi}_${year}.zip
  echo "downloading $figi for year $year"
  local response_code=$(curl -s --location "${url}?figi=${figi}&year=${year}" \
      -H "Authorization: Bearer ${token}" -o "${file_name}" -w '%{http_code}\n')
  if [ "$response_code" = "200" ]; then
    ((year--))
    download "$figi" "$year";
  fi
#Если превышен лимит запросов в минуту (30) - повторяем запрос
  if [ "$response_code" = "429" ]; then
      echo "rate limit exceed. sleep 5"
      sleep 5
      download "$figi" "$year";
  fi
#Если невалидный токен - выходим
  if [ "$response_code" = "401" ] || [ "$response_code" = "500" ]; then
      echo 'invalid token'
      exit 1
  fi
}

while read -r figi; do
download "$figi" "$current_year"
done < ${figi_list}

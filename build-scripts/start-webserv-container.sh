
read -p "Please input you IP address:" PGSERVER

if [ ${#PGSERVER} == 0 ]; then
    echo 'IP address was missing. Program exited' && exit;
fi

echo "PGSERVER = ${PGSERVER}"

echo 'starting container'

docker run --name node_serv01 \
    -e PGSERVER=$PGSERVER \
    -p 8081:8081 \
    -d jackiege/node:0.1
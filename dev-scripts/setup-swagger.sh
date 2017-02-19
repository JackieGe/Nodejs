mkdir -p tmp 
cd tmp
wget "https://github.com/swagger-api/swagger-ui/archive/master.zip" 
unzip master.zip -d ../../public
cd ..
rm -rf tmp

# type below in browser address
# http://localhost:3001/swagger-ui-master/dist/index.html?url=http://localhost:3001/swagger.json
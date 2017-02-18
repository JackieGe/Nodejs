cd ..

tsc --outDir "dist" \
    --sourceMap false \
&& docker build -t jackiege/node:0.1 .
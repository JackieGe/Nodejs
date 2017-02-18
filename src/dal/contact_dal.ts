import * as pg from 'pg'

// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
process.env.PGUSER
const config: pg.PoolConfig = {
    user: process.env.PGUSER, //env var: PGUSER
    database: process.env.PGDATABASE, //env var: PGDATABASE
    password: process.env.PGPASSWORD, //env var: PGPASSWORD
    host: process.env.PGSERVER, // Server hosting the postgres database
    port: process.env.PGPORT, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const pgPool = new pg.Pool(config);

//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients

function getContacts(id?: number): Promise<any[]> {
    let queryString = 'SELECT "Id", "Name" FROM public.contact';
    let params: number[];

    if (!isNaN(id)) {
        queryString = queryString + ' where "Id" = $1';
        params = [id];

    }
    return pgPool.connect().then(client => {
        return client.query(queryString, params).then(value => {
            if (value.rowCount > 0) {
                console.log(`returned ${value.rowCount} records`)
                /* for (let row of value.rows) {
                     console.log(`${row["Name"]}`)
                 }*/
            }
            client.release();
            return value.rows;
        }).catch(reason => {
            console.log(reason);
        });
    });

    /*
        return pool.connect((err, client, done) => {
            //call `done()` to release the client back to the pool
            done();
           if (err) {
                return console.error('error fetching client from pool', err);
            }
    
            return client.query('SELECT "Id", "Name" FROM public.contact').then(value => {
                    if (value.rowCount > 0) {
                        console.log(`returned ${value.rowCount} records`)
                        for (let row of value.rows) {
                            console.log(`${row["Name"]}`)
                        }
                    }
                    return value.rows
                });
        })*/
}

export { getContacts }
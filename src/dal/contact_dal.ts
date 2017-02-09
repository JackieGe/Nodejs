import * as pg from 'pg'

// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
const config: pg.PoolConfig = {
    user: 'postgres', //env var: PGUSER
    database: 'test', //env var: PGDATABASE
    password: 'jackie', //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5433, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients

function getContacts(id?: number): Promise<any[]> {
    const pool = new pg.Pool(config);
    let queryString = 'SELECT "Id", "Name" FROM public.contact';
    let params: number[];

    if (!Number.isNaN(id)) {
        queryString = queryString + ' where "Id" = $1';
        params = [id];

    }
    return pool.connect().then(client => {
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
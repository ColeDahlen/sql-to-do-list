const pg = require('pg')
const Pool = pg.Pool;
const pool = new Pool({
   database: 'toList',
   host: 'localhost',
   port: 5432 ,
   max: 10,
   idleTimeoutMillius: 30000
});
pool.on('connect', ()=> {
   console.log('connected')
});
pool.on('error', (error) =>{
    console.log('error', error)
 })
module.exports= pool;
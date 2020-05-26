const db = require ('mongoose');

db.Promise = global.Promise;

async function connect (url) {
    db.Promise = global.Promise;
    await db.connect (url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    console.log ('[db] Conectada con exito');
}

module.exports = connect;
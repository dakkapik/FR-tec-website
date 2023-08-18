let mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const server = `mongodb+srv://fr-tec:${process.env.PASSWORD}@cluster0.dab6a.mongodb.net/?retryWrites=true&w=majority`; // REPLACE WITH YOUR DB SERVER
const database = 'frtec';      // REPLACE WITH YOUR DB NAME

class Database {
    constructor() {
        this._connect(server)
    }
  
    _connect() {
     mongoose.connect(server)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error: ', err)
       })
    }
}

module.exports = new Database()
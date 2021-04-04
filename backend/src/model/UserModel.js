const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    user: {type: String, required: true},
    pass: {type: String, required: true},
    conquistas: [{
        conquista1: String, 
        conquista2: String, 
        conquista3: String
    }],
    nome: {type: String, required: true},
    sobrenome: {type: String},
    email: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);
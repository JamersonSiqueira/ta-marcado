const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    user: {type: String, required: true},
    pass: {type: String, required: true},
    conquistas: [{
        conquista1: {type: String, default: 'F'}, 
        conquista2: {type: String, default: 'F'}, 
        conquista3: {type: String, default: 'F'}
    }],
    nome: {type: String, required: true},
    sobrenome: {type: String},
    email: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);
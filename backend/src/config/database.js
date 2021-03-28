const mongoose = require('mongoose');

const url = 'mongodb+srv://tamarcado:tamarcado@cluster0.tys2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(url , {useNewUrlParser: true});

module.exports = mongoose;
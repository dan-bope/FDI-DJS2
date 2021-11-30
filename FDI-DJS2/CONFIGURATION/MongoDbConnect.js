const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODBCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Failed to connect MongoDB', error));
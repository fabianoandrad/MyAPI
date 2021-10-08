
const { Int32 } = require('bson');
const mongoose = require('mongoose');
const schema = mongoose.Schema

const list = new schema({
    status:{
        type: 'string',
    },
    installKey:{
        type: 'string',
    },
    createdAt:{
        type: 'string',
    },
    enterpriseName:{
        type: 'string',
    },
    licenseKey:{
        type: 'string',
    },
    maxNumberOfDevices:{
        type: 'string',
    },
    licensedUntil:{
        type: 'string',
    },
    licenseModel:{
        type: 'string',
    },
    updatedAt:{
        type: 'string',
    }

})

mongoose.model('List', list)

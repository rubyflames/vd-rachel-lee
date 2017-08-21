'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var entrySchema = new Schema({
  name: {
    type: String,
    Required: 'Please type in an entry name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  // Created_time: {
  //   type: Time,
  //   default: Time.now
  // },
  status: {
    type: [{
      type: String,
      enum: ['retrieved', 'stored', 'completed']
    }],
    default: ['stored']
  }
});

module.exports = mongoose.model('Entry', EntrySchema);

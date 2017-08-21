'use strict';

var mongoose = require('mongoose'),
  Entry = mongoose.model('Entrys');

exports.list_all_entrys = function(req, res) {
  Entry.find({}, function(err, entry) {
    if (err)
      res.send(err);
    res.json(entry);
  });
};

exports.create_a_entry = function(req, res) {
  var new_entry = new Entry(req.body);
  new_entry.save(function(err, entry) {
    if (err)
      res.send(err);
    res.json(entry);
  });
};

exports.read_a_entry = function(req, res) {
  Entry.findById(req.params.entryId, function(err, entry) {
    if (err)
      res.send(err);
    res.json(entry);
  });
};


exports.update_a_entry = function(req, res) {
  Entry.findOneAndUpdate({_id: req.params.entryId}, req.body, {new: true}, function(err, entry) {
    if (err)
      res.send(err);
    res.json(entry);
  });
};

// exports.delete_a_entry = function(req, res) {
//
//
//   Entry.remove({
//     _id: req.params.entryId
//   }, function(err, entry) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Entry successfully deleted' });
//   });
// };

'use strict';
module.exports = function(app) {
  var api = require('../controllers/apiController');

  // api Routes
  app.route('/entry')
    .get(api.list_all_entries)
    .post(api.create_a_entry);


  app.route('/entry/:entryId')
    .get(api.read_a_entry)
    .put(api.update_a_entry)
    // .delete(api.delete_a_entry);
};

// 'use strict';

const Nodal = require('nodal');

class CreateSavedtrails extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031501022225;
  }
  up() {
    return [
      this.createTable('savedtrails', [
        { name: 'user_id', type: 'int' },
        { name: 'crumbtrail_id', type: 'int' },
        { name: 'position', type: 'int' },
        { name: 'time_start', type: 'int' },
        { name: 'time_finished', type: 'int' }]),
    ];
  }
  down() {
    return [
      this.dropTable('savedtrails'),
    ];
  }
}

module.exports = CreateSavedtrails;
'use strict';

const Nodal = require('nodal');

const Crumbtrail = Nodal.require('app/models/crumbtrail.js');

class CrumbtrailsController extends Nodal.Controller {

  index() {
    Crumbtrail.query()
      .where(this.params.query)
      .end((err, models) => {
        this.respond(err || models);
      });
  }
  show() {
    Crumbtrail.find(this.params.route.id, (err, model) => {
      this.respond(err || model);
    });
  }

  create() {
    Crumbtrail.create(this.params.body, (err, model) => {
      this.respond(err || model);
    });
  }
  update() {
    Crumbtrail.update(this.params.route.id, this.params.body, (err, model) => {
      this.respond(err || model);
    });
  }
  destroy() {
    Crumbtrail.destroy(this.params.route.id, (err, model) => {
      this.respond(err || model);
    });
  }

}

module.exports = CrumbtrailsController;

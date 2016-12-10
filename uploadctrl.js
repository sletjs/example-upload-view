'use strict';

const UploadViewController = require('slet').UploadViewController

module.exports = class MyUploadController extends UploadViewController {
  constructor(app, ctx, next) {
    super(app, ctx, next)
    
    this.post_filter = [this.upload.single('avatar')]
  }
  
  post() { 
    return {
      tpl: 'index',
      data: {
        title: 'this a upload view'
      }
    }
  } 
}

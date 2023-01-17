/*
*   Bookmarklet.js
*/

import { getGlobalName, getTitle, getVersion } from './utils/constants';
import { addNodes, removeNodes } from './utils/dom';
import { MessageDialog } from './utils/dialog';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
export { Bookmarklet };

/* eslint no-console: 0 */
function logVersionInfo (appName) {
  console.log(getTitle() + ' : v' + getVersion() + ' : ' + appName);
}

function Bookmarklet (params) {
  let globalName = getGlobalName(params.appName);

  // use singleton pattern
  if (typeof window[globalName] === 'object')
    return window[globalName];

  this.appName  = params.appName;
  this.cssClass = params.cssClass;
  this.msgText  = params.msgText;
  this.params   = params;
  this.show     = false;

  let dialog = new MessageDialog();
  window.addEventListener('resize', event => {
    removeNodes(this.cssClass);
    dialog.resize();
    this.show = false;
  });

  window[globalName] = this;
  logVersionInfo(this.appName);
}

Bookmarklet.prototype.run = function () {
  let dialog = new MessageDialog();

  dialog.hide();
  this.show = !this.show;

  if (this.show) {
    if (addNodes(this.params) === 0) {
      dialog.show(this.appName, this.msgText);
      this.show = false;
    }
  }
  else {
    removeNodes(this.cssClass);
  }
  // Initializes tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {selector: '[data-bs-toggle="tooltip"]'});
    });

};

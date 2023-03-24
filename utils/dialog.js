/*
*   dialog.js: functions for creating, modifying and deleting message dialog
*/

import { getScrollOffsets } from './utils';
export { MessageDialog };
import $ from 'jquery';
window.jQuery = window.$ = require('jquery');
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

// /*
// *   setBoxGeometry: Set the width and position of message dialog based on
// *   the width of the browser window. Called by functions resizeMessage and
// *   createMsgOverlay.
// */
// function setBoxGeometry (dialog) {
//   let width  = window.innerWidth / 3.2;
//   let left   = window.innerWidth / 2 - width / 2;
//   let scroll = getScrollOffsets();

//   dialog.style.width = width + "px";
//   dialog.style.left  = (scroll.x + left) + "px";
//   dialog.style.top   = (scroll.y + 30) + "px";
// }

/*
*   createMsgDialog: Construct and position the message dialog whose
*   purpose is to alert the user when no target elements are found by
*   a bookmarklet.
*/
function createMsgDialog () {;
  // Checks if node parent container exists already, and creates it if not.
  if (!($("#bs-bm").length)) {
    let el = document.createElement('div');
    el.setAttribute('class', 'bootstrap-bm');
    el.setAttribute('id', 'bs-bm');
    document.body.appendChild(el);
  }

  let dialogTop = '<div class="modal fade"  data-bs-backdrop="false" id="a11yMsgDialog" tabindex="-1" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
  let dialogBody = '<h1 class="modal-title fs-5" id="a11yDialogTitle">Modal title</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body" id="a11yDialogBody"></div><div class="modal-footer"><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div>';
  let dialogBottom = '</div></div></div></div>';

  let dialog = dialogTop + dialogBody + dialogBottom;
  $('#bs-bm').append(dialog);



  return dialog;
}

/*
*   deleteMsgDialog: Use reference to delete message dialog.
*/
function deleteMsgDialog (dialog) {
  const dialogEl = bootstrap.Modal.getInstance('#a11yMsgDialog');
  if (dialog) dialogEl.hide();
}

/*
*   MessageDialog: Wrapper for show, hide and resize methods
*/
function MessageDialog () {
  this.GLOBAL_NAME = 'a11yMessageDialog';
  this.CSS_CLASS = 'oaa-message-dialog';
}

/*
*   show: show message dialog
*/
MessageDialog.prototype.show = function (title, message) {
  const MSG_DIALOG = this.GLOBAL_NAME;
  let h2, div;

  if (!window[MSG_DIALOG])
    window[MSG_DIALOG] = createMsgDialog();

  
  $('#a11yDialogTitle').text(title);
  $("#a11yDialogBody").html(message);
  console.log("Dialog shown");

  $(function () {
    const dialog = new bootstrap.Modal('#a11yMsgDialog', {backdrop: false});
    dialog.show();
  })
  console.log("Dialog shown");
};

/*
*   hide: hide message dialog
*/
MessageDialog.prototype.hide = function () {
  const MSG_DIALOG = this.GLOBAL_NAME;
  if (window[MSG_DIALOG]) {
    deleteMsgDialog(window[MSG_DIALOG]);
    delete(window[MSG_DIALOG]);
  }
};

/*
*   resize: resize message dialog
*/
MessageDialog.prototype.resize = function () {
  const MSG_DIALOG = this.GLOBAL_NAME;
  if (window[MSG_DIALOG])
    setBoxGeometry(window[MSG_DIALOG]);
};

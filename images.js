/*
*   images.js: highlight image elements
*/

import { Bookmarklet }  from './Bookmarklet';
import { InfoObject }   from './InfoObject';
import { getCssClass }  from './utils/constants';
import { addPolyfills } from './utils/utils';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

(function () {
  initImages().run();

  // Initializes tooltips and assigns them a parent container.
  const tooltipTriggerList = document.querySelectorAll('#bs-bm [data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {container: '#bs-bm'}));

  // Initializes popovers
  const popoverTriggerList = document.querySelectorAll('#bs-bm [data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {container: '#bs-bm', sanitize: false}));
})();

function initImages () {

  addPolyfills();

  let targetList = [
    {selector: "area", color: "teal",   label: "area"},
    {selector: "img",  color: "olive",  label: "img"},
    {selector: "svg",  color: "purple", label: "svg"},
    {selector: "[role=img]",  color: "olive",  label: "img"}
  ];

  let selectors = targetList.map(function (tgt) {return tgt.selector;}).join(', ');

  function getInfo (element, target) {
    return new InfoObject(element, 'IMAGE INFO');
  }

  let params = {
    appName:    "Images",
    cssClass:   getCssClass("Images"),
    msgText:    "No image elements (" + selectors + ") found.",
    targetList: targetList,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(params);
}

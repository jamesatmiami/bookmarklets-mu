/*
*   headings.js: highlight heading elements
*/

import { Bookmarklet }  from './Bookmarklet';
import { InfoObject }   from './InfoObject';
import { getCssClass }  from './utils/constants';
import { addPolyfills } from './utils/utils';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

(function () {
  initHeadings().run();

  // Initializes tooltips and assigns them a parent container.
  const tooltipTriggerList = document.querySelectorAll('#bs-bm [data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {container: '#bs-bm'}));

  // Initializes popovers
  const popoverTriggerList = document.querySelectorAll('#bs-bm [data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {container: '#bs-bm', sanitize: false}));
})();

function initHeadings () {

  addPolyfills();

  let targetList = [
    {selector: "h1", color: "navy",   label: "h1"},
    {selector: "h2", color: "olive",  label: "h2"},
    {selector: "h3", color: "purple", label: "h3"},
    {selector: "h4", color: "green",  label: "h4"},
    {selector: "h5", color: "gray",   label: "h5"},
    {selector: "h6", color: "brown",  label: "h6"},
    // {selector: "[role='heading'][aria-level=1]", color: "navy", label: "h1"},
    // {selector: "[role='heading'][aria-level=2]", color: "olive", label: "h2"},
    // {selector: "[role='heading'][aria-level=3]", color: "purple", label: "h3"},
    // {selector: "[role='heading'][aria-level=4]", color: "green", label: "h4"},
    // {selector: "[role='heading'][aria-level=5]", color: "gray", label: "h5"},
    // {selector: "[role='heading'][aria-level=6]", color: "brown", label: "h6"},
  ];

  let selectors = targetList.map(function (tgt) {return tgt.selector;}).join(', ');

  function getInfo (element, target) {
    let info = new InfoObject(element, 'HEADING INFO');
    info.addProps('level ' + target.label.substring(1));
    return info;
  }

  let params = {
    appName:    "Headings",
    cssClass:   getCssClass("Headings"),
    msgText:    "No heading elements (" + selectors + ") found.",
    targetList: targetList,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(params);
}

/*
*   lists.js: highlight list elements
*/

import { Bookmarklet }  from './Bookmarklet';
import { InfoObject }   from './InfoObject';
import { getCssClass }  from './utils/constants';
import { countChildrenWithTagNames } from './utils/dom';
import { addPolyfills } from './utils/utils';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

(function () {
  initLists().run();

  // Initializes tooltips and assigns them a parent container.
  const tooltipTriggerList = document.querySelectorAll('#bs-bm [data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {container: '#bs-bm'}));

  // Initializes popovers
  const popoverTriggerList = document.querySelectorAll('#bs-bm [data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {container: '#bs-bm', sanitize: false}));
})();

function initLists () {

  addPolyfills();

  let targetList = [
    {selector: "dl", color: "olive",  label: "dl"},
    {selector: "ol", color: "purple", label: "ol"},
    {selector: "ul", color: "navy",   label: "ul"}
  ];

  let selectors = targetList.map(function (tgt) {return tgt.selector;}).join(', ');

  function getInfo (element, target) {
    let listCount;

    switch (target.label) {
      case 'dl':
        listCount = countChildrenWithTagNames(element, ['DT', 'DD']);
        break;
      case 'ol':
      case 'ul':
        listCount = countChildrenWithTagNames(element, ['LI']);
        break;
    }

    let info = new InfoObject(element, 'LIST INFO');
    info.addProps(listCount + ' items');
    return info;
  }

  let params = {
    appName:    "Lists",
    cssClass:   getCssClass("Lists"),
    msgText:    "No list elements (" + selectors + ") found.",
    targetList: targetList,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(params);
}

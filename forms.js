/*
*   forms.js: highlight form-related elements
*/

import { Bookmarklet }  from './Bookmarklet';
import { InfoObject }   from './InfoObject';
import { getCssClass }  from './utils/constants';
import { addPolyfills } from './utils/utils';
import * as bootstrap from 'bootstrap';


(function () {
  initForms().run();
})();

function initForms () {

  addPolyfills();

  let targetList = [
    {selector: "button",   color: "purple", label: "button"},
    {selector: "input",    color: "navy",   label: "input"},
    {selector: "keygen",   color: "gray",   label: "keygen"},
    {selector: "meter",    color: "maroon", label: "meter"},
    {selector: "output",   color: "teal",   label: "output"},
    {selector: "progress", color: "olive",  label: "progress"},
    {selector: "select",   color: "green",  label: "select"},
    {selector: "textarea", color: "brown",  label: "textarea"},
    {selector: "[role=combobox]",color: "navy",label: "combobox"}, 
    {selector: "[role=button]", color: "purple", label: "button"},
    {selector: "[role=textbox]", color: "navy", label: "input"}, 
    {selector: "[role=checkbox]", color: "navy", label: "input"}];

  let selectors = targetList.map(function (tgt) {return '<li>' + tgt.selector + '</li>';}).join('');

  function getInfo (element, target) {
    return new InfoObject(element, 'FORM INFO');
  }

  let params = {
    appName:    "Forms",
    cssClass:   getCssClass("Forms"),
    msgText:    "No form-related elements found: <ul>" + selectors + "</ul>",
    targetList: targetList,
    getInfo:    getInfo,
    dndFlag:    true
  };

  return new Bookmarklet(params);
}

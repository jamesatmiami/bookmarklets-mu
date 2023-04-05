/*
*   dom.js: functions and constants for adding and removing DOM overlay elements
*/

import {
  createOverlay,
  addDragAndDrop
} from './overlay';

import {
  formatInfo
} from './info';

export {
  countChildrenWithTagNames,
  isDescendantOf,
  hasParentWithName,
  addNodes,
  removeNodes
};

/*
*   isVisible: Recursively check element properties from getComputedStyle
*   until document element is reached, to determine whether element or any
*   of its ancestors has properties set that affect its visibility. Called
*   by addNodes function.
*/
function isVisible(element) {

  function isVisibleRec(el) {
    if (el.nodeType === Node.DOCUMENT_NODE) return true;

    let computedStyle = window.getComputedStyle(el, null);
    let display = computedStyle.getPropertyValue('display');
    let visibility = computedStyle.getPropertyValue('visibility');
    let hidden = el.getAttribute('hidden');
    let ariaHidden = el.getAttribute('aria-hidden');

    if ((display === 'none') || (visibility === 'hidden') ||
      (hidden !== null) || (ariaHidden === 'true')) {
      return false;
    }
    return isVisibleRec(el.parentNode);
  }

  return isVisibleRec(element);
}

/*
*   countChildrenWithTagNames: For the specified DOM element, return the
*   number of its child elements with tagName equal to one of the values
*   in the tagNames array.
*/
function countChildrenWithTagNames(element, tagNames) {
  let count = 0;

  let child = element.firstElementChild;
  while (child) {
    if (tagNames.indexOf(child.tagName) > -1) count += 1;
    child = child.nextElementSibling;
  }

  return count;
}

/*
*   isDescendantOf: Determine whether element is a descendant of any
*   element in the DOM with a tagName in the list of tagNames.
*/
function isDescendantOf(element, tagNames) {
  if (typeof element.closest === 'function') {
    return tagNames.some(name => element.closest(name) !== null);
  }
  return false;
}

/*
*   hasParentWithName: Determine whether element has a parent with
*   tagName in the list of tagNames.
*/
function hasParentWithName(element, tagNames) {
  let parentTagName = element.parentElement.tagName.toLowerCase();
  if (parentTagName) {
    return tagNames.some(name => parentTagName === name);
  }
  return false;
}

const popOverState = {
  landmarks: [],
  headings: [],
  lists: [],
  images: [],
  forms: [],
  interactive: []
}

/*
*   addNodes: Use targetList to generate nodeList of elements and to
*   each of these, add an overlay with a unique CSS class name.
*   Optionally, if getInfo is specified, add tooltip information;
*   if dndFlag is set, add drag-and-drop functionality.
*/
function addNodes(params) {
  let targetList = params.targetList,
    cssClass = params.cssClass,
    getInfo = params.getInfo,
    evalInfo = params.evalInfo,
    dndFlag = params.dndFlag;
  let counter = 0;

  const appName = params.appName.toLowerCase();

  console.log(appName);

  // Checks if node parent container exists already, and creates it if not.
  if (!($("#bs-bm").length)) {
    let el = document.createElement('div');
    el.setAttribute('id', 'bs-bm');
    document.body.appendChild(el);
    const shadowRoot = document.querySelector("#bs-bm").attachShadow({ mode: "open" });

    const pageStyle = document.createElement("link");
    pageStyle.setAttribute("rel", "stylesheet");
    pageStyle.setAttribute("href", "http://127.0.0.1:5500/styles.css");

    const btstrp = document.createElement("link");
    btstrp.setAttribute("rel", "stylesheet");
    btstrp.setAttribute("href", "http://127.0.0.1:5500/bootstrap-bm.css");
    const jq = document.createElement("script");
    jq.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js");

    const btstrpjs = document.createElement("script");
    btstrpjs.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");

    shadowRoot.appendChild(pageStyle);
    shadowRoot.appendChild(btstrp);
    shadowRoot.appendChild(jq);
    shadowRoot.appendChild(btstrpjs);

    const div = document.createElement("div");
    div.classList.add("bootstrap-bm");

    shadowRoot.appendChild(div);
  }

  const bsBM = document.querySelector("#bs-bm").shadowRoot.querySelector(".bootstrap-bm");

  targetList.forEach(function (target) {
    // Collect elements based on selector defined for target
    let elements = document.querySelectorAll(target.selector);

    // Filter elements if target defines a filter function
    if (typeof target.filter === 'function')
      elements = Array.prototype.filter.call(elements, target.filter);

    Array.prototype.forEach.call(elements, function (element) {
      if (isVisible(element)) {
        let info = getInfo(element, target);
        if (evalInfo) evalInfo(info, target);
        let boundingRect = element.getBoundingClientRect();
        let overlayNode = createOverlay(target, boundingRect, cssClass);
        if (dndFlag) addDragAndDrop(overlayNode);
        const labelNode = overlayNode.firstChild;
        labelNode.setAttribute('data-bs-toggle', "tooltip");
        labelNode.setAttribute('data-bs-html', "true");
        labelNode.setAttribute('data-bs-title', formatInfo(info));
        $(labelNode).html("<a href='#' data-bs-toggle='popover' data-bs-html='true' data-bs-title='" + info.title + "' data-bs-content='" + formatInfo(info) + "'>" + labelNode.innerHTML + "</a>");
        bsBM.appendChild(overlayNode);
        popOverState[appName].push(overlayNode);
        counter += 1;
      }
    });
  });
  return counter;
};


/*
*   removeNodes: Use the unique CSS class name supplied to addNodes
*   to remove all instances of the overlay nodes.
*/
function removeNodes(cssClass) {
  const shadowRoot = document.querySelector("#bs-bm").shadowRoot;
  let selector = "div." + cssClass;
  let elements = shadowRoot.querySelectorAll(selector);
  console.log(elements);
  for (let el of elements) {
    shadowRoot.querySelector(".bootstrap-bm").removeChild(el);
  }
}

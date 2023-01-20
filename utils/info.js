/*
 *   info.js: Function for displaying information on highlighted elements
 */

import {
  getAttributeValue,
  isLabelableElement
} from './namefrom';
export {
  getElementInfo,
  formatInfo
};

/*
 *   getElementInfo: Extract tagName and other attribute information
 *   based on tagName and return as formatted string.
 */
function getElementInfo(element) {
  let tagName = element.tagName.toLowerCase(),
    elementInfo = tagName;

  if (tagName === 'input') {
    let type = element.type;
    if (type && type.length) elementInfo += ' [type="' + type + '"]';
  }

  if (tagName === 'label') {
    let forVal = getAttributeValue(element, 'for');
    if (forVal.length) elementInfo += ' [for="' + forVal + '"]';
  }

  if (isLabelableElement(element)) {
    let id = element.id;
    if (id && id.length) elementInfo += ' [id="' + id + '"]';
  }

  if (element.hasAttribute('role')) {
    let role = getAttributeValue(element, 'role');
    if (role.length) elementInfo += ' [role="' + role + '"]';
  }

  return elementInfo;
}

/*
 *   formatInfo: Convert info properties into a string with line breaks.
 */
function formatInfo(info) {
  let value = '';
  let title = info.title,
    element = info.element,
    grpLabels = info.grpLabels,
    accName = info.accName,
    accDesc = info.accDesc,
    role = info.role,
    props = info.props;

  let groupItemS = "<li class='list-group-item'>";
  let groupItemE = "</li>";

  if (title.length) {
    value += '<b>=== ' + title + ' ===</b><br>';

    if (element) value += groupItemS + 'ELEMENT: ' + element + groupItemE;


    if (grpLabels && grpLabels.length) {
      // array starts with innermost label, so process from the end
      for (let i = grpLabels.length - 1; i >= 0; i--) {
        value += groupItemS + 'GRP. LABEL: ' + grpLabels[i].name + groupItemE + groupItemS + 'FROM: ' + grpLabels[i].source + groupItemE;
      }
    }

    if (accName) {
      value += groupItemS + 'ACC. NAME: ' + accName.name + groupItemE + groupItemS + 'FROM: ' + accName.source + groupItemE;
    }

    if (accDesc) {
      value += groupItemS + 'ACC. DESC: ' + accDesc.name + groupItemE + groupItemS + 'FROM: ' + accDesc.source + groupItemE;
    }

    if (role) value += groupItemS + 'ROLE: ' + role + groupItemE;

    if (props) value += groupItemS + 'PROPERTIES: ' + props + groupItemE;

    value = "<ul class='list-group list-group-flush'>" + value + "</ul>";
    console.log(value);
    

    return value;
  }
}
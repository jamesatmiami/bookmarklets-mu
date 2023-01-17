/*
*   info.js: Function for displaying information on highlighted elements
*/

import { getAttributeValue, isLabelableElement } from './namefrom';
export { getElementInfo, formatInfo };

/*
*   getElementInfo: Extract tagName and other attribute information
*   based on tagName and return as formatted string.
*/
function getElementInfo (element) {
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
function formatInfo (info) {
  let value = '';
  let title = info.title,
      element = info.element,
      grpLabels = info.grpLabels,
      accName = info.accName,
      accDesc = info.accDesc,
      role = info.role,
      props = info.props;

  value += '<b>=== ' + title + ' ===</b>';

  if (element) value += '<br>ELEMENT: ' + element;

  if (grpLabels && grpLabels.length) {
    // array starts with innermost label, so process from the end
    for (let i = grpLabels.length - 1; i >= 0; i--) {
      value += '<br>GRP. LABEL: ' + grpLabels[i].name + '<br>FROM: ' + grpLabels[i].source;
    }
  }

  if (accName) {
    value += '<br>ACC. NAME: ' + accName.name + '<br>FROM: ' + accName.source;
  }

  if (accDesc) {
    value += '<br>ACC. DESC: ' + accDesc.name + '<br>FROM: ' + accDesc.source;
  }

  if (role) value += '<br>ROLE: ' + role;

  if (props) value += '<br>PROPERTIES: ' + props;

  return value;
}

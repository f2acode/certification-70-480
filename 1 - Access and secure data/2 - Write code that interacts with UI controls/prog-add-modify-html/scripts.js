window.onload = function () {

    //element.accessKey
    document.getElementById("accessKey").accessKey = "o";

    //element.addEventListener()
    document.getElementById("eventListener").addEventListener("click", function () {
        alert("Event listener activated!");
    });

    //element.appendChild()
    var appendChild = document.createElement("P");
    var textAppendChild = document.createTextNode("Append child added inside");
    appendChild.appendChild(textAppendChild);
    document.getElementById("appendChild").appendChild(appendChild);

    //element.attributes
    var attributes = document.createElement("P");
    var attributesValues = document.getElementById("attributes").attributes;
    var textAttributes = document.createTextNode("Atributes: " + attributesValues
        + " Size: " + attributesValues.length);
    attributes.appendChild(textAttributes);
    document.getElementById("attributes").appendChild(attributes);

    //element.blur() e focus()
    document.getElementById("blur").focus();
    setTimeout(function () {
        document.getElementById("blur").blur();
    }, 2000);

    //element.childElementCount
    var childElementCount = document.createElement("P");
    var childsChildElementCount = document.getElementById("childElementCount").childElementCount;
    var textChildElementCount = document.createTextNode("Child elements: " + childsChildElementCount);
    childElementCount.appendChild(textChildElementCount);
    document.getElementById("childElementCount").appendChild(childElementCount);

    //element.childNodes
    var childNodes = document.getElementById("childNodes");
    var childsChildNodes = childNodes.childNodes;
    var txtchildsChildNodes;
    childsChildNodes.forEach(function (child) {
        if (txtchildsChildNodes == undefined)
            txtchildsChildNodes = child.nodeName + " ";
        else
            txtchildsChildNodes += child.nodeName + " ";
    }, this);
    var childNodesReturn = document.createTextNode("Child nodes: " + txtchildsChildNodes);
    childNodes.appendChild(childNodesReturn);

    //element.children
    var childrenNodes = document.getElementById("children");
    var childsChildrenNodes = childrenNodes.children;
    var txtchildsChildrenNodes;
    for (var i = 0; i < childsChildrenNodes.length; i++) {
        if (txtchildsChildrenNodes == undefined)
            txtchildsChildrenNodes = childsChildrenNodes[i].nodeName + " ";
        else
            txtchildsChildrenNodes += childsChildrenNodes[i].nodeName + " ";
    }
    var childrenNodesReturn = document.createTextNode("Child nodes: " + txtchildsChildrenNodes);
    childrenNodes.appendChild(childrenNodesReturn);

    //element.classList
    var classList = document.getElementById("classList");
    var classListArray = classList.classList;
    var txtClassListArray;
    for (var i = 0; i < classListArray.length; i++) {
        if (txtClassListArray == undefined)
            txtClassListArray = classListArray[i] + " ";
        else
            txtClassListArray += classListArray[i] + " ";
    }
    var classListChild = document.createTextNode("Class list: " + txtClassListArray);
    classList.appendChild(classListChild);

    //element.className
    var className = document.getElementById("className");
    var classNameClassName = className.className;
    var classNameChild = document.createTextNode("Class name: " + classNameClassName);
    className.appendChild(classNameChild);

    //element.click()
    var click = document.getElementById("click");
    click.addEventListener("click", function () {
        var clickSimulated = document.createTextNode("Click simulated");
        click.appendChild(clickSimulated);
    });
    click.click();

    //element.clientHeight
    var clientHeight = document.getElementById("clientHeight");
    var height = clientHeight.clientHeight;
    var clientHeightChild = document.createTextNode("Client Height: " + height);
    clientHeight.appendChild(clientHeightChild);

    //element.clientWitdh
    var clientWidth = document.getElementById("clientWidth");
    var width = clientWidth.clientWidth;
    var clientWidthChild = document.createTextNode("Client Width: " + width);
    clientWidth.appendChild(clientWidthChild);

    //element.clientLeft
    var clientLeft = document.getElementById("clientLeft");
    var left = clientLeft.clientLeft;
    var clientLeftChild = document.createTextNode("Client Left border size: " + left);
    clientLeft.appendChild(clientLeftChild);

    //element.clientTop
    var clientTop = document.getElementById("clientTop");
    var top = clientTop.clientTop;
    var clientTopChild = document.createTextNode("Client Top border size: " + top);
    clientTop.appendChild(clientTopChild);

    //element.cloneNode
    var cloneNode = document.getElementById("cloneNode");
    var cloneNodeChild = cloneNode.cloneNode(true);
    cloneNode.appendChild(cloneNodeChild);

    //element.compareDocumentPosition()
    var elementCompareDocumentPosition = document.getElementById("compareDocumentPosition");
    var elementCompareDocumentPosition1 = document.getElementById("clientHeight");
    var elementCompareDocumentPosition2 = document.getElementById("clientTop");

    var compareDocumentPositionValue =
        elementCompareDocumentPosition1.compareDocumentPosition(
            elementCompareDocumentPosition2);

    var elementCompareDocumentPositionChild = document.createTextNode(
        "Distance: " + compareDocumentPositionValue);

    elementCompareDocumentPosition.appendChild(elementCompareDocumentPositionChild);

    //element.contains
    var contains = document.getElementById("contains");
    var contained = document.getElementById("containsContained");
    var isContains = contains.contains(contained);
    var containsChild = document.createTextNode(
        "This element contains a containsContained? " + isContains);
    contains.appendChild(containsChild);

    //element.contentEditable
    var contentEditable = document.getElementById("contentEditable");
    contentEditable.contentEditable = true;

    //element.dir
    var dir = document.getElementById("dir");
    dir.dir = "rtl";

    //element.firstChild
    var firstChild = document.getElementById("firstChild");
    var childFirstChild = document.createTextNode("First child: " + firstChild.firstChild.textContent);
    firstChild.appendChild(childFirstChild);

    //element.firstElementChild
    var firstElementChild = document.getElementById("firstElementChild");
    var childFirstElementChild = document.createTextNode("First child element: " +
        firstElementChild.firstElementChild.innerHTML);
    firstElementChild.appendChild(childFirstElementChild);

    //element.getAttribute()
    var getAttribute = document.getElementById("getAttribute");
    var attributeGetAttribute = getAttribute.getAttribute("class");
    var childGetAttribute = document.createTextNode(
        "Retrieved chosen attribute: " + attributeGetAttribute);
    getAttribute.appendChild(childGetAttribute);

    //element.getAttributeNode()
    var getAttributeNode = document.getElementById("getAttributeNode");
    var attributegetAttributeNode = getAttributeNode.getAttributeNode("class");
    var childgetAttributeNode = document.createTextNode(
        "Retrieved chosen attribute node: " + attributegetAttributeNode);
    getAttributeNode.appendChild(childgetAttributeNode);

    //element.getElementsByClassName()
    var getElementsByClassName = document.getElementById("getElementsByClassName");
    var elementsGetElementsByClassName = getElementsByClassName.
        getElementsByClassName("childGetElementsByClassName");
    var childGetElementsByClassName = document.createTextNode(
        "Retrieved chosen nodes according to the class: " +
        elementsGetElementsByClassName);
    getElementsByClassName.appendChild(childGetElementsByClassName);

    //element.getElementsByTagName()
    var getElementsByTagName = document.getElementById("getElementsByTagName");
    var elementsGetElementsByTagName = getElementsByTagName.
        getElementsByTagName("a");
    var childGetElementsByTagName = document.createTextNode(
        "Retrieved chosen nodes according to the tag: " +
        elementsGetElementsByClassName);
    getElementsByTagName.appendChild(childGetElementsByTagName);

    //element.getFeature()

    //element.hasAttribute()
    var hasAttribute = document.getElementById("hasAttribute");
    var isHasAttribute = hasAttribute.hasAttribute("class");
    var childHasAttribute = document.createTextNode(
        "Has class attribute? " + isHasAttribute);
    hasAttribute.appendChild(childHasAttribute);

    //element.hasAttributes()
    var hasAttributes = document.getElementById("hasAttributes");
    var ishasAttributes = hasAttributes.hasAttributes();
    var childhasAttributes = document.createTextNode(
        "Has class attribute? " + ishasAttributes);
    hasAttributes.appendChild(childhasAttributes);

    //element.hasChildNodes()
    var hasChildNodes = document.getElementById("hasChildNodes");
    var ishasChildNodes = hasChildNodes.hasChildNodes();
    var childhasAttributes = document.createTextNode(
        "Has child nodes? " + ishasChildNodes);
    hasChildNodes.appendChild(childhasAttributes);

    //element.id()
    var id = document.getElementById("id");
    var isid = id.id;
    var childId = document.createTextNode(
        "The id of this element: " + isid);
    id.appendChild(childId);

    //element.inneHTML
    var inneHTML = document.getElementById("inneHTML");
    inneHTML.innerHTML = "This content was set - it's new! :)"

    //element.insertBefore()
    var insertBefore = document.getElementById("insertBefore");
    var parentInsertBefore = document.createElement("P");
    var textParentInsertBefore = document.createTextNode("This was inserted before");
    parentInsertBefore.appendChild(textParentInsertBefore);

    var childInsertBefore = document.getElementById("childInsertBefore");

    insertBefore.insertBefore(parentInsertBefore, childInsertBefore);

    //element.isContentEditable
    var childContentEditable = document.getElementById("contentEditable");
    var isContentEditable = document.getElementById("isContentEditable");

    isContentEditable.innerText = isContentEditable.innerText +
        "the element of element.contentEditable is editable now? " +
        childContentEditable.isContentEditable;

    //documentElement.isDefaultNamespace() - FOR WHAT?

    //element.isEqualNode()
    var childOneIsQualNode = document.getElementById("isEqualNodeChildOne");
    var childTwoIsQualNode = document.getElementById("isEqualNodeChildTwo");

    var isEqualNode = document.getElementById("isEqualNode");

    isEqualNode.innerText = isEqualNode.innerText +
        "The child 1 and 2 are equals? " +
        childOneIsQualNode.isEqualNode(childTwoIsQualNode);

    //element.isSameNode()
    var childOneIsSameNode = document.getElementById("isSameNodeChildOne");
    var childTwoIsSameNode = document.getElementById("isSameNodeChildTwo");

    var isSameNode = document.getElementById("isSameNode");

    isSameNode.innerText = isSameNode.innerText +
        "The child 1 and 2 are the same? " +
        childOneIsSameNode.isSameNode(childTwoIsSameNode);

    //element.lang
    var lang = document.getElementById("lang");
    lang.lang = "en";

    lang.innerText = lang.innerText + "The language of this element: "
        + lang.lang;

    //element.lastChild
    var lastChild = document.getElementById("lastChild");
    var lastLastChild = lastChild.lastChild.innerText;

    lastChild.innerText = lastChild.innerText + 
    "The last child content is: " + lastLastChild + 
    " - That's because it takes the comments and spaces too!";

    //element.lastElementChild
    var lastElementChild = document.getElementById("lastElementChild");
    var lastlastElementChild = lastElementChild.lastElementChild.innerHTML;

    lastElementChild.innerText = lastElementChild.innerText + 
    "The last element child content is: " + lastlastElementChild + 
    " - Now it works";

    //documentElement.namespaceURI
    var namespaceURI = document.documentElement.namespaceURI;

    var namespaceURIelement = document.getElementById("namespaceURI");
    namespaceURIelement.innerText = namespaceURIelement.innerText +
    "namespaceURI: " + namespaceURI;

    //element.nextSibling - property
    var nextSibling = document.getElementById("nextSibling");
    var nextSiblingChild = document.getElementById("nextSiblingChildOne");

    nextSibling.innerText = nextSibling.innerText +
    "The nextSibling of child 1 is: " + nextSiblingChild.nextSibling.innerText
    + " That considers empty spaces";

    //element.nextElementSibling - property

    //element.nodeName - property

    //element.nodeValue - property

    //element.normalize() - method

    //element.offsetHeight

    //element.offsetWidth

    //element.offsetLeft

    //element.offsetParent

    //element.offsetTop

    //element.ownerDocument

    //element.parentNode

    //element.parentElement

    //element.previousSibling

    //element.previousElementSibling

    //element.querySelector()

    //element.querySelectorAll()

    //element.removeAttribute()

    //element.removeAttributeNode()

    //element.removeChild()

    //element.removeEventListener()

    //element.replaceChild()

    //element.scrollHeight

    //element.scrollIntoView()

    //element.scrollLeft

    //element.scrollTop

    //element.scrollWidth

    //element.setAttribute()

    //element.setAttributeNode()

    //element.style

    //element.tabIndex

    //element.tagName

    //element.textContent

    //element.title

    //element.toString()

    //nodelist.item()

    //nodelist.length

};
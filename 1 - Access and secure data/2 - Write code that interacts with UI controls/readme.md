# 1 - prog-add-modify-html

## [JS HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

With the HTML DOM, Javascript can access and change all the elements of an HTML document.

### The HTML DOM (Document Object Model)

When a web page is loaded, the browser creates a **D**ocument **O**bject **M**odel of the page.

The **HTML DOM** model is constructed as a tree of **Objects**

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

Javascript:
* Can change all the HTML elements in the page
* Can change all the HTML attributes in the page
* Can change all the CSS styles in the page
* Can remove existing HTML elements and attributes
* Can add new HTML elements and attributes
* Can react to all existing HTML events in the page
* Can create new HTML events in the page

### What is the DOM?

The DOM is a W3C (World Wide Web Consortium) standard.

The DOM defines a standard for accessing documents:

> "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

The W3C DOM standard is separated into 3 different parts:

**Core DOM** - standard model for all document types

**XML DOM** - standard model for XML documents

**HTML DOM** - standard model for HTML documents

## [The HTML DOM Document Object](https://www.w3schools.com/jsref/dom_obj_document.asp)

### DOM Nodes

In the HTML DOM (Document Object Model), everything is a **node**:

* The document itself is a document node
* All HTML elements are element nodes
* All HTML attributes are attribute nodes
* Text inside HTML elements are text nodes
* Comments are comment nodes

### The Document Object

When an HTML document is loaded into a web browser, it becomes a **document object**

The document object is the root node of the HTML document and the "owner" of all the other nodes: (element nodes, text nodes, attribute nodes, and comment nodes)

The document object provides properties and methods to access all node objects, from within JavaScript

**Tip:** The document is a part of the Window object and can be accessed as ```window.document```.

### Document Object Properties and Methods

| Property / Method                 | Description                                                                                                | Observations |
|-----------------------------------|------------------------------------------------------------------------------------------------------------|--------------|
| document.activeElement            | Returns the currently focused element in the document                                                      |              |
| document.addEventListener()       | Attaches an event handler to the document                                                                  |              |
| document.adoptNode()              | Adopts a node from another document                                                                        | Another document can be an ```iframe```             |
| document.anchors                  | Returns a collection of all ```<a>``` elements in the document that have a name attribute                        | The name attribute of the ```<a>``` is not supported in HTML5             |
| document.applets                  | Returns a collection of all ```<applet>``` elements in the document                                              | The ```<applet>``` element is not supported in HTML5.             |
| document.baseURI                  | Returns the absolute base URI of a document                                                                |              |
| document.body                     | Sets or returns the document's body (the <body> element)                                                   |              |
| document.close()                  | Closes the output stream previously opened with document.open()                                            |              |
| document.cookie                   | Returns all name/value pairs of cookies in the document                                                    | https://www.w3schools.com/js/js_cookies.asp             |
| document.charset                  | **Deprecated.** Use document.characterSet instead. Returns the character encoding for the document             |              |
| document.characterSet             | Returns the character encoding for the document                                                            |              |
| document.createAttribute()        | Creates an attribute node                                                                                  |              |
| document.createComment()          | Creates a Comment node with the specified text                                                             |              |
| document.createDocumentFragment() | Creates an empty DocumentFragment node                                                                     |              |
| document.createElement()          | Creates an Element node                                                                                    |              |
| document.createTextNode()         | Creates a Text node                                                                                        |              |
| document.doctype                  | Returns the Document Type Declaration associated with the document                                         |              |
| document.documentElement          | Returns the Document Element of the document (the <html> element)                                          |              |
| document.documentMode             | Returns the mode used by the browser to render the document                                                | Only IE supports.             |
| document.documentURI              | Sets or returns the location of the document                                                               |              |
| document.domain                   | Returns the domain name of the server that loaded the document                                             |              |
| document.domConfig                | **Obsolete**. Returns the DOM configuration of the document                                                    |              |
| document.embeds                   | Returns a collection of all <embed> elements the document                                                  |              |
| document.forms                    | Returns a collection of all <form> elements in the document                                                |              |
| document.getElementById()         | Returns the element that has the ID attribute with the specified value                                     |              |
| document.getElementsByClassName() | Returns a NodeList containing all elements with the specified class name                                   |              |
| document.getElementsByName()      | Returns a NodeList containing all elements with a specified name                                           |              |
| document.getElementsByTagName()   | Returns a NodeList containing all elements with the specified tag name                                     |              |
| document.hasFocus()               | Returns a Boolean value indicating whether the document has focus                                          |              |
| document.head                     | Returns the <head> element of the document                                                                 |              |
| document.images                   | Returns a collection of all <img> elements in the document                                                 |              |
| document.implementation           | Returns the DOMImplementation object that handles this document                                            |              |
| document.importNode()             | Imports a node from another document                                                                       |              |
| document.inputEncoding            | Returns the encoding, character set, used for the document                                                 |              |
| document.lastModified             | Returns the date and time the document was last modified                                                   |              |
| document.links                    | Returns a collection of all <a> and <area> elements in the document that have a href attribute             |              |
| document.normalize()              | Removes empty Text nodes, and joins adjacent nodes                                                         |              |
| document.normalizeDocument()      | Removes empty Text nodes, and joins adjacent nodes                                                         | Use normalize instead.             |
| document.open()                   | Opens an HTML output stream to collect output from document.write()                                        |              |
| document.querySelector()          | Returns the first element that matches a specified CSS selector(s) in the document                         |              |
| document.querySelectorAll()       | Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document |              |
| document.readyState               | Returns the (loading) status of the document                                                               |              |
| document.referrer                 | Returns the URL of the document that loaded the current document                                           |              |
| document.removeEventListener()    | Removes an event handler from the document (that has been attached with the addEventListener() method)     |              |
| document.renameNode()             | Renames the specified node                                                                                 | **Not supported**             |
| document.scripts                  | Returns a collection of ```<script>``` elements in the document                                                  |              |
| document.strictErrorChecking      | Sets or returns whether error-checking is enforced or not                                                  | **Not supported**             |
| document.title                    | Sets or returns the title of the document                                                                  |              |
| document.URL                      | Returns the full URL of the HTML document                                                                  |              |
| document.write()                  | Writes HTML expressions or JavaScript code to a document                                                   |              |
| document.writeln()                | Same as write(), but adds a newline character after each statement                                         |              |

## [The HTML DOM Element Object](https://www.w3schools.com/jsref/dom_obj_all.asp)

### Element Object

In the HTML DOM, the **Element object** represents an HTML element.

Element objects can have **child nodes** of type element nodes, text nodes, or comment nodes.

A **NodeList object** represents a list of nodes, like an HTML element's collection of child nodes.

### The Attr Object

In the HTML DOM, the **Attr object** represents an HTML attribute.

An HTML attribute always belongs to an HTML element.

### The NamedNodeMap Object

In the HTML DOM, the **NamedNodeMap object** represents an unordered collection of an elements attribute nodes.

Nodes in a NamedNodeMap can be accessed by name or by index (number).

## Properties and Methods

| Property / Method                                           | Description                                                                                                   | Observations                                                                                                                                                               |
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| element.accessKey = "charactere"                            | Sets or returns the accesskey attribute of an element. Specifies a shortcut key to activate/focus an element. | [ALT] + *access key*. You need to take care to make this command after the page loads.                                                                                     |
| element.addEventListener(event_name, function, use_capture) | Attaches an event handler to the specified element                                                            |                                                                                                                                                                           |
| element.appendChild()                                       | Adds a new child node, to an element, as the last child node                                                  | If you want to create a new paragraph, with text, remember to create the text as a Text node which you append to the paragraph, then append the paragraph to the document. |
| element.attributes                                          | Returns a NamedNodeMap of an element's attributes                                                             |                                                                                                                                                                            |
| element.blur()                                              | Removes focus from an element                                                                                 |                                                                                                                                                                            |
| element.childElementCount                                   | Returns the number of child elements an element has                                                           |                                                                                                                                                                            |
| element.childNodes                                          | Returns a collection of an element's child nodes (including text and comment nodes)                           | White spaces are considered #text. Comments are considered nodes. Remember that it returns a collection (array) of nodes.                                                                                                                                                                           |
| element.children                                            | Returns a collection of an element's child element (excluding text and comment nodes)                         |                                                                                                                           |
| element.classList                                           | Returns the class name(s) of an element                                                                       | I can use this one to add classes, remove, etc.                                                                                                                                                                           |
| element.className                                           | Sets or returns the value of the class attribute of an element                                                |                                                                                                                                                                            |
| element.click()                                             | Simulates a mouse-click on an element                                                                         |                                                                                                                                                                            |
| element.clientHeight                                        | Returns the height of an element, including padding                                                           |                                                                                                                                                                            |
| element.clientLeft                                          | Returns the width of the left border of an element                                                            |                                                                                                                                                                            |
| element.clientTop                                           | Returns the width of the top border of an element                                                             |                                                                                                                                                                            |
| element.clientWidth                                         | Returns the width of an element, including padding                                                            |                                                                                                                                                                            |
| element.cloneNode()                                         | Clones an element                                                                                             |  It's important to remember we can pass 'true' if we want the children nodes too. cloneNode(true).                                                                                                                                                                          |
| element.compareDocumentPosition()                           | Compares the document position of two elements                                                                |                                                                                                                                                                            |
| element.contains()                                          | Returns true if a node is a descendant of a node, otherwise false                                             |                                                                                                                                                                            |
| element.contentEditable                                     | Sets or returns whether the content of an element is editable or not                                          |                                                                                                                                                                            |
| element.dir                                                 | Sets or returns the value of the dir attribute of an element                                                  | This atribute define the reading order of the element's content (and it's position)                                                                                                                                                                           |
| element.firstChild                                          | Returns the first child node of an element                                                                    |                                                                                                                                                                            |
| element.firstElementChild                                   | Returns the first child element of an element                                                                 |                                                                                                                                                                            |
| element.focus()                                             | Gives focus to an element                                                                                     |                                                                                                                                                                            |
| element.getAttribute()                                      | Returns the specified attribute value of an element node                                                      |                                                                                                                                                                            |
| element.getAttributeNode()                                  | Returns the specified attribute node                                                                          |                                                                                                                                                                            |
| element.getElementsByClassName()                            | Returns a collection of all child elements with the specified class name                                      |                                                                                                                                                                            |
| element.getElementsByTagName()                              | Returns a collection of all child elements with the specified tag name                                        |                                                                                                                                                                            |
| element.getFeature()                                        | Returns an object which implements the APIs of a specified feature                                            |                                                                                                                                                                            |
| element.hasAttribute()                                      | Returns true if an element has the specified attribute, otherwise false                                       |                                                                                                                                                                            |
| element.hasAttributes()                                     | Returns true if an element has any attributes, otherwise false                                                |                                                                                                                                                                            |
| element.hasChildNodes()                                     | Returns true if an element has any child nodes, otherwise false                                               |                                                                                                                                                                            |
| element.id                                                  | Sets or returns the value of the id attribute of an element                                                   |                                                                                                                                                                            |
| element.innerHTML                                           | Sets or returns the content of an element                                                                     |                                                                                                                                                                            |
| element.insertBefore()                                      | Inserts a new child node before a specified, existing, child node                                             |                                                                                                                                                                            |
| element.isContentEditable                                   | Returns true if the content of an element is editable, otherwise false                                        |                                                                                                                                                                            |
| element.isDefaultNamespace()                                | Returns true if a specified namespaceURI is the default, otherwise false                                      |                                                                                                                                                                            |
| element.isEqualNode()                                       | Checks if two elements are equal                                                                              |  Two nodes are equal if all the following conditions are true: They have the same Node Type, nodeName, NodeValue, localName, nameSpaceURI and prefix, They have the same childNodes with all the descendants, They have the same attributes and attribute values (the attributes does not have be in the same order)                                                                                                                                                                          |
| element.isSameNode()                                        | Checks if two elements are the same node                                                                      |                                                                                                                                                                            |
| element.isSupported()                                       | Returns true if a specified feature is supported on the element                                               | It's obsolete in many browsers.                                                                                                                                                                           |
| element.lang                                                | Sets or returns the value of the lang attribute of an element                                                 |                                                                                                                                                                            |
| element.lastChild                                           | Returns the last child node of an element                                                                     |                                                                                                                                                                            |
| element.lastElementChild                                    | Returns the last child element of an element                                                                  |  The difference between this property and lastChild, is that lastChild returns the last child node as an element node, a text node or a comment node (depending on which one's last), while lastElementChild returns the last child node as an element node (ignores text and comment nodes).                                                                                                                                                                          |
| element.namespaceURI                                        | Returns the namespace URI of an element                                                                       |                                                                                                                                                                            |
| element.nextSibling                                         | Returns the next node at the same node tree level                                                             |                                                                                                                                                                            |
| element.nextElementSibling                                  | Returns the next element at the same node tree level                                                          | The difference between this property and nextSibling, is that nextSibling returns the next sibling node as an element node, a text node or a comment node, while nextElementSibling returns the next sibling node as an element node (ignores text and comment nodes).                                                                                                                                                                           |
| element.nodeName                                            | Returns the name of a node                                                                                    |                                                                                                                                                                            |
| element.nodeType                                            | Returns the node type of a node                                                                               | The nodeType property returns the node type, as a number, of the specified node. Element node = return 1, attribute node = return 2, text node = return 3, comment node = return 8.                                                                                                                                                                           |
| element.nodeValue                                           | Sets or returns the value of a node                                                                           |                                                                                                                                                                            |
| element.normalize()                                         | Joins adjacent text nodes and removes empty text nodes in an element                                          |                                                                                                                                                                            |
| element.offsetHeight                                        | Returns the height of an element, including padding, border and scrollbar                                     |                                                                                                                                                                            |
| element.offsetWidth                                         | Returns the width of an element, including padding, border and scrollbar                                      |                                                                                                                                                                            |
| element.offsetLeft                                          | Returns the horizontal offset position of an element                                                          | The offsetLeft property returns the left position (in pixels) relative to the left side the offsetParent element. The returned value includes: the left position, and margin of the element the left padding, scrollbar and border of the offsetParent element                                                                                                                                                                           |
| element.offsetParent                                        | Returns the offset container of an element                                                                    |                                                                                                                                                                            |
| element.offsetTop                                           | Returns the vertical offset position of an element                                                            |                                                                                                                                                                            |
| element.ownerDocument                                       | Returns the root element (document object) for an element                                                     | Returns always HTML Document (?)                                                                                                                                                                           |
| element.parentNode                                          | Returns the parent node of an element                                                                         |                                                                                                                                                                            |
| element.parentElement                                       | Returns the parent element node of an element                                                                 | The difference between parentElement and parentNode, is that parentElement returns null if the parent node is not an element node                                                                                                                                                                           |
| element.previousSibling                                     | Returns the previous node at the same node tree level                                                         |                                                                                                                                                                            |
| element.previousElementSibling                              | Returns the previous element at the same node tree level                                                      | The difference between this property and previousSibling, is that previousSibling returns the previous sibling node as an element node, a text node or a comment node, while previousElementSibling returns the previous sibling node as an element node (ignores text and comment nodes).                                                                                                                                                                           |
| element.querySelector()                                     | Returns the first child element that matches a specified CSS selector(s) of an element                        |                                                                                                                                                                            |
| element.querySelectorAll()                                  | Returns all child elements that matches a specified CSS selector(s) of an element                             |                                                                                                                                                                            |
| element.removeAttribute()                                   | Removes a specified attribute from an element                                                                 | The difference between this method and the removeAttributeNode() method is that the removeAttributeNode() method removes the specified Attr object, while this method removes the attribute with the specified name. The result will be the same. Also this method has no return value, while the removeAttributeNode() method returns the removed attribute, as an Attr object.                                                                                                                                                                           |
| element.removeAttributeNode()                               | Removes a specified attribute node, and returns the removed node                                              |                                                                                                                                                                            |
| element.removeChild()                                       | Removes a child node from an element                                                                          |                                                                                                                                                                            |
| element.removeEventListener()                               | Removes an event handler that has been attached with the addEventListener() method                            | Anonymous functions, like "element.removeEventListener("event", function(){ myScript });" will not work.                                                                                                                                                                           |
| element.replaceChild()                                      | Replaces a child node in an element                                                                           |                                                                                                                                                                            |
| element.scrollHeight                                        | Returns the entire height of an element, including padding                                                    |                                                                                                                                                                            |
| element.scrollIntoView()                                    | Scrolls the specified element into the visible area of the browser window                                     |                                                                                                                                                                            |
| element.scrollLeft                                          | Sets or returns the number of pixels an element's content is scrolled horizontally                            |                                                                                                                                                                            |
| element.scrollTop                                           | Sets or returns the number of pixels an element's content is scrolled vertically                              |                                                                                                                                                                            |
| element.scrollWidth                                         | Returns the entire width of an element, including padding                                                     |                                                                                                                                                                            |
| element.setAttribute()                                      | Sets or changes the specified attribute, to the specified value                                               |                                                                                                                                                                            |
| element.setAttributeNode()                                  | Sets or changes the specified attribute node                                                                  |                                                                                                                                                                            |
| element.style                                               | Sets or returns the value of the style attribute of an element                                                |                                                                                                                                                                            |
| element.tabIndex                                            | Sets or returns the value of the tabindex attribute of an element                                             | It's related to TAB navigation                                                                                                                                                                           |
| element.tagName                                             | Returns the tag name of an element                                                                            |                                                                                                                                                                            |
| element.textContent                                         | Sets or returns the textual content of a node and its descendants                                             | Ignores tags, gets only text                                                                                                                                                                           |
| element.title                                               | Sets or returns the value of the title attribute of an element                                                |                                                                                                                                                                            |
| element.toString()                                          | Converts an element to a string                                                                               |                                                                                                                                                                            |
|                                                             |                                                                                                               |                                                                                                                                                                            |
| nodelist.item()                                             | Returns the node at the specified index in a NodeList                                                         | This is a quite useless, because we can just put a [0] on the end instead of item(0)                                                                                                                                                                           |
| nodelist.length                                             | Returns the number of nodes in a NodeList                                                                     |                                                                                                                                                                            |

# 2 - [implement-HTML5-canvas](https://www.w3schools.com/jsref/dom_obj_canvas.asp)

The Canvas Object is new in HTML5

The HTML5 ```<canvas>``` tag is used to draw graphics, on the fly, with Javascript.

You can access a ```<canvas>``` element by using ```getElementById()``` and can create a element by using ```document.createElement()``` 

**Important note:** The ```<canvas>``` element has no drawing abilities of its own (it is only container for graphics) - you must use a script to actually draw the graphics.

The ```getContext()``` method returns an object that provides methods and properties for drawing on the canvas.

This reference will cover the properties and methods of the ```getContext("2x")``` object, can be used to draw text, lines, boxes, circles, and more - on the canvas.

**Other important note:** If your renderings seem distorted, try specifying your ```width``` and ```height``` attributes explicitly in the ```<canvas>``` attributes, and not using CSS.

**Just one more important note:** It's necessary to attribute some style to be able to see the Canvas. ¬¬

## Colors, Styles, and Shadows

## Line Styles

## Rectangles

## Paths

## Transformations

## Text


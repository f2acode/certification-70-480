# 1 - prog-add-modify-html

## JS HTML DOM 
Link used for study: https://www.w3schools.com/js/js_htmldom.asp

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

# 2 - implement-HTML5-canvas
Link used for study: https://www.w3schools.com/jsref/dom_obj_canvas.asp

The Canvas Object is new in HTML5

The HTML5 ```<canvas>``` tag is used to draw graphics, on the fly, with Javascript.

You can access a ```<canvas>``` element by using ```getElementById()``` and can create a element by using ```document.createElement()``` 

**Important note:** The ```<canvas>``` element has no drawing abilities of its own (it is only container for graphics) - you must use a script to actually draw the graphics.

The ```getContext()``` method returns an object that provides methods and properties for drawing on the canvas.

This reference will cover the properties and methods of the ```getContext("2x")``` object, can be used to draw text, lines, boxes, circles, and more - on the canvas.

**Other important note:** If your renderings seem distorted, try specifying your ```width``` and ```height``` attributes explicitly in the ```<canvas>``` attributes, and not using CSS.

**Just one more important note:** It's necessary to attribute some style to be able to see the Canvas. ¬¬

## Studied topics

* Colors, Styles, and Shadows

* Line Styles

* Rectangles

* Paths

* Transformations

* Text

* Image Drawing

* Pixel Manipulation

* Compositing

# 3 - implement-SVG-graphics
Tutorial followed: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

> Scalable Vector Graphics, SVG is a W3C XML dialect to mark up graphics. IT is partially implemented in Firefox, Opera, WebKit browsers, Internet Explorer and other browsers.

SVG is an XML language, similar to XHTML, which can be used to draw vector graphics.

SVG provides elements for circles, rectangles, and simple and complex curves. A simple SVG document consists of nothing more than the <svg> root element and several basic shapes that build a graphic together. In addition there is the <g> element, which is used to group several basic shapes together.


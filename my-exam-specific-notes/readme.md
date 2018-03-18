## 1 - none (nearests B or D)

``` text-shadow: 1px 1px 2px black```

Combination of X and Y offsets + blur radius + color

```offsets``` definition:

The amount or distance by which something is out of line.

### CSS units

* pt - point
* pc - paica
* cm - centimeter
* in - inch (polegada)
* mm - milimeters
* em - "font size"
* ex - "font height"
* px - pixels

## 2 - 

Exception handling statements

```throw``` - throws an exception

```try ... catch``` - handle exceptions

```throw new Error(200, "invalid");```

## 3 - A

Use ```this``` to refer to the class attributes

## 4 - C

When inside an event listener, ```this``` refers to the attached event guy (e.g. Button)

## 5 - A

Events:
* ```onBlur``` - loses focus
* ```onFocus``` - is focused
* ```onClick``` - when clicked

:warning: Remember there are many properties on a component, such as ```onBlur```, not just ```onClick```.

## 6 - D

There are many types of input:
* color
* number
* time
* date
* range
* url
* email
* search
* week
* month
* tel

Importanta properties:
* The validation is made by the type
* ```required``` is if it's required.

## 7 - 

```border-radius: a b c d```

* a - upper-left
* b - upper-right
* c - bottom-right
* d - bottom-left

## 8 - D

Find elements and define style with JQuery

Find by id:

```$("#id");```

Find by class:

```$(".class");```

Find all with a specific attribute:

```$("input[name='first_name']");```

Composed find:

```$("#contents ul");```

Find different types (makes a list):

```$("div.class, ul.people");```

Pseudo-classes:

```$("div:animated");```

```$(:h1)```

:warning: ```Header``` is part of ```document````

:warning: ```Head``` is for html settings

## 9 - 

JQuery form

```serialize``` - encodes a set of elements as a string for submission

```encodeURI``` - encode a url

```encodeURIComponent``` - encode URL, including @*_+/, etc (almost the same of URL)

## 10 - 

Priority of styles - lower to higher

* user agent declarations
* user normal declarations
* author normal declarations
* author important declarations
* user important declarations

user - visitor to your page
author - codes
user-agent - brownser maker

## 11 - 

Canvas draw rectangle

```css
var canvas = document.getElementById("myCanvas");
context.fillStyle = "rgb(255,0,0)";
context.fillRect(50, 50, 100, 100);
```

## 12 - 

```ms-wrap-flow``` with text and image
* ```auto``` - exclusion created for float elements
* ```both``` - the content stay on all the sides
* ```start``` - the content stays on the left side
* ```end``` - the content stays on the right side
* ```maximum``` - the content stays on the bigger side

## 13 - C or D

Set an event handler

```javascript
element.addEventListener("click", function);
element.attachEvent("onClick", function);
```

:warning: Remember the difference - "click/onClick" for each one.

:warning: Pass function without ()

## 14 - 

Anchor selectors order:

* A:link
* A:visited
* A:hover
* A:active

> lover before hate

## 15 - 

Media Query - ```media_type```
* ```screen``` - telas com boa resolução e coloridas

```css
screen and (min-width: 200px) and (max-width: 480px)
screen and (min-width: 480px)
```

## 16 - 

Ajax request

```javascript
$.ajax({
    uri: '/',
    accepts: 'application/bint, text/xml',
    dataFilter: function(data, type){
        if(request.getResponseHeader("Content-Type") == "application/bint"){
            return parseBint(data);
        }else{
            return parseXML(data);
        }
    },
    success: function(data){
        start(data);
    }
});
```

We could use ```Content-Type```, but we have a data filter (according to the datatype)

## 17 - C

```var that = this```

Because we need the external scope.

## 18 - D

JQuery form validation

* ```.val()``` - works on input
* ```.text()``` - doesn't works on input

They accept regex on validation!

## 19 - 

```javascript
self.addEventListener('message', function(event));
self.postMessage('worker' + data);
self.close();
```

:warning: Take care about variables

## 20 - A

## 21 - A

* ```.val();```

* Now they wanna check if there is a value

## 22 - B or D

## 23 - 

```LocalStorage``` - local
```SessionStorage``` - session (the window)

```javascript
var dest = localStorage.destination;
localStorage.destination = dest;
```

## 24 - B and D

``` opacity: 0.5;``` or ```background: rgba(255, 0, 0, .5)```

## 25 - C

Navigation = ```nav```

## 26 - 

```javascript
switch
case
break
case
break
default
```

## 27 - 

```javascript
Customer.prototype.GetCommission() = function(){
    alert('payroll');
}
```

## 28 - 

```ms-grid:```

2 columns:
```-ms-grid-columns: 100px 100px ```

3 columns:
```-ms-grid-rows: 50px 50px 50px;```

## 29 - 

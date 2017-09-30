## Useful concepts

### Semantic element
A element that provides meaning to both user agents and humans about what the enclosed content is, e.g., `<section>`.

### Non-semantic element
A element that doesn't provides meaning to both user agents and humans about what the enclosed content is, e.g., `<div>`.

## Tags

### `<section>`

This one defines sections in a document, such as chapters, headers, footers, or any other sections of the document.

This is a *semantic element*.

This element is more generic, you use this one when none of the other semantic elements are appropriate. You use it to combine portions of your document together into discrete units that you can describe as related in some way. If you can't describe the elements in the section in one or two sentences, then you probably shouldn't use the element.

Instead, you should use the `<div>` element. This one is a non-semantic element. If the content you're trying to combine doesn't have a semantic meaning, but you still need to combine it for styling, then this element is the appropriate element to use.

There are other elements that should be used before this one:

* `<article>`
* `<aside>`
* `<nav>`

### `<article>`

This tag is a independent, self-contained content.

Use this one when the content is an independent part of the site that can stand alone and be syndicated like an article or blog post.

### `<nav>`

Defines the major block of navigation links. Not use with all the links.

### `<header>`

This tag represents a container for introductory content or a set of navigational links.

That can contain heading elements (e.g., `<h1>`), logo/icon, authorship information, etc.

You can have several tags like this in one document.

This tag cannot be placed within a `<footer>`, `<address>` or another `<header>` element.

### `<footer>`

Defines a footer for a document or section.

This tag should contain information about its containing element.

* Authorship
* Copyright
* Contact
* Related documents
* Others

### `<aside>`

Defines some content aside from the content it is placed in. 

You need to define the style, or it isn't going to be aside.

* Citations inside a article, for example.
* Aside glossary **related** to the text.

Navigation, ads, search boxes, blogrolls and so on are not directly related to the article and therefore do not justify the use.

### `<main>` 

Specifies the main content of the page. One page should have only one main content.

### `<figure>` 

This tag is used to insert a figure, and to include the description of the figure we can use `<figcaption>`

## Layout

That is just the disposition of the tags inside the `<html>`. A good layout should follow the rules of each `html` tag.
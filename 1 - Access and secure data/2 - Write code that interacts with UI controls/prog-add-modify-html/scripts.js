window.onload = function () {

    //element.accessKey
    document.getElementById("accessKey").accessKey = "o";

    //element.addEventListener()
    document.getElementById("eventListener").addEventListener("click", function () {
        alert("Event listener activated!");
    });

    //element.appendChild()
    var paragraph = document.createElement("P");
    var textParagraph = document.createTextNode("Append child added inside");
    paragraph.appendChild(textParagraph);
    document.getElementById("appendChild").appendChild(paragraph);

    //element.attributes
    paragraph = document.createElement("P");
    var attributes = document.getElementById("attributes").attributes;
    textParagraph = document.createTextNode("Atributes: " + attributes
        + " Size: " + attributes.length);
    paragraph.appendChild(textParagraph);
    document.getElementById("attributes").appendChild(paragraph);

    //element.blur()
    document.getElementById("blur").focus();
    setTimeout(function () {
        document.getElementById("blur").blur();
    }, 2000);

    //element.childElementCount
    paragraph = document.createElement("P");
    var childElements = document.getElementById("childElementCount").childElementCount;
    textParagraph = document.createTextNode("Child elements: " + childElements);
    paragraph.appendChild(textParagraph);
    document.getElementById("childElementCount").appendChild(paragraph);

    //
};
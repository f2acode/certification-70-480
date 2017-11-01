window.onload = function () {

    var canvas = new Array();

    function createCanvasBase(){
        var canva = new Object();
        canva.element = document.createElement("CANVAS");
        canva.element.setAttribute("width", "50");
        canva.element.setAttribute("height", "50");
        canva.context = canva.element.getContext("2d");
        canvas.push(canva);
    }

    /* ======== getting canvas */

    // TODO create an object with the name of the example inside the array

    // fillStyle and fillRect()

    var myCanvas = document.getElementById("myCanvas");

    let baseWidth = myCanvas.getAttribute("width");
    let baseHeight = myCanvas.getAttribute("height");

    var ctx = myCanvas.getContext("2d");

    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, baseWidth, baseHeight);

    /* description */
    let description = document.getElementById("description");
    //description.innerText = "fillReact() and fillStyle - fillStroke() and strokeStyle "

    /* ========= creating canvas */

    // createLinearGradient() and addColorStop - vertical gradient
    createCanvasBase();
    
    var my_gradient = canvas[0].context.createLinearGradient(0, 0, 0, baseHeight);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");

    canvas[0].context.fillStyle = my_gradient;
    canvas[0].context.fillRect(0, 0, baseWidth, baseHeight);
    
    // horizontal gradient
    createCanvasBase();

    canvas[1].context = canvas[1].element.getContext("2d");

    var my_gradient = canvas[1].context.createLinearGradient(0, 0, baseWidth, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");

    canvas[1].context.fillStyle = my_gradient;
    canvas[1].context.fillRect(0, 0, baseWidth, baseHeight);

    // three colors
    createCanvasBase();

    var my_gradient = canvas[2].context.createLinearGradient(0, 0, baseWidth, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(0.5, "red");
    my_gradient.addColorStop(1, "white");

    canvas[2].context.fillStyle = my_gradient;
    canvas[2].context.fillRect(0, 0, baseWidth, baseHeight);

    // createPattern() - TODO DIDN'T WORK :(
    createCanvasBase();

    var img = new Image();
    img.src = "https://invictus.ind.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/x/explorer_black_1.jpg";
    img.height = 20;
    img.width = 2;
    
    img.onload = function () {
        var pat = canvas[3].context.createPattern(img, "repeat");
        canvas[3].context.fillStyle = pat;
        canvas[3].context.fillRect(0, 0, 400, 400);
    }

    // strokeStyle 
    createCanvasBase();

    canvas[4].context.strokeStyle = "red";
    canvas[4].context.strokeRect(0, 0, baseWidth, baseHeight);

    // gradient
    createCanvasBase();

    var gradient = canvas[5].context.createLinearGradient(0, 0, baseWidth, 0);
    gradient.addColorStop(0, "magenta");
    gradient.addColorStop(0.5, "blue");
    gradient.addColorStop(1.0, "red");

    canvas[5].context.strokeStyle = gradient;
    canvas[5].context.lineWidth = 5;
    canvas[5].context.strokeRect(0, 0, baseWidth, baseHeight);

    // With stroketext
    createCanvasBase();

    canvas[6].element.setAttribute("width", "100");
    canvas[6].context.font = "30px Verdana";

    var gradient = canvas[6].context.createLinearGradient(0, 0, baseWidth, 0);
    gradient.addColorStop(0, "magenta");
    gradient.addColorStop(0.5, "blue");
    gradient.addColorStop(1, "red");

    canvas[6].context.strokeStyle = gradient;
    canvas[6].context.strokeText("Felipe", 5, 40);

    // shadowColor amd shadowBlur
    createCanvasBase();

    canvas[7].context.shadowBlur = 10;
    canvas[7].context.shadowColor = "black";
    canvas[7].context.fillStyle = "red";
    canvas[7].context.fillRect(5, 5, baseWidth - 10, baseHeight - 10);

    // shadowOffsetX and shadowOffsetY
    createCanvasBase();

    canvas[8].context.shadowBlur = 10;
    canvas[8].context.shadowOffsetX = 5;
    canvas[8].context.shadowOffsetY = -5;
    canvas[8].context.shadowColor = "black";
    canvas[8].context.fillStyle = "red";
    canvas[8].context.fillRect(0, 10, baseWidth-10, baseHeight-10);

    // createRadialGradient() - (startX, startY, startRadius, endX, endY, endRadius)
    createCanvasBase();

    let radialGradient = canvas[9].context
    .createRadialGradient(baseWidth/2, baseHeight/2, 0, baseWidth/2, baseHeight/2, 15);
    radialGradient.addColorStop(0, "red");
    radialGradient.addColorStop(1, "white");

    canvas[9].context.fillStyle = radialGradient;
    canvas[9].context.fillRect(10, 10, 150, 100);

    // lineCap, moveTo(), lineTo(), stroke() and lineWidth
    createCanvasBase();

    canvas[10].context.beginPath();
    canvas[10].context.lineCap = "round"; //butt, round or square
    canvas[10].context.lineWidth = 5;
    canvas[10].context.moveTo(10, 10);
    canvas[10].context.lineTo(40, 10);
    canvas[10].context.stroke();

    // lineJoin
    createCanvasBase();

    canvas[11].context.beginPath();
    canvas[11].context.lineJoin = "round";
    canvas[11].context.lineWidth = 5;
    canvas[11].context.moveTo(10, 10);
    canvas[11].context.lineTo(20, 20);
    canvas[11].context.lineTo(10, 30);
    canvas[11].context.lineTo(10, 40);
    canvas[11].context.stroke();

    // miterLimit - remove the arrowhead tip
    createCanvasBase();

    canvas[12].context.lineWidth = 5;
    canvas[12].context.lineJoin = "miter";
    canvas[12].context.miterLimit = 4;
    canvas[12].context.moveTo(10, 10);
    canvas[12].context.lineTo(40, 20);
    canvas[12].context.lineTo(10, 25);
    canvas[12].context.stroke();

    // clearRect()
    createCanvasBase();

    canvas[13].context.fillStyle = "red";
    canvas[13].context.fillRect(0, 0, 50, 50);
    canvas[13].context.clearRect(10, 10, 10, 10);

    // fill()
    createCanvasBase();

    canvas[14].context.rect(0, 0, 50, 50);
    canvas[14].context.fillStyle = "darkgreen";
    canvas[14].context.fill();

    // beginPath()
    createCanvasBase();

    canvas[15].context.beginPath();
    canvas[15].context.lineWidth = 5;
    canvas[15].context.strokeStyle = "blue";
    canvas[15].context.moveTo(0, 0);
    canvas[15].context.lineTo(50, 50);
    canvas[15].context.stroke();

    canvas[15].context.beginPath();
    canvas[15].context.strokeStyle = "purple";
    canvas[15].context.moveTo(50, 0);
    canvas[15].context.lineTo(0, 50);
    canvas[15].context.stroke();

    // closePath()
    createCanvasBase();

    canvas[16].context.beginPath();
    canvas[16].context.moveTo(0, 0);
    canvas[16].context.lineTo(0, 50);
    canvas[16].context.lineTo(50, 50);
    canvas[16].context.closePath();
    canvas[16].context.stroke();

    // clip()
    createCanvasBase();

    canvas[17].context.rect(0, 0, 50, 50);
    canvas[17].context.stroke();
    canvas[17].context.clip();

    canvas[17].context.fillStyle = "orange";
    canvas[17].context.fillRect(0, 0, 25, 25);

    // quadraticCurveTo()
    createCanvasBase();

    canvas[18].context.beginPath();
    canvas[18].context.moveTo(0, 50);
    canvas[18].context.quadraticCurveTo(50, 50, 50, 0);
    canvas[18].context.stroke();

    // bezierCurveTo()
    createCanvasBase();

    canvas[19].context.beginPath();
    canvas[19].context.moveTo(5, 5);
    canvas[19].context.bezierCurveTo(15, 35, 35, 35, 45, 5);
    canvas[19].context.stroke();

    // arc()
    createCanvasBase();

    canvas[20].context.beginPath();
    canvas[20].context.arc(25, 25, 25, 0, 2 * Math.PI);
    canvas[20].context.stroke();

    // arcTo()
    //http://www.dbp-consulting.com/tutorials/canvas/CanvasArcTo.html
    createCanvasBase();

    canvas[21].context.beginPath();
    canvas[21].context.moveTo(5, 40); //x0
    canvas[21].context.arcTo(20, 10, 45, 45, 25); //x1 and x2
    canvas[21].context.stroke();

    // isPointInPath()
    createCanvasBase();

    canvas[22].context.beginPath();
    canvas[22].context.rect(10, 10, 30, 20);

    let isPointInPath = canvas[22].context.isPointInPath(10, 20) ?
    true : false;
    canvas[22].context.strokeText(isPointInPath, 10, 40);
    canvas[22].context.stroke();

    // scale()
    createCanvasBase();

    canvas[23].context.strokeRect(5, 5, 10, 10);
    canvas[23].context.scale(2, 2);
    canvas[23].context.strokeRect(5, 5, 10, 10);

    // rotate()
    createCanvasBase();

    canvas[24].context.rotate(20 * Math.PI / 180);
    canvas[24].context.fillRect(5, 10, 15, 20);

    canvas.forEach(function(canva) {
        document.body.appendChild(canva.element);
    }, this);
}


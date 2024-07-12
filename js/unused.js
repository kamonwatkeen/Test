// const saveImageBtn = document.getElementById("saveImageBtn");
// saveImageBtn.addEventListener("click",function() {
//     const canvasElement = document.getElementById("defaultCanvas0");
//     const imgData = canvasElement.toDataURL("image/png");

//     const pdf = new jspdf.jsPDF('portrait', 'mm', 'a4')

//     const pageWidth = pdf.internal.pageSize.getWidth();
//     const pageHeight = pdf.internal.pageSize.getHeight();

//     const canvasWidth = canvasElement.width;
//     const canvasHeight = canvasElement.height;
//     const aspectRatio = canvasWidth/canvasHeight;

//     let pdfWidth = pageWidth;
//     let pdfHeight = pageHeight;

//     if (canvasWidth / pageWidth > canvasHeight / pageHeight) {
//         pdfHeight = pageWidth / aspectRatio;
//     } else {
//         pdfWidth = pageHeight * aspectRatio;
//     }

//     const xoffset = (pageWidth - pdfWidth) / 2;
//     const yoffset = (pageHeight - pdfHeight) /2;


//     pdf.addImage(imgData, "PNG", xoffset, yoffset, pdfWidth, pdfHeight);
//     pdf.save("download.pdf")
// });

// const canvas = {
//     width: 800,
//     height: 800
// }

// const totalCircles = 500;
// const circles = [];
// const minDiameter = 5;
// const maxDiameter = 10;

// function setup(){
//     createCanvas(canvas.width, canvas.height);
//     for (let i = 0; i < totalCircles; i++) {
//         const circleSetting = {
//             x: random(0, canvas.width),
//             y: random(0, canvas.height),
//             diameter: random(minDiameter, maxDiameter)
//         }

//         const myCircle = new Circle(circleSetting.x, 
//             circleSetting.y, circleSetting.diameter);
//             circles.push(myCircle)
//     }
// }
// function mouseClicked() {
//     for (let i = 0; i < 2; i++) { 
//         let newDiameter = random(minDiameter, maxDiameter);
//         let newCircle = new Circle(mouseX, mouseY, newDiameter);
//         circles.push(newCircle);
//     }
// }
// function draw(){
//     //noLoop();
//     //noStroke();
//     stroke(238,238,238)
//     background(0);

//     for (let i = 0; i < circles.length; i++) {
//         circles[i].update();
//         circles[i].draw();
//     }
// }
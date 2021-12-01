//Square code
console.group("Square");
const sideSquare = 5;
console.log(`The sides of the square measure: ${sideSquare} cm`);

const perimeterSquare = sideSquare*4;
console.log(`The perimeter of the square is: ${perimeterSquare} cm`);

const areaSquare = sideSquare*sideSquare;
console.log(`The area of the square is: ${areaSquare} cm^2`);
console.groupEnd();

//Triangle code
console.group("Triangle");
const sideTriangleA = 6;
const sideTriangleBase = 4;
const sideTriangleC = 6;

console.log(`The sides of the Triangle measure: ${sideTriangleA} cm, ${sideTriangleBase} cm, ${sideTriangleC} cm`);

const heightTriangle = 5.5;
console.log(`The height of the Triangle measure: ${heightTriangle} cm`);


const perimeterTriangle = sideTriangleA+sideTriangleBase+sideTriangleC;
console.log(`The perimeter of the Triangle is: ${perimeterTriangle} cm`);

const areaTriangle = (sideTriangleBase*heightTriangle)/2;
console.log(`The area of the Triangle is: ${areaTriangle} cm^2`);
console.groupEnd();

//Circle code
console.group("Circle");
const radiusCircle = 4;
console.log(`The radius of the Circle measure: ${radiusCircle} cm`);

const circumferenceCircle = 2*radiusCircle*Math.PI;
console.log(`The circumference of the Circle is: ${circumferenceCircle} cm`);

const areaCircle = (radiusCircle*radiusCircle)*Math.PI;
console.log(`The area of the Circle is: ${areaCircle} cm^2`);
console.groupEnd();
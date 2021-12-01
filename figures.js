//Square code----------------------------
console.group("Square");

const perimeterSquare = x =>(x*4);

const areaSquare = x => (x*x);
console.groupEnd();

//Triangle code----------------------------
console.group("Triangle");

const perimeterTriangle = (a,b,c) => (a+b+c);

const areaTriangle = (b,h) => (b*h/2);

console.groupEnd();

//Circle code----------------------------
console.group("Circle");

const circumferenceCircle = (r) => (2*r*Math.PI);

const areaCircle = (r) => (r*r)*Math.PI;

console.groupEnd();
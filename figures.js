//Square code----------------------------
const perimeterSquare = x =>(x*4);

const areaSquare = x => (x*x);

//Triangle code----------------------------
const perimeterTriangle = (a,b,c) => (a+b+c);

const areaTriangle = (b,h) => (b*h/2);

const areaTriangleB = (a,b,c) => {
    const s = perimeterTriangle(a,b,c)/2;
    area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}

const typeTriangle = (a,b,c) =>{
    if ((a === b) && (b === c)){
        return "Eq";
    }else
    if ((a !== b) && (a !== c) && (b !== c)){
        return "Sc";
    }else
        return "Is"
}

//Circle code----------------------------
const circumferenceCircle = (r) => (2*r*Math.PI);

const areaCircle = (r) => (r*r)*Math.PI;


//Html
const calculatePerimeterSquare = () =>{
    const input = document.getElementById("square_input");
    const value = input.value;
    alert(perimeterSquare(value));
}

const calculateAreaSquare = () =>{
    const input = document.getElementById("square_input");
    const value = input.value;
    alert(areaSquare(value));
}



const calculatePerimeterTriangle = () =>{
    const a = parseFloat((document.getElementById("triangle_input_a")).value);
    const b = parseFloat((document.getElementById("triangle_input_b")).value);
    const c = parseFloat((document.getElementById("triangle_input_c")).value);
    alert(perimeterTriangle(a,b,c));
}

const calculateAreaTriangle = () =>{
    const a = parseFloat((document.getElementById("triangle_input_a")).value);
    const b = parseFloat((document.getElementById("triangle_input_b")).value);
    const c = parseFloat((document.getElementById("triangle_input_c")).value);
    const h = parseFloat((document.getElementById("triangle_input_h")).value);
    
    //Calculate
    if (isNaN(h)){
        alert(areaTriangleB(a,b,c));
    }else
    alert(areaTriangle(b,h));
}

const calculateCircumferenceCircle = () =>{
    const input = document.getElementById("circle_input");
    const radius = input.value;
    alert(circumferenceCircle(radius));
}

const calculateAreaCircle = () =>{
    const input = document.getElementById("circle_input");
    const radius = input.value;
    alert(areaCircle(radius));
}


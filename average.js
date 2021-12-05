//Function

const calculateAverage = (list) => {
    //Function
    const sumList = (acum,number) => acum + number;
    //Variables
    const sum = list.reduce(sumList);
    const dataNumber = list.length;
    //Important variable
    const average = sum/dataNumber;
    //Return
    return average;
}

//const calculateAverage = x => (x.reduce((x,y) => x+y))/x.length;
//Helpers
const calculateAverage = x => (x.reduce((x,y) => x+y))/x.length;

const isEven = (x) => (x % 2 === 0);

const order = (x,y) => (x-y);

const calculateMedian = (list) => {
    //Const
    const orderList = list.sort(order);
    const listSize = list.length;
    const listMidSize = Math.ceil(listSize/2);

    //Functions
    if(isEven(listSize)){
        const listElementA = orderList[listMidSize - 1];
        const listElementB = orderList[listMidSize];
        const midElement = calculateAverage([listElementA,listElementB]);

        return midElement;
    }else
        return orderList[listMidSize - 1];
        
}

//Analysis 
const salaryCol = colombia.map(
    function (person){
        return person.salary;
    }
);

const salaryColSorted = salaryCol.sort(order);

const medianGeneralCol = calculateMedian(salaryColSorted);

//Top 10%
const spliceStart = (salaryColSorted.length * (90)/100);
const spliceCount = salaryColSorted.length - spliceStart;

const salaryColTop10 = salaryColSorted.splice(spliceStart, spliceCount);

const medianTop10Col = calculateMedian(salaryColTop10);
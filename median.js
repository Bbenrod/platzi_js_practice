const list = [
    100,
    200,
    500,
    400000,
    200
];

//Function
const isEven = (number) => {
    //Const
    const residue = number % 2;

    //Return
    return (residue === 0);
}

//const isEven = (x) => (x % 2 === 0);

//Median
const median = (list) =>{
    //Sort funtion
    const order = (first,second) =>(
        first - second
    );
    //Sort array
    const orderList = list.sort(order);


    //Get median
    if (isEven(orderList.length)){
        //Constants
        const midSize = orderList.length/2;
        
        const data1 = orderList[midSize - 1];
        const data2 = orderList[midSize];
        
        //const median = (data1 + data2)/2;
        const median = calculateAverage([data1, data2]);
        
        //Return
        return median;
    }else{
        //Constants
        const midSize = (orderList.length - 1)/2;

        const median = orderList[midSize];

        //Return
        return median;
    }
}

//Average
const calculateAverage = x => (x.reduce((x,y) => x+y))/x.length;
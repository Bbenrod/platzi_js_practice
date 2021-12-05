//Mode
const mode = (list) =>{
    //Object
    const count = {};
    //Function
    list.map(
        function (number){
            if(count[number]){
                count[number]++;
            }else
                count[number] = 1;
        }
    );
    
    const ordering = (array1,array2) =>(
        -(array1[1] - array2[1])
    );
    
    //Constans
    const countArray = Object.entries(count);
    const countArraySort = countArray.sort(ordering);

    //Return
        return (countArraySort[0])[0];
}
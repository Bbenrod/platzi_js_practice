// const originalPrice = 120;
// const discount = 18;

// const porcentageWithDiscount = 100 - discount;
// const priceWithDiscount = (originalPrice * porcentageWithDiscount)/100;

// console.log({
//     originalPrice,
//     discount,
//     porcentageWithDiscount,
//     priceWithDiscount
// });

const calculatePriceWithDiscount = (p,d) =>(
    //p -> Price
    //d -> Discount
    (p * (100-d) / 100)
);

const calculatePriceDiscountButton = () =>{
    //Tags
    const price = ((document.getElementById("inputPrice")).value);
    const discount = ((document.getElementById("inputDiscount")).value);
    const inputResult = document.getElementById("result");
    //Actions
    const priceWithDiscount = calculatePriceWithDiscount(price,discount);
    //Final
    inputResult.innerText = (`Price to pay is : $${priceWithDiscount}`);
}
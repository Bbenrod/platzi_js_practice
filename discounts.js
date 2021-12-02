const originalPrice = 120;
const discount = 18;

const porcentageWithDiscount = 100 - discount;
const priceWithDiscount = (originalPrice * porcentageWithDiscount)/100;

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

//Js Functions-------------------------

const calculatePriceWithDiscount = (p,d) =>(
    //p -> Price
    //d -> Discount
    (p * (100-d) / 100)
);

    //Coupons
let coupons = {
    names: [],
    amounts: [],
    discount: [],
    addCoupon: function(n,a,d){
        //If coupon doesn't exist
        if(!this.names.includes(n)){
            this.names.push(n);
            this.amounts.push(a);
            this.discount.push(d);
        }else
        //If it exist
        {
            let index = this.names.indexOf(n);
            this.amounts[index] = a;
            this.discount[index] = d;
        }
    },
    searchCoupon: function(n){
        //n -> Name of coupon
        let index = this.names.indexOf(n);
        if(index !== -1){
            return true;
        }else
        return false;
    },
    exchageCoupon: function(n){
        //n -> Name of coupon
        let index = this.names.indexOf(n);
        let discount = this.discount[index];
        this.amounts[index]--;

        //Amount of coupons is equal to 0 now?
        if(this.amounts[index] === 0){
            this.deleteCoupon(index);
        }

        return discount;
    },
    deleteCoupon: function(index){
        let cont = 0;
        for(let i = 0;i < ((this.names).length);i++){
            if(i !== index){
                this.names[cont] = this.names[i]; 
                this.amounts[cont] = this.amounts[i]; 
                this.discount[cont] = this.discount[i]; 
                
                cont++;
            }
        }
        //Delete last index
        this.names.pop();
        this.amounts.pop();
        this.discount.pop();
    }
}

const addCoupon = (n,a) => {
    //n -> Name of coupon
    //a -> Amount of coupons

}

//Html Functions--------
const calculatePriceDiscountButton = () =>{
    //Tags
    const price = ((document.getElementById("inputPrice")).value);
    const discount = ((document.getElementById("inputDiscount")).value);
    const coupon = ((document.getElementById("inputCoupon")).value);
    const inputResult = document.getElementById("result");
    //Actions
    let priceWithDiscount = calculatePriceWithDiscount(price,discount);
        //Coupon
    if(coupon !== ""){
        if(coupons.searchCoupon(coupon)){
            const couponDiscount = coupons.exchageCoupon(coupon);
            priceWithDiscount = calculatePriceWithDiscount(priceWithDiscount,couponDiscount);
        }
    }
    //Final
    inputResult.innerText = (`Price to pay is : $${priceWithDiscount}`);
}

const addCouponButton = () =>{
    //Tags
    const couponName = ((document.getElementById("inputCouponName"))).value;
    const couponAmount = parseInt(((document.getElementById("inputCouponAmount"))).value);
    const couponDiscount = parseFloat(((document.getElementById("inputCouponDiscount"))).value);
    //Action
    if((!isNaN(couponDiscount) && !isNaN(couponAmount) && couponName!=="")){
        coupons.addCoupon(couponName,couponAmount,couponDiscount);
    }
}

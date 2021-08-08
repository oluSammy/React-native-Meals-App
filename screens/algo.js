
function algor(arr){
    let obj ={
        odd: [],
        even = [],
        units = [],
        tens = [],
        hundreds = [],
        other = []
    };
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if(ele % 2 ===0){
            obj.even.push(ele)
        }
        if(ele % 2 ===1){
            obj.odd.push(ele)
        }
        if(ele >= 1 &&  ele <=9){
            obj.units.push(ele)
        }
        if(ele >= 10 &&  ele <=99){
            obj.tens.push(ele)
        }
        if(ele >= 100 &&  ele <=999){
            obj.hundreds.push(ele)
        }
        if(ele === 0 &&  ele >1000){
            obj.other.push(ele)
        }
        }

    return obj
}
algor([2,5,6,7,34,23,45,100])
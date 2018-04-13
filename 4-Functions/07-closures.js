//calculate total with tip
 
function calculateTotalWithTip(totalWithoutTip,tipPercent){
    let totalWithTip;
     function calculateTip(totalWithoutTip,tipPercent){
        var tipAmount = totalWithoutTip * tipPercent
        return tipAmount;
    }
    totalWithTip = calculateTip(totalWithoutTip,tipPercent)  + totalWithoutTip;
    return totalWithTip;
    
}

var tipAmount = calculateTotalWithTip(50, 0.10);
console.log(tipAmount);
/*
    multiple lines commented
    out in a block
    Remember that commented code will not run.
    None of this code will run.
*/
function bill(quantity, pounds, price){
    var tax = 0.07;
    var totalTax= quantity * price * tax;
    var totalPrice= quantity * price * totalTax;
    var valueMem = totalPrice * 0.05;
    console.log('Bill: '+totalPrice + ' Value Awards: $ ' + valueMem);

}

bill(3, 4, 5);
// Kilometer to meter conversion program

function kilometerToMeter(kilometer){
    var meter= 0;
    if(kilometer > 0){
        meter = kilometer*1000;
    }
    else if (kilometer <= 0 ){
        return "Please enter valid unit"
    }
        return meter;
}


// Budget Calculator Program

function budgetCalculator(watch,phone,laptop){
var total = 0;
if(watch > 0 && phone > 0 && laptop > 0){
    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var total = watchPrice+phonePrice+laptopPrice;
}
else if (watch <= 0 && phone <= 0 && laptop <= 0){
    return "WARNING! Give valid amount of money"
}
    return total;
}



// Hotel Cost Program

function hotelCost(day) {

    var totalCost = 0;

    if (day == 0) {
        return "Give realsitic date";
    } 
    else if (day < 0) {
        return "Day can't be negative value";
    } 
    else if (day <= 10) {
        totalCost = day * 100;
    } 
    else if (day <= 20) {
        var first10day = 10 * 100;
        var remaining = day - 10;
        var second10day = remaining * 80;
        totalCost = first10day + second10day;
    } 
    else {
        var first10day = 10 * 100;
        var second10day = 10 * 80;
        var remaining = day - 20;
        var anotherDay = remaining * 50;
        totalCost = first10day + second10day + anotherDay;
    }
      return totalCost;
}

    



// Longest name finding program

function megaFriend(names) {
    var longestWord = names [0];

    if (names.length == 0) {
        return "There is no friends name in the array";
    } 
    else {
        for (var i = 0; i < names.length; i++) {
                var element = names[i];
            if (element.length > longestWord.length) {
               longestWord = element;
            }
        }
    }
    return longestWord;
}

var fruitString = 'Banana,Banana,Pear,Orange,Apple,Melon,Grape,Apple,Banana,Grape,Melon,Grape,Melon,Apple,Grape,Banana,Orange,Melon,Orange,Banana,Banana,Orange,Pear,Grape,Orange,Orange,Apple,Apple,Banana';

var fruitList = fruitString.split(',');
var fruitMap = {};

for (var i in fruitList) {
    var currentFruit = fruitList[i];
    //check if the current fruit is already in the Map
    if (fruitMap[currentFruit] === undefined){
        fruitMap[currentFruit] = 0;
    }
    //increment the current entry in the map with 1
    fruitMap[currentFruit] +=1
    //you can also use
    //fruitMap[currentFruit]++;
}
console.log(fruitMap);
//loop through all the keys in the object
/*for(var fruit in fruitMap){
    console.log(fruit);
}

//use the keys to lookup the value in the Object

for(var fruit in fruitMap){
    //print out the quantity for each fruit
    console.log(fruitMap[fruit]);
}*/

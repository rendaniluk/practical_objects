//importing assert function in JS
const assert = require('assert');
//declaring empty list
var myList = [];
//declaring function printShoppingList
function printShoppingList(shoppingList) {
  for(var i in shoppingList){
      var listItem = shoppingList[i];
      var List = listItem.itemName +' '+ "@" +' '+'R'+listItem.price.toFixed(2);
        myList.push(List)
        console.log(List);
  }
  return myList;
}
//declaring my shoppingList object
var myshoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Bread', price : 19.50 }
];
//storing function call in shopList variable
var shopList =printShoppingList(myshoppingList)
console.log(shopList);
//testing function using deepEqual
assert.deepEqual(shopList,[ 'Bread @ R11.00', 'Milk @ R7.00', 'Bread @ R19.50' ])

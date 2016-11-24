//importing assert function to JS
const assert = require('assert')
//declaring an empty list
var myList = [];
//declaring function shoppingList
function shoppingList(itemPrice) {
  //for loop to print out the list
  for(var i in itemPrice){
      var listItem = itemPrice[i];
      var List = listItem.itemName +' '+ "@" +' '+'R'+listItem.price.toFixed(2);
        myList.push(List)
        console.log(List);
  }

  var totPrice = 0
  //for loop to calculate the total amount to be paid
  for(var i in itemPrice){
      totPrice =totPrice + itemPrice[i].price;
    }
  console.log('Total Price :' +'R'+totPrice.toFixed(2));
  return totPrice;
}
//declaring the objects
var myshoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Bread', price : 19.50 }
  ];

var shoppingList1 = [
      { itemName : 'Apples', price : 7.50 },
      { itemName : 'Bread', price : 11.00 },
      { itemName : 'Milk', price : 7.00 },
      { itemName : 'Cheese', price : 23.00 },
      { itemName : 'Bread', price : 9.50 }
  ];
//storing function call in myShopList variable
var myShopList = shoppingList(myshoppingList);
var myShopList1 = shoppingList(shoppingList1);
//console.log(shopLis);
//testing using assert function
assert.equal(myShopList,37.50)
assert.equal(myShopList1,58.00)

//importing assert function in JS
const assert = require('assert');
//declaring an empty list
var newList = [];
//declaring function findItemsOver20
function findItemsOver20(itemPrice) {
  //for loop to print out the list over 20
  for(var i in itemPrice){
      var listItem = itemPrice[i];
  //conditional to check if price is over 20
      if(listItem.price > 20){
        newList.push(listItem)
            }
        }
        console.log(newList);
  return newList;
  }
//declaring object with two attributes
var itemList = [
{name : 'apples', price : 10},
{name : 'pears', price : 37},
{name : 'bananas', price : 27},
{name : 'apples', price : 3},
];
//calling and storing function call to variable my_ls
var my_ls = findItemsOver20(itemList);
assert.deepEqual(my_ls,[ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ])

# practical_objects
Objects helps us when we need to declare variables which are complicated such as describing a car, person and many more complicated data.

# Examples of Objects

car object

* var car = {

    color : 'blue',
    make : 'Toyota',
    model : 'Corolla',
    year : 2014,
    reg_number : 'CY 25913'
    }; *

//dot notation

*console.log(car.make);*

//index notation

*console.log(car['make']);*

person object

*
var person = {

    firstName : "Jo",
    lastName : 'Dlamini',
    age : 27,
    employed : true,
    qualifications : ['matric', 'nat cert in plumbing'],
};*

#Objects in list
Using object in list you can add new object by pushing it into list.

var shoppingList = [

    { itemName : 'Milk 500ml', qty : 2},
    { itemName : 'Bread', qty : 1},
    { itemName : 'Rolls', qty : 6},
    { itemName : 'Fanta 1L', qty : 2},
];

#//add a new object to a list like this

shoppingList.push({

    itemName : 'Coke 1L',
    qty : 3});

#// or like this

var barOne = {

    itemName : 'Bar One',
    qty : 3};
shoppingList.push(barOne);

#You can loop through the list like this:

console.log('Shopping list: ');
for(var i=0;i<shoppingList.length;i++){

      var listItem = shoppingList[i];
    console.log(listItem.itemName + " " + listItem.qty);
}

#You can add new data to an object
Here is to add price for each item:
var priceMap = {

    'Milk 500ml' : 7.50,
    'Bread' : 12.75,
    'Rolls' : 1.65,
    'Fanta 1L':13.35
};

#Using for loop you can get the total price for each item.

for(var i=0;i<shoppingList.length; i++){

    var listItem = shoppingList[i];
    var itemName = listItem.itemName;
    //get the item unit price
    var itemPrice = priceMap[itemName];
    //add a new attribute to the object
    listItem.totalPrice = listItem.qty * itemPrice;
}

//after this each item in the list should have a `totalPrice` attribute.

console.log(shoppingList);

#You can group data using object by using them as map.
This allows you to directly map one value to another. using map makes easy if you want to see item price you just log its name to console it will print price of an item

var priceMap = {

    'Milk 500ml' : 7.50,
    'Bread' : 12.75,
    'Rolls' : 1.50,
    'Fanta 1L' : 13.35
};

//prints out `1.50`
console.log('Rolls');

#You can do calculations using an object as a map.

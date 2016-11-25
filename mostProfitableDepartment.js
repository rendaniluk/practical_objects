//importing assert function to JS
const assert = require('assert');
//declaring function mostProfitableDepartment
function mostProfitableDepartment(profitDep){
      var higherSD = 0;
      var hSaleD = [];
//for loop to loop through the object data
  for (var i in profitDep){
//conditional to decide which department works hard
    if(profitDep[i].sales > higherSD){
      higherSD=profitDep[i].sales;
      hSaleD=profitDep[i];
      }
  }
  console.log(hSaleD.department);
  return hSaleD.department;
}
//declaring an object salesData
var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];
//calling function and store its  value to variable hardWorkingDep.
var hardWorkingDep = mostProfitableDepartment(salesData);
//testing using assert function
assert.equal(hardWorkingDep,'outdoor')

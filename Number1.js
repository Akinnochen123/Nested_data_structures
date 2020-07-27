var nestedData = {
innerData: {
order: ["first", "second", "third"],
snacks: ["chips", "fruit", "crackers"],
numberData: {
primeNumbers: [2,3,5,7,11],
fibonnaci: [1,1,2,3,5,8,13]
},
addSnack: function(snack){
this.snacks.push(snack);
return this;
}
}
}
//A
for(var i=0; i<nestedData.innerData.numberData.primeNumbers.length; i++){
    console.log(nestedData.innerData.numberData.primeNumbers[i]);
 }

//B
 for(var i=0; i<nestedData.innerData.numberData.fibonnaci.length; i++){
    if(nestedData.innerData.numberData.fibonnaci[i] % 2 === 0){
       console.log(nestedData.innerData.numberData.fibonnaci[i]);
    }
  }

//C
  console.log(nestedData.innerData.order[1]);

  //D
  nestedData.innerData.addSnack("chocolate");

//E
// The keyword 'this' refers to the object it belongs to which in this case is the global object 'innerdata'.



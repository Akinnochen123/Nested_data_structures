function rotate(arr, num){
    for(var i=0; i<num; i++){
     arr.unshift(arr.pop());
    }
      return arr;
  }

  //rotate([1,2,3], 1);
  //rotate([1,2,3], 2);
 // rotate([1,2,3], 3);
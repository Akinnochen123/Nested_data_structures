function makeXOGrid(rows, columns){
    var XO = [];
    var arr = [];
    for(var i = 0; i < columns; i++){
        if(i % 2 == 0){
          XO.push("X")
        }else if(i % 2 != 0){
          XO.push("O")
        }
    }
    for(let j = 0; j<rows;j++){
      arr.push(XO)
    }
    return arr;
  }

  //makeXOGrid(1,4);
  //makeXOGrid(3,2);
  
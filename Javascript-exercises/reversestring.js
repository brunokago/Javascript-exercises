function FirstReverse(str) { 
    arrayStr = str.split("");
    reversedStr = ""
    arraylength = arrayStr.length;
    for(let i = 0 ; i<arraylength;i++ ){
      reversedStr += arrayStr.pop()
    }
    // code goes here  
    return reversedStr; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse("coder"));
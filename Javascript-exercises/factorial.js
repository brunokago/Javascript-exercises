function FirstFactorial(num) { 
    var multi=1;
    for(let i=num;i>0;i--){
      if(i-1!=0){
        multi*=i; 
      }
      else
        return multi;
    }
    // code goes here  
    return multi; 
  
  }
  console.log(FirstFactorial(1))
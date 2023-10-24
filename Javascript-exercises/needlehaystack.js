var strStr = function(haystack, needle) {
    // haystackarray = String(haystack).split("");
    // needlearray= String(needle).split("");
    //  var found=-1;
    // for(i=0;i<needlearray.length;i++){
    //  if( needlearray[i] ==haystackarray[i]){
    //      found= i;
    //  }
    //  else{
    //     found =-1;
    //      break;
    //  }
         
    // } 
    // return found;
    if(haystack.includes(needle)){
        return haystack.indexOf(needle)
    }
    return -1;
 };
 console.log(strStr("sadbutsad","sad"))

// var isValid = (s)=>{
//     stack = [];
//     for(i=0;i<s.length;i++){
//         c = s.charAt(i);
//         switch(c){
//             case "(": stack.push(")");
//                 break;
//             case "{": stack.push("}");
//                 break;
//             case "[": stack.push("]");
//                 break;
//             default:
//                 if(c!==stack.pop()){
//                     return false;
//                 }  
            
            
//         }
//     }
//     return stack.length == 0;

// }
// console.log(isValid("(){}[]"))
var isValid =(s)=>{
    parethesis = [];
    for(i=0;i<s.length;i++){
        c = s.charAt(i)
        switch(c){
            case "(" : parethesis.push(")");
                break;
            case "[" : parethesis.push("]");
                break;
            case "{" : parethesis.push("}");
                break;
            default:
                if(c!==parethesis.pop()){
                    return false;
                }
            
        }
        
    }
    return parethesis.length ==0;

}
console.log(isValid("{}[]"));
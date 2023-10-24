let sumofno =(nums,sum)=>{
    var numsarray = String(nums).split('');
    const sizeofarray = numsarray.length;
    var numbers = [];
    for(i=0;i<sizeofarray;i++){
        for(j=i+1;j<sizeofarray;j++){
            if(Number(numsarray[i])+Number(numsarray[j])==sum){
                numbers.push(numsarray[i],numsarray[j])
            }
        }
    }
    return numbers;
}

console.log(sumofno([1,2,3,4],7))
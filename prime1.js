let num=25;
let count=0
for(let i=0;i<num;i++){
if(num%i==0){
    count+=1
}
if(count==2){
    console.log("Prime")
}
else{
console.log("Not Prime")
}
}
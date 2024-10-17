console.log("external");
function externalscript(){
    console.log("external")
}
externalscript();

for(var i=0;i<5;i++){
    console.log(i);
    console.log("value of i is"+i);
    console.log("value of i is",i+1);
}

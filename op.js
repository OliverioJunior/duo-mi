
/* 
function regra3(a,b,c){
    
   return b*c/a
}
5
console.log(regra3(257,186,200))
 */
let lines = -1000;
let N = 0
if(lines < 10000 ){
  N = parseInt(lines);
}
for (let i = 0; i <= 10000; i++) {
	if (i%N === 2) console.log(i);
}
let k = 3;
let A = (1<<10)-1; //1111111111(2)

A &= ~(1<<k); //1111110111(2)
A |= (1<<k);  //1111111111(2)
A ^= (1<<k); //1111110111(2)

//console.log(A&(1<<k) ? true : false);
//if(A&(1<<k)) console.log(true);

C = 9; //1001(2)
D = 5; //0101(2)

C | D; //1101(2)
C & D //0001(2)
C & (~D) //1000(2)
C ^ D // 1100(2)

//console.log((C ^ D).toString(2));

function bitCnt(n){
    if(n===0) return 0;
    return n%2 + bitCnt(n/2)
}

//console.log(bitCnt(13)); //6
//console.log((13).toString(2));


let i = 13;
let num = Number(i.toString(2).split("").sort().join("")).toString().length;

//console.log(num); //3

A = 13;
//console.log((-A).toString(2));
let first = A & (-A);

//console.log(first);

N = 7;

let zero = N + (-N); //0

//console.log(zero);

// B = A-1;
// console.log(A.toString(2),B.toString(2));
// A &= (A-1);

console.log(A.toString(2));

for (let subset = A; subset>0; subset=((subset-1)&A)){
    console.log(subset.toString(2));
}
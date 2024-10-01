/* 
8 way to get undefine 
1 .variable that is not initialized will give undefined
2. function with no return and show undefined 
3. parameter that is not passsed will be undefined 
4. if return has nothing on the righit side will return undefined 
5. property that doesnt exists on an object will give you undefined
6. accessing arry elements outside of the index range 
7. deleting an element inside an array 
8 set a value directly to undifined 


*/

/* let a ;

function seconed(a , m){
    const result = a + m;
}
const total = seconed(3,4);
console.log(total);
 */
/* function third(a,b,c,d,e){
    const total1 = a + b + c + d + e ;
    console.log(a, b, c , d , e);
}
 console.log(third(2,4));

 function  

 */

function nonNegative(a,b){
    if(a<0 || b<0 ){
        return ;
    }
    return a+b;
}
const total = nonNegative(2,-3);
console.log(total);

 const fifth = {id : 3, name:'kala kala ', age: 34, }
 console.log(fifth.age , fifth.salary);

 const sixth =[2,3,45,5,6];
 console.log(sixth[2], sixth[43]);
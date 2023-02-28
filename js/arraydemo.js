const movements = [200,300,-777,3000,-650,-130,1300,400];

// for use in array 
for (const movement of movements)
//for(const [i,movement] of movements.entries())
{
    if(movement > 0)
    {
        console.log(`you deposited ${movement}`);
    }
    else {
        console.log(`you withdraw ${Math.abs(movement)}`);
    }

}

//forEach use in array
// in the call back function use and => this use typescrpt & function use js
movements.forEach(function (movement){
 if(movement > 0){
    console.log(`you deposited ${movement}`);
 }else{
    console.log(`you withdraw ${Math.abs(movement)}`); 
 }
});


//map use in array 
// map the data key and value, in key go name and in value go role
const name = new Map([
    ['madhu', 'BO'],
    ['pratik', 'FO'],
    ['niteyshree', 'teacher'],
]);

name.forEach(function (value,key,map){
    console.log(`${key}: ${value}`);
});

// set

const name = new set(['madhu', 'mahesh','pratik']);
console.log(name);
name.forEach(function (value,value2,map){
    console.log(`${value}: ${value2}`);
})

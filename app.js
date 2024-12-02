// const arrays = [ 42,true,'Hello World!' ,{
//     name : 'Jhon',
//     age : 25,
//     isStudent : false,
// },
// false,3.14,'JavaScript is fun!']

// Q1

// const stringifiedArrays = arrays.map(item => String(item));

// console.log(stringifiedArrays);


// Q2


// const numberOnly = arrays.filter(item => typeof item === 'number')

// console.log(numberOnly);



// Q3


// arrays.forEach((items)=>{
//     console.log(typeof items);
    
// })



// Q4
// const sumOfNumber = arrays.reduce((acc,item)=>{
//     return typeof item === 'number' ? acc+item :acc;
// },0)
// console.log(sumOfNumber);


// Q5


// const firstBoolean = arrays.find(item => typeof item === 'boolean');
// console.log(firstBoolean);



// Q6

// const objIndex = arrays.findIndex(item => typeof item === 'object')
// console.log(objIndex);



// Q7


// const containsNumber = arrays.some(item => typeof item === 'number')
// console.log(containsNumber);


// Q8


// const allString = arrays.every(item => typeof item === 'string')
// console.log(allString);





// fetch('bc44bb5f743c445f9a43b6ae2fffb0f8').then((res)=>{
//       return res.json()
// })
// .then((data)=>{
//      console.log(data);
     
// })
// .catch((err)=>{
//    console.log(err);
   
// })


// let fetchData1 = async ()=>{
//     try{
//         let getData = await fetch("bc44bb5f743c445f9a43b6ae2fffb0f8");
    
//         let response = await getData.json();
//         console.log(response);
//     }catch(error){
//         console.log(error.message);
        
//     }
// }

// fetchData1();   
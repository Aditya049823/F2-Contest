/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const newArr=arr.map((employee) =>{
    if(employee.profession==="developer")
    {
        console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
        if(employee.profession==="developer")
        {
            console.log(employee);
        }
  });
}

function addData() {
  //Write your code here, just console.log
  let b ={
       id:"4",
       name:"susan",
       age:"20",
       profession:"intern"
  };
  arr.push(b);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter((employee) => employee.profession !=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr=[
  {id:4,name:"Sunny",age:"30",profession:"Hairdresser"},
  {id:5,name:"Bob",age:"61",profession:"PostMan"},
  {id:6,name:"Alex",age:"59",profession:"Teacher"},
  ];
  let conArr=arr.concat(newArr);
  console.log(conArr);
}

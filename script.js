/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  stuArr.map(varMap);

    function varMap(value) {
        if(value.marks >= 50) {
            console.log(value);
        }
    }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  stuArr.forEach(varForEach);

    function varForEach(stuArr) {
        if(stuArr.marks >= 50) {
            console.log(stuArr);
        }
    }
}

function addData() {
  //Write your code here, just console.log
  const num = stuArr[stuArr.length-1].id ;
  let newObj = {id: num+1, name:"susan", age:"20", marks:45};

    stuArr.push(newObj);
    console.log(stuArr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  var filter_arr = stuArr.filter(function(fail) {
        return fail.marks >= 50;
    });

    console.log(filter_arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const num = stuArr[stuArr.length-1].id ;
    let sec_Arr = [
        { id: num+1, name:"Rohit", age:"25", marks:Math.floor(Math.random() * 101)
    }, 
        { id: num+2, name:"Sanchit", age:"24", marks:Math.floor(Math.random() * 101)
    }, 
        { id: num+3, name:"Akarn", age:"24", marks:Math.floor(Math.random() * 101)
    } 
    ];
    stuArr = stuArr.concat(sec_Arr);
    console.log(stuArr);
}

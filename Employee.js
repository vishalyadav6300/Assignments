let empDetails=[
    {
      "gender": "male",
      "job_title": "Machine Learning Engineer",
      "salary": 6500,
      "name": "Lopez",
      "id": 1,
      "email": "joselopez0826@slingacademy.com",
      "age": 26,
      "years_of_experience": 3
    },
    {
      "gender": "male",
      "job_title": "DevOps Engineer",
      "salary": 12000,
      "last_name": "Carter",
      "id": 2,
      "email": "douglascarter1370@slingacademy.com",
      "age": 31,
      "years_of_experience": 8
    },
    {
      "gender": "female",
      "job_title": "Project Manager",
      "salary": 12500,
      "name": "Foster",
      "id": 3,
      "email": "sherryfoster2166@slingacademy.com",
      "age": 34,
      "years_of_experience": 9
    },
    {
      "gender": "male",
      "job_title": "Project Manager",
      "salary": 15500,
      "name": "Fisher",
      "id": 4,
      "email": "charlesfisher3142@slingacademy.com",
      "age": 33,
      "years_of_experience": 11
    },
    {
      "gender": "female",
      "job_title": "HR Manager",
      "salary": 6500,
      "name": "Hunter",
      "id": 5,
      "email": "sharonhunter4540@slingacademy.com",
      "age": 27,
      "years_of_experience": 3
    },
    {
      "gender": "male",
      "job_title": "Mobile Developer",
      "salary": 12500,
      "name": "Jacobs",
      "id": 6,
      "email": "joshuajacobs5993@slingacademy.com",
      "age": 39,
      "years_of_experience": 15
    }
]

let employee={
    "gender": "male",
    "job_title": "Mobile Developer",
    "salary": 12500,
    "name": "Jacobs",
    "id": 6,
    "email": "joshuajacobs5993@slingacademy.com",
    "age": 39,
    "years_of_experience": 15
}


console.log(empDetails)
//Adding Details to empDetails

const AddingDetails=function (employee){
    let flag=false;
    for(let obj of empDetails){
        if(obj.name===employee.name){
            console.log("Employee already exist")
            flag=true;
            break;
        }
    }
    if(!flag){
    empDetails.push(employee);
    console.log("Succesfully Added Employee !!!");
    }
}

// console.log(empDetails)
//Update Details to empDetails

const UpdatingDetails=function (employee){
    for(let obj of empDetails){
        if(obj.id===employee.id){
            console.log(obj.id)
            for(let key in employee){
                obj[key]=employee[key]
            }
            x=obj;
            break;
        }
    }
    console.log("Succesfully Updated Employee !!!")
}



// UpdatingDetails(employee)
// console.log(empDetails)


//Deleting an employee details

const DeletingDetails=function (employee){

    var ind=0;
    for(let obj of empDetails){
        ind++;
        if(obj.id==employee.id)
            break;
    }
    if(ind>empDetails.length)
    console.log("Employee not found !!")
    else{
        console.log(`${empDetails[ind-1].name} details are deleted`)
        empDetails.splice(ind-1,1);
    }

}

// DeletingDetails(employee)
// console.log(empDetails)


//filtering Employee Deatils those who are Project Manager


let Obj= empDetails.filter(function(emp){
        return (emp.job_title=='Project Manager');
    })

console.log(Obj)









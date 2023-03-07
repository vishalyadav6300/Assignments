function validation(email){

    // if(email.includes("@darwinbox.in"))
    // return true
    // return false
    var str="vishal yadav"
    console.log(str.split([" "]))
    return (email.includes("@darwinbox.in"))?true:false;
}

let a=[1,2,3,4,5,6]

for(let i=0;i<a.length;i++){
    console.log(a[i])
}

for( let i in a){
    console.log(i,a[i])
}

for(let k of a){
    console.log(k)
}

a.forEach((ele,key)=>{
    console.log(ele,key)
})

//while and do while 


let stud={
    "name":"vishal",
    "age":20
}

for(let v in stud){
    console.log(v,stud[v])
}


console.log(validation("vishal@darwinbox.in"))
console.log(validation("vishal@gmail.com"))


const fact=function (num){
    if(num==0||num==1)
    return 1;
    return num*fact(num-1)
}

console.log(fact(5))


let emp=[{
    id:1,
    name:"one",
    level:3
},{
    id:2,
    name:"two",
    level:4
},{
    id:3,
    name:"three",
    level:5
},
{
    id:4,
    name:"four",
    level:2
},
{
    id:5,
    name:"five",
    level:1
}]

const filteringEmpByLevel=function (emp){
    for(let obj in emp){
        if(emp[obj].level>4)
        console.log(emp[obj].id,emp[obj].name)
    }
}

const filteringEmpByLevel1=function (emp){
    for(let obj of emp){
        if(obj.level>4)
        console.log(obj.id,obj.name)
    }
}

filteringEmpByLevel(emp)
filteringEmpByLevel1(emp)
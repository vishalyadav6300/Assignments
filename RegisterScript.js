
//validate user details

function validateUserDetails(){
    alert("Form under validation!!!")
    let formObj=window.document.forms['registration_form']
    //console.log(formObjj)
    let userDetails={}
    for(let key of formObj){
     //console.log(key.value,key.name)
     if(key.name!='')
     userDetails[key.name]=key.value;
    }
    console.log("User details in the form of object")
    console.log(userDetails)
    
    let flag=0;
    for(let key in userDetails){
        console.log(key)
        if(userDetails[key]=="")
        {
            alert(`${key} cannot be null`);
            flag=1;
            break;
        }
    }

    if(!flag){
        let EmailReg='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
        if(userDetails['first-name'].length<6)
        alert("first-name must be atleast 6 characters");
        else if(userDetails['last-name'].length<6)
        alert("last-name must be atleast 6 characters");
        else if(!userDetails['email'].match(EmailReg))
        alert("Email entered incorrectly")
        else if(userDetails['password']<8)
        alert('password must be atleast 8 characters');
        else if(userDetails['password']!=userDetails['confirm-password'])
        alert('Passwords are not matching');
        else
        alert("Form successfully submited!!")
    }


}



let firstnameid=document.getElementById("first-name");

firstnameid.addEventListener("change",(event)=>{
    console.log(`${event.target.value} content entetred`)
})
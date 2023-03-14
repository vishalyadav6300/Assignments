function Apigetdata(){
    const http=new XMLHttpRequest();

    http.onload=()=>{
        let apidata =JSON.parse(http.responseText);
        console.log(apidata);
        let divrow=document.getElementById("cardparent");
        for(let obj of apidata['data']){
            let divcol=document.createElement('div');
            divcol.className='col-4 border p-2';
            
            let divcard=document.createElement('div')
            divcard.className="card w-100 h-100"

            let img=document.createElement('img')
            img.src=obj.avatar;
            img.className="card-img rounded h-100 mx-auto p-1";
            img.alt="avatar";
            img.style="width:150px !important;"

            let divbody=document.createElement("div")

            let pemail=document.createElement("p");
            let pfirstname=document.createElement("p");
            let plastname=document.createElement("p");

            pemail.innerText=`Email : ${obj.email}`

            pfirstname.innerText=`First name : ${obj.first_name}`

            plastname.innerText=`Last name : ${obj.last_name}`

            divbody.appendChild(pfirstname)
            divbody.appendChild(plastname)
            divbody.appendChild(pemail)
            
            divcard.appendChild(img)
            divcard.appendChild(divbody)

            divcol.appendChild(divcard)

            divrow.appendChild(divcol)
            

        } 
    }


    http.open("GET","https://reqres.in/api/users?page=2");
    http.send()
}
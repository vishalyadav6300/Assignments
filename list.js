function getElements(){
    let listtg=document.getElementsByTagName("ol");
    console.log(listtg)
    let li=document.createElement("li")
    li.innerText=window.prompt();
    console.log(li)
    listtg[0].appendChild(li);
}
var data=null;
function ApigetdataHome()
{

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr");
    xhr.setRequestHeader("X-RapidAPI-Key", "1eefeb459bmsh62e255e1dc0bd16p1f62d5jsnc8167cbc4d78");
    xhr.setRequestHeader("X-RapidAPI-Host", "imdb8.p.rapidapi.com");
    
    xhr.send();
        xhr.onload=function(){
        data=JSON.parse(xhr.responseText);
        //console.log(data.d);
        data=data['d']
        let divrow=document.getElementById("cardparent");
        let c=0;
        divrow.innerHTML="";
            for(let obj of data){
                let divcol=document.createElement('div');
                divcol.className='col border p-2';
                
                let divcard=document.createElement('div')
                divcard.className="card w-100 h-100"
    
                let img=document.createElement('img')
                img.src=obj.i.imageUrl;
                img.className="card-img rounded h-100 mx-auto p-1";
                img.alt="avatar";
                img.style="width:150px !important;"
    
                let divbody=document.createElement("div")
                let pMoviename=document.createElement("p");
                pMoviename.id=`moviename${c}`;c++;
                let pType=document.createElement("p");
                let prating=document.createElement("p");
    
                pMoviename.innerText=`Movie name : ${obj.l}`
    
                pType.innerText=`Type : ${obj.q}`
    
                prating.innerText=`Rating: ${obj.rank}`
    
                divbody.appendChild(pMoviename)
                divbody.appendChild(pType)
                divbody.appendChild(prating)
                
                divcard.appendChild(img)
                divcard.appendChild(divbody)
    
                divcol.appendChild(divcard)
    
                divrow.appendChild(divcol)
            }
        }

}

function ApigetdataMovies(){

    const xhr = new XMLHttpRequest();
   

    xhr.open("GET", "https://imdb8.p.rapidapi.com/actors/get-all-videos?nconst=nm0001667&region=US");
    xhr.setRequestHeader("X-RapidAPI-Key", "1eefeb459bmsh62e255e1dc0bd16p1f62d5jsnc8167cbc4d78");
    xhr.setRequestHeader("X-RapidAPI-Host", "imdb8.p.rapidapi.com");

    xhr.send();

    xhr.onload=function (){
            data=JSON.parse(xhr.responseText);
            data=data.resource.videos
            console.log(data)
            //console.log(.videos);
            let c=0;
            let divrow=document.getElementById("cardparent");
            divrow.innerHTML="";
                for(let obj of data){
                    let divcol=document.createElement('div');
                    divcol.className='col border p-2';
                    
                    let divcard=document.createElement('div')
                    divcard.className="card w-100 h-100"
        
                    let img=document.createElement('img')
                    img.src=obj.image.url;
                    img.className="card-img rounded h-100 mx-auto p-1";
                    img.alt="avatar";
                    img.style="width:150px !important; height:100px !important"
        
                    let divbody=document.createElement("div")
        
                    let pMoviename=document.createElement("p");
                    pMoviename.id=`moviename${c}`;
                    c++;
                    let pduration=document.createElement("p");
                    let pDescription=document.createElement("p");
                    let pRelese=document.createElement("p")
        
                    pMoviename.innerText=`Movie name : ${obj.title}`
        
                    pduration.innerText=`Duration : ${obj.durationInSeconds}`
        
                    pDescription.innerText=`Description: ${obj.description}`

                    pRelese.innerText=`Release :${obj.primaryTitle.year}`
        
                    divbody.appendChild(pMoviename)
                    divbody.appendChild(pduration)
                    divbody.appendChild(pDescription)
                    divbody.appendChild(pRelese)
                    
                    divcard.appendChild(img)
                    divcard.appendChild(divbody)
        
                    divcol.appendChild(divcard)
        
                    divrow.appendChild(divcol)
                }
    }

}


function myFunction(){
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let divrow=document.getElementById("cardparent");
    let divs=document.getElementsByClassName('col border p-2');

    for(let i=0;i<divs.length;i++){
         value=document.getElementById(`moviename${i}`).innerText;
            if (value.toUpperCase().indexOf(filter) > -1) {
                divs[i].style.display = "";
            } else {
                divs[i].style.display = "none";
            }

    }
    
}
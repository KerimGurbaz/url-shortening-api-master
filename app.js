const shorten = document.querySelector(".shorten-btn");

const btn = document.querySelector(".form-shorten button");

const newShorten  =document.querySelector(".newShorten");

let myAdress; 


const myShorten = async ()=>{

myAdress = shorten.value;

const url = `https://api.shrtco.de/v2/shorten?url=${myAdress}/very/long/link.html`;

  
    try {
        const response =  await fetch(url);
        const data =await response.json();
        console.log(data);

        if(!response.ok){
            throw new Erorr("Bad response")
        }

        const {result: {short_link} ,
        result:{full_short_link}} = data
        console.log(short_link);

        const copy = document.createElement("button");
        copy.classList.add("copy");
        copy.innerText ="Copy"
        newShorten.prepend(copy);

        const link = document.createElement("a");
        link.href = full_short_link;
        link.innerText = short_link;
        link.target = "_blank";
        newShorten.prepend(link)

        const par = document.createElement("p");
        par.innerText = shorten.value;
        newShorten.prepend(par);

        shorten.value =""

       

 
    } 
     
    catch (error) {
        console.log(error);
    }



}

btn.addEventListener("click",(e) =>{
    e.preventDefault();

    myShorten()
});


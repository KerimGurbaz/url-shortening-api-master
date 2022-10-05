const shorten = document.querySelector(".shorten-btn");

const btn = document.querySelector(".form-shorten button");

const newShorten  =document.querySelector(".newShorten");

const myDiv = document.querySelectorAll(".myDiv")

let myAdress; 
let button;



const myShorten = async ()=>{

myAdress = shorten.value;

const url = `https://api.shrtco.de/v2/shorten?url=${myAdress}`;

  
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

        // newShorten.innerText == "" ? newShorten.classList.add("form-shorten") :newShorten.classList.remove("form-shorten")

        newShorten.classList.add("form-shorten");

        const myDiv = document.createElement("div");
        newShorten.appendChild(myDiv);
        myDiv.classList.add("myDiv")

        const trash = document.querySelector("p");
        trash.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
        myDiv.prepend(trash)

        const copy = document.createElement("button");
        copy.classList.add("copy");
        copy.innerText ="Copy"
        myDiv.prepend(copy);

        const link = document.createElement("a");
        link.href = full_short_link;
        link.innerText = short_link;
        link.target = "_blank";
        myDiv.prepend(link)

        const par = document.createElement("p");
        par.classList.add("par");
        par.innerText = shorten.value;
        myDiv.prepend(par);

        shorten.value =""

        copy.addEventListener("click",()=>{
            short_link.select();
            short_link.setSelectionRange(0,9999);
            navigator.clipboard.writeText(short_link);
            alert("Copied")
        })
 
    } 
     
    catch (error) {
        console.log(error);
    }

}

btn.addEventListener("click",(e) =>{
    e.preventDefault();

    myShorten()
});

newShorten.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("fa-trash-can")){
        e.target.parentElement.parentElement.remove()
    }

})


// function myFunction() {
//     // Get the text field
    
  
//     // Select the text field
//     copyText.select(); 
//     copyText.setSelectionRange(0, 99999); // For mobile devices
  
//      // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);
  
//     // Alert the copied text
//     alert("Copied the text: " + copyText.value);
//   }


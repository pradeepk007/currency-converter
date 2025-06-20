
const BASE_URL = ""

const dropdown = document.querySelector(".dropdown select");


for(let select of dropdown) {
    for (currCode in countrylist) {
        let newOption = document.createElement ("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name ==="form"&& currCode === "USD"){
            newOption.selected ="selected";
        }
        if(select.name ==="to"&& currCode === "INR"){
            newOption.selected ="selected";
        }

         select.append(newOption);
    }
}


const updateflag =() => {
    
}
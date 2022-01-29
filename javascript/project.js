fetch("data.json").then().then(res=>res.json()).then(
    data =>
    display(data.profile)
)

function display(ITI){
    var cdeck=document.querySelector(".card-deck")
    console.log(cdeck)
    var cd=document.createElement("div")
    cd.classList.add("card")
    console.log(cd)
    cdeck.appendChild(cd)
    // 
for(var i in ITI){
    
    // image area
    var im=document.createElement("img")
    im.src=ITI[i].img;
        cd.appendChild(im)
    //  name area
    var name=document.createElement("h1")
    name.textContent=ITI[i].name;
    cd.appendChild(name)

    // branch area
    var branch=document.createElement("h2")
    branch.textContent=ITI[i].branch;
    cd.appendChild(branch)

    // year area
    var yr=document.createElement("h3")
    yr.textContent=ITI[i].year;
    cd.appendChild(yr)

    // button area
    var bt=document.createElement("button")
    bt.classlist.add("btn,btn-info")
    bt.textContent="view";
    cd.appendChild(bt)

}


  
}     



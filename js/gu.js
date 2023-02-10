const project1= document.querySelector(".project1");
const project2=document.querySelector(".project2");
const gBtn=document.querySelector("#ddong");
const colorlist=["yellow","green","blue","white","black","red","orange"]


function gfunction(event){
    let rdbg=Math.floor(Math.random()*colorlist.length);

    if(gBtn.innerText==="반딧불이"){
        gBtn.innerText="개똥벌레";
    }
    else{
        gBtn.innerText="반딧불이";
    }
    document.body.style.background=colorlist[rdbg];
    console.log(document.body.style.background)

}
gBtn.addEventListener("click",gfunction)

const submitid= document.querySelector('#submit_id input');
const submitpw= document.querySelector('#submit_pw input');
const submitinfo= document.querySelector('#submit_info input');
const enrollBtn= document.querySelector('#enrollBtn button');
const submitBtn= document.querySelector("#submitBtn");



const loginBtn= document.querySelector("#loginBtn");
const loginid= document.querySelector('#login_id input');
const loginpw= document.querySelector('#login_pw input');
const loginreal=document.querySelector('#loginreal');




const greeting= document.querySelector('#greeting');
const welcome= document.querySelector('#welcome');

const HIDDEN_CLASSNAME="hidden";

function submitBtnClick(){
    const displaycheck= document.querySelector("#submitform")
    displaycheck.classList.toggle(HIDDEN_CLASSNAME);
}


function loginBtnClick(){
    const displaycheck= document.querySelector("#loginform")
    displaycheck.classList.toggle(HIDDEN_CLASSNAME);


}

function loginsecond(){

    loginCheck()


}
loginreal.addEventListener("click",loginsecond);
submitBtn.addEventListener("click",submitBtnClick);

loginBtn.addEventListener("click",loginBtnClick);

function onEnrollClick(){
    submitCheck();

}




enrollBtn.addEventListener("click",onEnrollClick);


function submitCheck(){
    const userid=submitid.value
    const userpw=submitpw.value

    if (userid===""){
        alert("id를 입력해주세요");

    }
    if (userpw===""){
        alert("pw를 입력해주세요");
    }
    if(submitinfo.value===""){
        alert("info를 입력해주세요");
    }
    if (submitid.value&&submitpw.value&&submitinfo.value){
        greeting.innerText=`${userid}님 가입해주셔서 감사합니다.`;
        
        localStorage.setItem(userid,userpw);

    }
 
}

function loginCheck(){
    const onloginid=loginid.value
    const onloginpw=loginpw.value

    if (onloginid===""){
        alert("id를 입력해주세요");
        console.log(localStorage.getItem(onloginid))
    }
    if (onloginpw===""){
        alert("pw를 입력해주세요");
    }
    if (onloginid&&onloginpw){
        if (localStorage.getItem(onloginid)==onloginpw){
            welcome.innerText=`${onloginid}님 로그인 환영합니다.`;
            console.log(localStorage.getItem(onloginid))
        }
        else{
            welcome.innerText=`회원이 아닙니다`
        }
  
        
    }

}
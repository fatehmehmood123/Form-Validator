console.log('Hello to Project 4---');

let validName=false;
let validEmail=false;
let validPhone=false;
// $('#failure').hide();
// $('#success').hide();


let name=document.getElementById('name');
name.addEventListener("blur",() =>{
    console.log('event is fired');

    // validate name
    let regex = /^[a-zA-Z]([0-9a-zA-Z\s]){3,30}$/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Name matched');
        name.classList.remove('is-invalid')
        validName=true;
        
    }else{
        console.log('Name didnt Match');
        name.classList.add('is-invalid')
        validName=false;
    }
    
    
});
let email=document.getElementById('email');
email.addEventListener("blur",() =>{
    console.log('event is fired');
// validate email

    let regex = /^([\_\-\.0-9a-zA-Z]+)@([\_\-\.0-9a-zA-Z]+)\.([a-zA-Z]+)$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('email Matched');
        email.classList.remove('is-invalid')
        validEmail=true;
    }else{
        console.log('email didnt Match');
        email.classList.add('is-invalid')
        validEmail=false;
    }
    
});
let phone=document.getElementById('phone');
phone.addEventListener("blur",() =>{
    console.log('event is fired');
// validate phone
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('phone number matched');
        phone.classList.remove('is-invalid')
        validPhone=true;
    }else{
        console.log('phone didnt Match');
        phone.classList.add('is-invalid')
        validPhone=false;
    }
    
});

// showing alert on submitting
let submit=document.getElementById("submit");

submit.addEventListener("click",(e)=>{
    e.preventDefault()

    if(validEmail && validPhone && validName){
        let failure= document.getElementById("failure");
        console.log('Details Are Valid');
        let success= document.getElementById("success");
        success.classList.add("show");
        // failure.classList.remove("show");
        $('#failure').hide();
        $('#success').show();


    }
    else{
        console.log('Details Are InValid');
        let failure= document.getElementById("failure");
        let success= document.getElementById("success");
        failure.classList.add("show");
        // success.classList.remove("show");
        $('#success').hide();
        $('#failure').show();
    }




})
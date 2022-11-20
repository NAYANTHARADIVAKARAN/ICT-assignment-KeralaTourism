function validate()
{
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var emailerror=document.getElementById("emailerror")
    var passworderror=document.getElementById("passworderror")
    const regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    let c=0;
    if(regex.test(email.value)==false)
    {
        emailerror.innerHTML="invalid Email";
        emailerror.style.color="red";
        c++;
    }
    

    const regex2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(regex2.test(password.value)==false)
    {
        passworderror.innerHTML="password must contain one uppercase one lowercase and one digit";
        passworderror.style.color="red";
        c++;
    }
     
    if(c==0){return true;}
    else{return false;}
     
}

function signupvalidate()
{
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var rpassword=document.getElementById("rpassword");
    var phone=document.getElementById("phone");
    var emailerror=document.getElementById("emailerror")
    var passworderror=document.getElementById("passworderror")
    var phoneerror=document.getElementById("phoneerror")
    var passwordmatcherror=document.getElementById("passwordmatcherror")
    const regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    let c=0;
    if(regex.test(email.value)==false)
    {
        emailerror.innerHTML="invalid Email";
        emailerror.style.color="red";
        c++;
    }

    const regex2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(regex2.test(password.value)==false)
    {
        passworderror.innerHTML="password must contain one uppercase one lowercase and one digit";
        passworderror.style.color="red";
        c++;
    }

    const regex3=/^(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})-$/
    if(regex3.test(phone.value)==false)
    {
        phoneerror.innerHTML="invalid phone";
        phoneerror.style.color="red";
        c++;
    }

    if(password.value!=rpassword.value)
    {
        passwordmatcherror.innerHTML="passwords does not match";
        passworderror.style.color="red";
        c++;
    }
    if(c==0){return true;}
    else{return false;}
     
}

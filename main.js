function form(){
    var first=document.getElementById("F-Name").value;
    var second=document.getElementById("S-Name").value;
    var Email=document.getElementById("Email").value;
    var password=document.getElementById("password").value;
    var radios=document.getElementsByName("gender");
    var isChecked=false;
    var error=document.getElementById("error");
    if(first.length<3 || second.length<3){
        text="please enter valid name";
        error.innerHTML=text;
        return false;
    }
    else if(Email.indexOf("@") == -1 || Email.length<15){
        text="please enter valid email";
        error.innerHTML=text;
        return false;
    }
    else if(password.length<5 || NaN(password)){
        text="please enter valid password";
        error.innerHTML=text;
        return false;
    }
    for(var i = 0; i<radios.length; i++){
        if(radios[i].checked){
            isChecked=true;
            break;
        }
    }
    if(isChecked){
        text="please enter your gender";
        error.innerHTML=text;
        return false;
    }
    else{
        alert("Done ok");
        return true;
    }
}
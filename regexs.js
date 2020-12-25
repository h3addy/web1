function validate(){
    var txt = document.getElementById("uname").value;
    var regex1 = /^([a-zA-Z\.-]+)@([a-zA-Z-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    if(regex1.test(txt)){
        document.getElementById("l1").style.visibility = "visible";
        document.getElementById("l1").innerHTML = "Valid";
        document.getElementById("l1").style.color= "green";
    }
    else{
        document.getElementById("l1").style.visibility = "visible";
        document.getElementById("l1").innerHTML = "InValid";
        document.getElementById("l1").style.color= "red";
    }
}
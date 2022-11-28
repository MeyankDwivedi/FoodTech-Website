document.getElementById("loginButton").onclick=function(){loginfunction()};

function loginfunction()
{
    let a,b;
    a=document.getElementById("loginId").value;
    b=document.getElementById("loginPass").value;
    if((a=="Sumen")&&(b=="Sumen"))
    {
        alert("Login Successfull");
        open('Main_Page.html',"_self");
    }
    else
    {
        alert("Your Login ID/Password is Incorrect.");
    }
    document.getElementById("loginId").value="LoginId";
    document.getElementById("loginPass").value="Password";
}

$(".MenuPics").mouseover(function(){
    $(".Details").addClass(".Details_Change").removeClass("Details");
  })
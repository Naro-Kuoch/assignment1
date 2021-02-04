async function validatePwd(event) {
    event.preventDefault();
    var register=document.forms["register"];
    var pwd = register["pwd"].value;
    var conPwd = register["confirm_pwd"].value; 
    var email = register["email"].value;

    var passowrd = document.getElementById("checkPwd")
    var confirmPwd = document.getElementById("checkConfirmPwd")
    var exist= false;

    // await axios.post('/searchemail',{email:email}).then(result=>{

    //   console.log(result.data.exist)
    //   exist= result.data.exist
    // })
    // console.log(exist)
    // if(exist){
    //   error.innerHTML="Email already exists !";
    // }
    if (pwd != conPwd) {
      confirmPwd.innerHTML="Password dosn't match !";  
    }
    else if (pwd =="") {
      passowrd.innerHTML="Password can't be empty !";
    }
    else if(pwd.length<3){
      passowrd.innerHTML="It requires at least 3 characters !";
    }
    else{
    window.location.pathname="/signin";
  }
  }

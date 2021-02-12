
function validatePwd(event) {
    event.preventDefault();
    var register=document.forms["register"];
    var pwd = register["pwd"].value;
    var conPwd = register["confirm_pwd"].value; 
    var email = register["email"].value;

    var checkEmail = document.getElementById("douplicate_email");
    var passowrd = document.getElementById("checkPwd");
    var confirmPwd = document.getElementById("checkConfirmPwd");
    // var exist= false;
    var username = register["username"].value;
    console.log(username,email,pwd);
    

    // await axios.post('/searchemail',{email:email}).then(result=>{

    //   console.log(result.data.exist)
    //   exist= result.data.exist
    // })
    // console.log(exist)
    // if(exist){
    //   checkEmail.innerHTML="Email already exists !";
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
      console.log(email,pwd,username)
      axios.post("/register",{username:username,pwd:pwd,email:email}).then(result=>{
        if(result.data.email){
          checkEmail.innerHTML="Email already exists !";
          console.log("email already exist")
        }
  
       else{
          window.location.pathname="/signin";
          console.log("logIn");
        }
      })
  }
  }

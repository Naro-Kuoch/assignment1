async function validatePwd(event) {
    event.preventDefault();
    var register=document.forms["register"];
    var pwd = register["pwd"].value;
    var conPwd = register["confirm_pwd"].value; 
    var email = register["email"].value;
    var error= document.getElementById("error_message");
    var exist= false;

    await axios.post('/searchemail',{email:email}).then(result=>{
      
      // if(result.data.exist){
      //   error.innerHTML="Email already exists!";
      // }
      console.log(result.data.exist)
      exist= result.data.exist
    })
    console.log(exist)
    if(exist){
      error.innerHTML="Email already exists !";
    }
    else if (pwd != conPwd) {
      error.innerHTML="Password dosn't match !";  
    }
    else if (pwd =="") {
      document.getElementById("error_message").innerHTML="Password can't be empty !";
    }
    else if(pwd.length<3){
      document.getElementById("error_message").innerHTML="Password requires at least 3 characters !";
    }
    else{
    window.location.pathname="/signin";
  }
  }

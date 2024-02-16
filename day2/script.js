

// alert("Sucessfull"); //  this is just a simple message of the text 

function unsubmits(){
    const first_Name = document.getElementById("firstName").value;
    const last_Name = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone_No = document.getElementById("phoneNo").value;
    
    localStorage.setItem("firstName",first_Name);
    localStorage.setItem("lastName",last_Name);
    localStorage.setItem("email",email);
    localStorage.setItem("phoneNo",phone_No);

    alert("Congratulations you have submitted");

    

}
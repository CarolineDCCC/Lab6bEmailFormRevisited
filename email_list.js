"use strict";
console.log("is this thing on?");
var $ = function(id) {
    return document.getElementById(id);

};
console.log("this is after the $ get Element by Id declaration");


const joinList = () => {
    console.log("this is the beginning of the joinList function");
    
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";
    console.log("emailAddress1 variable has been declared.");
    console.log(emailAddress1);

    // validate the entries
    if (emailAddress1 == "") {
        console.log(emailAddress1);
    	errorMessage = "First email address entry required";
        $("email_address1").focus();
    } else if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required";
    	$("email_address2").focus();
        console.log(emailAddress2);
    } else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match";
    	$("email_address2").focus();
        console.log("emailAddress1 and 2 match.");
    } else if (firstName == "") {
    	errorMessage = "First name entry required";
    	$("first_name").focus();
        console.log(firstName);
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (errorMessage == "") {
        $("email_form").submit(); 
        
    } else {
    	alert(errorMessage);
        
    }
   
   
};
console.log("this is after the joinList function was supposed to have been executed.");

document.addEventListener("DOMContentLoaded", () => {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
});

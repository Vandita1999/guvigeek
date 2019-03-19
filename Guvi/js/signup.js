$(document).ready(function(){


$("#signup").click(function(){
    var data1={};  // creating  a json object

var email_signup=$("#email_signup").val();
var password_signup=$("#password_signup").val();
var mobile_signup=$("#mobile_signup").val();
var first_signup=$("#first_signup").val();
var last_signup=$("#last_signup").val();
var degree=$("#degree_signup").val();
var passout=$("#passout_signup").val();
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (first_signup.length < 1) {
      toastr.info('first name field cannot be empty!')
    }
    else if (last_signup.length < 1) {
      toastr.info(' Last name field cannot be empty!')
    }
    else if(mobile_signup.length!=10)
    {
       toastr.info('Please enter valid mobile number!')
    }
     else if (degree.length < 1) {
      toastr.info(' Degree field cannot be empty!')
    }
     else if (passout.length < 1) {
      toastr.info(' Passout field cannot be empty!')
    }
    else if (password_signup.length < 8) {
    toastr.info('password must be minimum of 8 letter or greater!')
    }

    else if(reg.test(email_signup) == false)
        {
             toastr.info('Enter valid email!')
        }
        else
        {


data1['email_signup']=email_signup;
data1['password_signup']=password_signup;
data1['mobile_signup']=mobile_signup;
data1['first_signup']=first_signup;
data1['last_signup']=last_signup;
data1['degree']=degree;
data1['passout']=passout;

 data1 = JSON.stringify(data1); 
 console.log(data1); //stringify the data and save it as a JSon data
        
        $.ajax({
            type: "POST",
            async: false,
            url: "php/signup.php",
            data: {
                'mydata': data1,
            },
            success: function(result) {
                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);
                if (result.msg == "erroremailmobile") {
                     toastr.info('Email and mobile already used!')
               
               }
                 else if(result.msg=="erroremail")
                toastr.info('Email already used!')
                 else if(result.msg=="errormobile")
                toastr.info('Mobile already been used!')
                 else if(result.msg=="inserted"){
                toastr.success('Successfully signed up!Please login nows');

               }
               else
                toastr.warning('Error!')
               
                }
        });

}
});

});
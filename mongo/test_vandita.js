$(document).ready(function() {

    $("#insert").click(function() {
        var userid = $("#username").val();
        var password = $("#pwd").val();
        var mydata = {};
        mydata['type'] = "insert";
        mydata['userid'] = userid;
        mydata['password'] = password;



        mydata = JSON.stringify(mydata);



        $.ajax({
            type: "POST",
            async: false,
            url: "testfile.php",
            data: {
                'mydata': mydata,
            },
            success: function(result) {
                $("#alert-div").html("inserted");
            }


        });
    });
    $("#extract").click(function() {
                var mydata = {};
        mydata['type'] = "extract";
     


        mydata = JSON.stringify(mydata);



        $.ajax({
            type: "POST",
            async: false,
            url: "testfile.php",
            data: {
                'mydata': mydata,
            },
            success: function(result) {
              result = result.trim();
               result = result.substring(1, result.length - 1);
               result = JSON.parse(result);
               console.log(result);
               var count=Object.keys(result).length;
               var newhtml='<table style="width:100%"> <tr> <th>Username</th> <th>password</th></tr>';	
               for(var i=0;i<count-1;i++)
               {           
				newhtml+='<tr><td>'+result[i]['username']+'</td><td>'+result[i]['pwd']+'</td></tr>';
               }
               newhtml+='</table>';
               console.log(newhtml);

	$("#alert-div").html(newhtml);
            }


        });

    });



});
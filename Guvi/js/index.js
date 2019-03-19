$(document).ready(function(){
	var email;
	var htmldata;

	$("#details").click(function(){
		var data={};
		var firstname=$("#first").val();
		var lastname=$("#last").val();
		var email=$("#email").val();
		var mobile=$("#mobile").val();
		var adhar=$("#adhar").val();
		var degree=$("#degree").val();
		var passout=$("#passout").val();
		var branch=$("#branch").val();

		if(firstname==""||lastname==""||email==""||mobile==""||adhar==""||degree==""||passout==""||branch=="")
		{
			 toastr.warning('All fields are required');
		}

		else{
			data['firstname']=firstname;
			data['lastname']=lastname;
			data['email']=email;
			data['mobile']=mobile;
			data['adhaar']=adhar;
			data['degree']=degree;
			data['passout']=passout;
			data['branch']=branch;
			data=JSON.stringify(data);
			$.ajax({
				 type: "POST",
            async: false,
            url: "php/index.php",
            data: {
                'mydata': data,
            },
            success: function(result) {
                console.log(result);
                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);
                if(result.msg=="Inserted")
                {
					          $.getJSON('php/jsondata.json', function(data) {
							console.log(data);
							


							for(var i=0;i<data.length;i++){
								if(data[i].email==email){
									console.log("hello");
									var first=data[i].firstname;
									var last=data[i].lastname;
									var mobile=data[i].mobile;
									var degree=data[i].degree;
									var passout=data[i].passout;
									var branch=data[i].branch;
									var adhar=data[i].adhaar;
									 htmldata='<table class="table table-dark"> <thead> <tr> <th scope="col">Email</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Mobile</th> <th scope="col">Degree</th> <th scope="col">Branch</th> <th scope="col">Adhaar ID</th> <th scope="col">Passout</th> </tr></thead> <tbody> <tr> <th scope="row">'+email+'</th> <td>'+first+'</td><td>'+last+'</td><td>'+mobile+'</td><td>'+degree+'</td><td>'+branch+'</td><td>'+adhar+'</td><td>'+passout+'</td></tr></tbody></table>';
									 $(".login_card").hide();
								}
								else{
									console.log("not printed")
								}
								
							}

							$("#res").html(htmldata)




						});
                }
              
				}
			})

		}


});

	

});
$(document).ready(function() {
	console.log("DOM Ready");
    
    /*Gather Content from Data First*/
    var dataurl = "data/no-mans-sky-resources.json";
	console.log(dataurl);
	var mysource = $('#resourcestemplate').html();
	console.log(mysource);
	var mytemplate = Handlebars.compile(mysource);
	console.log(mytemplate);
	
	$.getJSON(dataurl, function(data){
		console.log("getJSON works");
		console.log(data);
		var myresult = mytemplate(data);
		console.log(myresult);
		$('#resources').html(myresult);
	});
	
    /*Place Content in Markup*/
	var newContent = $('#resources').html();
	console.log(newContent);
    
    
 
    });
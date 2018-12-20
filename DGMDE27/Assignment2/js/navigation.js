/*So basically this little script will look for the body id and based on that gather which navigation element should get a new ID of "iamhere"*/

$(document).ready(function() {
  console.log("Ready!");
  var mybodyid = $('.body').attr('id');
  var mynavid = '#nav' + mybodyid;
  console.log("mybodyid is " + mybodyid);
  console.log("mynavid is " + mynavid);
  $(mynavid).attr('id', 'iamhere');
});
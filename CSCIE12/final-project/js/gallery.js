$(document).ready(function() {
    
    //Run magnificent popup
    $('#resources').magnificPopup({
      delegate: 'a', // by clicking on the a tag, popup will open
      type: 'image',
      image: {
        titleSrc: 'title'
      },
      gallery:{
        enabled: 'true'
      }
    });
    

});
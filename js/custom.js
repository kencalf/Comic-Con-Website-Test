 $(document).ready(function() {
	 
//FADING IN THE WHOLE WEBSITE-------------------	 
	 $('html').hide();	
	 $('nav').hide().transition({perspective: '100px',rotateX: '270deg'});
	 $('#face').hide().transition({opacity:0});
	 $('#logo').hide();
	 $(document).ready(function(){
	 $('html').fadeIn(100);
	 $('#face').fadeIn(100).transition({opacity:1, delay:0, });
	 $('nav').fadeIn(100).transition({perspective: '100px',rotateX: '360deg',delay:0});
	 $('#logo').fadeIn(1000).transition({perspective: '300px',rotateX: '0deg',delay:0});
   });
   
   
   ///---------------------------MENU CLICK---------------------------------------------------------------------
			
//FIRST TAB-------------------
	 $('#div1').hide().transition({ x: '-600px' }) ;
     $('#click1').click(function(){ 
     $('#div1').show().transition({ x: '0px' });
	 $('#div2,#div3,#div4,#face').hide() .transition({ x: '-600px' });
   });
   
//Second TAB-------------------
   $('#div2').hide().transition({ x: '-600px' });
   $('#click2').click(function() { 
   $('#div2').show() .transition({ x: '0px' });
   $('#div1,#div3,#div4,#face').hide() .transition({ x: '-600px' });
   });
   
   
   
//Third TAB-------------------
   $('#div3').hide() .transition({ x: '-600px' })   ;
   $('#click3').click(function() { 
   $('#div3').show().transition({ x: '0px' });
    $('#div1,#div2,#div4,#face').hide() .transition({ x: '-600px' });
   });
   
   //Fourht TAB-------------------
   $('#div4').hide() .transition({ x: '-600px' })   ;
   $('#click4').click(function() {   
   $('#div4').show() .transition({ x: '0px' });
 $('#div1,#div2,#div3,#face').hide() .transition({ x: '-600px' });
   });
  
  
  
 });
 
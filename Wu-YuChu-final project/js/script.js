/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block


/* america test */

    function init() {

// dynamically create array of america flag country codes

    var americalist = [];
    
        var len = americalist.length;
    
        for (var i = 0; i < len; i++){
        
            america.push(america[i].code2);
        }
     }    


    var americalist = ['AM', 'AG', 'BR', 'CL', 'CO', 'EC', 'MX', 'PE', 'UR'];
    
	    //console.log(americalist);
	
 	var amflag = _.shuffle(americalist);
 	var amcountry = _.shuffle(americalist);
 	
 
    // create america flag gallery

    var len = amflag.length;
    
        for (var i=0; i<len; i++) {
    
        $("#amf").append('<div class="amflag '+ amflag[i] + ' "><img src="img/america/' + amflag[i] + '.png" code="'+ amflag[i] + '" /></div>');
        }

    // create america country name list

    var len = amcountry.length;

        for (var i=0; i<len; i++) {
 
        $("#amc").append('<div class="amcountry '+ america[i].code2 + ' "code="' + america[i].code2 + '"><h3>'+ america[i].country + '</p></div>');   
    
        }   


    // start to match
    
    init();
    
    var amf = '';
    var amc = '';
    
    var right = 9;
    var wrong = 0;
    

    
    $(".amflag img").click(function(){
    
        console.log("flag click");
        
        amf = $(this).attr("code");
        matching();
    });
    
    
    $(".amcountry").click(function(){
    
        console.log("countries click");
        
        amc = $(this).attr("code");
        matching();
    });


    //When flag corresponds to the country name, the alert will pop up and the matching ones will disappear. If flag and country name don't match, the alert box will also pop up to give you a warning.
    
    function matching (){

        if ( (amf != '') & (amc != '')) {
        
            console.log("let's compare them");
            if (amf == amc) {
                alert("HEY! YOU GOT IT!");
                $('.'+ amf).hide();  //flag & country will disappear
                amf = '';
                amc = '';
                right--;
                $("#amr1").html("Still have " + right + " countries to go ");
                
            } else {
                alert("ARE YOU SURE!?");
                amf = '';
                amc = '';
                wrong++;
                $("#amr2").html("OH NO! You got " + wrong + " wrong");
            }
        }

    }

 
/* europe test */

// dynamically create array of europe flag country codes	
     function init2() {
     
        var europelist = [];
    
        var len2 = europelist.length;
    
            for (var i = 0; i < len2; i++){
        
                europe.push(europe[i].code2);
            }
      }    


    var europelist = ['EN', 'GE', 'AU', 'SP', 'PO', 'FR', 'NE', 'BE', 'IT', 'DE', 'SW', 'GR'];
    
	    //console.log(europelist);
	
 	var euflag = _.shuffle(europelist);
 	var eucountry = _.shuffle(europelist);
 	
 
    // create europe flags gallery

    var len2 = euflag.length;
    
        for (var i=0; i<len2; i++) {
    
        $("#euf").append('<div class="euflag '+ euflag[i] + ' "><img src="img/europe/' + euflag[i] + '.png" code="'+ euflag[i] + '" /></div>');
        }

    // create europe country name list

    var len2 = eucountry.length;

        for (var i=0; i<len2; i++) {
 
        $("#euc").append('<div class="eucountry '+ europe[i].code2 + ' "code="' + europe[i].code2 + '"><h3>'+ europe[i].country+ '</p></div>');   
    
        }   
 	
 	
     // start to match
    
    init2();
    
    var euf = '';
    var euc = '';
    
    var right2 = 12;
    var wrong2 = 0;
    

    
    $(".euflag img").click(function(){
    
        console.log("euro click");
        
        euf = $(this).attr("code");
        matching2();
    });
    
    
    $(".eucountry").click(function(){
    
        console.log("euro check");
        
        euc = $(this).attr("code");
        matching2();
    });


//When flag corresponds to the country name, the alert will pop up and the matching ones will disappear. If flag and country name don't match, the alert box will also pop up to give you a warning.

    function matching2 (){

        if ( (euf != '') & (euc != '')) {
        
            console.log("let's test them");
            if (euf == euc) {
                alert("BINGO!!");
                $('.'+ euf).hide(); 
                euf = '';
                euc = '';
                right2--;
                $("#eur1").html("Now " + right2 + " more countries to go");
                
            } else {
                alert("Try again!");
                euf = '';
                euc = '';
                wrong2++;
                $("#eur2").html("Opppps! You got " + wrong2 + " wrong");
            }
        }

    }
    
    
/* asia test */

// dynamically create array of asia flag country codes	

    function init3() {
     
        var asialist = [];
    
        var len3 = asialist.length;
    
            for (var i = 0; i < len3; i++){
        
                asia.push(asia[i].code2);
            }
      }    


    var asialist = ['TW', 'JP', 'TH', 'CH', 'KO', 'IN', 'SI', 'MY', 'VI'];
    
	    console.log(asialist);
	
 	var asflag = _.shuffle(asialist);
 	var ascountry = _.shuffle(asialist);

    
    // create asia flags gallery

    var len3 = asflag.length;
    
        for (var i=0; i<len3; i++) {
    
        $("#asf").append('<div class="asflag '+ asflag[i] + ' "><img src="img/asia/' + asflag[i] + '.png" code="'+ asflag[i] + '" /></div>');
        }

    // create asia country name list

    var len3 = ascountry.length;

        for (var i=0; i<len3; i++) {
 
        $("#asc").append('<div class="ascountry '+ asia[i].code2 + ' "code="' + asia[i].code2 + '"><h3>'+ asia[i].country+ '</p></div>');   
    
        }   
 	

    // start to match
    
    init3();
    
    var asf = '';
    var asc = '';
    
    var right3 = 9;
    var wrong3 = 0;
    

    
    $(".asflag img").click(function(){
    
        console.log("asia click");
        
        asf = $(this).attr("code");
        matching3();
    });
    
    
    $(".ascountry").click(function(){
    
        console.log("asia check");
        
        asc = $(this).attr("code");
        matching3();
    });


//When flag corresponds to the country name, the alert will pop up and the matching ones will disappear. If flag and country name don't match, the alert box will also pop up to give you a warning.

    function matching3 (){

        if ( (asf != '') & (asc != '')) {
        
            console.log("check it out");
            if (asf == asc) {
                alert("BANG!That's right!");
                $('.'+ asf).hide(); 
                asf = '';
                asc = '';
                right3--;
                $("#asr1").html("Okay! " + right3 + " more countries to go");
                $("#bubble").show();
                
            } else {
                alert("BOOOOOM!");
                asf = '';
                asc = '';
                wrong3++;
                $("#asr2").html("HEY! You got " + wrong3 + " wrong");
                $("#bubble").show();
            }
        }

    }


/* africa test */

// dynamically create array of africa flag country codes	

    function init4() {
     
        var africalist = [];
    
        var len4 = africalist.length;
    
            for (var i = 0; i < len4; i++){
        
                africa.push(africa[i].code2);
            }
      }    


    var africalist = ['MO', 'EP', 'SA', 'EG', 'TU', 'MZ', 'SU', 'CD'];
    
	    console.log(africalist);
	
 	var afflag = _.shuffle(africalist);
 	var afcountry = _.shuffle(africalist);


    // create asia flags gallery

    var len4 = afflag.length;
    
        for (var i=0; i<len4; i++) {
    
        $("#af").append('<div class="afflag '+ afflag[i] + ' "><img src="img/africa/' + afflag[i] + '.png" code="'+ afflag[i] + '" /></div>');
        }

    // create asia country name list

    var len4 = afcountry.length;

        for (var i=0; i<len4; i++) {
 
        $("#ac").append('<div class="afcountry '+ africa[i].code2 + ' "code="' + africa[i].code2 + '"><h3>'+ africa[i].country+ '</p></div>');   
    
        }   
 	

    // start to match
    
    init4();
    
    var aff = '';
    var afc = '';
    
    var right4 = 8;
    var wrong4 = 0;
    

    
    $(".afflag img").click(function(){
    
        console.log("africa click");
        
        aff = $(this).attr("code");
        matching4();
    });
    
    
    $(".afcountry").click(function(){
    
        console.log("africa check");
        
        afc = $(this).attr("code");
        matching4();
    });


//When flag corresponds to the country name, the alert will pop up and the matching ones will disappear. If flag and country name don't match, the alert box will also pop up to give you a warning.

    function matching4 (){

        if ( (aff != '') & (afc != '')) {
        
            console.log("test!");
            if (aff == afc) {
                alert("Hey! You smart!");
                $('.'+ aff).hide(); 
                aff = '';
                afc = '';
                right4--;
                $("#afr1").html("Wow! " + right4 + " more to go :)");
                
            } else {
                alert("BOOOOOM!");
                aff = '';
                afc = '';
                wrong4++;
                $("#afr2").html("Try harder! You got " + wrong4 + " wrong");
            }
        }

    }

/* end page */

//when you click the image, the results div will appear

    $("#click").click(function(){

        $("#result").show();
        
    });
    

}); //end document.ready block






 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
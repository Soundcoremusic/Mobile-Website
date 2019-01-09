$(document).ready(function(){
    	
   
        var hours = {
                weekdays: "10 AM - 7 PM",
                weekends: "10 AM - 6 PM"                       
        }
      
        var phone = {
            retail:"(618) 457 - 0280",
            studio:"(618) 519 - 9326"    
           
        }
              
	


//Variables 
	
        function navSetTable(button){
            var tableId1 = "<table id='hours'>";
            var tableId2 = "<table id='phone'>";
            var table = '<th colspan="2"></th><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>';
            
            if(button === "hours"){

                $("#tables").append(tableId1 + table);
                $("#hours th").text("Store Hours");
                $("#hours tr:nth-child(2) td:nth-child(2)").text(hours.weekdays);
		$("#hours tr:nth-child(2) td:first-child").text("Mon - Fri."); 
                $("#hours tr:nth-child(3) td:nth-child(2)").text(hours.weekends);
                $("#hours tr:nth-child(3) td:first-child").text("Sat - Sun.");
                console.log("Table added");
                return true;
            }else if(button === "phone"){
                
             
                $("#tables").append(tableId2 + table);
		$("#phone th").text("Store Phone");
		$("#phone tr:nth-child(2) td:first-child").text("Retail")    
		$("#phone tr:nth-child(2) td:nth-child(2)").text(phone.retail);
		$("#phone tr:nth-child(3) td:first-child").text("Studio")
		$("#phone tr:nth-child(3) td:nth-child(2)").text(phone.studio);
                console.log("Table added");
                return true;
            }
        }
          
        var hoursState = false;
        var phoneState = false;
   
	
		

//Event Handlers

        $("#storeHours").click(function(){
        
            if(hoursState === false){

		$("header").after("<div id='tables'></div>");
                navSetTable("hours");
            
                $(this).addClass("active");
                hoursState = !hoursState;
                return hoursState;
            }else if(hoursState === true){
                $(this).removeClass("active");
                hoursState = !hoursState;
		$("#tables").remove();
                return hoursState;
            }
            
        });
    
        $("#storePhone").click(function(){  
            
            if(phoneState === false){
             
		$("header").after("<div id='tables'></div>");    
		navSetTable("phone");
                $(this).addClass("active");
                phoneState = !phoneState;
                return phoneState;
            }else if(phoneState === true){
                $(this).removeClass("active");
                phoneState = !phoneState;
		$("#tables").remove();    
                return phoneState;
            }
        });

		
	
	$("#menu-button i").click(function(){
		$("nav").css("width","100%");
	});

	
	$(".closebtn").click(function(){
		$("nav").css("width","0");
	})












});

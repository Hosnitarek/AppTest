/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojlabel','ojs/ojbutton', 'promise',
 'ojs/ojtable', 'ojs/ojarraydataprovider','ojs/ojpopup'],
 function(oj, ko, $) {
	 
  var urlroot="http://localhost:9001/JavaRESTfullWS/rest/student/";
  
    function CustomerViewModel() {
      var self = this;
    
	
          	  self.data = ko.observableArray();
$.getJSON("http://localhost:9001/JavaRESTfullWS/rest/student/").
        then(function (obj) {
			console.log(obj);
			
			console.log(obj.student.id);
			console.log(obj.student.fristname);
			/* console.log(obj.user["fristname"]); */
		     
            $.each(obj.student, function () {
				
                self.data.push({
                    Studentid:this.STUDENTID,
                    Studentname:this.STUDENTNAME,
                    mobilenumber:this.MOBILENUMBER
		
                    
                });
            });
        });
		
	  
        self.dataprovider = new oj.ArrayTableDataSource(
        self.data, 
        {idAttribute: 'Studentid'}
		
);
	  
     /*  end function to view data */

	 
           self.value = ko.observable("");
		   self.value1=ko.observable("");
           self.value2=ko.observable("");
          
		   self.value7=ko.observable("");
		   
		   
		  self.clickedButton = ko.observable("(None clicked yet)");
	      self.buttonClick1 = function(event){
			  var id=self.value();
			  var studentname=self.value1();
			  var studentnumber=self.value2();
			
			  alert(id);
			  alert(studentname);
			  alert(studentnumber);
			  
			/*  if (id==null || id=="" || isNaN(id) ||id.length<3){  
               alert("you should insert correct id"); 
                   id.focus;			   
               return false;  
                }else if(fname== null || fname == "" ){  
              alert("You Should insert correct Frist Name");  
               return false;  
               }  
		        else if ( sname== null || sname =="")
		       {
			     alert("you should insert correct Second Name");
		         return false;
			   }
		 	  else{ */
			  $.ajax({
		      type: 'POST',
		     // url: 'http://localhost:9001/JavaRESTfullWS/rest/course/show/5/hs/hs/hs/hs/hs/hs',
			  url:urlroot+'show/'+id+'/'+studentname+'/'+studentnumber,
			   
			  dataType: "text", 
			
		      success: function(data){
				  var x = data;
		      console.log(' success: ' + data);
			
	    	}
	    });
         // self.clickedButton(event.currentTarget.id);
		  }
		   
		   
		   /*start function delete*/
		   
		    self.buttonClick = function(event){
				alert("delete ");
			   var idremoval=self.value7();
			   alert(idremoval);
			 
			  $.ajax({
		      type: 'DELETE', 
		      url:urlroot+idremoval,
			  
			  dataType: "json",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
		      success: function(data){
				
		         console.log(' success: ' + data);
			
	    	  }
		
	    });
         // self.clickedButton(event.currentTarget.id);
 		   }
		   
		 /*  end function delete*/  
		     /* navigation to page */
			 
			 
			 
			 
			 
			 
             /* end  navigation to page */		   
		    /*start function update*/
		  
		    self.buttonClick3 = function(event){
			  alert("update ready");
			  var id=self.value();
			  var studentname=self.value1();
			  var studentnumber=self.value2();
		      alert(id);
			  alert(studentname);
			  alert(studentnumber);
			  
			  $.ajax({
		      type: 'PUT',
		     
			  url:urlroot+'update/'+id+'/'+studentname+'/'+studentnumber,
		      success: function(data){
				  var x = data;
		         console.log(' success: ' + data);
			
	    	  }
		
	    }); 
         
 		   }
		   
		 /*  end function update*/  
		   
		   
	
	
	
	
	
	
	
	
	
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new CustomerViewModel();
  }
);

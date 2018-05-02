/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
 
define(['ojs/ojcore', 'knockout', 'jquery' ,'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojlabel','ojs/ojbutton', 'promise',
 'ojs/ojtable', 'ojs/ojarraydataprovider','ojs/ojpopup', 'ojs/ojfilepicker'],

 function(oj, ko, $) {
   
  var urlroot="http://localhost:9001/JavaRESTfullWS/rest/course/";
  
       var files;       
  
      /* var root = $("#text-input");
      var tooltipHelper = new TooltipHelper(root); */
	
	
    function IncidentsViewModel() {
      var self = this;
	
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

	  /* function get to view data  */
	  
/*	  self.data = ko.observableArray();
$.getJSON("http://localhost:9001/JavaRESTfullWS/rest/message/show").
        then(function (obj) {
			console.log(obj);
			
			console.log(obj.user);
			console.log(obj.user.fristname);
			console.log(obj.user["fristname"]);
		     
            $.each(obj.user, function () {
				console.log(obj.user.id)
                self.data.push({
                    UserId:this.id,
                    FristName:this.fristname,
                    SecondName:this.lastname
		
                    
                });
            });
        });
		
	  
        self.dataprovider = new oj.ArrayTableDataSource(
        self.data, 
        {idAttribute: 'UserId'}
		
);*/
	  
     /*  end function to view data */

	 
           self.value = ko.observable("");
		   self.value1=ko.observable("");
           self.value2=ko.observable("");
           self.value3=ko.observable(""); 
           self.value4=ko.observable("");
		   self.value5=ko.observable("");
		   self.value6=ko.observable("");
		   self.value7=ko.observable("");
		   
		   
		   
	    self.selectListener = function(event) {
        files = event.detail.files;
		
		console.log(files[0].name);
	
      };
		   
		   
		  		   
		 /*   var setselectimage=self.selectListener();
		   console.log(setselectimage);
		    */
		   
		   
		  self.clickedButton = ko.observable("(None clicked yet)");
	      self.buttonClick1 = function(event){
			  var id=self.value();
			  var TITLE=self.value1();
			  var IMAGE=self.value2();
			  var AUDIENCE=self.value3();
			  var PREREQUISTE=self.value4();
			  var COURSEDATE=self.value5();
			  var VIDEOLINK=self.value6();
			  alert(id);
			  alert(TITLE);
			  alert(IMAGE);
			  alert(AUDIENCE);
			  alert(PREREQUISTE);
			  alert(COURSEDATE);
			  alert(VIDEOLINK);
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
			  url:urlroot+'show/'+id+'/'+TITLE+'/'+files[0].name+'/'+AUDIENCE+'/'+PREREQUISTE+'/'+COURSEDATE+'/'+VIDEOLINK,
			   
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
				
			   var idremoval=self.value7();
			     
			   
			 
			   
			  alert(idremoval);
			  $.ajax({
		      type: 'DELETE',
			  url:'http://localhost:9001/JavaRESTfullWS/rest/course/show/3/',
		      //url:urlroot+'show/'+idremoval,
		      success: function(data){
				
		         console.log(' success: ' + data);
			
	    	  }
		
	    });
         // self.clickedButton(event.currentTarget.id);
 		   }
		   
		 /*  end function delete*/  
		     /* navigation to page */
			 
			 
			 
			 
			 
			/*  
			 self.clickedButton2 = function(event){
			  
			   alert("Hello World 1");
			   oj.Router.rootInstance.go('testnavgation');
			   alert("Hello world 2")
               self.clickedButton(event.currentTarget.id); 
 		   } */
			 
             /* end  navigation to page */		   
		    /*start function update*/
		  
		    self.buttonClick3 = function(event){
			  alert("update ready");
			  var id=self.value();
			  var TITLE=self.value1();
			  var IMAGE=self.value2();
			  var AUDIENCE=self.value3();
			  var PREREQUISTE=self.value4();
			  var COURSEDATE=self.value5();
			  var VIDEOLINK=self.value6();
			  
			  $.ajax({
		      type: 'PUT',
		     
			  url:urlroot+'update/'+id+'/'+TITLE+'/'+IMAGE+'/'+AUDIENCE+'/'+PREREQUISTE+'/'+COURSEDATE+'/'+VIDEOLINK,
		      success: function(data){
				  var x = data;
		         console.log(' success: ' + data);
			
	    	  }
		
	    }); 
         
 		   }
		   
		 /*  end function update*/  
		   
		   
		   
		   
		   
    }

	
	/* start  toollip */
   /*  var root = $("#text-input");
    var tooltipHelper = new TooltipHelper(root); */
    /* end toollip*/ 
	/* end function convert from data to json  */
    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);

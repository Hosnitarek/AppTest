/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */



    
 
 
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojbutton', 'ojs/ojknockout', 'ojs/ojselectcombobox', 'promise', 'ojs/ojinputtext'],
 function(oj, ko, $) {
   var urlroot="http://localhost:9001/JavaRESTfullWS/rest/coursestudent/";
   
  	var x;
	var y; 
   
   
    function AboutViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
	  
	  
	  /* this.val = ko.observable("");
	  this.val1 = ko.observable("");
	  this.val2 = ko.observable(""); */
	  
	  
	 /*   this.data = ko.observableArray([
        {value: 'Internet Explorer', label: 'Internet Explorer'},
        {value: 'Firefox',    label: 'Firefox'},
        {value: 'Chrome',   label: 'Chrome'},
        {value: 'Opera',    label: 'Opera'},
        {value: 'Safari',   label: 'Safari'}
    ]); */
	

	self.valueChangeHandler = function (event) {
    var valueObj = buildValueChange(event['detail']);
 
   var convertvalueobj=valueObj.value;
   console.log(convertvalueobj);
   /* alert(convertvalueobj); */ 
    x=convertvalueobj;
    return convertvalueobj;
   };
   
   
   
   self.valueChangeHandler1 = function (event) {
    var valueObj = buildValueChange(event['detail']);
 
   var convertvalueobj=valueObj.value;
   console.log(convertvalueobj);
   /* alert(convertvalueobj); */ 
    y=convertvalueobj;
    return convertvalueobj;
   };
   
   
   
   
   
   
   
   
   

 function buildValueChange (valueParam) {
  var valueObj = {};
 
  valueObj.value = valueParam.value;
  
  return valueObj;
}
	
	
	
	 self.data = ko.observableArray([]);
	$.getJSON("http://localhost:9001/JavaRESTfullWS/rest/course").
        then(function (obj) {
			console.log(obj);
			console.log(obj.course);
	        console.log(obj.course[1].title);
			$.each(obj.course, function () {
				console.log(this.title);
                self.data.push({
                    value:this.title,
                    label:this.title,
                    
		      });
            });
        });

	
	  self.datastudent = ko.observableArray([]);
		$.getJSON("http://localhost:9001/JavaRESTfullWS/rest/student/").
        then(function (obj) {
			console.log(obj);
			console.log(obj.student);
	        console.log(obj.student[1].STUDENTNAME);
			$.each(obj.student, function () {
				console.log(this.STUDENTNAME);
                self.datastudent.push({
                    value:this.STUDENTNAME,
                    label:this.STUDENTNAME,
                    
		      });
            });
        });

		
	/**/
	  


	
	  /**/
	  self.value = ko.observable("");
	
	  
	  self.clickedButton = ko.observable("(None clicked yet)");
	   self.buttonClick = function(event){
			
     
	   alert(x);
	   alert(y);
	  var id=self.value();
	   
    			  
			  $.ajax({
		      type: 'POST',
		      url:urlroot+'show/'+id+'/'+x+'/'+y,
		      dataType: "text", 
		 	
		      success: function(data){
				  var x = data;
		      console.log(' success: ' + data);
			
	        	}
	      });

		  }
	  
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new AboutViewModel();
  }
);

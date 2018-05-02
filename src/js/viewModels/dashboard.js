/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojdialog'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;
	           self.handleOpen = function() {
             document.querySelector("#modelessDialog1").open();
         };
         self.handleOKClose = function() {
             document.querySelector("#modelessDialog1").close();
         };

	}
    return new DashboardViewModel();
  }
);

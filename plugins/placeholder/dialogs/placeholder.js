/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("placeholder",function(b){var c=b.lang.placeholder;b=b.lang.common.generalTab;return{title:c.title,minWidth:300,minHeight:80,contents:[{id:"info",label:b,title:b,elements:[{id:"name",type:"text",style:"width: 100%;",label:c.name,"default":"",required:!0,validate:CKEDITOR.dialog.validate.regex(/^[^\[\]<>]+$/,c.invalidName),setup:function(a){this.setValue(a.data.name)},commit:function(a){a.setData("name",this.getValue())}},{type:"checkbox",id:"required",label:"Required field",style:"",
setup:function(a){this.setValue(a.data.required)},commit:function(a){a.setData("required",this.getValue())}}]}]}});
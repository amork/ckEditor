/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("placeholder",function(b){var c=b.lang.placeholder;b=b.lang.common.generalTab;return{title:c.title,minWidth:300,minHeight:80,contents:[{id:"info",label:b,title:b,elements:[{type:"radio",id:"party",label:null,items:[["My Team","team"],["Counterparty","counterparty"]],style:"",setup:function(a){this.setValue(a.data.party||"team")},commit:function(a){a.setData("party",this.getValue())}},{id:"name",type:"text",style:"width: 100%;",label:c.name,"default":"",required:!0,validate:CKEDITOR.dialog.validate.regex(/^[^\[\]<>]+$/,
c.invalidName),setup:function(a){this.setValue(a.data.name)},commit:function(a){a.setData("name",this.getValue())}}]}]}});
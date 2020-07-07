﻿CKEDITOR.plugins.add("imagePlaceholder",{lang:["en"],requires:"dialog",icons:"",imageData:{label:"image",required:!0,param:{align:"float",width:"120px",height:"120px"}},hidpi:!1,init:function(a){a.ui.addButton("imagePlaceholder",{label:a.lang.common.image,command:"imagePlaceholder",toolbar:"insert"});CKEDITOR.dialog.add("imagePlaceholder",this.path+"dialogs/imagePlaceholder.js");a.addCommand("imagePlaceholder",new CKEDITOR.dialogCommand("imagePlaceholder",{allowedContent:"img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}",
requiredContent:"img[alt,src]",contentTransformations:[["img{width}: sizeToStyle","img[width]: sizeToAttribute"],["img{float}: alignmentToStyle","img[align]: alignmentToAttribute"]]}));a.on("doubleclick",function(b){if(b.data.element&&!b.data.element.isReadOnly()&&"img"===b.data.element.getName()&&-1!==b.data.element.getAttribute("class").indexOf("image-placeholder_cke")){b.data.dialog="imagePlaceholder";try{var e=JSON.parse(b.data.element.getAttribute("data-params"));a.plugins.imagePlaceholder.setAllData(e)}catch(h){console.error(h)}a.getSelection().selectElement(b.data.element)}});
a.addMenuItem&&(a.addMenuGroup("imagePlaceholderGroup"),a.addMenuItem("imagePlaceholderItem",{label:a.lang.common.image,command:"imagePlaceholder",group:"imagePlaceholderGroup"}))},setAllData:function(a){this.imageData=a},setData:function(a,b){this.imageData[a]=b},getData:function(a){return a?this.imageData[a]:this.imageData},onLoad:function(){CKEDITOR.addCss('input[name\x3d"cke_image-placeholder_radio_radio"] { \r\n      position: relative; \r\n      top: 105px; \r\n      left: 47%; \r\n\t\t} \r\n\t\t.cke_dialog_ui_text.control-image-width input[disabled], \r\n\t\t.cke_dialog_ui_text.control-image-height input[disabled] { \r\n\t\t\tbackground-color: #e0e0e0; \r\n\t\t} \r\n    .cke_dialog_ui_hbox_last \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label, \r\n    .cke_dialog_ui_hbox_first \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label { \r\n      background: url('+
this.path+'icons/size-justify.png) center top no-repeat; \r\n      display: block; \r\n      width: 80%; \r\n      margin: 0 auto 16px auto; \r\n      padding: 70px 0 0 0; \r\n      text-align: center; \r\n      cursor: pointer; \r\n      user-select: none; \r\n    } \r\n    .cke_dialog_ui_hbox_last \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label { \r\n      background: url('+this.path+'icons/size-float.png) center top no-repeat; \r\n    } \r\n    .cke_dialog_ui_hbox_first \x3e input[name\x3d"cke_image-placeholder_radio_radio"]:checked + label, \r\n    .cke_dialog_ui_hbox_first \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label:hover { \r\n      background: url('+
this.path+'icons/size-justify.png) center -242px no-repeat; \r\n    } \r\n    .cke_dialog_ui_hbox_last \x3e input[name\x3d"cke_image-placeholder_radio_radio"]:checked + label, \r\n    .cke_dialog_ui_hbox_last \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label:hover { \r\n      background: url('+this.path+"icons/size-float.png) center -242px no-repeat; \r\n    }")},afterInit:function(a){var b=/\[\[(\{.+?\})]]/g,e=this.path;a.dataProcessor.dataFilter.addRules({text:function(a,f){var g=
f.parent&&CKEDITOR.dtd[f.parent.name];if(!g||g.span)return a.replace(b,function(a,b){var c=JSON.parse(b);c.param=c.param||{};var d="";c.required&&(d+=" cke_placeholder_required");d+=" align_"+(c.param.align||"");return(new CKEDITOR.htmlParser.element("img",{"class":"image-placeholder_cke"+d,"data-params":b,width:c.param.width||"120",height:"100%"!==c.param.height?c.param.height:"",src:c.value||e+"icons/preview-"+("100%"===c.param.width?"justify":"float")+".png"})).getOuterHtml()+(c.required?'\x3cspan class\x3d"img_placeholder_required"\x3e*\x3c/span\x3e':
"")})}})}});
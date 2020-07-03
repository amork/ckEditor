﻿CKEDITOR.plugins.add("imagePlaceholder",{lang:["en"],requires:"dialog",icons:"",imageData:{label:"image",required:!0,param:{mode:"original",width:"",height:""}},hidpi:!0,init:function(a){a.ui.addButton("imagePlaceholder",{label:a.lang.common.image,command:"imagePlaceholder",toolbar:"insert"});CKEDITOR.dialog.add("imagePlaceholder",this.path+"dialogs/imagePlaceholder.js");a.addCommand("imagePlaceholder",new CKEDITOR.dialogCommand("imagePlaceholder",{allowedContent:"img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}",
requiredContent:"img[alt,src]",contentTransformations:[["img{width}: sizeToStyle","img[width]: sizeToAttribute"],["img{float}: alignmentToStyle","img[align]: alignmentToAttribute"]]}));a.on("doubleclick",function(b){if(b.data.element&&!b.data.element.isReadOnly()&&"img"===b.data.element.getName()){b.data.dialog="imagePlaceholder";try{var g=JSON.parse(b.data.element.getAttribute("data-params"));a.plugins.imagePlaceholder.setAllData(g)}catch(e){console.error(e)}a.getSelection().selectElement(b.data.element)}});
a.addMenuItem&&(a.addMenuGroup("imagePlaceholderGroup"),a.addMenuItem("imagePlaceholderItem",{label:a.lang.common.image,command:"imagePlaceholder",group:"imagePlaceholderGroup"}))},setAllData:function(a){this.imageData=a},setData:function(a,b){this.imageData[a]=b},getData:function(a){return a?this.imageData[a]:this.imageData},onLoad:function(){CKEDITOR.addCss('input[name\x3d"cke_image-placeholder_radio_radio"] { \r\n      position: relative; \r\n      top: 105px; \r\n      left: 47%; \r\n\t\t} \r\n\t\t.cke_dialog_ui_text.control-image-width input[disabled], \r\n\t\t.cke_dialog_ui_text.control-image-height input[disabled] { \r\n\t\t\tbackground-color: #e0e0e0; \r\n\t\t} \r\n    .cke_dialog_ui_hbox_last \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label, \r\n    .cke_dialog_ui_hbox_first \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label { \r\n      background: url('+
this.path+'icons/size-original.png) center top no-repeat; \r\n      display: block; \r\n      width: 80%; \r\n      margin: 0 auto 16px auto; \r\n      padding: 70px 0 0 0; \r\n      text-align: center; \r\n      cursor: pointer; \r\n      user-select: none; \r\n    } \r\n    .cke_dialog_ui_hbox_last \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label { \r\n      background: url('+this.path+'icons/size-contain.png) center top no-repeat; \r\n    } \r\n    .cke_dialog_ui_hbox_first \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label:hover { \r\n      background: url('+
this.path+'icons/size-original-hover.png) center top no-repeat; \r\n    } \r\n    .cke_dialog_ui_hbox_last \x3e input[name\x3d"cke_image-placeholder_radio_radio"] + label:hover { \r\n      background: url('+this.path+"icons/size-contain-hover.png) center top no-repeat; \r\n    } \r\n    .image-placeholder_cke { \r\n    } \r\n    .image-placeholder_cke.mode_contain { \r\n      background: #f0f1f2 url("+this.path+"icons/preview-contain.png) center no-repeat; \r\n    } \r\n    .image-placeholder_cke.mode_original { \r\n      width: 100%; \r\n      min-height: 240px; \r\n      background: #f0f1f2 url("+
this.path+"icons/preview-original.png) center no-repeat; \r\n    }")},afterInit:function(a){var b=/\[\[(\{.+?\})]]/g;a.dataProcessor.dataFilter.addRules({text:function(a,e){var f=e.parent&&CKEDITOR.dtd[e.parent.name];if(!f||f.span)return a.replace(b,function(a,b){var d=JSON.parse(b);d.param=d.param||{};var c="";d.required&&(c+=" cke_placeholder_required");c+=" mode_"+(d.param.mode||"");c={"class":"image-placeholder_cke"+c,"data-params":b};"contain"===d.param.mode&&(c.width=d.param.width||"120",c.height=
d.param.height||"120");return(new CKEDITOR.htmlParser.element("img",c)).getOuterHtml()+'\x3cspan class\x3d"remove-me"\x3e\x26nbsp;\x3c/span\x3e'})}})}});
﻿CKEDITOR.dialog.add("imagePlaceholder",function(b){var a=b.plugins.imagePlaceholder.getData()||{};a.param=a.param||{};var d=[{type:"hbox",widths:["70px"],children:[{type:"radio",id:"cke_image-placeholder_radio","default":"original",items:[["Original","original"],["Contain","contain"]],onClick:function(){a.param.mode=this.getValue()}}]},{type:"hbox",widths:["16%","51%","31%","14%"],children:[{type:"html",html:""},{type:"text",label:"Width","default":"",width:"75px",id:"width",validate:function(){a.param.width=
this.getValue().replace(/\D+/,"")}},{type:"text",label:"Height",width:"75px",id:"height","default":"",validate:function(){a.param.height=this.getValue().replace(/\D+/,"")}},{type:"html",html:""}]},{type:"html",id:"preview",html:(new CKEDITOR.template('\x3cdiv style\x3d"text-align:center;"\x3e\x3c/div\x3e')).output()},{type:"checkbox",id:"required",label:"Required field","default":a.required,setup:function(){this.setValue(a.required)},onClick:function(){a.required='"'+this.getValue()+'"'},commit:function(){a.required=
'"'+this.getValue()+'"'}}];return{title:b.lang.imagePlaceholder.title,minWidth:450,minHeight:180,onOk:function(){if("contain"===a.param.mode&&!a.param.width&&!a.param.height)return alert("Please, specify width or height on contain mode"),!1;b.focus();b.fire("saveSnapshot");var c=a.param&&a.param.width?" width\x3d"+a.param.width:"",d=a.param&&a.param.height?" height\x3d"+a.param.height:"",e=b.getSelection().getRanges()[0].extractContents(),c=CKEDITOR.dom.element.createFromHtml("\x3cimg"+c+d+' class\x3d"image-placeholder_cke mode_'+
a.param.mode+'"  data-params\x3d"'+JSON.stringify(a).replace(/"/g,"\x26quot;")+'"/\x3e',b.document);e.appendTo(c);b.insertElement(c)},onHide:function(){b.plugins.imagePlaceholder.setAllData({})},onShow:function(){a=b.plugins.imagePlaceholder.getData();a.param=a.param||{};this.setValueOf("tab-source","width",a.param.width);this.setValueOf("tab-source","height",a.param.height);this.setValueOf("tab-source","cke_image-placeholder_radio",a.param.mode);this.setValueOf("tab-source","required",a.required)},
onLoad:function(){thisDialog=this;this.getContentElement("tab-source","width").getInputElement().on("keyup",function(){b.plugins.imagePlaceholder.setData("width",this.getValue())});this.getContentElement("tab-source","height").getInputElement().on("keyup",function(){b.plugins.imagePlaceholder.setData("height",this.getValue())})},contents:[{id:"tab-source",label:b.lang.common.generalTab,elements:d}]}});
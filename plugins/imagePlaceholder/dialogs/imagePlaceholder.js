﻿CKEDITOR.dialog.add("imagePlaceholder",function(b){var a=b.plugins.imagePlaceholder.getData(),c=[{type:"hbox",widths:["70px"],children:[{type:"radio",id:"cke_image-placeholder_radio",items:[["Best for Illustration","justify"],["Best for Logotype","float"]],onClick:function(){a.param.align=this.getValue()}}]},{type:"hbox",widths:["16%","51%","31%","14%"],children:[{type:"html",html:""},{type:"text",label:"Width",className:"control-image-width","default":"",width:"75px",id:"width",validate:function(){a.param.width=
parseInt(this.getValue(),10)+("float"===a.param.align?"px":"%")}},{type:"text",label:"Height",width:"75px",className:"control-image-height",id:"height","default":"",validate:function(){a.param.height=parseInt(this.getValue(),10)+("float"===a.param.align?"px":"%")}},{type:"html",html:""}]},{type:"html",id:"preview",html:(new CKEDITOR.template('\x3cdiv style\x3d"text-align:center;"\x3e\x3c/div\x3e')).output()},{type:"checkbox",id:"required",label:"Required field","default":a.required,setup:function(){this.setValue(a.required)},
onClick:function(){a.required=this.getValue()},commit:function(){a.required=this.getValue()}}];return{title:b.lang.imagePlaceholder.title,minWidth:450,minHeight:180,onOk:function(){if("float"===a.param.align&&!a.param.width&&!a.param.height)return window.alert("Please, specify width or height on logotype"),!1;b.focus();b.fire("saveSnapshot");var d=a.param.width?"width\x3d"+a.param.width:"",c="100%"!==a.param.height?"height\x3d"+a.param.height:"",f=['src\x3d"',a.value||b.plugins.imagePlaceholder.path,
"icons/preview-","100%"===a.param.width?"justify":"float",'.png"'].join(""),g="image-placeholder_cke align_"+(a.param.align||"")+(a.required?" cke_placeholder_required":""),h=b.getSelection().getRanges()[0].extractContents(),d=CKEDITOR.dom.element.createFromHtml(["\x3cimg",f,d,c,'class\x3d"'+g+'"','data-params\x3d"'+JSON.stringify(a).replace(/"/g,"\x26quot;")+'"/\x3e'].join(" "),b.document);h.appendTo(d);b.insertElement(d)},onHide:function(){b.plugins.imagePlaceholder.setAllData(b.plugins.imagePlaceholder.defaultImageData)},
onShow:function(){a=b.plugins.imagePlaceholder.getData();a.param=a.param||{};this.setValueOf("tab-source","width",a.param.width);this.setValueOf("tab-source","height",a.param.height);this.setValueOf("tab-source","cke_image-placeholder_radio","100%"===a.param.width?"justify":"float");this.setValueOf("tab-source","required",a.required);var c=this.getContentElement("tab-source","width").getInputElement(),e=this.getContentElement("tab-source","height").getInputElement();disableControls(a,c,e)},onLoad:function(){var c=
this.getContentElement("tab-source","width").getInputElement(),e=this.getContentElement("tab-source","height").getInputElement();this.getContentElement("tab-source","cke_image-placeholder_radio").getInputElement().on("change",function(){disableControls(a,c,e)});this.getContentElement("tab-source","width").getInputElement().on("keyup",function(){var a=parseInt(this.getValue(),10);b.plugins.imagePlaceholder.setData("width",a+"px")});this.getContentElement("tab-source","height").getInputElement().on("keyup",
function(){var a=parseInt(this.getValue(),10);b.plugins.imagePlaceholder.setData("height",a+"px")})},contents:[{id:"tab-source",label:b.lang.common.generalTab,elements:c}]}});
function disableControls(b,a,c){"justify"===b.param.align?(a.setAttribute("disabled",!0),a.$.value="100%",b.param.width="100%",c.setAttribute("disabled",!0),c.$.value="100%",b.param.height="100%"):(a.removeAttribute("disabled"),c.removeAttribute("disabled"),a.$.value="100%"!==b.param.width?b.param.width:"120px",b.param.width="100%"!==b.param.width?b.param.width:"120px",c.$.value="100%"!==b.param.height?b.param.height:"120px",b.param.height="100%"!==b.param.height?b.param.height:"120px")};
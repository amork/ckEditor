﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function w(a){for(var g=0,e=0,n=0,l,p=a.$.rows.length;n<p;n++){l=a.$.rows[n];for(var b=g=0,m,d=l.cells.length;b<d;b++)m=l.cells[b],g+=m.colSpan;g>e&&(e=g)}return e}function r(a){return function(){var g=this.getValue(),g=!!(CKEDITOR.dialog.validate.integer()(g)&&0<g);g||(alert(a),this.select());return g}}function t(a,g){var q=function(b){return new CKEDITOR.dom.element(b,a.document)},n=a.editable(),l=700,p=a.plugins.dialogadvtab;return{title:a.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?
310:280,onLoad:function(){var b=this,a=b.getContentElement("advanced","advStyles");if(a)a.on("change",function(){var a=this.getStyle("width",""),c=b.getContentElement("info","txtWidth");c&&c.setValue(a,!0);a=this.getStyle("height","");(c=b.getContentElement("info","txtHeight"))&&c.setValue(a,!0)})},onShow:function(){for(var b=a.getSelection(),m=b.getRanges(),d,c=m[0].endContainer.$;c.parentElement;c=c.parentElement){var f=(c.tagName||"").toLowerCase();if(CKEDITOR.dtd.$block[f])break}l=parseInt(window.getComputedStyle(c,
null).getPropertyValue("width"));700<l&&(l-=a.config.editor_indents);var c=this.getContentElement("info","txtRows"),f=this.getContentElement("info","txtCols"),e=this.getContentElement("info","txtWidth"),u=this.getContentElement("info","txtHeight");e.getInputElement().$.value=Math.round(l/1.333);"tableProperties"==g&&((b=b.getSelectedElement())&&b.is("table")?d=b:0<m.length&&(CKEDITOR.env.webkit&&m[0].shrink(CKEDITOR.NODE_ELEMENT),d=a.elementPath(m[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=
d);d?(this.setupContent(d),c&&c.disable(),f&&f.disable()):(c&&c.enable(),f&&f.enable());e&&e.onChange();u&&u.onChange()},onOk:function(){var b=a.getSelection(),m=this._.selectedElement&&b.createBookmarks(),d=this._.selectedElement||q("table"),c={};this.commitContent(c,d);if(c.info){c=c.info;if(!this._.selectedElement){var f=d.append(q("tbody")),e=parseInt(c.txtRows,10)||0,g=parseInt(c.txtCols,10)||0,l=c.txtWidth&&g?Math.round(parseInt(c.txtWidth,10)/g)+c.txtWidth.slice(-2):0;d.setStyle("border-collapse",
"collapse");for(var h=0;h<e;h++)for(var k=f.append(q("tr")),n=0;n<g;n++){var p=q("td");l&&p.setStyle("width",l);k.append(p).appendBogus()}}e=c.selHeaders;if(!d.$.tHead&&("row"==e||"both"==e)){k=d.getElementsByTag("thead").getItem(0);f=d.getElementsByTag("tbody").getItem(0);g=f.getElementsByTag("tr").getItem(0);k||(k=new CKEDITOR.dom.element("thead"),k.insertBefore(f));for(h=0;h<g.getChildCount();h++)f=g.getChild(h),f.type!=CKEDITOR.NODE_ELEMENT||f.data("cke-bookmark")||(f.renameNode("th"),f.setAttribute("scope",
"col"));k.append(g.remove())}if(null!==d.$.tHead&&"row"!=e&&"both"!=e){k=new CKEDITOR.dom.element(d.$.tHead);f=d.getElementsByTag("tbody").getItem(0);for(l=f.getFirst();0<k.getChildCount();){g=k.getFirst();for(h=0;h<g.getChildCount();h++)f=g.getChild(h),f.type==CKEDITOR.NODE_ELEMENT&&(f.renameNode("td"),f.removeAttribute("scope"));g.insertBefore(l)}k.remove()}if(!this.hasColumnHeaders&&("col"==e||"both"==e))for(k=0;k<d.$.rows.length;k++)f=new CKEDITOR.dom.element(d.$.rows[k].cells[0]),f.renameNode("th"),
f.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=e&&"both"!=e)for(h=0;h<d.$.rows.length;h++)k=new CKEDITOR.dom.element(d.$.rows[h]),"tbody"==k.getParent().getName()&&(f=new CKEDITOR.dom.element(k.$.cells[0]),f.renameNode("td"),f.removeAttribute("scope"));c.txtHeight?d.setStyle("height",c.txtHeight):d.removeStyle("height");c.txtWidth?d.setStyle("width",c.txtWidth):d.removeStyle("width");c.cmbAlign?d.setAttribute("align",c.cmbAlign):d.removeAttribute("align");d.setAttribute("cellSpacing",
c.txtCellSpace||"0");h=$(d.$).find("td");c.txtBorder?h.css({borderStyle:"solid",borderWidth:c.txtBorder+"pt"}):h.css({borderWidth:""});c.txtCellVertPad?h.css({"padding-top":c.txtCellVertPad+"pt","padding-bottom":c.txtCellVertPad+"pt"}):h.css({"padding-top":0,"padding-bottom":0});c.txtCellHorPad?h.css({"padding-left":c.txtCellHorPad+"pt","padding-right":c.txtCellHorPad+"pt"}):h.css({"padding-right":0,"padding-left":0});d.getAttribute("style")||d.removeAttribute("style")}if(this._.selectedElement)try{b.selectBookmarks(m)}catch(r){}else a.insertElement(d),
setTimeout(function(){var b=new CKEDITOR.dom.element(d.$.rows[0].cells[0]),c=a.createRange();c.moveToPosition(b,CKEDITOR.POSITION_AFTER_START);c.select()},0)},contents:[{id:"info",label:a.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:a.lang.table.rows,required:!0,controlStyle:"width:5em",validate:r(a.lang.table.invalidRows),setup:function(b){this.setValue(b.$.rows.length)},
commit:e},{type:"text",id:"txtCols","default":2,label:a.lang.table.columns,required:!0,controlStyle:"width:5em",validate:r(a.lang.table.invalidCols),setup:function(b){this.setValue(w(b))},commit:e},{type:"html",html:"\x26nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:a.lang.table.headers,items:[[a.lang.table.headersNone,""],[a.lang.table.headersRow,"row"],[a.lang.table.headersColumn,"col"],[a.lang.table.headersBoth,"both"]],setup:function(b){var a=this.getDialog();
a.hasColumnHeaders=!0;for(var d=0;d<b.$.rows.length;d++){var c=b.$.rows[d].cells[0];if(c&&"th"!=c.nodeName.toLowerCase()){a.hasColumnHeaders=!1;break}}null!==b.$.tHead?this.setValue(a.hasColumnHeaders?"both":"row"):this.setValue(a.hasColumnHeaders?"col":"")},commit:e},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":.75,label:a.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidBorder),setup:function(b){b=parseFloat($(b.$).find("td").css("border"));
this.setValue(b?Math.round(b/1.333*100)/100:"")},commit:e},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:a.lang.common.align,items:[[a.lang.common.notSet,""],[a.lang.common.alignLeft,"left"],[a.lang.common.alignCenter,"center"],[a.lang.common.alignRight,"right"]],setup:function(b){this.setValue(b.getAttribute("align")||"")},commit:e}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",
label:a.lang.common.width,title:a.lang.common.cssLengthTooltip,"default":Math.min(Math.round(n.getSize("width")-a.config.editor_indents)/1.333,l),getValue:v,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.width)),onChange:function(){var b=this.getDialog().getContentElement("advanced","advStyles");b&&b.updateStyle("width",this.getValue())},setup:function(b){console.log("setup");b=b.getStyle("width");this.setValue(b)},commit:e}]},{type:"hbox",widths:["5em"],
children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:a.lang.common.height,title:a.lang.common.cssLengthTooltip,"default":"",getValue:v,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.height)),onChange:function(){var b=this.getDialog().getContentElement("advanced","advStyles");b&&b.updateStyle("height",this.getValue())},setup:function(b){(b=b.getStyle("height"))&&this.setValue(b)},commit:e}]},{type:"html",
html:"\x26nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:a.lang.table.cellSpace,"default":0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellSpacing),setup:function(b){this.setValue(b.getAttribute("cellSpacing")||"")},commit:e},{type:"text",id:"txtCellVertPad",controlStyle:"width:3em",label:a.lang.table.cellVertPad,"default":1,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellPadding),setup:function(b){b=parseFloat($(b.$).find("td").css("padding-top"));
this.setValue(b?Math.round(b/1.333*100)/100:"")},commit:e},{type:"text",id:"txtCellHorPad",controlStyle:"width:3em",label:a.lang.table.cellHorPad,"default":5,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellPadding),setup:function(b){b=parseFloat($(b.$).find("td").css("padding-left"));this.setValue(b?Math.round(b/1.333*100)/100:"")},commit:e}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:a.lang.table.caption,
setup:function(b){this.enable();b=b.getElementsByTag("caption");if(0<b.count()){b=b.getItem(0);var a=b.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));a&&!a.equals(b.getBogus())?(this.disable(),this.setValue(b.getText())):(b=CKEDITOR.tools.trim(b.getText()),this.setValue(b))}},commit:function(b,e){if(this.isEnabled()){var d=this.getValue(),c=e.getElementsByTag("caption");if(d)0<c.count()?(c=c.getItem(0),c.setHtml("")):(c=new CKEDITOR.dom.element("caption",a.document),e.append(c,!0)),
c.append(new CKEDITOR.dom.text(d,a.document));else if(0<c.count())for(d=c.count()-1;0<=d;d--)c.getItem(d).remove()}}},{type:"text",id:"txtSummary",bidi:!0,requiredContent:"table[summary]",label:a.lang.table.summary,setup:function(b){this.setValue(b.getAttribute("summary")||"")},commit:function(b,a){this.getValue()?a.setAttribute("summary",this.getValue()):a.removeAttribute("summary")}}]}]},p&&p.createAdvancedTab(a,null,"table")]}}var v=CKEDITOR.tools.cssPtLength,e=function(a){var e=this.id;a.info||
(a.info={});a.info[e]=this.getValue()};CKEDITOR.dialog.add("table",function(a){return t(a,"table")});CKEDITOR.dialog.add("tableProperties",function(a){return t(a,"tableProperties")})})();
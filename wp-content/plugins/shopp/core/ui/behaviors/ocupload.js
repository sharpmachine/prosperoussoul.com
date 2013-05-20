/*
 * One Click Upload - jQuery Plugin
 * Copyright ?? 2008 Michael Mitchell - http://www.michaelmitchell.co.nz
 */
(function(a){a.fn.upload=function(b){b=a.extend({name:"file",enctype:"multipart/form-data",action:"",accept:false,maxfilesize:false,autoSubmit:true,onSubmit:function(){},onComplete:function(){},onSelect:function(){},params:{}},b);return new a.ocupload(this,b)};a.ocupload=function(f,i){var h=this,c=new Date().getTime().toString().substr(8),e=a('<iframe id="iframe'+c+'" name="iframe'+c+'" />').css({display:"none"}),d=a('<form method="post" enctype="'+i.enctype+'" action="'+i.action+'" target="iframe'+c+'" />').css({margin:0,padding:0}).submit(function(k){if(k){k.stopPropagation()}}),g=a('<input name="'+i.name+'" type="file" />').css({position:"absolute",display:"block",opacity:0}),j=f.parent(),b=f.wrap("<div />").parent().appendTo(a("body"));elementHeight=f.outerHeight(true);elementWidth=f.outerWidth(true);b.appendTo(j);if(i.maxfilesize){a('<input type="hidden" name="MAX_FILE_SIZE" value="'+i.maxfilesize+'" />').appendTo(d)}d.append(g);f.after(d).after(e);b=f.parent().css({position:"relative",height:(elementHeight)+"px",width:(elementWidth)+"px",overflow:"hidden",cursor:"pointer",margin:0,padding:0});g.css({width:elementWidth+"px",height:elementHeight+"px",marginTop:-elementHeight+"px",marginLeft:"0px",fontSize:"2em"});g.change(function(){if(this.value==""){return false}if(a.browser.msie){if(this.firedChange){return this.firedChange=false}this.firedChange=true}h.onSelect();if(h.autoSubmit){h.submit()}});a.extend(this,{autoSubmit:true,onSubmit:i.onSubmit,onComplete:i.onComplete,onSelect:i.onSelect,filename:function(){return g.attr("value")},params:function(k){var k=k?k:false;if(k){i.params=a.extend(i.params,k)}return i.params},name:function(k){var k=k?k:false;if(k){g.attr("name",value)}return g.attr("name")},action:function(k){var k=k?k:false;if(k){d.attr("action",k)}return d.attr("action")},enctype:function(k){var k=k?k:false;if(k){d.attr("enctype",k)}return d.attr("enctype")},accept:function(k){var k=k?k:false;if(k){d.attr("accept",k)}return d.attr("accept")},set:function(m,l){var l=l?l:false;function k(o,n){switch(o){default:throw new Error("[jQuery.ocupload.set] '"+o+"' is an invalid option.");break;case"name":h.name(n);break;case"action":h.action(n);break;case"enctype":h.enctype(n);break;case"params":h.params(n);break;case"autoSubmit":h.autoSubmit=n;break;case"onSubmit":h.onSubmit=n;break;case"onComplete":h.onComplete=n;break;case"onSelect":h.onSelect=n;break}}if(l){k(m,l)}else{a.each(m,function(n,o){k(n,o)})}},submit:function(){this.onSubmit();var n=d.attr("action").split("?"),m=n[0],l=n[1]?n[1].split("&"):[],k={},o=false;a.each(l,function(p,r){var q=r.split("=");if(q.length==2&&!i.params[q[0]]){k[q[0]]=q[1]}});o=m+"?"+(a(k).size()>0?a.param(k)+"&":"")+a.param(i.params);d[0].setAttribute("action",o);d.submit();e.unbind().load(function(){var q=document.getElementById(e.attr("name"));var p=a(q.contentWindow.document.body).text();h.onComplete(p)})}})}})(jQuery);
"use strict";$(document).ready(function(){apps()});var apps=function(){return{init:function(){this.addhandler(),this.removeHandler(),this.strikeHandler()},addhandler:function(){$("form").on("submit",function(n){n.preventDefault();var t=$(this).find("input[type=text]").val();t&&($(".items").find("ul").append('<li>\n            <i></i>\n            <span class="item">'+t+'</span>\n            <span class = "option" > x </span>\n          </li>'),$(this).find("input[type=text]").val(""))})},removeHandler:function(){$(document).on("click",".option",function(){$(this).parent("li").remove()})},strikeHandler:function(){$(document).on("click",".items li",function(){$(this).find(".item").animate().toggleClass("strike"),$(this).find("i").toggleClass("complete")})}}.init()};
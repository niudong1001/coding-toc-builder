#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var fs=require("fs");

program
  .version('0.0.1')
  .option('-f, --files [value]', '选择要格式化的文件')
  .parse(process.argv);
//console.log(' chdir - %s ', program.files);
console.log("\n");
console.log("准备格式化为coding.net markdown格式。。。");
fs.exists(program.files,(exists)=>{
	if(exists){
		fs.readFile(program.files,"utf-8",(err,data)=>{
			if(err)throw err;
			console.log("正在格式化。。。");
			var newData=data.replace(/markdown-header/g,"user-content");
			var regExp=/\(\#(\w|%|-)+\)/g;
			//console.log(regExp.test(newData));
			while((res=regExp.exec(newData))!=null){
				var temp=res[0];
				if(temp.indexOf("user-content")<0){
					var newStr="(#user-content-"+temp.substring(2,temp.length-1)+")";
					newData=newData.replace(temp,newStr);
				}
			}
			//console.log(newData);
			fs.writeFile(program.files,newData,"utf-8",(err)=>{
				if(err)throw err;
				console.log("已经格式化为coding.net相应格式状态!");
			})
		})
	}
	else{
		console.log(program.files+"文件不存在!");
	}
})

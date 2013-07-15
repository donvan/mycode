//字符串连接vs数组连接
var str = "I'm a thirty-five character string.",
newStr = "",
appends = 5000;

while(appends--){
	newStr+=str;
}

//
var str2 = "I'm a thirty-five character string.",
strs = [],
newStr2,
appends = 5000;
while(appends--){
	strs[strs.length] = str;	
}
newStr2 = strs.join("");

//String.prototype.concat
str = str.concat(s1); //append one string

str = str.concat(s1,s2,s3); //append three strings

str = String.prototype.concat.apply(str,array);

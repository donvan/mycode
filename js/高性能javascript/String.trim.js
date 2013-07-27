//去除头尾空格
if(!String.prototype.trim){
        String.prototype.trim = function(){
            return this.replace(/^\s+/,"").replace(/\s+$/,"");
        }
}
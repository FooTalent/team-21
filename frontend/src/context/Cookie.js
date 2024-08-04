const Cookie = {
        
    set:(key:string, value:string, exdays:number) => {
     var d = new Date();
     d.setTime(d.getTime() + (exdays*24*60*60*1000));
     var expires = "expires="+ d.toUTCString();
     let v = encodeURIComponent(value)
     document.cookie = key + "=" + v + ";" + expires + ";path=/";
   },
 
   get:(key:string):string =>{
     var name = key + "=";
     var decodedCookie = decodeURIComponent(document.cookie);
 
     var ca = decodedCookie.split(';');
     for(var i = 0; i <ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0) === ' ') {
         c = c.substring(1);
       }
       if (c.indexOf(name) === 0) {
         return c.substring(name.length, c.length);
       }
     }
     return "";
   },
   delete: (key:string)=>{
     var d = new Date();
     d.setTime(d.getTime() + (-10*24*60*60*1000));
     var expires = "expires="+ d.toUTCString();
     document.cookie = key + "=" + "" + ";" + expires + ";path=/";
   }
 }
 
 
 export default Cookie
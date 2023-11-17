//Callbakcs -> Functions that are passed as an argument to another function
let loadScript = (src, callback) => {
   let script = document.createElement("script");
   script.src = src;
   document.body.appendChild(script);
   script.onload = () => {
     console.log("Script loaded with src:" + src);
     callback(null,src);
   };
  // handling error 
  script.onerror=()=>{
    console.log("Error loading script with src:"+src);
    callback(new Error("faild"));
  }
};
const hello =(error,src) =>{
  if(error){
    console.log(" Got error ",error) // if error is not null
    return;
  }
  else{
  console.log("Loaded ",src)
  }
}
loadScript("https://cdn.jsdelqqivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello);

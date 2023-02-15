let value1;
let value2;
function myFunction() {
    var urlParams = new URLSearchParams(window.location.search);
     value1 = urlParams.get("value1");
     value2 = urlParams.get("value2");
    document.querySelector(".txt1").value = value1;
    document.querySelector(".txt2").value = value2;
}
function two(){
   let loc1=Number(document.querySelector(".txt3").value)
   var div1=document.querySelector(".s1")
   var div2=document.querySelector(".s2")
   var div3=document.querySelector(".s3")
        let c=6*loc1
   div1.innerHTML=value1
   div2.innerHTML=value2
   div3.innerHTML=`Total price ${c}`
}
function outsideStation() {
    window.location.href="outsideStation.html?value1="+value1+"&value2="+value2
}
function Rental() {
    window.location.href="Rental.html?value1="+value1+"&value2="+value2
}
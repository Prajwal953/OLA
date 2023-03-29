let value1;
let value2;
function myFunction2() {
    var urlParams = new URLSearchParams(window.location.search);
    var value1 = urlParams.get("value1");
    var value2 = urlParams.get("value2");
    document.querySelector(".txt1").value = value1;
    document.querySelector(".txt2").value = value2;

}
function three(){
    let loc1=Number(document.querySelector(".txt3").value)
    var div1=document.querySelector(".s1")
    var div2=document.querySelector(".s2")
    var div3=document.querySelector(".s3")
         let c=10*loc1
    div1.innerHTML=value1
    div2.innerHTML=value2
    div3.innerHTML=`Total price ${c}`
 }
function Rental() {
    window.location.href="Rental.html?value1="+value1+"&value2="+value2
}
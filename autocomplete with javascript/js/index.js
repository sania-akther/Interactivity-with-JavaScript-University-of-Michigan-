/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    if
     (document.getElementById('same').checked){
   var name=document.getElementById('shippingName').value;   //this will copy the value entered by the user in shipping name block
   var zip=document.getElementById('shippingZip').value;    //this will copy the value entered by the user in shipping zip block
   document.getElementById('billingName').value =name;  
    document.getElementById('billingZip').value =zip;     //finally these lines will copy the above initialised variables to the billing address and billing zip
      }
    else{
       document.getElementById('billingName').value=""; document.getElementById('billingZip').value="";
    }
  }
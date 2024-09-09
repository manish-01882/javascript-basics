const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        // subResult.textContent = "You are Subscribed";

        if(visaBtn.checked){
            paymentResult.textContent = 'You are paying with visa';
        }
        else if(masterCardBtn.checked){
            paymentResult.textContent = 'You are paying with master card';
        }
        else if(payPalBtn.checked){
            paymentResult.textContent = 'Ypu are paying with PayPal';
        }
        else{
            paymentResult.textContent = 'You must select a payment type';
        }
    }
    else{
        paymentResult.textContent = "You r not subscribed";
    }


}
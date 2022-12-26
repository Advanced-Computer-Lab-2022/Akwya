import '../signup.css'
import axios from "axios";
// import react, {useState, useEffect} from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
// import useEffect from 'react';  

const { useState,useEffect } = require("react");

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");

  const policyString = `<pre>
<h2>Our Policies</h2>
Payments and Refunds
   
When you make a payment, you agree to use a valid payment method. If you aren’t happy with your content, Akwya offers a 30-day refund for most content purchases.

1. Pricing

The prices of content on Akwya are determined based on the terms of the Instructor Terms and our Promotions Policy. In some instances, the price of content offered on the 
Akwya website may not be exactly the same as the price offered on our mobile or TV applications, due to mobile platform providers’ pricing systems and their policies around 
implementing sales and promotions.
We occasionally run promotions and sales for our content, during which certain content is available at discounted prices for a set period of time. The price applicable to 
the content will be the price at the time you complete your purchase of the content (at checkout). Any price offered for particular content may also be different when you 
are logged into your account from the price available to users who aren’t registered or logged in, because some of our promotions are available only to new users.
If you are logged into your account, the listed currency you see is based on your location when you created your account. If you are not logged into your account, the price 
currency is based on the country where you are located. We do not enable users to see pricing in other currencies.
If you are a student located in a country where use and sales tax, goods and services tax, or value added tax is applicable to consumer sales, we are responsible for 
collecting and remitting that tax to the proper tax authorities. Depending on your location, the price you see may include such taxes, or tax may be added at checkout.


2. Payments

You agree to pay the fees for content that you purchase, and you authorize us to charge your debit or credit card or process other means of payment (such as Boleto, SEPA, 
direct debit, or mobile wallet) for those fees. Akwya works with payment service providers to offer you the most convenient payment methods in your country and to keep 
your payment information secure. We may update your payment methods using information provided by our payment service providers. When you make a purchase, you 
agree not to use an invalid or unauthorized payment method. If your payment method fails and you still get access to the content you are enrolling in, you agree to pay us the 
corresponding fees within thirty (30) days of notification from us. We reserve the right to disable access to any content for which we have not received adequate payment.


3. Refunds and Refund Credits

If the content you purchased is not what you were expecting, you can request, within 30 days of your purchase of the content, that Akwya apply a refund to your account. 
This refund option does not apply to Subscription Plan purchases, which are covered in Section 8.4 below. We reserve the right to apply your refund as a refund credit or a 
refund to your original payment method, at our discretion, depending on capabilities of our payment service providers, the platform from which you purchased your content 
(website, mobile or TV app), and other factors. No refund is due to you if you request it after the 30-day guarantee time limit has passed. However, if the content you 
previously purchased is disabled for legal or policy reasons, you are entitled to a refund beyond this 30-day limit. Akwya also reserves the right to refund students beyond 
the 30-day limit in cases of suspected or confirmed account fraud.
To request a refund, follow the steps here. As detailed in the Instructor Terms, instructors agree that students have the right to receive these refunds.
If we decide to issue refund credits to your account, they will be automatically applied towards your next content purchase on our website, but can’t be used for purchases 
in our mobile or TV applications. Refund credits may expire if not used within the specified period and have no cash value, in each case unless otherwise required 
by applicable law. At our discretion, if we believe you are abusing our refund policy, such as if you’ve consumed a significant portion of the content that you want to refund 
or if you’ve previously refunded the content, we reserve the right to deny your refund, restrict you from other future refunds, ban your account, and/or restrict all future 
use of the Services. If we ban your account or disable your access to the content due to your violation of these Terms or our Trust & Safety Guidelines, you will not be 
eligible to receive a refund. Additional information on our refund policy is available here.
</pre>`;
useEffect(()=>{
  document.getElementById('logoutbutton').hidden = true
  document.getElementById('loginbutton').hidden = true
  document.getElementById('contract').hidden = true

  document.getElementById('navPages').innerHTML = '<li> <a href="/guest/0"> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'

  })
  const register = () => {
    Swal.fire({
      title: policyString,
      width: 1110,
      customClass: {
        popup: "format-pre",
      },
      // icon: 'success',
      input: "checkbox",
      inputValue: 0,
      inputPlaceholder: "I agree with the policies",
      confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && "You need to agree first";
      },
      confirmButtonColor: "#38a53e",
      confirmButtonText: "OK",
    }).then(async (res) => {
      await axios
        .post(`http://localhost:9000/trainee/signup`, {
          username: username,
          email: email,
          password: password,
          fname: fname,
          lname: lname,
          gender: gender,
        })
        .then((res) => {
        
            Swal.fire({
              title: "Registration successful!",
              icon: "success",
              confirmButtonColor: "#38a53e",
              confirmButtonText: "OK",
            }).then(() => {
              window.location = "/";
            });
          });
      });
      
  };



  return (
    <div class="signup">
    <div class="center">
  <h1>Sign Up</h1>
  <form method="post">
  <div class="txt_field">
      <input type="text"
       id="fname"
       onChange={(e) => setFname(e.target.value)}
       value={fname} 
      required/>
      <span></span>
      <label>First Name</label>
    </div>
    <div class="txt_field">
      <input type="text"
       id="lname"
       onChange={(e) => setLname(e.target.value)}
       value={lname} 
      required/>
      <span></span>
      <label>Last Name</label>
    </div>
    <div class="txt_field">
      <input type="text"
       id="username"
       onChange={(e) => setUsername(e.target.value)}
       value={username} 
      required/>
      <span></span>
      <label>Username</label>
    </div>
    <div class="txt_field">
      <input type="text"
       id="email"
       onChange={(e) => setEmail(e.target.value)}
       value={email} 
      required/>
      <span></span>
      <label>Email</label>
    </div>
    <div class="txt_field">
      <input type="password" 
      id="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      required/>
      <span></span>
      <label>Password</label>
    </div>
       
    <div class="radiobs">
    <label>Gender</label>
<div class="radioe">
    <input type="radio"
       id="male"
       name="gender"
       onChange={(e) => setGender("male")}
       value={gender} 
      required/><label for="male"> Male</label>
    <input type="radio"
       id="female"
       name="gender"
       onChange={(e) => setGender("female")}
       value={gender} 
      required/><label for="female"> Female</label>
    </div>
    </div>
    <br/>
    <Box sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          onClick={register}
          margin="normal"
          padding="normal"
        >
          Sign Up
        </Button>
    </Box>
    <div class="signup_link">
      Already a member? <a href="/login">Login</a>
    </div>
  </form>
</div></div>  );
};
export default Register;

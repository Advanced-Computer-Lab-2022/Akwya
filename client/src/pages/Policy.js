import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';  

const Policy = () => {
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = true
    document.getElementById('loginbutton').hidden = true
    })
  // function checkChange() {
  //   const checkbox = document.getElementById("agreed");
  //   if (checkbox.checked == true) {
  //     document.getElementById("submitButton").removeAttribute("disabled");
  //   } else {
  //     document
  //       .getElementById("submitButton")
  //       .setAttribute("disabled", "disabled");
  //   }
  // }

  return (
    <div className="policy" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
      <Link to="/">
      </Link>
      {/* <form> */}
        <h6>
          <h2>Our Policies</h2>
          Payments and Refunds
          <br />
          When you make a payment, you agree to use a valid payment method. If
          you aren’t happy with your content, Akwya offers a 30-day refund or
          credit for most content purchases.
          <br />
          1. Pricing
          <br />
          The prices of content on Akwya are determined based on the terms of
          the Instructor Terms and our Promotions Policy. In some instances, the
          price of content offered on the Akwya website may not be exactly the
          same as the price offered on our mobile or TV applications, due to
          mobile platform providers’ pricing systems and their policies around
          implementing sales and promotions. We occasionally run promotions and
          sales for our content, during which certain content is available at
          discounted prices for a set period of time. The price applicable to
          the content will be the price at the time you complete your purchase
          of the content (at checkout). Any price offered for particular content
          may also be different when you are logged into your account from the
          price available to users who aren’t registered or logged in, because
          some of our promotions are available only to new users. If you are
          logged into your account, the listed currency you see is based on your
          location when you created your account. If you are not logged into
          your account, the price currency is based on the country where you are
          located. We do not enable users to see pricing in other currencies. If
          you are a student located in a country where use and sales tax, goods
          and services tax, or value added tax is applicable to consumer sales,
          we are responsible for collecting and remitting that tax to the proper
          tax authorities. Depending on your location, the price you see may
          include such taxes, or tax may be added at checkout.
          <br />
          2. Payments
          <br />
          You agree to pay the fees for content that you purchase, and you
          authorize us to charge your debit or credit card or process other
          means of payment (such as Boleto, SEPA, direct debit, or mobile
          wallet) for those fees. Akwya works with payment service providers to
          offer you the most convenient payment methods in your country and to
          keep your payment information secure. We may update your payment
          methods using information provided by our payment service providers.
          Check out our Privacy Policy for more details. When you make a
          purchase, you agree not to use an invalid or unauthorized payment
          method. If your payment method fails and you still get access to the
          content you are enrolling in, you agree to pay us the corresponding
          fees within thirty (30) days of notification from us. We reserve the
          right to disable access to any content for which we have not received
          adequate payment.
          <br />
          3. Refunds and Refund Credits
          <br />
          If the content you purchased is not what you were expecting, you can
          request, within 30 days of your purchase of the content, that Akwya
          apply a refund to your account. This refund option does not apply to
          Subscription Plan purchases, which are covered in Section 8.4 below.
          We reserve the right to apply your refund as a refund credit or a
          refund to your original payment method, at our discretion, depending
          on capabilities of our payment service providers, the platform from
          which you purchased your content (website, mobile or TV app), and
          other factors. No refund is due to you if you request it after the
          30-day guarantee time limit has passed. However, if the content you
          previously purchased is disabled for legal or policy reasons, you are
          entitled to a refund beyond this 30-day limit. Akwya also reserves the
          right to refund students beyond the 30-day limit in cases of suspected
          or confirmed account fraud. To request a refund, follow the steps
          here. As detailed in the Instructor Terms, instructors agree that
          students have the right to receive these refunds. If we decide to
          issue refund credits to your account, they will be automatically
          applied towards your next content purchase on our website, but can’t
          be used for purchases in our mobile or TV applications. Refund credits
          may expire if not used within the specified period and have no cash
          value, in each case unless otherwise required by applicable law. At
          our discretion, if we believe you are abusing our refund policy, such
          as if you’ve consumed a significant portion of the content that you
          want to refund or if you’ve previously refunded the content, we
          reserve the right to deny your refund, restrict you from other future
          refunds, ban your account, and/or restrict all future use of the
          Services. If we ban your account or disable your access to the content
          due to your violation of these Terms or our Trust & Safety Guidelines,
          you will not be eligible to receive a refund. Additional information
          on our refund policy is available here.
          {/* <br/>
          <br/>
          <input id="agreed" type="checkbox" onClick={checkChange}/>  I agree to the payment and refund policies
          <br/>
          
          <a href='http://localhost:3000/'>
          <br/>
          <button id="submitButton" class="btn btn-default" type="button" disabled="disabled">    
          Submit
          </button>
          </a> */}
        </h6>
      {/* </form> */}
    </div>
  );
};

export default Policy;

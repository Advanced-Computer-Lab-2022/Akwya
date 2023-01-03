import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';  

const Contract = () => {
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = true
    document.getElementById('loginbutton').hidden = false
    document.getElementById('contract').hidden = true
    document.getElementById('policy').hidden = true
    document.getElementById('navPages').innerHTML = '<li> <a href='+document.referrer+'> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'
  
    })
   
  function checkChange() {
    const checkbox = document.getElementById("agreed");
    if(checkbox.checked == true){
        document.getElementById("submitButton").removeAttribute("disabled");
    }else{
        document.getElementById("submitButton").setAttribute("disabled", "disabled");
   }
}

  return (
    <div className="contract" style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
       <div class="bb"><a href={document.referrer} class="previous round">&#8249;</a></div>
      <form>
        <h6>
        <h2>Contract</h2>
          1. Akwya's Rights to Content You Post:
          <br/>
          You retain ownership of content
          you post to our platform, including your courses. We’re allowed to
          share your content to anyone through any media, including promoting it
          via advertising on other websites. The content you post as an instructor 
          (including courses) remains yours. By posting courses
          and other content, you allow Akwya to reuse and share it but you do
          not lose any ownership rights you may have over your content. When you post content,
          comments, questions, reviews, and when you submit to us ideas and
          suggestions for new features or improvements, you authorize Akwya to
          use and share this content with anyone, distribute it and promote it
          on any platform and in any media, and to make modifications or edits
          to it as we see fit. In legal language, by submitting or posting
          content on or through the platforms, you grant us a worldwide,
          non-exclusive, royalty-free license (with the right to sublicense) to
          use, copy, reproduce, process, adapt, modify, publish, transmit,
          display, and distribute your content (including your name and image)
          in any and all media or distribution methods (existing now or later
          developed). This includes making your content available to other
          companies, organizations, or individuals who partner with Akwya for
          the syndication, broadcast, distribution, or publication of content on
          other media, as well as using your content for marketing purposes. You
          also waive any rights of privacy, publicity, or other rights of a
          similar nature applicable to all these uses, to the extent permissible
          under applicable law. You represent and warrant that you have all the
          rights, power, and authority necessary to authorize us to use any
          content that you submit. You also agree to all such uses of your
          content with no compensation paid to you. 
          <br/>
          2. License to Akwya 
          <br/>
          You grant Akwya the rights to offer, market,
          and otherwise exploit your Submitted Content. This includes the right
          to add captions or otherwise modify Submitted Content to ensure
          accessibility. You also authorize Akwya to sublicense these rights to
          your Submitted Content to third parties, including to students
          directly and through third parties such as resellers, distributors,
          affiliate sites, deal sites, and paid advertising on third-party
          platforms. Unless otherwise agreed (including within our Promotions
          Policy), you have the right to remove all or any portion of your
          Submitted Content from the Services at any time. Except as otherwise
          agreed, Akwya's right to sublicense the rights in this section will
          terminate with respect to new users 60 days after the Submitted
          Content's removal. However,<br/>(1) rights given to students before the
          Submitted Content's removal will continue in accordance with the terms
          of those licenses (including any grants of lifetime access) and <br/>(2)
          Akwya's right to use such Submitted Content for marketing purposes
          shall survive termination. We may record and use all or any part of
          your Submitted Content for quality control and for delivering,
          marketing, promoting, demonstrating, or operating the Services. You
          grant Akwya permission to use your name, likeness, voice, and image in
          connection with offering, delivering, marketing, promoting,
          demonstrating, and selling the Services, your Submitted Content, or
          Akwya's content, and you waive any rights of privacy, publicity, or
          other rights of a similar nature, to the extent permissible under
          applicable law.<br/>
          3. Revenue Share 
           <br/>When a trainee purchases
          your Submitted Content, we calculate the gross amount of the sale as
          the amount actually received by Akwya from the trainee ("Gross
          Amount"). From this, we subtract any Transaction Taxes, any mobile
          platform fees applied to mobile provider checkout sales, a 3% service
          and processing fee (except in Japan, where we subtract a 4% fee) for
          any non-mobile provider checkout sales, and any amounts paid to third
          parties in connection with the Promotional Programs to calculate the
          net amount of the sale ("Net Amount"). If you have not opted into any
          of Akwya's optional Promotional Programs, and except for sales through
          instructor-generated coupon codes or course referral links as
          described below, your revenue share will be 37% of the Net Amount less
          any applicable deductions, such as trainee refunds. If we change this
          payment rate, we will provide you 30 days notice using prominent
          means, such as via email or by posting a notice through our Services.
          If you opt into any of the Promotional Programs, the relevant revenue
          share may be different and will be as specified in the Promotions
          Policy. Akwya makes all instructor payments in U.S. dollars (USD)
          regardless of the currency with which the sale was made. Akwya is not
          responsible for your foreign currency conversion fees, wiring fees, or
          any other processing fees that you may incur. Your revenue report will
          show the sales price (in local currency) and your converted revenue
          amount (in USD).
          <br/>
          <h4>You have already agreed to the terms mentioned above.</h4>
         
        </h6>
      </form>
    </div>
  );
};

export default Contract;

import React, { useState, useEffect } from 'react';  

const ContactUs = () => {
    useEffect(()=>{
    document.getElementById('logoutbutton').hidden = true
    document.getElementById('loginbutton').hidden = true
    document.getElementById('contract').hidden = true
    document.getElementById('policy').hidden=true
    document.getElementById('navPages').innerHTML = '<li> <a href='+document.referrer+'> Home </a> </li><li> <a href="/contact"> Contact Us </a> </li>'
    })
    return (
        <div><br/>
                <div class="bb"><a href={document.referrer} class="previous round" style={{backgroundColor:'white',color:'black'}}>&#8249;</a></div>

    <h2 style={{color:'white',textAlign:'center'}}>Kindly contact us at akwya@info.com <br/>or visit our office</h2><br/>
        <iframe style={{ height: '500px', width:'100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110466.60468349398!2d31.50736084016359!3d30.091855106524175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581e0197d20347%3A0x77e815673cfde03b!2sMadinaty%2C%20Second%20New%20Cairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1661426892424!5m2!1sen!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default ContactUs;

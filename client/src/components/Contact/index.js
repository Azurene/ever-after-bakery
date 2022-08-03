import React, {useRef} from 'react';
//import contact from "../../Assets/Styles/contact.css";
 import { AiOutlineMail} from "react-icons/ai";
 import {BsMessenger} from "react-icons/bs";
  import emailjs from 'emailjs-com';

function Contact() => {
    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // lets user know message was sent
         const feedbackEl = document.querySelector(".feedback");
         feedbackEl.setAttribute('class', 'feedback');
         setTimeout(function(){
            feedbackEl.setAttribute('class',"feedback hide");
         },4000);

         emailjs
         .sendForm(
            "service_fu0e951",
            "template_gdjxp6g",
            form.current,
            "KfGVyjhX_IddnHea"
         )
         .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
         );

         e.target.reset();
    };
    return (
        <section className={contact}>
        <h2 className='text-black pt-4'>Contact Me</h2>

        <div className='container contact_container'>
        <div className='contact_options'>
        <article className='contact_options'>
        //<AiOutlineMail
        //</article>
       //</div> </div>
       // </section>
        // left off on AiOutlineMail 
    )
}

export default Contact;
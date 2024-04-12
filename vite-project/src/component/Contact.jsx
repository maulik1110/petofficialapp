import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4xnkhrp', 'template_elywd6n', form.current, {
        publicKey: 'LCJ3SGc3g37kQcJ1i',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true);
          setTimeout(() => setIsSent(false), 5000); // Reset message after 5 seconds
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <form className='w-full h-[65vh] px-10' ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col w-[70%] mx-auto mt-5'>

        <label className='font-bold text-lg'>Name</label>
        <input className='h-[3vw] rounded-md'  type="text" name="user_name" />
        <label className='font-bold text-lg'>Email</label>
        <input className='h-[3vw] rounded-md' type="email" name="user_email" />
        <label className='font-bold text-lg'>Message</label>
        <textarea className='h-[10vw] rounded-md' name="message" />
        <input className=' bg-slate-800 text-white mb-2 m-2 px-4 py-2 rounded-lg cursor-pointer'  type="submit" value="Send" />
      </div>
      </form>

      {isSent && <p className='text-center font-bold text-xl'>Message sent successfully!</p>}
    </>
  );
};

export default ContactUs;

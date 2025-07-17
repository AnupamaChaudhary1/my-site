// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//   const form = useRef();
//   const [status, setStatus] = useState('');

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_xnzj6df',     // Your EmailJS service ID
//       'template_f1algh8',    // Your EmailJS template ID
//       form.current,          // The form DOM node
//       'WdF5QmuUMdCVFolW2'         // Your EmailJS user/public key
//     )
//     .then((result) => {
//         setStatus('Message sent successfully!');
//         e.target.reset();
//     }, (error) => {
//         setStatus('Failed to send message. Please try again.');
//     });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Full Name *</label>
//       <input type="text" name="user_name" placeholder="Your full name" required />

//       <label>Email Address *</label>
//       <input type="email" name="user_email" placeholder="your.email@example.com" required />

//       <label>Project Type</label>
//       <select name="project_type" required>
//         <option value="">Select project type</option>
//         <option value="Website">Website</option>
//         <option value="Mobile App">Mobile App</option>
//         <option value="Other">Other</option>
//       </select>

//       <label>Project Details *</label>
//       <textarea name="message" placeholder="Tell me about your project requirements..." required />

//       <button type="submit">Send Message</button>
//       {status && <p>{status}</p>}
//     </form>
//   );
// };

// export default ContactForm;



import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xnzj6df',        // your service ID
      'template_f1algh8',       // your template ID
      form.current,
      'WdF5QmuUMdCVFolW2'      // your public key
    )
    .then(() => {
      setStatus('Message sent successfully!');
      e.target.reset();
    })
    .catch(() => {
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <select name="project_type" required>
        <option value="">Select Project Type</option>
        <option value="Website">Website</option>
        <option value="App">App</option>
      </select>
      <textarea name="message" placeholder="Your message here..." required />
      <button type="submit">Send Message</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;

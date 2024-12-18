import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../Button/Button';
import { useState } from 'react';
import contactimage from '../../images/contactus.png';
import emailjs from '@emailjs/browser';
import '../../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  });

  const [message, setMessage] = useState('');

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    // EmailJS parameters
    const emailParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.text,
    };

    // Send email via EmailJS
    emailjs
      .send(
        'service_k2x6wzc', // Replace with your Service ID
        'template_p05dz81', // Replace with your Template ID
        emailParams,
        'NSEpRM7my2UCRnBs6' // Replace with your User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessage('Message sent successfully!');
          setFormData({ name: '', email: '', text: '' }); // Reset form
        },
        (error) => {
          console.log('FAILED...', error);
          setMessage('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <section className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-16 p-4 sm:p-8 w-full max-w-6xl mx-auto">
      {/* Contact Form */}
      <div className="w-full sm:w-1/2">
        <div className="text-center sm:text-left mb-6">
          {/* Ensure button is responsive */}
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="20px" />}
            className="lg:w-full  sm:w-auto mx-auto sm:mx-0 "  // This ensures full-width on small screens and auto-width on larger screens
          />
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="form_control">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChangeHandler}
              className="w-full bg-transparent p-3 border-b-2 border-black focus:outline-none"
              placeholder="Name"
              required
            />
          </div>

          <div className="form_control">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              className="w-full bg-transparent p-3 border-b-2 border-black focus:outline-none"
              placeholder="Email"
              required
            />
          </div>

          <div className="form_control">
            <textarea
              name="text"
              value={formData.text}
              onChange={onChangeHandler}
              className="w-full bg-transparent p-3 border-b-2 border-black focus:outline-none"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="submit text-center">
            <Button text="SUBMIT" />
          </div>
        </form>

        {message && (
          <p className="text-center mt-4 text-black ease-out transition-all duration-200 pop-animation">
            {message}
          </p>
        )}
      </div>

      {/* Contact Image */}
      <div className="w-full sm:w-1/2">
        <img src={contactimage} alt="Contact Us" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default ContactForm;

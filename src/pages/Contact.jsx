import React from 'react'
import ContactHeader from '../Components/ContactHeader/ContactHeader'
import ContactForm from '../Components/ContactForm/ContactForm'
import whiteman from '../images/whiteman.png'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { MdAddIcCall } from 'react-icons/md'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
      {/* Main container */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Contact Info */}
        <div className="w-full rounded-2xl mb-8 p-6 sm:p-10 border border-black shadow-lg">
          <div className="text-black mb-4 flex flex-col gap-4 items-center sm:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center sm:text-left mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl flex gap-2 sm:gap-3 text-black items-center justify-center sm:justify-start">
              <FaLocationDot /> Kanth Road, Harthala, Moradabad - 244102 (Harthala, Opposite Majar) 
            </p>
            <p className="text-lg sm:text-xl flex gap-2 sm:gap-3 text-black items-center justify-center sm:justify-start">
              <IoIosMail /> ashokaagriculturalstore@gmail.com
            </p>
            <p className="text-lg sm:text-xl flex gap-2 sm:gap-3 text-black items-center justify-center sm:justify-start">
              <MdAddIcCall /> +91 9412247561
            </p>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Google Map */}
        <div className="w-full h-80 sm:h-96 mb-8 outline rounded-lg">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571134.5671245833!2d74.27310998240989!3d29.063255554139083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afec9a0a99e1d%3A0x87e01aed36e6c3dd!2sM%2Fs%20Ashoka%20Agricultural%20Store!5e0!3m2!1sen!2sin!4v1732986780744!5m2!1sen!2sin"

            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact

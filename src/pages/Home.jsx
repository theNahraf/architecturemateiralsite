import React, { useState, useEffect } from 'react';
import image1 from '../images/companyfull.jpeg';
import image2 from '../images/image2.png';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import longimage from '../images/longimage1.jpg'
import Slideshow from '../Components/Slideshow';
import whiteman from '../images/whiteman.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import kanniimage from '../images/kannis.png'
import '../App.css';
import mansonry from '../images/masonry-7349423_640.jpg'
import block from '../images/blockrod.jpg'
import rod from '../images/rodss.jpg'
import rod1 from '../images/rods.jpg'
import badarpur from '../images/badarpur.jpeg'
import cement from '../images/cement.jpg'
import newlogo from '../images/newlogo.png'
import ironrod from '../images/building-3734380_640.jpg'
import manlogo from '../images/manwithconstruciotn.png'
import sariya from '../images/building-3734380_640.jpg'
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import manwithcement from '../images/manwithcement.png'
import Footer from '../Components/Footer';
import coverblock from '../images/coverblk.jpg'
import birlauttam from '../images/wonder.jpeg'
import rathee from '../images/rathee steel.jpg'
import birlacement from '../images/birla-uttam-cements-2217849127-1684hcqc.avif'
import msbar from '../images/msbar.jpg'
import kamdhenu from '../images/kamdhenu steel.jpg'
import companycement from '../images/companysariya.jpeg'
import sqaureiron from '../images/square.jpeg'
import ironwire from '../images/ironwire.jpeg'
import companycements from '../images/companycement.jpeg'

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-poppins">
      {/* Main Content */}
      <div className="mx-auto p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row items-center justify-around mt-4 lg:mt-8">
          <div className="col-2 flex flex-col items-center lg:items-start max-w-xl px-4 lg:px-0">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-4 text-center lg:text-left">
              For Your All Cementing Needs Only Trust <br />
              <span className='text-[#0e0d53] font-serif font-extrabold'>Ashoka <br/> Agricultural Store!</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-center lg:text-left">
              Trusted for over 60 years for all the cementing, building, and waterproofing needs. Just give a try to our services. Let's build your dreams together!
            </p>
            <Link
              to="/products"
              className="bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300 hover:bg-blue-800"
            >
              Explore Now &#8594;
            </Link>
          </div>

          <div className='w-full lg:w-auto mt-8 lg:mt-0'>
            <div className="shadow-[10px_-5px_50px_-5px] shadow-pink-300 w-full rounded-lg lg:w-[100%] mx-auto">
              <img src={image1} alt="" className="w-full lg:w-[590.67px] h-auto lg:h-full rounded-lg shadow-[20px_20px_rgba(0,0,0)] mt-10"/>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:h-[110px]'></div>

      <div className='mt-12 lg:mt-24'>
        <Slideshow/>
      </div>

      <div className='lg:h-[10vh]'></div>

      {/* Featured Products Section */}
      <div className="py-10 lg:py-20">
        <div className="mx-auto px-4 lg:px-6">
          <h2 className="text-3xl lg:text-5xl font-serif text-center mb-8 relative underline">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-16">
            {/* Product cards - each card is now responsive */}
            {[
              { img: ironwire, title: "IRON WIRE", subtitle: "JODH KR RAKHE" },
              { img: sqaureiron, title: "IRON FOLDED Bars ", subtitle: "Seelan Ka Dushman" },
              { img: birlacement, title: "BIRLA CEMENT", subtitle: "Seelan Ka Dushman" },
              { img: companycement, title: "Sariya Iron Rod ", subtitle: " Ghar Bane Majboot" },
              { img: birlauttam, title: "WONDER CEMENT ", subtitle: "Seelan Ka Dushman" },
              { img: coverblock, title: "COVER BLOCK", subtitle: "Lanter Ko Jode Rakhe" },
              { img: rathee, title: "RATHEE SARIYA", subtitle: "RATHEE SARIYA" },
              { img: msbar, title: "MS BARS", subtitle: "Kal Ke Liye Tayyar" },
              { img: kamdhenu, title: "BIRLA CEMENT ULTIMATE", subtitle: "Ghar Ka Expert" }
            ].map((product, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-blue-500 rounded-md p-4 lg:p-6 hover:translate-y-4 transition duration-500">
                <img src={product.img} alt={product.title} className="w-full rounded-md" />
                <h4 className="text-center text-lg lg:text-xl font-semibold mt-4">{product.title}</h4>
                <p className="text-center text-sm text-white">{product.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className='min-h-[20vh] lg:h-[40vh] font-poppins font-bold flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 text-black p-4'>
        <h1 className='text-2xl lg:text-4xl text-center lg:text-left'>Need Help with Easier Construction Solutions? We Are Experts!</h1>
        <div className="flex items-center">
          <Link to="/contact" className="relative items-center justify-start inline-block px-6 lg:px-8 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3">Contact Us</span>
            <span className="absolute inset-0 border-2 border-black rounded-full"></span>
          </Link>
        </div>
      </div>

      {/* About Sections */}
      <div className='flex flex-col lg:flex-row w-full lg:w-[90%] mx-auto items-center justify-around gap-8 lg:gap-0 p-4 lg:p-0 mt-8 lg:mt-[20px]'>
        <div className="w-full lg:w-auto">
          <img src={manlogo} alt="" className='w-full object-cover'/>
        </div>
        <div className="w-full lg:w-[400px]">
          <h2 className='font-bold font-popins py-6 lg:py-10 px-4 text-3xl lg:text-6xl text-center lg:text-left'>
            We Construct Trust, Our Construction Material's are Best.
          </h2>
        </div>
      </div>

      {/* Steel Bars Section */}
      <div className='flex flex-col lg:flex-row w-full lg:w-[90%] mx-auto items-center justify-around gap-8 lg:gap-0 p-4 lg:p-0 mt-12 lg:mt-[150px] mb-12 lg:mb-[250px]'>
        <div className="w-full lg:w-[400px] order-2 lg:order-1">
          <h2 className='font-bold font-popins py-6 lg:py-10 px-4 text-3xl lg:text-6xl text-center lg:text-left'>
            Get TMT Steel, MS Bars at Good price in India.
          </h2>
        </div>
        <div className="shadow-[10px_-5px_50px_-5px] shadow-yellow-300 w-full lg:w-[600px] rounded-xl order-1 lg:order-2">
          <img src={sariya} alt="" className="shadow-[20px_20px_rgba(60,60,60)] w-full object-cover rounded-xl"/>
        </div>
      </div>

      {/* Badarpur Sand Section */}
      <div className='flex flex-col lg:flex-row w-full lg:w-[90%] mx-auto items-center gap-8 lg:gap-20 justify-around p-4 lg:p-0 mt-12 lg:mt-[20px]'>
        <div className="shadow-[10px_-5px_50px_-5px] shadow-black w-full lg:w-[500px] rounded-xl">
          <img src={companycements} alt="" className="shadow-[-20px_20px_rgba(0,0,0)] object-cover rounded-lg w-full h-full"/>
        </div>
        <div className="w-full lg:w-[400px]">
          <h2 className='font-bold font-popins py-6 lg:py-10 px-4 text-3xl lg:text-6xl text-center lg:text-left'>
            Buy Badarpur , WONDER And Birla Cement at the best price in India.
          </h2>
        </div>
      </div>

      {/* Materials List Section */}
      <div className='flex flex-col min-h-[50vh] lg:min-h-[100vh] text-black mt-12 lg:mt-[25vh] w-full lg:w-[70%] mx-auto relative p-4 lg:p-0'>
        <h1 className='mb-4 lg:mb-5 text-center text-3xl lg:text-5xl font-semibold'>We Provides Construction Materials</h1>
        <h2 className='text-center opacity-100'>All Types Of Iron Rod</h2>
        <h2 className='text-center opacity-80 mb-8 lg:mb-16'>We Provide Best Cement, Badarpur, Iron and Steel Rods, Sand and More</h2>

        <ul className='flex flex-col gap-y-4 lg:gap-y-8 mt-6 ml-4 lg:ml-10 font-semibold uppercase opacity-100'>
          {[
            "All Types Of Cement",
            "ALL types of badarpur",
            "iron wires [20mm, 10mm]",
            "lenter",
            "gaatarr",
            "iron roads (sariya)",
            "dr fixit and others",
            "all construction services"
          ].map((item, index) => (
            <li key={index} className='flex gap-3 items-center'>
              <TbArrowBadgeRightFilled className='text-black text-xl lg:text-2xl'/>
              <Link className='text-[#0e0d53] text-sm lg:text-base'>{item}</Link>
            </li>
          ))}
        </ul>
        
        <img className='hidden lg:block absolute right-5 top-[14vh] h-[70vh] object-cover' src={manwithcement} alt="" />
      </div>

      {/* Final CTA Section */}
      <div className='min-h-[20vh] lg:h-[40vh] mb-10 font-poppins font-bold flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 text-black p-4'>
        <h1 className='text-2xl lg:text-4xl text-center lg:text-left'>Need Help with Easier Construction Solutions? We Are Experts!</h1>
        <div className="flex items-center">
          <Link to="/contact" className="relative items-center justify-start inline-block px-6 lg:px-8 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3">Contact Us</span>
            <span className="absolute inset-0 border-2 border-black rounded-full"></span>
          </Link>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default HomePage;


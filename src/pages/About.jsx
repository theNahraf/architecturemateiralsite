import React from 'react';
import '../App.css'; // Ensure your styles are imported
import { FaAward, FaIndustry, FaCertificate } from 'react-icons/fa';
import wireimage1 from '../images/cement.jpg';
import wireimage2 from '../images/12mm-Iron-Rod-Price-Steel-Reinforcing-Bar-for-Construction-Iron.avif';
import wireimage3 from '../images/badarpur.jpeg';
import wireimage4 from '../images/Gravel-Stone-Chips.webp';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import bgImage1 from '../images/bg1.jpeg';
import bgImage2 from '../images/bg.jpeg';
import bgImage3 from '../images/cemnet2.jpg';
import bgImage4 from '../images/ironrod.jpg';
import bgImage5 from '../images/deal.jpeg'
import bgImage6 from '../images/companycement.jpeg'
import bgImage7 from '../images/companysariya.jpeg'
import owner from '../images/owner.jpeg'
import owner1 from '../images/owner1.jpeg'
import sariyacompany from '../images/sariyacompany.jpeg'
import cementcompany from '../images/cementcmpy.jpeg'

// Background Images Array
const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4,bgImage5, bgImage6,bgImage7];

const About = () => {
  return (
    <div className="relative">
      {/* Slideshow Wrapper */}
      <div className="slideshow-container absolute w-full -top-[100px] bg-center h-[110vh] z-0">
        <div className="slideshoww relative w-full h-full">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="slidee"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            ></div>
          ))}
        </div>

        {/* Black Overlay with Text */}
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-80 p-10 z-10 absolute top-0 left-0 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-bounce text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* Images Section */}
      <div className="text-center px-4 md:px-8">
  <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-20">
    Who are We? <br />
    <span className="text-[#0e0d53] font-serif font-extrabold">
      Ashoka Agricultural Store!
    </span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[8vh] h-full mx-auto max-w-6xl">
    {[owner, owner1, sariyacompany, cementcompany].map((image, idx) => (
      <div
        key={idx}
        className="mx-auto w-full my-7 shadow-[10px_-5px_50px_-5px] rounded-xl"
      >
        <img
          className="w-full object-cover rounded-lg shadow-[20px_20px_rgba(0,0,0)]"
          src={image}
          alt={`Image ${idx + 1}`}
        />
      </div>
    ))}
  </div>
</div>



      {/* Features Section */}
      <div className="flex flex-col gap-y-14 mt-[10vh]">
        <div className="flex flex-wrap justify-center mt-4 space-x-4 sm:space-x-10 text-black">
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            <FaAward className="text-4xl sm:text-6xl mb-2" />
            <p className="text-lg sm:text-xl text-center">
              ISO 9001-2015 Certified
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            <FaIndustry className="text-4xl sm:text-6xl mb-2" />
            <p className="text-lg sm:text-xl text-center">
              Leading Supplier of Construction Materials
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCertificate className="text-4xl sm:text-6xl mb-2" />
            <p className="text-lg sm:text-xl text-center">Quality Assurance</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-6xl mx-auto text-lg sm:text-xl font-sans grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-4 sm:px-8 text-black">
          <div>
            <h3 className="text-xl sm:text-2xl mb-5 underline">
              Our Commitment
            </h3>
            <p className="mb-4">
              Ashoka Agricultural Store has emerged as one of the leading
              suppliers of construction materials such as cement, iron rods,
              Buderpur, and other building materials. Under our trusted brand,
              "Ashoka Agricultural Store," we provide top-quality products to
              meet the needs of the construction industry.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl mb-5 underline">
              Quality Standards
            </h3>
            <p className="mb-4">
              For over 15 years, Ashoka Agricultural Store has maintained the
              highest international standards for quality and dependability in
              construction materials, ensuring that each product undergoes
              rigorous quality checks.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl mb-5 underline">Product Range</h3>
            <p className="mb-4">
              We offer a wide range of construction materials, including
              premium-grade cement, iron rods, Buderpur, bricks, sand,
              aggregates, and all other necessary materials for any construction
              project.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl mb-5 underline">
              Client Commitment
            </h3>
            <p>
              At Ashoka Agricultural Store, we continuously strive to meet our
              clients' diverse needs by providing high-quality products and
              excellent customer service, earning their trust and long-term
              partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* History & Mission Sections */}
      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-8 text-left text-black">
        <h3 className="text-xl sm:text-2xl mb-5 underline">Our History</h3>
        <p className="mb-4">
          Founded in 2005, Ashoka Agricultural Store started as a small supplier
          of building materials. Over the years, we have grown into a trusted
          name in the construction industry, supplying high-quality cement, iron
          rods, sand, bricks, and aggregates to contractors, builders, and
          individual clients. Our commitment to excellence has made us a leader
          in the construction supply industry.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-8 text-left text-black">
        <h3 className="text-xl sm:text-2xl mb-5 underline">Our Mission</h3>
        <p className="mb-4">
          Our mission is to provide the highest quality construction materials
          to our customers while maintaining the highest standards of
          reliability, sustainability, and customer service. We aim to be a
          partner in our customers' success by delivering the right products at
          the right time, every time.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="h-[40vh] mb-10 font-poppins font-bold flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 text-black text-center px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Need Help with Easier Construction Solutions? We Are Experts!
        </h1>
        <Link
          to="/contact"
          className="relative items-center justify-start inline-block px-8 py-3 overflow-hidden font-bold rounded-full group"
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span
            className="relative w-full text-left text-black transition-colors duration-200 ease-in-out
      group-hover:text-gray-900 flex items-center gap-3"
          >
            Contact Us
          </span>
          <span className="absolute inset-0 border-2 border-black rounded-full"></span>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default About;

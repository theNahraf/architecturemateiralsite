import React, { useState, useCallback, useMemo } from "react";
import { useMedia } from "react-use";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Only needs to be imported once
import image1 from '../images/products/3.jpeg';
import image2 from '../images/products/4.jpeg';
import image3 from '../images/products/5.jpeg';
import image4 from '../images/products/6.jpeg';
import image5 from '../images/GI-Binding-Wire.webp';
import image6 from '../images/products/7.jpeg';
import image7 from '../images/products/8.jpeg';
import image8 from '../images/products/9.jpeg';
import image9 from '../images/products/cc05ef83-5d93-4dc8-8036-96e38aae1e0a.jpeg';
import image10 from '../images/products/d52fd23e-2639-40cb-879c-9b298a3b81fb.jpeg';
import image11 from '../images/cementcmpy.jpeg';
import image12 from '../images/coverblock.jpeg';
import image13 from '../images/GI-Binding-Wire.webp';
import image14 from '../images/ironwire.jpeg';
import image15 from '../images/owner.jpeg';
import image16 from '../images/jindal.jpeg';
import Footer from "../Components/Footer";
import '../App.css'

const Gallery = () => {
  const photos = [
    { src: image1, thumbnailSrc: image1 },
    { src: image4, thumbnailSrc: image4 },
    { src: image3, thumbnailSrc: image3 },
    { src: image13, thumbnailSrc: image13 },
    { src: image8, thumbnailSrc: image8 },
    { src: image5, thumbnailSrc: image5 },
    { src: image6, thumbnailSrc: image6 },
    { src: image7, thumbnailSrc: image7 },
    { src: image9, thumbnailSrc: image9 },
    { src: image10, thumbnailSrc: image10 },
    { src: image11, thumbnailSrc: image11 },
    { src: image12, thumbnailSrc: image12 },
    { src: image2, thumbnailSrc: image2 },
    { src: image14, thumbnailSrc: image14 },
    { src: image15, thumbnailSrc: image15 },
    { src: image16, thumbnailSrc: image16 },
  ];

  // Check if the screen is mobile (using max-width: 767px for mobile)
  const isMobile = useMedia("(max-width: 767px)");

  const isTablet = useMedia("(min-width: 480px)", true);
  const amountOfPhotosToLoad = useMemo(() => (isTablet ? 40 : 10), [isTablet]);
  const [paginatedImages, setPaginatedImages] = useState(photos.slice(0, amountOfPhotosToLoad));

  const loadMore = useCallback(() => {
    setPaginatedImages((images) => photos.slice(0, images.length + amountOfPhotosToLoad));
  }, [setPaginatedImages, amountOfPhotosToLoad, photos]);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const mainSrc = useMemo(() => paginatedImages[currentImage]?.src, [currentImage, paginatedImages]);
  const nextSrc = useMemo(() => paginatedImages[(currentImage + 1) % paginatedImages.length]?.src, [currentImage, paginatedImages]);
  const prevSrc = useMemo(() => paginatedImages[(currentImage + paginatedImages.length - 1) % paginatedImages.length]?.src, [currentImage, paginatedImages]);

  const [isFullscreen, setFullscreen] = useState(false);
  const toggleFullScreen = useCallback(() => {
    if (!isFullscreen) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
    setFullscreen((fs) => !fs);
  }, [isFullscreen]);

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const handleScroll = useCallback(() => {
    const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    if (bottom) loadMore();
  }, [loadMore]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <h1
        style={{
          color: "#FFD700",
          textAlign: "center",
          fontFamily: "'Roboto', sans-serif",
          fontSize: "clamp(24px, 5vw, 36px)", // Responsive font size
          fontWeight: "700",
        }}
      >
        Gallery
      </h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={toggleFullScreen}
          style={{
            backgroundColor: "#FFD700",
            color: "#333",
            border: "2px solid #FFD700",
            padding: "12px 30px",
            fontSize: "16px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {isFullscreen ? "Exit Fullscreen" : "View in Fullscreen"}
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", // Responsive grid
          gap: "40px",
          marginTop: "50px",
        }}
      >
        {paginatedImages.map((photo, index) => (
          <div
            key={index}
            style={{
              cursor: "pointer",
              border: "4px solid #FFD700",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animation
            }}
            onClick={() => openLightbox(null, { index })}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom effect
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)"; // Enhanced shadow
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"; // Reset zoom
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)"; // Reset shadow
            }}
          >
            <img
              src={photo.thumbnailSrc}
              alt={`Thumbnail of ${photo.src}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                transition: "transform 0.3s ease-in-out", // Smooth zoom on hover
              }}
            />
          </div>
        ))}
      </div>

      {/* Only show Lightbox if not on mobile */}
      {!isMobile && viewerIsOpen && (
        <Lightbox
          mainSrc={mainSrc}
          prevSrc={prevSrc}
          nextSrc={nextSrc}
          onMoveNextRequest={() => setCurrentImage((currentImage + 1) % paginatedImages.length)}
          onMovePrevRequest={() => setCurrentImage((currentImage + paginatedImages.length - 1) % paginatedImages.length)}
          onCloseRequest={() => setViewerIsOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

import React, { useState, useEffect } from "react";
import AnimateText from "./AnimatedTexr";
import ShopByPets from "./Catagory";

// Function to generate random light color
const getRandomLightColor = () => {
    const minBrightness = 100; // Minimum brightness value for each color component
    const maxBrightness = 255; // Maximum brightness value for each color component
    let color = "#";

    // Generate each color component
    for (let i = 0; i < 3; i++) {
        // Generate a random brightness value biased towards lighter shades
        const brightness = Math.floor(Math.random() * (maxBrightness - minBrightness + 1)) + minBrightness;
        // Convert the brightness value to hexadecimal
        const brightnessHex = brightness.toString(16).padStart(2, '0');
        // Append the brightness value to the color string
        color += brightnessHex;
    }
    return color;
};

function RotatingQuotes() {
  const [quotes, setQuotes] = useState([
    "Until one has loved an animal, a part of one's soul remains unawakened. - Anatole France",
    "Pets are humanizing. They remind us we have an obligation and responsibility to preserve and nurture and care for all life. - James Cromwell",
    "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
    "A dog is the only thing on earth that loves you more than you love yourself. - Josh Billings",
    "Animals are such agreeable friends―they ask no questions; they pass no criticisms. - George Eliot",
  ]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change interval as needed (5000 milliseconds = 5 seconds)

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex(
      (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
    );
  };

  // Generate random radial gradient for background
  const generateRandomGradient = () => {
    const colors = [getRandomLightColor(), getRandomLightColor()];
    const centerX = Math.floor(Math.random() * 101); // Random percentage between 0 and 100
    const centerY = Math.floor(Math.random() * 101); // Random percentage between 0 and 100
    const gradient = `radial-gradient(circle at ${centerX}% ${centerY}%, ${colors[0]}, ${colors[1]})`;
    return gradient;
  };

  const containerStyle = {
    background: generateRandomGradient(),
  };

  return (
    <div className="main minh-[100vh]">
      <div
        className="quote-container flex items-center rounded-lg m-4 justify-center h-[70vh] lg:h-[50vh] relative"
        style={containerStyle}
      >
        <button
          className="prev-btn absolute left-0 top-0 bottom-0 ml-2"
          onClick={prevQuote}
        >
          &#8249;
        </button>
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`quote ${
              index === currentQuoteIndex ? "block" : "hidden"
            } p-4 text-2xl  text-black font-semibold text-center`}
          >
            {quote}
          </div>
        ))}
        <button
          className="next-btn absolute right-0 top-0 bottom-0 mr-2"
          onClick={nextQuote}
        >
          &#8250;
        </button>
      </div>

      <h3 className="text-center py-4 lg:font-bold font-semibold text-2xl">ONE STOP SOLUTION FOR YOUR PET’S,</h3>
      <AnimateText/>
      <ShopByPets/>
    </div>
  );
}

export default RotatingQuotes;

import React from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";

const ramenFlavors = [
  {
    id: 1,
    title: "CARBONARA",
    image: "src/assets/Samyang_-_Buldak_Carbonara_Hot_Chicken_Flavour_Ramen_Noodles_Halal_-_130g.png",
    backgroundColor: "linear-gradient(135deg, #FF7599, #FFB3C1)",
    splashes: [
      "src/assets/splash1.svg",
      "src/assets/splash2.svg",
    ],
  },
  {
    id: 2,
    title: "CHEESE BULDAK",
    image: "src/assets/517aIeWxigL.png",
    backgroundColor: "linear-gradient(135deg, #FF7E00, #FFC300)",
    splashes: [
      "src/assets/splash4.svg",
      "src/assets/splash5.svg",
    ],
  },
  {
    id: 3,
    title: "JJAJANG",
    image: "src/assets/71zuX2dAPYL.png",
    backgroundColor: "linear-gradient(135deg, #DAF7A6, #90EE90)",
    splashes: [
      "src/assets/splash6.svg",
      "src/assets/splash7.svg",
    ],
  },
  {
    id: 4,
    title: "HABANERO LIME",
    image: "src/assets/nudler-m-hot-chicken-smag-120g-samyang.png",
    backgroundColor: "linear-gradient(135deg, #FBCAFF, #FF30EA)",
    splashes: [
      "src/assets/splash8.svg",
      "src/assets/splash9.svg",
    ],
  },
];

const HeroSection = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">BULDAK FIRE NOODLES</h1>
      <div className="flavor-row">
        {ramenFlavors.map(({ id, title, image, backgroundColor, splashes }) => (
          <div key={id} className="flavor-card">
            {/* Tilted Background */}
            <div
              className="tilted-background"
              style={{ background: backgroundColor }}
            />
            {/* Grouped Ramen Image and Splashes */}
            <motion.div
              className="ramen-splash-group"
              whileHover={{
                y: -20, // Move upward
                scale: 1.1, // Enlarge group
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              {/* Splash Icons */}
              <div className="splash-icons">
                {splashes.map((splash, index) => (
                  <img
                    key={index}
                    src={splash}
                    alt={`Splash ${index + 1}`}
                    className="splash-svg"
                  />
                ))}
              </div>
              {/* Ramen Image */}
              <motion.img
                src={image}
                alt={title}
                className="ramen-image"
              />
            </motion.div>
            {/* Flavor Title */}
            <h2 className="flavor-title">{title}</h2>
          </div>
        ))}
      </div>
      {/* CTA Section */}
      <div className="cta-section">
        <h2 className="cta-title"></h2>
        <button className="cta-button">Order Now</button>
      </div>
    </section>
  );
};


export default HeroSection;

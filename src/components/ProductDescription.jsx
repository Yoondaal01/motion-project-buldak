import React from "react";
import "./ProductDescription.css";
import { motion } from "framer-motion";

const phrases = [
  "FIRE HOT",
  "CHEWY",
  "DELICIOUS",
  "FAST",
];

const ProductDescription = () => {
    const flipAnimation = {
        hidden: { opacity: 0, rotateX: -90 }, // Starts rotated downwards with opacity 0
        visible: (i) => ({
          opacity: 1,
          rotateX: 0, // Ends flat and visible
          transition: {
            duration: 1, // Duration of each line animation
            ease: "easeOut",
          },
        }),
      };

  return (
    <section className="product-description">
      <div className="text-center">
        {phrases.map((phrase, index) => (
          <motion.h1
            key={index}
            className="big-text"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }} // Triggers when 70% in view
            variants={flipAnimation}
          >
            {phrase}
          </motion.h1>
        ))}
      </div>
    </section>
  );
};

export default ProductDescription;

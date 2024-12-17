import React from "react";
import "./FlavourSection.css";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    text: "Step 1: Boil the water.",
    pieces: [
      { id: 1, image: "src/assets/pot-4.png", position: { x: -40, y: -30 } },
      { id: 2, image: "src/assets/pot-2.png", position: { x: -70, y: -30 } },
      { id: 3, image: "src/assets/pot-3.png", position: { x: -70, y: -20 } },
    ],
  },
  {
    id: 2,
    text: "Step 2: Add the noodles and cook for 5 minutes.",
    pieces: [
      { id: 1, image: "src/assets/pot-4.png", position: { x: -40, y: -10 }, zIndex: 1 },
      { id: 2, image: "src/assets/noodles-3.png", position: { x: -70, y: 0 }, zIndex: 1000 },
      { id: 3, image: "src/assets/noodles-2.png", position: { x: -70, y: 5 }, zIndex: 2 },
      { id: 4, image: "src/assets/noodles-1.png", position: { x: -70, y: 5 }, zIndex: 2 },
      { id: 5, image: "src/assets/pot-3.png", position: { x: -70, y: 10 }, zIndex: 4 },
    ],
  },
  {
    id: 3,
    text: "Step 3: Drain the water, add the SAUCE.",
    pieces: [
      { id: 1, image: "src/assets/sauce-2.png", position: { x: -70, y: 0 }, zIndex: 1 },
      { id: 2, image: "src/assets/sauce-3.png", position: { x: -70, y: 0 } },
      { id: 3, image: "src/assets/noodles-1.png", position: { x: -70, y: 0 } },
      { id: 4, image: "src/assets/pot-3.png", position: { x: -70, y: 5 } },
    ],
  },
  {
    id: 4,
    text: "Step 4: ENJOY FIRE SPICY!",
    pieces: [
      { id: 1, image: "src/assets/ready-3.png", position: { x: -170, y: -40 } },
      { id: 2, image: "src/assets/ready-2.png", position: { x: -170, y: -20 }, zIndex: 1 },
      { id: 3, image: "src/assets/ready-1.png", position: { x: -170, y: -20 } },
    ],
  },
];

// Parent container animation with staggerChildren
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay of 0.3s between each child
    },
  },
};

// Child animation variants
const pieceVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FlavourSection = () => {
  return (
    <section className="flavour-section">
      {steps.map((step) => (
        <div key={step.id} className="step-container">
          {/* Step Text */}
          <h2 className="step-text">{step.text}</h2>

          {/* Parent container with staggerChildren for each step */}
          <motion.div
            className="puzzle-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {step.pieces.map((piece) => (
              <motion.img
                key={piece.id}
                src={piece.image}
                alt={`Step ${step.id} Piece ${piece.id}`}
                className="puzzle-piece"
                variants={pieceVariants}
                style={{
                  position: "absolute",
                  top: piece.position.y,
                  left: piece.position.x,
                  zIndex: piece.zIndex || 0,
                }}
              />
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default FlavourSection;

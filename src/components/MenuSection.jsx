import React from "react";
import { motion } from "framer-motion";

const ramenTypes = [
  { id: 1, name: "Shoyu Ramen", image: "/images/shoyu.jpg" },
  { id: 2, name: "Miso Ramen", image: "/images/miso.jpg" },
  { id: 3, name: "Tonkotsu Ramen", image: "/images/tonkotsu.jpg" },
];

const MenuSection = () => {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {ramenTypes.map((ramen) => (
          <motion.div
            key={ramen.id}
            className="menu-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={ramen.image} alt={ramen.name} />
            <h3>{ramen.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

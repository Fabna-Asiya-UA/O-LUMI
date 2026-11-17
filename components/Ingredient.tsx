
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Leaf } from "lucide-react";
import "./Ingredient.css";

const ingredients = [
  {
    number: "01",
    name: "Aloe Vera",
    description: "A gentle botanical known for its soothing feel.",
  },
  {
    number: "02",
    name: "Hyaluronic Acid",
    description:
      "A hydration-focused ingredient that helps skin feel plump.",
  },
  {
    number: "03",
    name: "Vitamin C",
    description:
      "An antioxidant ingredient used in brightening skincare.",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="ingredients-section">

      <div className="ingredients-container">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="ingredients-visual"
        >
          <div className="ingredients-image-wrapper">
            <Image
              src="/images/ingredients.png"
              alt="Botanical skincare ingredients"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="ingredients-image"
            />
          </div>

          {/* Floating Badge */}
          <div className="ingredients-badge">
            <Leaf size={23} strokeWidth={1.3} />

            <span>
              NATURE
              <br />
              INSPIRED
            </span>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="ingredients-content"
        >
          <p className="ingredients-label">
            THE GOODNESS WITHIN
          </p>

          <h2 className="ingredients-heading">
            Ingredients
            <br />
            <span>with intention.</span>
          </h2>

          <p className="ingredients-description">
            We believe skincare should feel simple and thoughtful.
            Discover ingredients selected for their role in a gentle,
            everyday ritual.
          </p>

          {/* Ingredient List */}
          <div className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="ingredient-item"
              >
                <span className="ingredient-number">
                  {ingredient.number}
                </span>

                <div className="ingredient-info">
                  <h3>{ingredient.name}</h3>
                  <p>{ingredient.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy Link */}
          <a href="#story" className="ingredients-link">
            Discover our philosophy
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

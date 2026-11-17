
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import "./Philosophy.css";

export default function Philosophy() {
  return (
    <section id="story" className="philosophy-section">
      <div className="philosophy-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="philosophy-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="philosophy-label">
            A LITTLE ABOUT US
          </p>

          <h2 className="philosophy-heading">
            Beauty in
            <br />
            <span>the everyday.</span>
          </h2>

          <p className="philosophy-description">
            O&apos;LUMI is inspired by the beauty of everyday rituals. We
            believe caring for your skin should never feel complicated. It
            should feel personal, peaceful and beautifully simple.
          </p>

          <a href="#contact" className="philosophy-link">
            GET TO KNOW US
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="philosophy-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="philosophy-image-wrapper">
            <Image
              src="/images/story.jpeg"
              alt="O'LUMI skincare lifestyle and brand story"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="philosophy-image"
            />
          </div>

          <span className="philosophy-image-logo">
            O&apos;LUMI
          </span>
        </motion.div>
      </div>
    </section>
  );
}

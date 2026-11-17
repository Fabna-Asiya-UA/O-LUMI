
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 55]);

  return (
    <section id="home" ref={heroRef} className="hero">

      {/* Background decoration */}
      <div className="hero-circle hero-circle-one" />
      <div className="hero-circle hero-circle-two" />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div style={{ y: textY }} className="hero-content">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-eyebrow"
          >
            <span />
            <p>THE ART OF EVERYDAY SKINCARE</p>
          </motion.div>

          <div className="hero-heading-wrapper">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hero-heading"
            >
              Beauty
              <br />
              in every
              <br />
              <span>ritual.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-description"
          >
            Discover a slower, softer approach to skincare.
            Thoughtfully selected ingredients and everyday
            rituals designed to celebrate your natural glow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-actions"
          >
            <a href="#shop" className="hero-primary-button">
              Explore collection
              <ArrowUpRight size={16} className="hero-button-icon" />
            </a>

            <a href="#philosophy" className="hero-secondary-link">
              Our philosophy
              <span />
            </a>
          </motion.div>

          {/* Bottom details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hero-details"
          >
            <div>
              <p className="hero-detail-number">09</p>
              <p className="hero-detail-label">CURATED PRODUCTS</p>
            </div>

            <div>
              <p className="hero-detail-number">Daily</p>
              <p className="hero-detail-label">SKINCARE RITUALS</p>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.3,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hero-visual"
        >
          <motion.div style={{ y: imageY }} className="hero-image-area">

            {/* Main image */}
            <div className="hero-image-frame">
              <Image
                src="/images/hero.jpeg"
                alt="O'LUMI luxury skincare collection"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="hero-main-image"
              />

              <div className="hero-image-overlay" />

              <div className="hero-image-caption">
                <p>DISCOVER O'LUMI</p>
                <span>Naturally you.</span>
              </div>
            </div>

            {/* Floating circular detail */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="hero-floating-circle"
            >
              <div>
                <Sparkles size={17} />
                <span>
                  PURE
                  <br />
                  BEAUTY
                  <br />
                  EVERY DAY
                </span>
              </div>
            </motion.div>

            {/* Floating product note */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="hero-floating-note"
            >
              <p>YOUR DAILY RITUAL</p>
              <span>A little love for your skin.</span>
              <div />
            </motion.div>

          </motion.div>

          <div className="hero-vertical-text">
            THE O'LUMI EXPERIENCE — EST. WITH LOVE
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <a href="#shop" className="hero-scroll-bar">
        <span>
          <ArrowDown size={15} />
          SCROLL TO DISCOVER
        </span>

        <span className="hero-scroll-caption">
          O'LUMI — SKINCARE, REIMAGINED
        </span>
      </a>

    </section>
  );
}

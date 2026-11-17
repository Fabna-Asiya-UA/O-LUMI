
"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ananya",
    location: "Kochi",
    review:
      "I love how simple and beautiful the skincare routine feels. The products look lovely on my shelf too.",
  },
  {
    name: "Meera",
    location: "Calicut",
    review:
      "The whole experience feels thoughtful and elegant. I really enjoy making time for my skincare routine.",
  },
  {
    name: "Diya",
    location: "Thrissur",
    review:
      "Beautiful presentation and a lovely concept. O'LUMI makes everyday self-care feel special.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* HEADER */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="testimonials-label">KIND WORDS</p>

          <h2 className="testimonials-heading">
            A little love
            <br />
            <span>from our community.</span>
          </h2>

          <p className="testimonials-intro">
            The little moments, thoughtful rituals, and kind words
            that make everything worthwhile.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="testimonial-card"
            >
              <div className="testimonial-top">
                <Quote
                  size={32}
                  strokeWidth={1}
                  className="testimonial-quote-icon"
                />

                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>
              </div>

              <p className="testimonial-review">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="testimonial-divider" />

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="testimonial-name">
                    {item.name}
                  </h3>

                  <p className="testimonial-location">
                    {item.location}, Kerala
                  </p>
                </div>

                <span className="testimonial-number">
                  0{index + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="testimonials-note">
          Demo testimonials — replace these with genuine customer
          feedback before publishing.
        </p>
      </div>
    </section>
  );
}

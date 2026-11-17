
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Thank you! Connect a newsletter service to save your signup."
    );
    setEmail("");
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <p className="newsletter-label">A NOTE FROM O&apos;LUMI</p>

        <h2 className="newsletter-heading">
          Your inbox deserves
          <br />
          <span>a little glow.</span>
        </h2>

        <p className="newsletter-description">
          Join our community for skincare inspiration, thoughtful tips and
          updates from O&apos;LUMI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="newsletter-form"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setMessage("");
            }}
            placeholder="Enter your email address"
            aria-label="Email address"
            required
            className="newsletter-input"
          />

          <button type="submit" className="newsletter-button">
            Subscribe <ArrowUpRight size={15} />
          </button>
        </form>

        {message && (
          <p
            aria-live="polite"
            className="newsletter-message"
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

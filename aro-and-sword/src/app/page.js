'use client'
import 'retro.css/css/index.min.css';
import { motion } from "motion/react";
// import { useState } from "react";
import countapi from "countapi-js";
import React, { useState, useEffect } from "react";
import Bingo from "./components/Bingo";
import { ThemeProvider } from "app/components/theme-provider"


export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);


  const toggleTheme = () => {
    const newDarkMode = !darkMode; // Get the new state first
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark-mode", newDarkMode); // Use the new state
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={`row center-x space-x-15 ${darkMode ? "dark-mode" : ""}`}>
      {/* Theme Toggle Button */}

      {/* <button onClick={toggleTheme} className="button is-info" >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}

      {/* <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      > */}

      {/* Hero Section */}
      <motion.div
        className="row mb-5 align-items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="col-lg-6">
          <motion.img
            src="/images/icon30.png"
            alt="Heart Icon"
            className="hero-icon"
            loading="lazy"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          />
          <h1 className="hero-title">Welcome to the Aromantic Community</h1>
          <p className="lead">
            Explore resources, share stories, and connect with others on the aromantic spectrum.
          </p>
          {/* <a href="/what-is-aromanticism" className="btn-custom">
            Learn More
          </a> */}

        </div>
        <div className="col-lg-6">
          <motion.img
            src="/images/hero-image-4.png"
            alt="Aromantic Community"
            className="img-fluid rounded"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>

      {/* Bingo Section */}

      <Bingo />

      {/* Information Sections */}
      <motion.section
        className="row mb-5 align-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="col-lg-6">
          <h2 className="mb-4">What's Aromanticism?</h2>
          <p className="lead">
            Learn more about aromanticism and what it means to be on the aromantic spectrum.
            Understand the unique experiences and perspectives of aromantic individuals.
          </p>
          <a href="/what-is-aromanticism" className="button is-success">
            Explore More
          </a>
        </div>
        <div className="col-lg-6">
          <img
            src="/images/pic1.png"
            alt="Aromantic Community"
            className="img-fluid rounded"
            loading="lazy"
          />
        </div>
      </motion.section>

      <motion.section
        className="row mb-5 align-items-center flex-row-reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="col-lg-6">
          <h2 className="mb-4">Dos and Don'ts</h2>
          <p className="lead">
            Understand how to interact respectfully with the aromantic community.
            Learn about supportive communication and inclusive practices.
          </p>
          <a href="/dos-and-donts" className="button is-success">
            Learn More
          </a>

        </div>
        <div className="col-lg-6">
          <img
            src="/images/dos-donts-8.png"
            alt="Community Guidelines"
            className="img-fluid rounded"
            loading="lazy"
          />
        </div>
      </motion.section>

      <motion.section
        className="row mb-5 align-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="col-lg-6">
          <h2 className="mb-4">Your Story Matters</h2>
          <p className="lead">
            Share your experiences or read inspiring stories from others in the aromantic community.
            Every narrative contributes to understanding and visibility.
          </p>
          <a href="/your-story" className="button is-success">
            Share Your Story
          </a>
        </div>
        <div className="col-lg-6">
          <motion.img
            src="/images/your-story-4.png"
            alt="Community Stories"
            className="img-fluid rounded"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.section>
      {/* </ThemeProvider> */}
    </div>
  );
}

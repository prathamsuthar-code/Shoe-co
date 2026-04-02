import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const AboutUs = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Step Into Style
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-gray-400 max-w-xl"
        >
          We bring you premium sneakers from the world’s top brands —
          curated for comfort, performance, and street-ready style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Collection
          </button>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-400 leading-relaxed">
            We are a multi-brand sneaker destination built for those who live
            and breathe footwear culture. From everyday comfort to high-end
            streetwear, we offer collections from Nike, Adidas, Puma, and more.
          </p>
        </div>

        <motion.img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="shoes"
          className="rounded-2xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </motion.section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 md:px-20">
        <motion.h2
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {["Top Brands", "Premium Quality", "Fast Delivery"].map(
            (title, i) => (
              <motion.div
                key={i}
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition"
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400">
                  We ensure every pair meets high standards of comfort,
                  durability, and modern style.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="py-16 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-16 text-3xl font-bold whitespace-nowrap"
        >
          <span>Nike</span>
          <span>Adidas</span>
          <span>Puma</span>
          <span>New Balance</span>
          <span>Reebok</span>
          <span>Asics</span>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready to Upgrade Your Style?
        </h2>
        <p className="text-gray-400 mb-8">
          Discover sneakers that define your personality.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </motion.section>
    </div>
  );
};

export default AboutUs;

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Linkedin, Instagram, Dribbble } from "lucide-react";

// --- Using your original asset paths ---

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

// --- COUNTER COMPONENT ---
function Counter({ from, to }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value);
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);

  return <span ref={nodeRef} />;
}

// Main component that assembles the page
export const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <ImpactSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

// --- SECTION COMPONENTS ---

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[75rem] h-[55rem] bg-purple-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold max-w-4xl leading-tight sm:leading-none text-white uppercase tracking-wider"
      >
        Build a personal brand that gets you{" "}
        <span className="font-script text-purple-400 normal-case">
          credibility
        </span>{" "}
        in the next 90-120 days.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl"
      >
        We make it happen. NightCircuit Studios helps entrepreneurs and founders
        scale their personal brands with strategic design that brings them more
        leads and revenue.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all duration-300"
      >
        Book a call now
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        className="mt-6 flex items-center gap-4"
      >
        <div className="flex -space-x-2">
          <img
            className="h-8 w-8 rounded-full border-2 border-black"
            src="https://i.pravatar.cc/40?img=1"
            alt="Client 1"
          />
          <img
            className="h-8 w-8 rounded-full border-2 border-black"
            src="https://i.pravatar.cc/40?img=2"
            alt="Client 2"
          />
          <img
            className="h-8 w-8 rounded-full border-2 border-black"
            src="https://i.pravatar.cc/40?img=3"
            alt="Client 3"
          />
        </div>
        <p className="text-sm font-medium text-gray-400">
          50+ Clients Satisfied
        </p>
      </motion.div>
    </section>
  );
};

const ImpactSection = () => {
  const stats = [
    { from: 0, to: 30, suffix: "+", label: "Million Views Generated" },
    { from: 0, to: 35, suffix: "+", label: "Thousand Followers in 5 Months" },
    { from: 0, to: 2, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section className="py-20 sm:py-28 px-4">
      <h2 className="font-heading text-center text-5xl sm:text-6xl font-bold uppercase tracking-wider">
        Our{" "}
        <span className="font-script text-purple-400 normal-case">Impact</span>{" "}
        So Far
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center mt-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="font-impact text-7xl text-gray-200">
              <Counter from={stat.from} to={stat.to} />
              {stat.suffix}
            </p>
            <p className="mt-2 text-lg text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      type: "image",
      title: "Project Chrome",
      description: "Branding for a B2B AI Startup",
      src: image1,
    },
    {
      type: "image",
      title: "Glitch Apparel",
      description: "Merchandise design",
      src: image2,
    },
    {
      type: "image",
      title: "Brutalist Web",
      description: "UI/UX for a tech firm",
      src: image3,
    },
    {
      type: "image",
      title: "Void Logos",
      description: "Logo suite for new media",
      src: image4,
    },
  ];

  return (
    <section id="casestudies" className="py-20 sm:py-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-heading text-5xl sm:text-6xl font-bold uppercase tracking-wider">
          Some of Our{" "}
          <span className="font-script text-purple-400 normal-case">
            Hand-Crafted Pieces.
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Our system and process build a powerful brand presence and turn
          followers into customers.
        </p>
      </motion.div>
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-[9/16] rounded-lg overflow-hidden group"
          >
            {project.type === "video" ? (
              <video
                src={project.src}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={project.src}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-base text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const processSteps = [
    {
      name: "Layout the Growth Plan",
      description:
        "We research trends, analyze your brand, and create a monthly plan for organic growth that works with your schedule and goals.",
    },
    {
      name: "Identity tailored just for you",
      description:
        "We design custom colors and aesthetics to make your brand unique. Our team conducts research to brainstorm ideas and build systems that align with your goals.",
    },
    {
      name: "Crafting Content",
      description:
        "Using our storytelling expertise, we create impactful scripts designed to go viral and provide value to your audience.",
    },
    {
      name: "Engaging Edits",
      description:
        "Our professional editors stay updated on the latest trends to deliver best-in-class edits for maximum impact.",
    },
    {
      name: "Distribution and Funnel Steps",
      description:
        "Our managers distribute your content, optimize it for visibility, and set up automations and funnels to generate leads from your audience.",
    },
  ];
  return (
    <section id="process" className="py-20 sm:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="font-heading text-5xl sm:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight uppercase tracking-wider px-4"
      >
        Our Sophisticated System and Process to Make Your Brand Go{" "}
        <span className="font-script text-purple-400 normal-case">
          Big-Title
        </span>
      </motion.h2>
      <div className="mt-20 w-full px-6 sm:px-12 md:px-24">
        <div className="relative">
          <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-800" />
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative pl-12 mb-12 flex items-start gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-white transform -translate-x-1/2 ring-4 ring-black z-10" />
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-8">
                <h3 className="md:col-span-1 text-2xl font-bold text-purple-400">
                  {step.name}
                </h3>
                <p className="md:col-span-2 text-lg text-gray-400 mt-2 md:mt-0">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Roopesh Vetcha",
      title: "Entrepreneur & Agency Owner",
      quote:
        "One thing I love about NightCircuit is the systems they have in place. Makes it very easy for me to navigate, and they are super supportive.",
    },
    {
      name: "Ujjwal",
      title: "Founder, MarketInc.",
      quote:
        "One of the best things I've done to save a lot of time and energy as an agency owner was working with NightCircuit. The quality of the scripts and the strategies are just mind-blowing!",
    },
    {
      name: "Anthony Riggio",
      title: "Venture Capitalist",
      quote:
        "NightCircuit never disappoints me with their strategies and comes in with creative ideas, which always go viral!",
    },
    {
      name: "Vashist",
      title: "Content Creator",
      quote:
        "Their end-to-end personal branding services have truly made my life easier, allowing me to effortlessly manage both my business and personal brand.",
    },
    {
      name: "Client Five",
      title: "Tech CEO",
      quote:
        "The branding they delivered was top-notch and perfectly captured our company's ethos. The team was professional and delivered on time.",
    },
    {
      name: "Client Six",
      title: "Startup Founder",
      quote:
        "An incredible experience from start to finish. They are true partners in design and strategy.",
    },
  ];
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 sm:py-28">
      <div className="text-center mb-16 px-4">
        <p className="text-lg font-medium text-gray-400">
          Don't take our word for it
        </p>
        <h2 className="font-heading text-5xl sm:text-6xl font-bold mt-2 uppercase tracking-wider">
          Our happy clients say about us
        </h2>
      </div>
      <div className="relative w-full overflow-hidden horizontal-fade">
        <div className="flex animate-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] sm:w-[450px] bg-gray-900/80 p-8 rounded-lg border border-white/10 mx-4"
            >
              <div className="flex items-start gap-4">
                <img
                  src={`https://i.pravatar.cc/48?img=${(index % 6) + 4}`}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-300">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-8 pt-20 sm:pt-28 pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold">nightcircuitstudios</h3>
          <p className="mt-2 text-base text-gray-400">
            Empowering Your Projects, Enhancing Your Success, Every Step of the
            Way.
          </p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Dribbble size={20} />
            </a>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-around gap-8 sm:gap-0">
          <div>
            <h4 className="font-semibold text-base text-white">Sections</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#casestudies"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  Process
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base text-white">
              Start a Conversation
            </h4>
            <p className="mt-2 text-base text-gray-400">
              Ready to build something different?
            </p>
            <a
              href="mailto:commissions@nightcircuit.studios"
              className="text-purple-400 hover:text-purple-300 transition-colors inline-block text-base break-all"
            >
              commissions@nightcircuit.studios
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center text-xs text-gray-500 border-t border-white/10 pt-8">
        <p>© 2025 NightCircuit Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

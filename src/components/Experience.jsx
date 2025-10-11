import "./Experience.css";
import { motion } from "framer-motion";

export function Experience() {
  const techStack = [
    {
      name: "HTML",
      experience: "Experienced",
      img: "/portfolio/html5-logo.png",
      alt: "HTML",
    },
    {
      name: "CSS",
      experience: "Experienced",
      img: "/portfolio/css3-logo.webp",
      alt: "CSS",
    },
    {
      name: "Javascript",
      experience: "Experienced",
      img: "/portfolio/javascript-logo.png",
      alt: "Javascript",
    },
    {
      name: "React.js",
      experience: "Experienced",
      img: "/portfolio/react-logo.png",
      alt: "React",
    },
    {
      name: "Tailwind CSS",
      experience: "Intermediate",
      img: "/portfolio/tailwindcss.jpg",
      alt: "Tailwind CSS",
    },
    {
      name: "Next.js",
      experience: "Intermediate",
      img: "/portfolio/nextjs.jpg",
      alt: "Next.js",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="experience-subtitle">Explore My</p>
        <h1 className="experience-title">Experience</h1>
      </motion.div>

      <motion.div
        className="experience-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="category-title">Frontend Development</h2>

        <div className="tech-grid">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              className="tech-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={tech.img} alt={tech.alt} />
              <div className="tech-info">
                <h3>{tech.name}</h3>
                <p>{tech.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Award, Check } from "lucide-react";
import leafSprig from "../assets/leaf-sprig.svg";
import leafCluster from "../assets/leaf-cluster.svg";
import "./About.css";

const skills = [
  { name: "React.js", level: 95 },
  { name: "JavaScript / TypeScript", level: 90 },
  {name: "Python", level: 88 },
  { name: "Tailwind CSS", level: 93 },
  { name: "Next.js", level: 88 },
  { name: "React Native", level: 85 },
  { name: "WordPress", level: 78 },
];

const traits = [
  "Innovations",
  "Excellence",
  "Creativity",
  "Experience",
  "Passion",
  "Problem-solving",
];

export function About() {
  return (
    <section className="about" id="about">
      {/* Botanical artwork stays behind the readable content. */}
      <div className="about-vector-bg" aria-hidden="true">
        <img className="about-leaf about-leaf-sprig" src={leafSprig} alt="" />
        <img className="about-leaf about-leaf-cluster" src={leafCluster} alt="" />
      </div>

      <div className="about-floating-label" aria-hidden="true">ABOUT</div>
      
      <div className="shell about-inner">
        <motion.div
          className="about-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 36 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <span className="section-eyebrow">About me</span>
          <h2 className="section-title">
            My goal is to craft products that <em>feel</em> as good as they work.
          </h2>
          <p className="about-lead">
            A website is more than a digital presence — it&rsquo;s a tool that tells your
            story and moves your business forward. I&rsquo;m <strong>Israel Ojeleye</strong>,
            a Frontend &amp; Mobile Developer passionate about turning creative ideas
            into fast, interactive, and visually engaging experiences across web and
            mobile.
          </p>
          <p className="about-body">
            I write clean, maintainable code with a focus on performance, accessibility
            and thoughtful motion. I&rsquo;m always exploring new tools and trends to stay
            ahead — and to make products people genuinely enjoy using.
          </p>

          <div className="about-traits">
            {traits.map((trait) => (
              <span key={trait}>
                <Check size={13} /> {trait}
              </span>
            ))}
          </div>

          <a href="#experience" className="about-readmore">
            My tech stack <span className="about-arrow">&rarr;</span>
          </a>
        </motion.div>

        <motion.div
          className="about-skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="about-badge"
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Award size={18} />
            <span>
              <strong>Clean code</strong>
              performance &amp; best practices
            </span>
          </motion.div>

          {skills.map((skill) => (
            <motion.div
              className="skill-row"
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 26 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="skill-row-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}

          <p className="about-note">
            Honest about weak spots too — always leveling up the sharpest tool in the box.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
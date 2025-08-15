import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
  viewport: { once: true },
});

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        {/* Text */}
        <div>
          <motion.p
            {...fadeUp(0.0)}
            className="text-sm font-medium tracking-wide text-blue-600 uppercase"
          >
            Data Science • ML • EDA • Web Dev 
          </motion.p>

          <motion.h1
            {...fadeUp(0.05)}
            className="mt-1 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Pritkumar Patel
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-3 text-lg text-slate-700 leading-relaxed"
          >
            <b>MSc Data Science</b> student with a B.E. in Information Technology. I am building 
            practical ML solutions and dashboards, and bring a solid foundation in web
            development and cybersecurity. Currently focused on <b> model development,
            feature engineering, and clear, reproducible analysis</b>. <br />
             Passionate about photos,vlog and videos.

                      
                      
          </motion.p>

          {/* Quick highlights */}
          <motion.div
            {...fadeUp(0.15)}
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Key skills"
          >
            <span className="px-3 py-1 rounded-full text-sm bg-white/80 border border-blue-200">Supervised ML</span>
            <span className="px-3 py-1 rounded-full text-sm bg-white/80 border border-blue-200">EDA & Visualization</span>
            <span className="px-3 py-1 rounded-full text-sm bg-white/80 border border-blue-200">Python • Pandas • scikit‑learn</span>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.2)} className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="mailto:pritprivate1308@gmail.com"
              className="px-5 py-3 rounded-xl border border-blue-200 text-blue-700 font-medium hover:bg-blue-50"
            >
              Email Me
            </a>
            {/* Replace /CV.pdf once you add your resume to /public */}
            <a
              href="/resume_projects.pdf"
              target="_blank"
              className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Photo card */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex md:justify-end"
          aria-hidden="true"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-white/80 border border-slate-200 shadow-[0_10px_22px_rgba(15,23,42,0.08)] p-2">
            <img
              src="/p.jpg"  /* put your photo as public/portrait.jpg */
              alt="Portrait of Pritkumar Patel"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion, type Variants } from "framer-motion";

const education = [
  {
    degree: "MSc Data Science [70%]",
    school: "University of Gloucestershire",
    years: "2025 – 2026",
    details: [
      "Machine Learning & Optimisation",
      "Data Analysis & Visualisation Principles",
    ],
  },
  {
    degree: "BE in Information Technology [CGPA: 8.39/10]",
    school: "Gujarat Technological University",
    years: "2019 – 2023",
    details: [
      "Cyber Security, Web Development, UI/UX Testing, Data Structures & Algorithms, Mathematics, Programming Languages",
      "Thesis: Hospital Management Project using PHP & MySQL",
    ],
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="relative py-14 md:py-16">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -top-24 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 -z-10"
        style={{ background: "radial-gradient(closest-side,#93c5fd55,transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 -z-10"
        style={{ background: "radial-gradient(closest-side,#a5b4fc55,transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Education</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="rounded-2xl border border-blue-200/50 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-700">{edu.degree}</h3>
              <p className="italic text-blue-500">{edu.school}</p>
              <p className="text-gray-600 mb-2">{edu.years}</p>
              <ul className="list-disc list-inside text-gray-700">
                {edu.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion, type Variants } from "framer-motion";

const experience = [
  {
    role: "Front-End Developer & Lead Generator Intern",
    company: "Phoenix Technology, Gujarat (Startup)",
    years: "2023 – 2024",
    details: [
      "Generated and managed leads in Excel to support business growth.",
      "Designed and maintained client websites using HTML, CSS (Bootstrap), JavaScript, MySQL, and WIX.",
    ],
    proof:" public/phoenix Infotech .pdf",
  },
  {
    role: "Laravel Developer Intern",
    company: "Sudaksh Technologies",
    years: "2023 (12 weeks)",
    details: [
      "Built a hospital management system in Laravel and MySQL.",
      "Included appointment booking, user account access, blog modules.",
    ],
    proof: "/public/sudaksh internship certificate-1.pdf",
  },
  {
    role: "Data Analytics Intern",
    company: "IBM SkillBuild (Remote)",
    years: "2023 (12 weeks)",
    details: [
      "Credit card fraud detection using Python & Kaggle dataset.",
      "Performed EDA using Pandas, NumPy, Matplotlib, Seaborn.",
    ],
    proof: "public/IBM SkillsBuild Data Analytics Final Certificate (1).pdf",
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

export default function Experience() {
  return (
    <section id="experience" className="relative py-14 md:py-16">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -top-24 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 -z-10"
        style={{ background: "radial-gradient(closest-side,#fcd34d55,transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 -z-10"
        style={{ background: "radial-gradient(closest-side,#f8717155,transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Experience</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="rounded-2xl border border-blue-200/50 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-700">{exp.role}</h3>
              <p className="italic text-blue-500">{exp.company}</p>
              <p className="text-gray-600 mb-2">{exp.years}</p>
              <ul className="list-disc list-inside text-gray-700">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              {exp.proof && (
                <a
                  href={exp.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 font-medium hover:underline"
                >
                  📄 Verify Certificate
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

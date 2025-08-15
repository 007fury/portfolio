// src/components/Projects.tsx


import { motion, type Variants } from "framer-motion";

type Project = { title: string; description: string; link?: string; image: string };

const projects: Project[] = [
  {
    title: "Crop Recommendation System",
    description:
      "ML-powered crop prediction using soil & weather data; top accuracy with Random Forest.",
    link: "https://github.com/007fury/Crop_ML",
    image: "public/Img/crop.jpg",
  },
  {
    title: "Credit Card Default Prediction (Taiwan)",
    description:
      "Clustering + binary & multi-class classification, SHAP explainability, GA optimisation.",
    link: "https://github.com/007fury/creditcard_ml",
    image: "public/Img/credit.jpeg",
  },
  {
    title: "Ethical Society Simulation – Thrive Island",
    description:
      "Python simulation of wealth distribution, access, and governance trade‑offs (1% vs 99%).",
    link: "https://github.com/007fury/ETHICAL_SOCIETY",
    image: "public/Img/ethics].jpg",
  },
  {
    title: "Traffic Congestion Analysis – India",
    description:
      "Clustering, classification & visual analytics to locate hotspots and forecast flow.",
    link: "https://github.com/007fury/",
    image: "public/Img/trafiic.webp",
  },
  {
    title: "Hospital Management System",
    description:
      "Laravel & MySQL platform with appointments, patient records, and doctor management.",
    // link intentionally empty for now (shows 'Coming soon')
    image: "public/Img/hms.jpg",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function Card({ p }: { p: Project }) {
  const Inner = (
    <div
      className="relative h-64 rounded-2xl overflow-hidden border border-blue-200/50 shadow-sm transition group-hover:shadow-lg group-hover:-translate-y-0.5"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${p.image})` }}
        aria-hidden
      />
      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-slate-900/70
                   opacity-90 group-hover:opacity-80 transition"
        aria-hidden
      />
      {/* Content */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
        <div>
          <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
          <p className="mt-2 text-white/90">{p.description}</p>
        </div>

        {p.link ? (
          <span className="mt-4 inline-flex items-center gap-2 text-sky-300 font-medium">
            <span className="opacity-80 group-hover:opacity-100 transition">🔗</span>
            Check.
          </span>
        ) : (
          <span className="mt-4 inline-flex items-center gap-2 text-white/60">
            I dont have code for now, Check thesis fro that.
          </span>
        )}
      </div>
    </div>
  );

  // Make the whole card clickable only if link exists
  return p.link ? (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
      aria-label={`Open ${p.title} on GitHub`}
    >
      {Inner}
    </a>
  ) : (
    <div className="group block h-full" role="article" aria-label={`${p.title} (coming soon)`}>
      {Inner}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-14 md:py-16">
      {/* subtle decor */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-20 w-[460px] h-[460px] rounded-full blur-3xl opacity-30 -z-10"
        style={{ background: "radial-gradient(closest-side,#93c5fd55,transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-20 w-[520px] h-[520px] rounded-full blur-3xl opacity-30 -z-10"
        style={{ background: "radial-gradient(closest-side,#a5b4fc55,transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center md:text-left text-blue-800 mb-8">
          Projects
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={item}>
              <Card p={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

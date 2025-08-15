// src/components/Certifications.tsx
import { motion, type Variants } from "framer-motion";

type Cert = {
  title: string;
  issuer: string;
  date: string;
};

const certs: Cert[] = [
  {
    title: "Arduino Training",
    issuer: "Sigma Institute of Engineering",
    date: "Aug 2023",
  },
  {
    title: "Python Programming – National Quiz",
    issuer: "Sigma Institute of Engineering",
    date: "Aug 2023",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Sept 2023",
  },
  {
    title: "Introduction to Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "Sept 2023",
  },
  {
    title: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial Project – IIT Bombay",
    date: "2023",
  },
  {
    title: "Data Science 101",
    issuer: "CognitiveClass.ai / IBM",
    date: "2024",
  },
  {
    title: "CCNA Certificate",
    issuer: "Udemy",
    date: "2024",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-14 md:py-16">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full blur-3xl opacity-30 -z-10"
        style={{
          background: "radial-gradient(closest-side,#93c5fd55,transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-30 -z-10"
        style={{
          background: "radial-gradient(closest-side,#a5b4fc55,transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center md:text-left text-blue-800 mb-8">
          Certifications
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certs.map((c) => (
            <motion.div key={c.title} variants={item}>
              <div
                className="h-full rounded-2xl border border-blue-200/50
                           bg-white/70 backdrop-blur-sm
                           p-6 shadow-sm transition
                           hover:shadow-lg hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-semibold text-blue-700 leading-snug">
                  {c.title}
                </h3>
                <p className="mt-1 text-slate-600 text-sm">
                  {c.issuer}
                </p>
                <p className="text-slate-500 text-xs">
                  {c.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Single verification link */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/007fury/documents-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-medium hover:underline"
          >
            📄 Verified – All Certifications
          </a>
        </div>
      </div>
    </section>
  );
}

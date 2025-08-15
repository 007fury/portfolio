import { motion } from "framer-motion";

const Skills = () => (
  <motion.section
    id="skills"
    className="section"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-8"> Skills</h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-blue-700 font-semibold mb-2">Programming Languages</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>Python</li><li>JavaScript</li><li>PHP</li><li>SQL</li><li>HTML, CSS (Bootstrap)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-700 font-semibold mb-2">Data Science & Analytics</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>Pandas, NumPy</li><li>scikit‑learn</li><li>Seaborn, Matplotlib</li><li>EDA, ML (Supervised/Unsupervised)(Gaining knowledge  )</li><li>Jupyter, Google Colab</li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-700 font-semibold mb-2">Frameworks & Tools</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>Laravel,</li><li>WIX</li><li>Office 365, Excel (Analysis)</li>
          </ul>
          <h3 className="text-blue-700 font-semibold mt-6 mb-2">Databases</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>MySQL</li>
          </ul>
          <h3 className="text-blue-700 font-semibold mt-6 mb-2">Cybersecurity</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>Kali Linux, Parrot OS,Linux </li><li>Nmap, SQLmap</li><li>Metasploit, Netcat, Burp Suite ( intermediate knowledge)</li>
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Skills;

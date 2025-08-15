import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    id="contact"
    className="section"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="container text-center">
      <h2 className="h2">Contact</h2>

      <p className="text-gray-700 mb-6">
        Let’s connect! Reach me on any of the platforms below.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="mailto:pritprivate1308@gmail.com" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">📧 Email</a>
        <a href="https://www.linkedin.com/in/prit-patel-6b999b251" target="_blank" className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600">🔗 LinkedIn</a>
        <a href="https://github.com/007fury" target="_blank" className="px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black">🐱 GitHub</a>
        <a href="https://www.instagram.com/prittt___13?igsh=cGx6aGV6MDJ0dDh1" target="_blank" className="px-5 py-3 rounded-xl border border-blue-200 text-blue-700 hover:bg-blue-50">Instagram</a>
      </div>
    </div>
  </motion.section>
);

export default Contact;

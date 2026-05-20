function Skills() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b pb-2">
        Key Skills
      </h2>

      <h3 className="text-lg font-semibold text-blue-700 mb-2">Hard Skills</h3>
      <ul className="list-disc list-inside mb-4 text-slate-700">
        <li>SQL (creating tables, basic queries, JOIN)</li>
        <li>Corporate network design (Cisco Packet Tracer)</li>
        <li>Windows (user level)</li>
        <li>MS Office (Word, PowerPoint, basic Excel)</li>
      </ul>

      <h3 className="text-lg font-semibold text-blue-700 mb-2">Soft Skills</h3>
      <ul className="list-disc list-inside text-slate-700">
        <li>Responsibility</li>
        <li>Teamwork</li>
        <li>Attention to detail</li>
        <li>Ability to learn fast</li>
        <li>Analytical thinking</li>
      </ul>
    </section>
  );
}

export default Skills;
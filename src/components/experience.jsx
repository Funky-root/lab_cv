function Experience() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b pb-2">
        Academic Projects
      </h2>

      <article className="mb-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Corporate Network Design (Course Project)
        </h3>

        <ul className="list-disc list-inside text-slate-700">
          <li>Developed the structure of a corporate network</li>
          <li>Configured routing and VLANs</li>
          <li>Implemented basic network security mechanisms</li>
          <li>Simulated the network in Cisco Packet Tracer</li>
          <li>Analyzed potential vulnerabilities</li>
        </ul>
      </article>

      <article>
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Web Application with Database (Course Project)
        </h3>

        <ul className="list-disc list-inside text-slate-700">
          <li>Designed the database structure</li>
          <li>Created tables and implemented CRUD operations</li>
          <li>Wrote SQL queries for data management</li>
          <li>Integrated the database with a web interface</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
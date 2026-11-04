const projects = [
  {
    name: 'Fine-tuning LayoutLMv3 for FUNSD',
    category: 'Capstone project',
    description: 'Fine-tuned a document-understanding model to extract information from complex documents by combining natural language processing and computer vision. Evaluated it on 220 invoice samples against ground truth.',
    outcome: '91% recall · ~90% F1 score',
    technologies: ['Python', 'LayoutLMv3', 'FUNSD', 'NLP', 'Computer vision'],
  },
  {
    name: 'Intern Management System',
    category: 'Marpu Foundation · 24-hour hackathon',
    description: 'Led a seven-person team to build a management platform for interns and volunteers. Designed an intuitive interface focused on connecting people with real-world social-impact work.',
    outcome: 'Contributed to a 50% increase in the organization’s ability to attract and retain capital donors; UI/UX work increased engagement by 20%.',
    technologies: ['Web development', 'UI/UX', 'Team leadership'],
  },
  {
    name: 'JhumkaHut E-commerce Website',
    category: 'Freelance project',
    description: 'Built a jewelry e-commerce website with Redux state management and a Razorpay payment gateway, collaborating with stakeholders on a clear and intuitive shopping experience.',
    outcome: '15% faster page loads · 20% increase in completed transactions · 30% fewer customer support inquiries',
    technologies: ['Redux', 'Razorpay', 'E-commerce'],
  },
  {
    name: 'Medium-Frequency Trading System',
    category: 'Focus Energy Limited · Internship',
    description: 'Created an end-to-end trading system with a Flask backend, real-time financial data over WebSockets, automated trading, and live charts.',
    outcome: 'Improved trading accuracy by 95%.',
    technologies: ['Python', 'Flask', 'WebSockets', 'Real-time data'],
  },
];

const Projects = () => {
  return (
    <section className="max-container">
      <header className="mb-12">
        <p className="pink-gradient_text font-semibold">Selected work</p>
        <h1 className="head-text mt-2">Projects</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          A selection of projects across document AI, web development, e-commerce,
          and real-time systems.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.name} className="flex h-full flex-col rounded-2xl border border-white/70 bg-white/75 p-6 shadow-card">
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700">{project.category}</span>
              <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">{project.name}</h2>
            <p className="mt-4 flex-1 leading-7 text-slate-700">{project.description}</p>
            <p className="mt-5 border-l-2 border-pink-400 pl-3 font-medium leading-6 text-slate-800">{project.outcome}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
              {project.technologies.map((technology) => (
                <li key={technology} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600">{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

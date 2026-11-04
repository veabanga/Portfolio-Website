const experience = [
  {
    role: 'Analyst, Application Developer',
    company: 'Schneider Electric',
    dates: 'Jun 2025 – Sep 2026',
    details: [
      "Built user-facing features for the Download Center on Schneider Electric's se.com website using Svelte, and resolved Jira tickets twice as fast through deployment automation and GitHub Copilot.",
      'Worked with backend teams using AWS, Java, and Python to integrate frontend features, and contributed to an internal ASCO product tracker built with .NET.',
    ],
  },
  {
    role: 'GET',
    company: 'Schneider Electric',
    dates: 'Aug 2024 – May 2025',
    details: [
      'Modernized legacy processes with Python and Tableau dashboards, automating manual analysis and saving time across the function.',
      'Implemented supply-chain capabilities including Golden Screw and PB Specialized Supply Chain to improve inventory management and order fulfillment.',
    ],
  },
  {
    role: 'GSC Intern',
    company: 'Schneider Electric',
    dates: 'Jan 2024 – Jul 2024',
    details: [
      'Analyzed customer satisfaction, improved survey response and complaint-tracking processes, and built Excel dashboards with automated Python data refreshes.',
    ],
  },
  {
    role: 'Freelance Software Developer',
    company: 'JhumkaHut',
    dates: 'Jun 2023 – Jul 2023',
    details: [
      'Developed a jewelry e-commerce website, integrated Razorpay checkout, and used Redux for state management.',
      'Improved page load time by 15%; the checkout changes contributed to a 20% increase in completed transactions.',
    ],
  },
  {
    role: 'Quant Developer Intern',
    company: 'Focus Energy Limited',
    dates: 'Jun 2022 – Jul 2022',
    details: [
      'Built an end-to-end medium-frequency trading system with a Flask backend, real-time WebSocket data, automated trading, and live charts.',
    ],
  },
];

const education = [
  {
    institution: 'Universität Stuttgart',
    degree: 'MSc Computer Science — Autonomous Systems',
    details: 'Stuttgart, Germany · Expected Sep 2028',
  },
  {
    institution: 'Thapar Institute of Engineering and Technology',
    degree: 'BTech Electrical and Computer Engineering',
    details: 'Patiala, India · Jun 2024 · CGPA 9.0 (German grade 1.5)',
  },
];

const skillGroups = [
  {
    label: 'Technical',
    skills: ['React.js', 'Node.js', 'Svelte', 'JavaScript', 'Python', 'C++', 'AWS', 'MySQL', 'MongoDB', 'HTML', 'CSS', 'Excel'],
  },
  {
    label: 'Ways of working',
    skills: ['Problem-solving', 'Adaptability', 'Communication', 'Collaboration', 'Attention to detail', 'Customer focus'],
  },
];

const About = () => {
  return (
    <section className="max-container">
      <header className="mb-14">
        <p className="pink-gradient_text font-semibold">A little about me</p>
        <h1 className="head-text mt-2">Building useful, thoughtful software.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          I’m Vea Banga, a software developer and Computer Science master’s student
          specializing in Autonomous Systems at Universität Stuttgart. My experience
          spans frontend development, backend integrations, data dashboards, and
          process automation. I enjoy working across teams to turn real user needs
          into reliable, intuitive products.
        </p>
      </header>

      <div className="grid gap-14">
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="subhead-text">Experience</h2>
          <div className="mt-6 space-y-5">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-card">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                  <span className="text-sm font-medium text-slate-500">{item.dates}</span>
                </div>
                <p className="mt-1 font-medium text-pink-600">{item.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="education-heading">
          <h2 id="education-heading" className="subhead-text">Education</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.institution} className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-card">
                <h3 className="text-lg font-semibold text-slate-900">{item.institution}</h3>
                <p className="mt-2 text-slate-700">{item.degree}</p>
                <p className="mt-2 text-sm text-slate-500">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="subhead-text">Skills</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-card">
                <h3 className="font-semibold text-slate-900">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="leadership-heading" className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-card">
          <h2 id="leadership-heading" className="subhead-text">Leadership</h2>
          <p className="mt-3 leading-7 text-slate-700">
            As Technical Head of the Econ Club at TIET, I mentored three teammates
            building websites and organized webinars for 400+ students. The club
            website received 1,200+ visits and supported a smooth event experience.
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;

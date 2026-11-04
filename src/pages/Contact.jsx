const contactDetails = [
  {
    label: 'Email',
    value: 'veabanga.vb@gmail.com',
    href: 'mailto:veabanga.vb@gmail.com',
  },
  {
    label: 'Location',
    value: 'Stuttgart, Germany',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vea-banga-ba34aa157',
    href: 'https://www.linkedin.com/in/vea-banga-ba34aa157/',
  },
];

const Contact = () => {
  return (
    <section className="max-container">
      <p className="pink-gradient_text font-semibold">Let’s connect</p>
      <h1 className="head-text mt-2">Get in touch</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
        Have a question or want to work together? Reach out through any of the
        contact details below.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {contactDetails.map(({ label, value, href }) => (
          <article key={label} className="rounded-2xl border border-white/70 bg-white/75 p-6 shadow-card">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</h2>
            {href ? (
              <a className="mt-2 inline-block text-lg font-medium text-pink-600 hover:underline" href={href}>
                {value}
              </a>
            ) : (
              <p className="mt-2 text-lg font-medium text-slate-900">{value}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Contact;

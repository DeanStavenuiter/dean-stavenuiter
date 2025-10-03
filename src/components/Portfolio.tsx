
export default function Portfolio() {
    return (
      <main className="flex flex-col min-h-screen text-gray-900">
        {/* HERO */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50">
          <h1 className="text-5xl font-bold">Dean Donovan Stavenuiter</h1>
          <p className="mt-4 text-xl text-gray-600">Fullstack & OutSystems Developer</p>
          <p className="mt-2 text-lg text-gray-500">I build scalable apps with Next.js, React, and AWS.</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition">View Projects</a>
            <a href="#contact" className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition">Get in Touch</a>
          </div>
        </section>
  
        {/* ABOUT */}
        <section id="about" className="py-20 px-6 md:px-20 bg-white">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            I&apos;m a fullstack developer passionate about building fast, reliable, and
            user-focused apps. Currently, I specialize in Next.js 15+, React,
            Prisma, MongoDB, and AWS. I enjoy solving complex problems and
            creating products that scale.
          </p>
        </section>
  
        {/* PROJECTS */}
        <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Example Project Card */}
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
              <h3 className="text-2xl font-semibold">Project Name</h3>
              <p className="text-gray-600 mt-2">Short description of what the project does.</p>
              <div className="mt-4 flex gap-3">
                <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
                <a href="#" className="text-blue-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </section>
  
        {/* SKILLS */}
        <section id="skills" className="py-20 px-6 md:px-20 bg-white">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl">⚛️</span>
              <p className="mt-2">React</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl">🖥️</span>
              <p className="mt-2">Next.js</p>
            </div>
            {/* Add more tech */}
          </div>
        </section>
  
        {/* EXPERIENCE */}
        <section id="experience" className="py-20 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold">OutSystems Developer – Company X</h3>
              <p className="text-gray-600">2021 – Present</p>
              <p className="mt-2 text-gray-700">Worked on enterprise apps with OutSystems and AWS integrations.</p>
            </div>
            {/* Add more roles */}
          </div>
        </section>
  
        {/* CONTACT */}
        <section id="contact" className="py-20 px-6 md:px-20 bg-white text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
          <p className="text-lg text-gray-600 mb-6">Interested in collaborating? Reach out via the form below.</p>
          <form className="max-w-xl mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-4 border rounded-xl" />
            <input type="email" placeholder="Your Email" className="p-4 border rounded-xl" />
            <textarea placeholder="Your Message" rows={5} className="p-4 border rounded-xl"></textarea>
            <button className="px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition">Send Message</button>
          </form>
        </section>
  
        {/* FOOTER */}
        <footer className="py-10 text-center text-gray-500 bg-gray-50">
          <p>© {new Date().getFullYear()} Dean Donovan Stavenuiter</p>
        </footer>
      </main>
    )
  }

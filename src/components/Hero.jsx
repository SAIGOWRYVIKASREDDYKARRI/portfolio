function Hero() {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center">
      
      <h1 className="text-6xl font-bold mb-6">
        Hi, I'm <span className="text-blue-400">Vikas Reddy</span>
      </h1>

      <p className="text-xl max-w-xl mb-8">
        AI Developer | Java Programmer | Building intelligent systems 
        using NLP, Computer Vision, and Web Technologies.
      </p>

      <div className="flex gap-6">

  <a
    href="https://github.com/SAIGOWRYVIKASREDDYKARRI"
    className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/karri-sai-gowry-vikas-reddy-183816273/"
    className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500"
  >
    LinkedIn
  </a>

  <a
    href="/resume.pdf"
    className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
  >
    Download Resume
  </a>

</div>

    </section>
  );
}

export default Hero;
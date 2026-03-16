function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-10 text-center">

      <h2 className="text-4xl font-bold text-blue-400 mb-8">
        Contact Me
      </h2>

      <p className="text-lg mb-10">
        Feel free to reach out for collaboration, project discussions, or
        opportunities.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">

        <a
          href="mailto:vikaskarri456@gmail.com"
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Email Me
        </a>

        <a
          href="https://github.com/SAIGOWRYVIKASREDDYKARRI"
          className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/karri-sai-gowry-vikas-reddy-183816273/"
          className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
}

export default Contact;
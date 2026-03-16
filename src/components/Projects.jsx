function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-10">

      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Project 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">LEARNIFY</h3>
          <p className="text-gray-300 mb-4">
            AI-powered learning platform that aggregates educational content
            from multiple videos using web scraping and NLP summarization.
          </p>
          <p className="text-sm text-blue-400 mb-4">
            NLP • Web Scraping • AI
          </p>
          <a
            href="https://github.com/SAIGOWRYVIKASREDDYKARRI"
            className="text-blue-400 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">Tomato Leaf Disease Detection</h3>
          <p className="text-gray-300 mb-4">
            Deep learning system that detects tomato leaf diseases using
            computer vision and image classification techniques.
          </p>
          <p className="text-sm text-blue-400 mb-4">
            TensorFlow • MobileNetV2 • Computer Vision
          </p>
          <a
            href="https://github.com/SAIGOWRYVIKASREDDYKARRI"
            className="text-blue-400 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-3">E-Commerce Platform</h3>
          <p className="text-gray-300 mb-4">
            Full-stack web application with authentication, product catalog,
            and purchase workflow built using Spring Boot.
          </p>
          <p className="text-sm text-blue-400 mb-4">
            Spring Boot • SQL • Web Development
          </p>
          <a
            href="https://github.com/SAIGOWRYVIKASREDDYKARRI"
            className="text-blue-400 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

      </div>

    </section>
  );
}

export default Projects;
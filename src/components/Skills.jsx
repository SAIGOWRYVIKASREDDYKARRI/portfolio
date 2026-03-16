function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20">

      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">

        <div className="bg-gray-800 p-6 rounded-lg">Java</div>
        <div className="bg-gray-800 p-6 rounded-lg">Python</div>
        <div className="bg-gray-800 p-6 rounded-lg">C++</div>
        <div className="bg-gray-800 p-6 rounded-lg">SQL</div>

        <div className="bg-gray-800 p-6 rounded-lg">HTML</div>
        <div className="bg-gray-800 p-6 rounded-lg">CSS</div>
        <div className="bg-gray-800 p-6 rounded-lg">JavaScript</div>
        <div className="bg-gray-800 p-6 rounded-lg">React</div>

        <div className="bg-gray-800 p-6 rounded-lg">TensorFlow</div>
        <div className="bg-gray-800 p-6 rounded-lg">NLP</div>
        <div className="bg-gray-800 p-6 rounded-lg">Computer Vision</div>
        <div className="bg-gray-800 p-6 rounded-lg">GitHub</div>

      </div>

    </section>
  );
}

export default Skills;
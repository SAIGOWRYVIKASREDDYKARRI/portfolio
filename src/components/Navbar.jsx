function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold text-blue-400">
        Vikas Reddy
      </h1>

      <ul className="flex gap-6">
  <li><a href="#home" className="hover:text-blue-400">Home</a></li>
  <li><a href="#about" className="hover:text-blue-400">About</a></li>
  <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
  <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
</ul>
    </nav>
  );
}

export default Navbar;
export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200">
      <h1 className="font-bold text-lg">Antonio</h1>

      <div className="flex gap-6 text-sm">
        <a href="#projects" className="hover:text-gray-500">Proyectos</a>
        <a href="#about" className="hover:text-gray-500">Sobre mí</a>
        <a href="#contact" className="hover:text-gray-500">Contacto</a>
      </div>
    </nav>
  );
}
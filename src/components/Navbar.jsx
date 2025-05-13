import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
          <Link to="/">SkillShare</Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/service">Services</Link>
          <Link to="/garantee">Guarantees</Link>
        </div>

        {/* Register Button */}
        <div>
          <Link
            to="/register"
            className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            Register Now
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

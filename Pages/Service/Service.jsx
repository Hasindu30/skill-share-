import { useEffect } from 'react';
import Navbar from '../../src/components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'Essay Writing',
    description: 'Get high-quality, plagiarism-free essays crafted by academic experts.',
    icon: '/icons/essay.png',
  },
  {
    title: 'Research Assistance',
    description: 'We help you gather and structure data for your research and thesis.',
    icon: '/icons/research.png',
  },
  {
    title: 'Proofreading & Editing',
    description: 'Ensure your document is polished and free of grammar or citation errors.',
    icon: '/icons/editing.png',
  },
  {
    title: 'Presentation Design',
    description: 'Create engaging PowerPoint or Google Slides with academic content.',
    icon: '/icons/presentation.png',
  },
  {
    title: 'Assignment Review',
    description: 'Let experts review your completed assignments and provide suggestions.',
    icon: '/icons/review.png',
  },
  {
    title: 'Plagiarism Checking',
    description: 'Get your document checked for originality and receive a detailed report.',
    icon: '/icons/plagiarism.png',
  },
];

const ServicesPage = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1100, once: true });
    }, 100); 
  }, []);
  return (
    <div>
      <Navbar />

      {/* Top Hero Decoration (Copied from Home Page) */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-purple-200 to-white "data-aos="fade-up">
        <div className="bg-white text-sm px-4 py-1 rounded-full mb-4 shadow inline-flex items-center gap-2">
          <span>📚</span> Academic Help Services You Can Trust
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight">
          Explore Our <br /> Academic Assistance Services
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-xl mb-8">
          From essays to research support, we've got your academic needs covered with expert precision.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white text-center "data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 inline-block px-4 py-1 text-sm rounded-full bg-gray-200 text-gray-600 font-medium">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose the <span className="text-blue-600">academic help</span> you need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Whether it's essays, research, or final-year projects, we’re here to guide you through.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 text-left hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full">
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

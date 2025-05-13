import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../../src/components/Navbar';
import showcaseIcon from '../../src/assets/showcase.png';
import userIcon from '../../src/assets/global.png';
import networkIcon from '../../src/assets/Frame.png';
import resumeIcon from '../../src/assets/resume.png';
import profile from '../../src/assets/profile.png';
import circle from '../../src/assets/circle.png';
import clientsImage from '../../src/assets/client.png';
import stepIcon1 from '../../src/assets/step1.png';
import stepIcon2 from '../../src/assets/step2.png';
import stepIcon3 from '../../src/assets/step3.png';
import person1 from '../../src/assets/person1.png';
import person2 from '../../src/assets/person2.png';
import user1 from '../../src/assets/user1.png';
import user2 from '../../src/assets/user2.png';
import user3 from '../../src/assets/user3.png';

const Home = () => {
  useEffect(() => {
  setTimeout(() => {
    AOS.init({ duration: 1100, once: true });
  }, 100); 
}, []);
const [activeIndex, setActiveIndex] = useState(null);

const faqItems = [
  {
    question: 'What types of assignments do you handle?',
    answer:
      'We provide assistance with essays, case studies, research papers, dissertations, and a variety of subject-specific tasks across different academic levels.',
  },
  {
    question: 'How do I place an assignment order?',
    answer:
      'Simply fill out the assignment order form with your topic, deadline, and specific instructions. Once submitted, our team will assign a suitable expert to your task.',
  },
  {
    question: 'Are your services confidential?',
    answer:
      'Absolutely. We follow strict confidentiality protocols to ensure that all your personal information and submitted materials remain secure and private.',
  },
  {
    question: 'Can I request revisions after delivery?',
    answer:
      'Yes, we offer free revisions for a limited period after delivery to ensure your satisfaction. You can request changes if your original instructions were not met.',
  },
  {
    question: 'Are the assignments 100% plagiarism-free?',
    answer:
      'Yes. Every assignment is written from scratch and scanned through plagiarism detection tools to ensure originality before final delivery.',
  },
];



  return (
    <div>
      <Navbar />

      
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-purple-200 to-white" >
        <div className="bg-white text-sm px-4 py-1 rounded-full mb-4 shadow inline-flex items-center gap-2"data-aos="zoom-in">
          <span>📢</span> Your #1 Platform for assigment help.
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight"data-aos="zoom-in">
          Give Your Assigment for Us.<br />Just a One Click!
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-xl mb-8"data-aos="zoom-in">
          Create your assignment, We craft high-quality academic papers with fast turn around times..
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition"data-aos="zoom-in">
          BOOK NOW
        </button>
      </section>

      
      <section className="py-20 px-4 bg-white text-center" data-aos="zoom-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose Masters for us?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Unlock your true potential and No Use of AI– All work is 100% human-written to meet academic standards
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-center">
          <div className="flex flex-col items-end gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-left">
              <img src={showcaseIcon} alt="Showcase" className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">Expert Writers </h3>
              <p className="text-sm text-gray-600 mb-3">Showcase your project to stand out among all.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded-full">Add Work</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-left">
              <img src={userIcon} alt="Users" className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">100K+ Clients</h3>
              <p className="text-sm text-gray-600">Worldwide Active Users</p>
            </div>
          </div>
          <div className="relative flex justify-center items-center min-h-[500px]">
            <img src={circle} alt="Circle" className="absolute w-[1000px] md:w-[900px] lg:w-[1200px]" />
            <img src={profile} alt="Profile" className="relative z-10 rounded-2xl w-72 h-[500px] object-cover shadow-2xl" />
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-left">
              <img src={networkIcon} alt="Networking" className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">Customer Support</h3>
              <p className="text-sm text-gray-600">Connect with peers, mentors, and leaders.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-left">
              <img src={resumeIcon} alt="Builder" className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">Assignment Builder</h3>
              <p className="text-sm text-gray-600 mb-3">Create a professional Help using our built-in builder.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded-full">Build Assignment</button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-4 text-center" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We are happy to work <br className="hidden md:block" /> with incredible clients
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          provide specialized writing services to help you stay on track so you can confidently fulfil all of your deadlines.
        </p>
        <div className="flex justify-center">
          <img src={clientsImage} alt="Our Clients" className="max-w-full w-[900px] object-contain" />
        </div>
      </section>

     
      <section className="py-20 px-4 bg-white" data-aos="zoom-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 space-y-12">
              {[1, 2, 3].map((step, idx) => (
                <div key={step} className="flex items-center justify-between gap-6">
                  {step !== 2 && <h3 className="text-6xl font-bold text-gray-200">0{step}</h3>}
                  <div className="bg-white shadow-lg rounded-xl p-5 flex items-start gap-4 w-full max-w-lg">
                    <div className={`p-2 rounded-full ${step === 1 ? 'bg-blue-100' : step === 2 ? 'bg-yellow-100' : 'bg-purple-100'}`}>
                      <img src={[stepIcon1, stepIcon2, stepIcon3][idx]} alt={`Step ${step}`} className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">{[
                        'Sign Up and create Account',
                        'Upload Your Assigment',
                        'Get Discovered and good service'
                      ][idx]}</h4>
                      <p className="text-sm text-gray-600">{[
                        'Fill out your details and give us to assigment.',
                        'Add your assigment, task, and projects.',
                        'Get and we are help to complete your assigment.'
                      ][idx]}</p>
                    </div>
                  </div>
                  {step === 2 && <h3 className="text-6xl font-bold text-gray-200">0{step}</h3>}
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-center gap-6">
              <div className="flex gap-4 items-start">
                <img src={person1} alt="Working man" className="rounded-xl w-[200px] h-[360px] object-cover shadow" />
                <img src={person2} alt="Smiling woman" className="rounded-xl w-[300px] h-[440px] object-cover shadow" />
              </div>
              <div className="flex items-center bg-white shadow-md px-4 py-2 rounded-full gap-3">
                <div className="flex -space-x-2">
                  {[user1, user2, user3].map((user, i) => (
                    <img key={i} src={user} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  ))}
                </div>
                <p className="text-blue-600 font-semibold text-sm">10K+ <span className="text-gray-700">Students</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 px-4 bg-white" data-aos="zoom-in">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
      Frequently Asked Questions
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`rounded-2xl border transition-all ${
            activeIndex === index
              ? 'bg-blue-50 border-blue-300 shadow-xl'
              : 'bg-white border-gray-200 hover:shadow'
          }`}
        >
          <button
            className="flex items-center justify-between w-full px-6 py-5 text-left"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-blue-700">
                {String(index + 1).padStart(2, '0')}
              </div>
              <span className="font-medium text-gray-900">{item.question}</span>
            </div>
            <span className="text-xl font-bold text-gray-400">
              {activeIndex === index ? '×' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-6 pb-5 text-sm text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
      
      <section className="py-24 px-4" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#f1f0ff] to-white shadow-md p-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-snug">
           No Need to Worry About Deadlines!<br /> Give the stress to us!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            rovide specialized writing services to help you stay on track so you can confidently
             fulfil all of your deadlines. 
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center bg-white rounded-full px-5 py-3 shadow-inner w-full sm:w-[350px]">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4-4v12" />
              </svg>
              <input
                type="email"
                placeholder="Your mail address"
                className="outline-none w-full bg-transparent text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

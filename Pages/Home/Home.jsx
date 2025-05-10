import Navbar from '../../src/components/Navbar';
 import showcaseIcon from '../../src/assets/showcase.png';
 import userIcon from '../../src/assets/global.png';
 import networkIcon from '../../src/assets/Frame.png';
 import resumeIcon from '../../src/assets/resume.png';
 import profile from '../../src/assets/profile.png'; 
import circle from '../../src/assets/circle.png'
import clientsImage from '../../src/assets/client.png'
import stepIcon1 from '../../src/assets/step1.png'
import stepIcon2 from '../../src/assets/step2.png'
import stepIcon3 from '../../src/assets/step3.png'
import person1 from '../../src/assets/person1.png'
import person2 from '../../src/assets/person2.png'
import user1 from '../../src/assets/user1.png'
import user2 from '../../src/assets/user2.png'
import user3 from '../../src/assets/user3.png'

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-purple-200 to-white">
        <div className="bg-white text-sm px-4 py-1 rounded-full mb-4 shadow inline-flex items-center gap-2">
          <span>📢</span> Your #1 Platform for assigment help.
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight">
          Showcase Your Mastery.<br />Get Connected
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-xl mb-8">
          Create your assignment, showcase your skills, and let employers find you.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition">
          BOOK NOW
        </button>
      </section>

     
      {/* Why Choose Section */}
<section className="py-20 px-4 bg-white text-center">
  <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4">
    Why Choose <span className="text-blue-700">Masters in Me?</span>
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-16">
    Unlock your true potential and discover a world of opportunities
    that align with your skills, interests, and aspirations
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-center">
    {/* Left Side Cards */}
    <div className="flex flex-col items-end gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-left">
        <img src={showcaseIcon} alt="Showcase" className="w-8 h-8 mb-3" />
        <h3 className="font-semibold text-gray-800 mb-1">Showcase Work</h3>
        <p className="text-sm text-gray-600 mb-3">Showcase your project to stand out among all.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded-full">
          Add Work
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-left">
        <img src={userIcon} alt="Users" className="w-8 h-8 mb-3" />
        <h3 className="font-semibold text-gray-800 mb-1">100K+</h3>
        <p className="text-sm text-gray-600">Worldwide Active Users</p>
      </div>
    </div>

    {/* Center Image with Circular BG */}
    <div className="relative flex justify-center items-center min-h-[500px]">
  {/* Circle Background */}
  <img
    src={circle}
    alt="Circle"
    className="absolute w-[1000px] md:w-[900px] lg:w-[1200px] "
  />

  {/* Profile Image */}
  <img
    src={profile}
    alt="Profile"
    className="relative z-10 rounded-2xl w-72 h-[500px] object-cover shadow-2xl"
  />
</div>

    {/* Right Side Cards */}
    <div className="flex flex-col items-start gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-left">
        <img src={networkIcon} alt="Networking" className="w-8 h-8 mb-3" />
        <h3 className="font-semibold text-gray-800 mb-1">Networking Opportunities</h3>
        <p className="text-sm text-gray-600">Connect with peers, mentors, and leaders.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-left">
        <img src={resumeIcon} alt="Builder" className="w-8 h-8 mb-3" />
        <h3 className="font-semibold text-gray-800 mb-1">Assignment Builder</h3>
        <p className="text-sm text-gray-600 mb-3">
          Create a professional resume using our built-in builder.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded-full">
          Build Assignment
        </button>
      </div>
    </div>
  </div>
</section>


<section className="py-20 px-4  text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    We are happy to work <br className="hidden md:block" />
    with incredible clients
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
    Fortune 500 companies and renowned global brands place their trust in our products,
    solutions, and bespoke software development services.
  </p>

  <div className="flex justify-center">
    <img
      src={clientsImage}
      alt="Our Clients"
      className="max-w-full w-[900px] object-contain"
    />
  </div>
</section>



<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
      How It Works
    </h2>

    <div className="flex flex-col md:flex-row gap-10 items-center">
      {/* Left: Steps */}
      <div className="flex-1 space-y-12">
        {/* Step 1 */}
        <div className="flex items-center justify-between gap-6">
          <h3 className="text-6xl font-bold text-gray-200">01</h3>
          <div className="bg-white shadow-lg rounded-xl p-5 flex items-start gap-4 w-full max-w-lg">
            <div className="bg-blue-100 p-2 rounded-full">
              <img src={stepIcon1} alt="Step 1" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold">Sign Up and create Account</h4>
              <p className="text-sm text-gray-600">Fill out your details and give us to assigment.</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center justify-between gap-6">
          
          <div className="bg-white shadow-lg rounded-xl p-5 flex items-start gap-4 w-full max-w-lg">
            <div className="bg-yellow-100 p-2 rounded-full">
              <img src={stepIcon2} alt="Step 2" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold">Upload Your Assigment</h4>
              <p className="text-sm text-gray-600">Add your assigment, task, and projects.</p>
            </div>
            
          </div>
          <h3 className="text-6xl font-bold text-gray-200">02</h3>
        </div>

        {/* Step 3 */}
        <div className="flex items-center justify-between gap-6">
          <h3 className="text-6xl font-bold text-gray-200">03</h3>
          <div className="bg-white shadow-lg rounded-xl p-5 flex items-start gap-4 w-full max-w-lg">
            <div className="bg-purple-100 p-2 rounded-full">
              <img src={stepIcon3} alt="Step 3" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold">Get Discovered and good service</h4>
              <p className="text-sm text-gray-600">Get and we are help to complete your assigment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Images & Badge */}
      <div className="flex-1 flex flex-col items-center gap-6">
        <div className="flex gap-4 items-start">
          <img src={person1} alt="Working man" className="rounded-xl w-[200px] h-[360px] object-cover shadow" />
          <img src={person2} alt="Smiling woman" className="rounded-xl w-[300px] h-[440px] object-cover shadow" />
        </div>

        <div className="flex items-center bg-white shadow-md px-4 py-2 rounded-full gap-3">
          <div className="flex -space-x-2">
            <img src={user1} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={user2} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={user3} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <p className="text-blue-600 font-semibold text-sm">10K+ <span className="text-gray-700">Job Seekers</span></p>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  );
};

export default Home;

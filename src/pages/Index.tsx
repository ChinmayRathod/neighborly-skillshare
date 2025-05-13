
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-700 text-white">
          <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                  Exchange Skills, Build Community
                </h1>
                <p className="mt-4 text-xl">
                  Connect with neighbors who can teach what you want to learn, and learn what you can teach.
                </p>
                <div className="mt-10">
                  <Link to="/signup">
                    <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                      Join SkillSwap Today
                    </Button>
                  </Link>
                  <Link to="/explore">
                    <Button size="lg" variant="outline" className="ml-4 bg-transparent border-white text-white hover:bg-teal-600">
                      Explore Skills
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 flex justify-center">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-gray-900 text-xl font-bold mb-4">How It Works</h2>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3">1</span>
                      <p className="text-gray-600">Create a profile with skills you can offer and skills you want to learn</p>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3">2</span>
                      <p className="text-gray-600">Get matched with neighbors based on complementary skills</p>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3">3</span>
                      <p className="text-gray-600">Coordinate sessions and exchange skills with no money involved</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Skill Exchanges</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCategories.map((category) => (
                <div key={category.name} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap">
                    {category.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose SkillSwap?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-100 rounded-full h-20 w-20 flex items-center justify-center text-teal-600 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Build Community</h3>
                <p className="text-gray-600">Connect with neighbors and build meaningful relationships through skill exchanges.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full h-20 w-20 flex items-center justify-center text-teal-600 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Equal Exchange</h3>
                <p className="text-gray-600">Trade skills without money changing hands—time for time, knowledge for knowledge.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full h-20 w-20 flex items-center justify-center text-teal-600 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Grow Skills</h3>
                <p className="text-gray-600">Learn new skills and improve existing ones through hands-on practice with experienced neighbors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start exchanging skills?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Join our community today and start sharing knowledge with your neighbors.</p>
            <Link to="/signup">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">SkillSwap</h3>
              <p className="text-gray-300">Exchange skills, build community, grow together.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/explore" className="text-gray-300 hover:text-white">Explore</Link></li>
                <li><Link to="/how-it-works" className="text-gray-300 hover:text-white">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/community-guidelines" className="text-gray-300 hover:text-white">Community Guidelines</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const featuredCategories = [
  {
    name: "Creative Arts",
    description: "Exchange artistic skills and creative expertise",
    skills: ["Photography", "Painting", "Music Lessons", "Creative Writing", "Drawing"]
  },
  {
    name: "DIY & Home",
    description: "Learn and teach practical home improvement skills",
    skills: ["Carpentry", "Plumbing Basics", "Gardening", "Home Repair", "Furniture Restoration"]
  },
  {
    name: "Technology",
    description: "Share digital and technical knowledge",
    skills: ["Basic Coding", "Social Media", "Website Building", "Computer Troubleshooting", "Smartphone Help"]
  }
];

export default Index;

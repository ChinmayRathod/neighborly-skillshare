
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ChatIcon from "@/components/ChatIcon";
import { useAuth } from "@/context/AuthContext";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { user } = useAuth();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-teal-800/90 z-10"></div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-30"></div>
          </div>
          <div className="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 lg:py-32 z-20 relative">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                  Exchange Skills, Build Community
                </h1>
                <p className="mt-4 text-xl">
                  Connect with neighbors who can teach what you want to learn, and learn what you can teach.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/signup">
                    <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                      Join SkillSwap Today
                    </Button>
                  </Link>
                  <Link to="/explore">
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-teal-600">
                      Explore Skills
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 flex justify-center">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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

        {/* Testimonials Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Community Says</h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                    <div className="testimonial-card h-full">
                      <div className="flex flex-col h-full">
                        <div className="mb-6">
                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                              <p className="text-gray-500 text-sm">{testimonial.location}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 italic flex-grow">"{testimonial.text}"</p>
                        <div className="mt-4 flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Skill Exchanges</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCategories.map((category) => (
                <div key={category.name} className="feature-card">
                  <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
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

        {/* Images Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Learning in Action</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Person learning photography" className="w-full h-full object-cover image-hover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Group learning coding" className="w-full h-full object-cover image-hover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Person learning music" className="w-full h-full object-cover image-hover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" alt="Home skill learning" className="w-full h-full object-cover image-hover" />
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
      
      {/* Global Chat Icon - show only for logged in users */}
      {user && <ChatIcon />}
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

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    text: "I taught piano lessons in exchange for gardening help. Now my garden is thriving and I've made a great friend in the process!"
  },
  {
    name: "Michael Rodriguez",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    text: "Through SkillSwap, I learned how to build my own website while teaching Spanish to my neighbor. It's the most rewarding exchange I've ever made."
  },
  {
    name: "Emily Chen",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    text: "I was nervous about teaching yoga at first, but my cooking lessons with Javier gave me the confidence to share what I know. Now I have more recipe knowledge and he's more flexible!"
  }
];

export default Index;

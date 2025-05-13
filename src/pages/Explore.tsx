
import { useState } from "react";
import Navbar from "@/components/Navbar";
import UserProfileCard from "@/components/UserProfileCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleConnect = (userId: string) => {
    // In the real app, this would send a connection request
    toast.success("Connection request sent!");
    console.log(`Connection request to user: ${userId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Find Skill Exchange Partners</h1>
            <div className="flex gap-4">
              <Input
                placeholder="Search skills or users..."
                className="max-w-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button>Search</Button>
            </div>
          </div>
          
          <Tabs defaultValue="nearby" className="mb-8">
            <TabsList>
              <TabsTrigger value="nearby">Nearby Users</TabsTrigger>
              <TabsTrigger value="skills-match">Skills Match</TabsTrigger>
              <TabsTrigger value="recent">Recently Active</TabsTrigger>
            </TabsList>
            <TabsContent value="nearby" className="mt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockUsers.map(user => (
                  <UserProfileCard 
                    key={user.id} 
                    user={user} 
                    onConnect={handleConnect}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills-match" className="mt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockUsers
                  .slice()
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 6)
                  .map(user => (
                    <UserProfileCard 
                      key={user.id} 
                      user={user} 
                      onConnect={handleConnect}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="recent" className="mt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockUsers
                  .slice()
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 5)
                  .map(user => (
                    <UserProfileCard 
                      key={user.id} 
                      user={user} 
                      onConnect={handleConnect}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const mockUsers = [
  {
    id: "user1",
    name: "Alex Morgan",
    location: "Downtown",
    distance: "0.8 miles",
    skillsOffered: ["Photography", "Graphic Design", "Social Media Marketing"],
    skillsWanted: ["Spanish Language", "Guitar Lessons"]
  },
  {
    id: "user2",
    name: "Jordan Lee",
    location: "Westside",
    distance: "1.2 miles",
    skillsOffered: ["Yoga Instruction", "Nutrition Advice", "Meditation"],
    skillsWanted: ["Home Repair", "Car Maintenance", "Coding"]
  },
  {
    id: "user3",
    name: "Sam Johnson",
    location: "Northside",
    distance: "2.1 miles",
    skillsOffered: ["Carpentry", "Home Repair", "Furniture Making"],
    skillsWanted: ["Cooking", "Language Exchange"]
  },
  {
    id: "user4",
    name: "Taylor Wilson",
    location: "Eastside",
    distance: "1.7 miles",
    skillsOffered: ["Piano Lessons", "Music Theory", "Singing"],
    skillsWanted: ["Photography", "Graphic Design"]
  },
  {
    id: "user5",
    name: "Casey Zhang",
    location: "Southside",
    distance: "0.5 miles",
    skillsOffered: ["Coding", "Web Development", "App Design"],
    skillsWanted: ["Fitness Training", "Yoga", "Cooking"]
  },
  {
    id: "user6",
    name: "Riley Adams",
    location: "Central District",
    distance: "1.9 miles",
    skillsOffered: ["Cooking Classes", "Baking", "Meal Prep"],
    skillsWanted: ["Guitar Lessons", "Painting", "Gardening"]
  }
];

export default Explore;

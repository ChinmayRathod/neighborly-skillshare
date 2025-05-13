
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserProfileCard from "@/components/UserProfileCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Matches = () => {
  const handleConnect = (userId: string) => {
    // In a real app, this would initiate a conversation
    toast.success("Message request sent!");
    console.log(`Message request to user: ${userId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Your Skill Matches</h1>
          
          {mockMatches.length > 0 ? (
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Perfect Matches</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockMatches
                    .filter(match => match.matchType === "perfect")
                    .map(match => (
                      <UserProfileCard 
                        key={match.user.id}
                        user={match.user}
                        onConnect={handleConnect}
                      />
                    ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">Good Matches</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockMatches
                    .filter(match => match.matchType === "good")
                    .map(match => (
                      <UserProfileCard 
                        key={match.user.id}
                        user={match.user}
                        onConnect={handleConnect}
                      />
                    ))}
                </div>
              </section>
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-6 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">No matches found</h3>
                  <p className="text-gray-500 mb-6">Complete your profile with skills to get matched with people in your area</p>
                  <Button>Complete Your Profile</Button>
                </div>
              </CardContent>
            </Card>
          )}
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

const mockMatches = [
  {
    matchType: "perfect",
    user: {
      id: "user1",
      name: "Alex Morgan",
      location: "Downtown",
      distance: "0.8 miles",
      skillsOffered: ["Photography", "Graphic Design"],
      skillsWanted: ["Spanish Language", "Guitar Lessons"]
    }
  },
  {
    matchType: "perfect",
    user: {
      id: "user2",
      name: "Jordan Lee",
      location: "Westside",
      distance: "1.2 miles",
      skillsOffered: ["Yoga Instruction", "Meditation"],
      skillsWanted: ["Home Repair", "Car Maintenance"]
    }
  },
  {
    matchType: "good",
    user: {
      id: "user3",
      name: "Sam Johnson",
      location: "Northside",
      distance: "2.1 miles",
      skillsOffered: ["Carpentry", "Home Repair"],
      skillsWanted: ["Cooking", "Language Exchange"]
    }
  },
  {
    matchType: "good",
    user: {
      id: "user4",
      name: "Taylor Wilson",
      location: "Eastside",
      distance: "1.7 miles",
      skillsOffered: ["Piano Lessons", "Music Theory"],
      skillsWanted: ["Photography", "Graphic Design"]
    }
  }
];

export default Matches;

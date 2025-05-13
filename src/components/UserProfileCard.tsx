
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SkillTag from "./SkillTag";
import { Button } from "./ui/button";

interface UserProfileCardProps {
  user: {
    id: string;
    name: string;
    location: string;
    distance?: string;
    avatar?: string;
    skillsOffered: string[];
    skillsWanted: string[];
  };
  onConnect?: (userId: string) => void;
}

const UserProfileCard = ({ user, onConnect }: UserProfileCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-secondary pb-2">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold text-xl">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-full object-cover" />
            ) : (
              user.name.charAt(0)
            )}
          </div>
          <div>
            <h3 className="font-medium text-lg">{user.name}</h3>
            <p className="text-sm text-muted-foreground">
              {user.location} {user.distance && `· ${user.distance} away`}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Skills Offered</h4>
          <div className="flex flex-wrap">
            {user.skillsOffered.map((skill) => (
              <SkillTag key={`offer-${skill}`} name={skill} type="offer" />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Skills Wanted</h4>
          <div className="flex flex-wrap">
            {user.skillsWanted.map((skill) => (
              <SkillTag key={`want-${skill}`} name={skill} type="wanted" />
            ))}
          </div>
        </div>
        {onConnect && (
          <Button 
            onClick={() => onConnect(user.id)} 
            className="w-full mt-2"
          >
            Connect
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;

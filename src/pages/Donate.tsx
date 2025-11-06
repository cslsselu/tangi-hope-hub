import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Package, Clock } from "lucide-react";

const Donate = () => {
  const methods = [
    { icon: DollarSign, title: "Money", description: "Financial contributions help us buy fresh produce" },
    { icon: Package, title: "Food", description: "Drop off non-perishable items during our hours" },
    { icon: Clock, title: "Time", description: "Volunteer to help sort, pack, and distribute" },
  ];

  const neededItems = [
    "Canned vegetables & fruits",
    "Rice & pasta",
    "Peanut butter",
    "Canned tuna/chicken",
    "Cereal",
    "Cooking oil",
  ];

  return (
    <div className="bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Make a Difference</h1>

        {/* Donation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {/* Needed Items */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Most Needed Items</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm">
                {neededItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Drop-off Info */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Drop-Off Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="font-medium mb-1">Hours:</p>
                <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 4:00 PM</p>
                <p className="text-muted-foreground">Saturday: 8:00 AM - 12:00 PM</p>
              </div>
              <div>
                <p className="font-medium mb-1">Location:</p>
                <p className="text-muted-foreground">123 Community Lane</p>
                <p className="text-muted-foreground">Hammond, LA 70401</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donate Button */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://donate.tangifoodpantry.org" target="_blank" rel="noopener noreferrer">
              Donate Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Donate;

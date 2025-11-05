import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Package, Clock, MapPin } from "lucide-react";

const Donate = () => {
  const neededItems = [
    { category: "Proteins", items: ["Canned tuna/chicken", "Peanut butter", "Dried beans", "Canned chili"] },
    { category: "Grains", items: ["Rice", "Pasta", "Cereal", "Oatmeal"] },
    { category: "Canned Goods", items: ["Vegetables", "Fruits", "Soups", "Tomato sauce"] },
    { category: "Staples", items: ["Cooking oil", "Salt/pepper", "Sugar", "Flour"] },
    { category: "Other", items: ["Diapers", "Baby formula", "Hygiene products", "Paper products"] },
  ];

  const donationMethods = [
    {
      icon: DollarSign,
      title: "Financial Donations",
      description: "Monetary contributions allow us to purchase fresh produce, proteins, and items in greatest need while covering operational costs.",
      action: "Make a Donation",
      link: "https://donate.tangifoodpantry.org",
    },
    {
      icon: Package,
      title: "Food Donations",
      description: "Drop off non-perishable food items during our regular hours. Check our most needed items list below.",
      action: "View Drop-Off Hours",
      link: "#drop-off",
    },
    {
      icon: Clock,
      title: "Time & Talent",
      description: "Your volunteer hours are invaluable. Help with sorting, packing, distribution, or administrative support.",
      action: "Volunteer Sign-Up",
      link: "/join",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference</h1>
            <p className="text-lg text-muted-foreground">
              Your generous support helps us fight hunger and serve families throughout Tangipahoa Parish
            </p>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {donationMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{method.description}</CardDescription>
                    <Button 
                      asChild={method.link.startsWith("http")}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      {method.link.startsWith("http") ? (
                        <a href={method.link} target="_blank" rel="noopener noreferrer">
                          {method.action}
                        </a>
                      ) : (
                        <a href={method.link}>{method.action}</a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Most Needed Items */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Most Needed Items</h2>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {neededItems.map((category, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg mb-3 text-primary">{category.category}</h3>
                      <ul className="space-y-1 text-sm">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Please ensure all items are unexpired and in original packaging
            </p>
          </div>
        </div>
      </section>

      {/* Drop-Off Information */}
      <section id="drop-off" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Drop-Off Information</h2>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        123 Community Lane<br />
                        Hammond, LA 70401<br />
                        Tangipahoa Parish
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Drop-Off Hours</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Monday - Friday:</span>
                          <span className="text-muted-foreground">9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Saturday:</span>
                          <span className="text-muted-foreground">8:00 AM - 12:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Sunday:</span>
                          <span className="text-muted-foreground">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      For large donations or questions about drop-offs, please call us at (555) 123-4567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Impact Matters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Every donation, whether food, funds, or time, directly helps families in Tangipahoa Parish. 
            Together, we're building a stronger, healthier community where no one goes hungry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Families Served Annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Pounds of Food Distributed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Active Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Now CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-muted-foreground mb-6">
                Your donation today helps us provide nutritious food and hope to families in need
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="https://donate.tangifoodpantry.org" target="_blank" rel="noopener noreferrer">
                  Donate Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Donate;

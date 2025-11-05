import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import volunteersWorking from "@/assets/volunteers-working.jpg";

const JoinUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank You!",
      description: "We've received your volunteer application. We'll contact you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const ways = [
    {
      icon: Heart,
      title: "Volunteer Your Time",
      description: "Help sort donations, pack food boxes, assist with distributions, or support administrative tasks. Every hour makes a difference.",
    },
    {
      icon: Users,
      title: "Sponsor a Family",
      description: "Provide ongoing support for families in need through monthly sponsorships, ensuring they have consistent access to nutritious food.",
    },
    {
      icon: TrendingUp,
      title: "Organize a Drive",
      description: "Lead a food or fundraising drive in your workplace, school, or community group to multiply your impact and engage others.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Mission</h1>
            <p className="text-lg text-muted-foreground">
              Be part of a compassionate community working together to fight hunger in Tangipahoa Parish
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={volunteersWorking}
              alt="Volunteers working together at the food pantry"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{way.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{way.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Sign Up to Volunteer</CardTitle>
                <CardDescription>
                  Fill out this form and we'll get in touch with you about volunteer opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Interest</Label>
                    <Textarea
                      id="message"
                      placeholder="What areas are you interested in? What days/times work best for you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Volunteering?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us at (555) 123-4567 or info@tangifoodpantry.org
          </p>
          <p className="text-muted-foreground">
            We welcome volunteers of all ages and backgrounds!
          </p>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;

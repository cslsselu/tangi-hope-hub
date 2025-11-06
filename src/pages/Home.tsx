import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Youtube } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import volunteersOrganizing from "@/assets/volunteers-organizing.jpg";
import communityDrive from "@/assets/community-drive.jpg";
import familyServed from "@/assets/family-served.jpg";

const Home = () => {
  const carouselImages = [
    { src: volunteersOrganizing, alt: "Volunteers organizing food donations" },
    { src: communityDrive, alt: "Community food drive in action" },
    { src: familyServed, alt: "Families being served at the pantry" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-2xl">TFP</span>
          </div>
          <h1 className="text-4xl font-bold mb-3 text-foreground">Tangi Food Pantry</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Fighting hunger and bringing hope to families in Tangipahoa Parish
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/services">Get Help</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/donate">Donate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-4">
          <Carousel className="max-w-3xl mx-auto">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* About Us */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-6 border-border">
            <h2 className="text-2xl font-bold mb-3 text-center">About Us</h2>
            <p className="text-muted-foreground text-center leading-relaxed">
              Tangi Food Pantry is dedicated to fighting hunger in Tangipahoa Parish. We provide nutritious food, 
              community resources, and support to families in need. Through our volunteers and donors, 
              we're building a stronger community where everyone has access to the food they need.
            </p>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-6 bg-accent/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium mb-3">Connect With Us</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=TwIVog1DmlU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
            >
              <Youtube className="w-4 h-4" />
              <span className="text-sm">YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import volunteersOrganizing from "@/assets/volunteers-organizing.jpg";
import communityDrive from "@/assets/community-drive.jpg";
import familyServed from "@/assets/family-served.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { src: volunteersOrganizing, alt: "Volunteers organizing food donations" },
    { src: communityDrive, alt: "Community food drive event" },
    { src: familyServed, alt: "Family receiving food assistance" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Tangi Food Pantry
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Fighting hunger in Tangipahoa Parish by providing food assistance, community support, and hope to families in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                <Link to="/services">Get Help</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 justify-center mt-8">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card hover:bg-accent transition-colors border"
              >
                <Facebook className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Follow Us</span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=TwIVog1DmlU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card hover:bg-accent transition-colors border"
              >
                <Youtube className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Watch Video</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={carouselImages[currentSlide].src}
                alt={carouselImages[currentSlide].alt}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/90 hover:bg-card p-2 rounded-full shadow-lg transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/90 hover:bg-card p-2 rounded-full shadow-lg transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-primary w-8" : "bg-card/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Us</h2>
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg leading-relaxed mb-4">
                  Tangi Food Pantry is dedicated to fighting hunger and food insecurity throughout Tangipahoa Parish. 
                  Our mission is to provide nutritious food, dignity, and hope to individuals and families facing difficult times.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Since our founding, we have served thousands of families through our community-centered approach. 
                  We believe that no one should go hungry, and with the support of generous volunteers and donors, 
                  we work tirelessly to make that vision a reality.
                </p>
                <p className="text-lg leading-relaxed">
                  More than just a food pantry, we are a community hub connecting neighbors with resources, 
                  creating partnerships with local organizations, and building a stronger, more resilient Tangipahoa Parish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need assistance, want to volunteer, or wish to donate, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/join">Volunteer</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

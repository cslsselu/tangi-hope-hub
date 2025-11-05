import { Link, useLocation } from "react-router-dom";
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Our Services" },
    { to: "/calendar", label: "Calendar" },
    { to: "/join", label: "Join Us" },
    { to: "/donate", label: "Donate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-card shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">TFP</span>
              </div>
              <span className="font-semibold text-lg hidden sm:block">Tangi Food Pantry</span>
            </Link>

            <div className="flex gap-1 md:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Tangipahoa Parish, Louisiana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:info@tangifoodpantry.org" className="hover:text-primary transition-colors">
                    info@tangifoodpantry.org
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/tangifoodpantry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=TwIVog1DmlU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Watch our YouTube video"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Tangi Food Pantry. All rights reserved.</p>
            <p className="mt-1">Fighting hunger in Tangipahoa Parish, one meal at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

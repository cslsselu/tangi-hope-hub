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
      {/* Navigation - centered */}
      <nav className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-14 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
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
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <div className="space-y-1 text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3" />
                  <span>info@tangifoodpantry.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>Tangipahoa Parish, LA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <div className="space-y-1 text-xs">
                {navLinks.map((link) => (
                  <div key={link.to}>
                    <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=TwIVog1DmlU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground mt-4 pt-3 border-t border-border">
            © {new Date().getFullYear()} Tangi Food Pantry. Fighting hunger in Tangipahoa Parish.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

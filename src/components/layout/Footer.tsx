import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Green Valley</h3>
                <p className="text-xs opacity-80">Primary & Junior School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Empowering the next generation through quality education, 
              nurturing minds, and building character since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/academics" className="hover:opacity-100 transition-opacity">Academics</Link></li>
              <li><Link to="/admissions" className="hover:opacity-100 transition-opacity">Admissions</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-semibold mb-4">Access Portals</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Parent Portal</Link></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Student Portal</Link></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Teacher Portal</Link></li>
              <li><Link to="/login" className="hover:opacity-100 transition-opacity">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>0700 123 456</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@greenvalleyschool.demo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Green Valley Primary & Junior School. All rights reserved.</p>
          <p className="mt-1">Demo Version - For Evaluation Purposes Only</p>
        </div>
      </div>
    </footer>
  );
}

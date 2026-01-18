import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, GraduationCap, LogOut, User } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardLink = () => {
    switch (user?.role) {
      case 'admin': return '/admin';
      case 'teacher': return '/teacher';
      case 'parent': return '/parent';
      case 'student': return '/student';
      default: return '/';
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl gradient-primary shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground leading-tight">Green Valley</h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Primary & Junior School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              About
            </Link>
            <Link to="/academics" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              Academics
            </Link>
            <Link to="/admissions" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              Admissions
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent rounded-lg">
                  <User className="h-4 w-4 text-accent-foreground" />
                  <span className="text-sm font-medium text-accent-foreground">{user?.name}</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => navigate(getDashboardLink())}>
                  Dashboard
                </Button>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button variant="hero" onClick={() => navigate('/login')}>
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link to="/" className="px-4 py-2 hover:bg-accent rounded-lg font-medium">Home</Link>
              <Link to="/about" className="px-4 py-2 hover:bg-accent rounded-lg font-medium">About</Link>
              <Link to="/academics" className="px-4 py-2 hover:bg-accent rounded-lg font-medium">Academics</Link>
              <Link to="/admissions" className="px-4 py-2 hover:bg-accent rounded-lg font-medium">Admissions</Link>
              <Link to="/contact" className="px-4 py-2 hover:bg-accent rounded-lg font-medium">Contact</Link>
              <div className="border-t border-border my-2" />
              {isAuthenticated ? (
                <>
                  <Button variant="outline" className="mx-4" onClick={() => navigate(getDashboardLink())}>
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="mx-4" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button variant="hero" className="mx-4" onClick={() => navigate('/login')}>
                  Login / Get Started
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

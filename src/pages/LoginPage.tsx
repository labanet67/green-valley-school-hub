import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { demoCredentials } from '@/lib/mockData';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  GraduationCap, Eye, EyeOff, AlertCircle, Shield, Users, 
  BookOpen, UserCircle, ArrowRight 
} from 'lucide-react';

const roleCards = [
  { role: 'admin' as UserRole, label: 'Administrator', icon: <Shield className="h-6 w-6" />, color: 'from-primary to-primary/80' },
  { role: 'teacher' as UserRole, label: 'Teacher', icon: <BookOpen className="h-6 w-6" />, color: 'from-sky to-sky/80' },
  { role: 'parent' as UserRole, label: 'Parent', icon: <Users className="h-6 w-6" />, color: 'from-secondary to-secondary/80' },
  { role: 'student' as UserRole, label: 'Student', icon: <UserCircle className="h-6 w-6" />, color: 'from-emerald to-emerald/80' },
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const success = login(email, password);
    if (success) {
      // Determine where to redirect based on logged in user
      const cred = demoCredentials.find(c => c.username === email);
      switch (cred?.role) {
        case 'Admin':
          navigate('/admin');
          break;
        case 'Teacher':
          navigate('/teacher');
          break;
        case 'Parent':
          navigate('/parent');
          break;
        case 'Student':
          navigate('/student');
          break;
        default:
          navigate('/');
      }
    } else {
      setError('Invalid email or password. Please try the demo credentials.');
    }
  };

  const fillDemoCredentials = (role: UserRole) => {
    const cred = demoCredentials.find(c => c.role.toLowerCase() === role);
    if (cred) {
      setEmail(cred.username);
      setPassword(cred.password);
      setSelectedRole(role);
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Role Selection */}
          <div className="hidden lg:block">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Welcome to <span className="text-gradient">Green Valley</span>
              </h1>
              <p className="text-muted-foreground">
                Select your role and use the demo credentials to explore the full system.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {roleCards.map((card) => (
                <button
                  key={card.role}
                  onClick={() => fillDemoCredentials(card.role)}
                  className={`group p-5 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedRole === card.role
                      ? 'border-primary bg-accent shadow-lg'
                      : 'border-border hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-primary-foreground mb-3 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold mb-1">{card.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    Click to fill demo credentials
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-accent/50 rounded-xl border border-border">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Demo Mode Active</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    This is a demonstration system with sample data. No real data is stored.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-card rounded-2xl border border-border shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center shadow-lg mb-4">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Access your school portal
                </p>
              </div>

              {/* Mobile Role Buttons */}
              <div className="lg:hidden mb-6">
                <p className="text-sm font-medium mb-3">Quick Demo Login:</p>
                <div className="grid grid-cols-2 gap-2">
                  {roleCards.map((card) => (
                    <button
                      key={card.role}
                      onClick={() => fillDemoCredentials(card.role)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedRole === card.role
                          ? 'border-primary bg-accent'
                          : 'border-border hover:border-primary/30'
                      }`}
                    >
                      {card.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" variant="hero" className="w-full h-12">
                  Sign In
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  New to Green Valley?{' '}
                  <a href="/contact" className="text-primary font-medium hover:underline">
                    Contact us for enrollment
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

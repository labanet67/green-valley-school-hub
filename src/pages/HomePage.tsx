import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { schoolInfo, demoCredentials } from '@/lib/mockData';
import heroImage from '@/assets/hero-students.jpg';
import {
  GraduationCap, Users, Award, BookOpen, ArrowRight, Star,
  Shield, Clock, Heart, CheckCircle2, Phone, Mail
} from 'lucide-react';

const stats = [
  { label: 'Students', value: schoolInfo.totalStudents, icon: <Users className="h-6 w-6" /> },
  { label: 'Teachers', value: schoolInfo.totalTeachers, icon: <GraduationCap className="h-6 w-6" /> },
  { label: 'Years of Excellence', value: '14+', icon: <Award className="h-6 w-6" /> },
  { label: 'Programs', value: '9', icon: <BookOpen className="h-6 w-6" /> },
];

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Safe Learning Environment',
    description: 'Secure campus with 24/7 surveillance and trained staff ensuring student safety.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Modern Curriculum',
    description: 'Updated CBC curriculum with integrated technology and practical learning approaches.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Holistic Development',
    description: 'Focus on academics, sports, arts, and character development for well-rounded students.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Happy students at Green Valley School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm text-secondary mb-6 animate-fade-in">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Top Rated School in Nairobi</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Nurturing Minds,{' '}
              <span className="text-secondary">Building Futures</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Welcome to Green Valley Primary & Junior School. We provide quality education 
              from Grade 1 to Junior Secondary, empowering students to excel academically 
              and develop strong character.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="gold" size="xl" asChild>
                <Link to="/admissions">
                  Apply Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/login">
                  Portal Login
                </Link>
              </Button>
            </div>

            {/* Contact Quick Links */}
            <div className="flex flex-wrap gap-6 mt-10 text-white/70 text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="tel:0700123456" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                {schoolInfo.phone}
              </a>
              <a href="mailto:info@greenvalleyschool.demo" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                {schoolInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Floating Stats Card */}
        <div className="hidden lg:block absolute bottom-12 right-12 w-80 glass rounded-2xl p-6 shadow-xl animate-slide-in-right">
          <h3 className="font-bold text-lg mb-4">School at a Glance</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-3 bg-accent/50 rounded-xl">
                <div className="text-primary mx-auto mb-1">{stat.icon}</div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="lg:hidden py-8 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-accent/50 rounded-xl">
                <div className="text-primary mx-auto mb-2 flex justify-center">{stat.icon}</div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Green Valley?</span>
            </h2>
            <p className="text-muted-foreground">
              We're committed to providing the best learning experience for every student, 
              combining academic excellence with character development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Credentials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-4">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Demo Access</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Try the <span className="text-gradient">Full System</span>
              </h2>
              <p className="text-muted-foreground">
                Use these demo credentials to explore all features of the school management system.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {demoCredentials.map((cred, index) => (
                <div 
                  key={index}
                  className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-bold">{cred.role}</span>
                  </div>
                  <div className="space-y-1.5 text-sm">
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">Username:</span> {cred.username}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">Password:</span> {cred.password}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/login">
                  Try Demo Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Enroll your child today and give them the best start in their educational journey. 
            Limited spaces available for the upcoming term.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/admissions">
                Start Admission
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

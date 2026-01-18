import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { schoolInfo } from '@/lib/mockData';
import { 
  GraduationCap, Target, Heart, Award, Users, BookOpen, 
  CheckCircle2, Star 
} from 'lucide-react';

const values = [
  { icon: <Target className="h-6 w-6" />, title: 'Excellence', description: 'Striving for the highest standards in education and character development.' },
  { icon: <Heart className="h-6 w-6" />, title: 'Integrity', description: 'Building honest and trustworthy individuals who lead by example.' },
  { icon: <Users className="h-6 w-6" />, title: 'Community', description: 'Fostering a supportive environment where everyone belongs.' },
  { icon: <Star className="h-6 w-6" />, title: 'Innovation', description: 'Embracing modern teaching methods and technology.' },
];

const milestones = [
  { year: '2010', event: 'School Founded', description: 'Green Valley started with 50 students and 5 teachers.' },
  { year: '2015', event: 'Junior Secondary Added', description: 'Expanded to include Junior Secondary program.' },
  { year: '2018', event: 'ICT Integration', description: 'Full computer lab and digital learning tools introduced.' },
  { year: '2023', event: 'Top Ranking', description: 'Ranked among top 10 schools in Nairobi County.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Green Valley</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Nurturing minds and building futures since 2010. We're committed to providing 
            quality education that shapes tomorrow's leaders.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground">
                  To provide a nurturing and stimulating environment where every child can 
                  discover their unique potential, develop critical thinking skills, and 
                  grow into responsible citizens who contribute positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center">
                    <Star className="h-6 w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground">
                  To be the leading educational institution in Kenya, recognized for 
                  academic excellence, innovative teaching, and holistic student development 
                  that prepares learners for global opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">School at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold">{schoolInfo.totalStudents}</p>
                <p className="text-sm opacity-80">Students</p>
              </div>
              <div>
                <p className="text-4xl font-bold">{schoolInfo.totalTeachers}</p>
                <p className="text-sm opacity-80">Teachers</p>
              </div>
              <div>
                <p className="text-4xl font-bold">14+</p>
                <p className="text-sm opacity-80">Years</p>
              </div>
              <div>
                <p className="text-4xl font-bold">9</p>
                <p className="text-sm opacity-80">Grades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">{milestone.event}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { classes } from '@/lib/mockData';
import { BookOpen, GraduationCap, Award, Clock, Users, CheckCircle2 } from 'lucide-react';

const subjects = [
  { name: 'Mathematics', description: 'Building strong numerical and analytical skills.' },
  { name: 'English', description: 'Developing communication and literacy skills.' },
  { name: 'Science', description: 'Exploring the natural world through experiments.' },
  { name: 'Kiswahili', description: 'Embracing our national language and culture.' },
  { name: 'Social Studies', description: 'Understanding society, history, and geography.' },
  { name: 'ICT', description: 'Digital literacy and computer skills for the modern age.' },
  { name: 'Creative Arts', description: 'Nurturing creativity through art and music.' },
  { name: 'Physical Education', description: 'Promoting health, fitness, and teamwork.' },
];

const programs = [
  { level: 'Lower Primary', grades: 'Grade 1-3', focus: 'Foundation literacy, numeracy, and social skills' },
  { level: 'Upper Primary', grades: 'Grade 4-6', focus: 'Advanced academics with co-curricular activities' },
  { level: 'Junior Secondary', grades: 'Grade 7-9', focus: 'CBC curriculum with career pathways exploration' },
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Our comprehensive curriculum combines the CBC framework with innovative 
            teaching methods to prepare students for future success.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.level}</h3>
                  <p className="text-primary font-semibold mb-2">{program.grades}</p>
                  <p className="text-muted-foreground text-sm">{program.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Subjects Offered</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <Card key={index}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Distribution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Class Distribution</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((cls, index) => (
              <Card key={index}>
                <CardContent className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                      {cls.grade}
                    </div>
                    <div>
                      <h3 className="font-semibold">Grade {cls.grade}</h3>
                      <p className="text-sm text-muted-foreground">
                        Streams: {cls.streams.join(', ')}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{cls.students}</p>
                    <p className="text-xs text-muted-foreground">students</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Why Our Academics Stand Out</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <p className="font-semibold">Small Class Sizes</p>
                <p className="text-sm opacity-80">1:15 teacher ratio</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-3" />
                <p className="font-semibold">Modern Resources</p>
                <p className="text-sm opacity-80">Updated learning materials</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-3" />
                <p className="font-semibold">Qualified Teachers</p>
                <p className="text-sm opacity-80">TSC registered staff</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <p className="font-semibold">Extra Support</p>
                <p className="text-sm opacity-80">Remedial classes available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { feeStructure } from '@/lib/mockData';
import { Link } from 'react-router-dom';
import { 
  FileText, CheckCircle2, Calendar, Phone, ArrowRight, 
  Download, ClipboardList 
} from 'lucide-react';

const admissionSteps = [
  { step: 1, title: 'Inquiry', description: 'Contact us or visit the school to learn about our programs.' },
  { step: 2, title: 'Application', description: 'Complete the application form and submit required documents.' },
  { step: 3, title: 'Assessment', description: 'Student assessment to determine appropriate grade placement.' },
  { step: 4, title: 'Admission', description: 'Receive admission letter and complete fee payment.' },
];

const requirements = [
  'Birth Certificate (certified copy)',
  'Previous School Report Card',
  'Transfer Letter (if applicable)',
  '4 Passport Photos',
  'Parent/Guardian ID Copy',
  'Medical Records/Immunization Card',
];

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            Join the Green Valley family! We welcome applications for all grades 
            throughout the academic year, subject to availability.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              Start Application
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step) => (
              <Card key={step.step} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
              <p className="text-muted-foreground mb-8">
                Please ensure you have the following documents ready when applying 
                for admission to Green Valley School.
              </p>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-6">
                <Download className="h-4 w-4 mr-2" />
                Download Checklist
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Key Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-accent/50 rounded-lg">
                  <p className="font-semibold">Term 1 Admissions</p>
                  <p className="text-sm text-muted-foreground">January - April</p>
                </div>
                <div className="p-4 bg-accent/50 rounded-lg">
                  <p className="font-semibold">Term 2 Admissions</p>
                  <p className="text-sm text-muted-foreground">May - August</p>
                </div>
                <div className="p-4 bg-accent/50 rounded-lg">
                  <p className="font-semibold">Term 3 Admissions</p>
                  <p className="text-sm text-muted-foreground">September - November</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  * Rolling admissions accepted throughout the year based on availability
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fee Structure (Per Term)</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {feeStructure.map((fee, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <span className="font-medium">{fee.item}</span>
                    <span className="text-lg font-bold">KES {fee.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-4 border-t-2 border-primary">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    KES {feeStructure.reduce((sum, f) => sum + f.amount, 0).toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                * Transport is optional. Installment payment plans available.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Contact us today to schedule a school visit or start your application process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="tel:0700123456">Call: 0700 123 456</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

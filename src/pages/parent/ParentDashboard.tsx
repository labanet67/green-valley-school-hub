import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { students, examResults, announcements, feeStructure } from '@/lib/mockData';
import { User, Award, DollarSign, Bell, TrendingUp, Calendar, FileText, MessageSquare } from 'lucide-react';

export default function ParentDashboard() {
  // Mock: Parent viewing John Mwangi's data
  const myChild = students[0];
  const childResults = examResults.filter(r => r.studentId === myChild.id);

  const totalFees = feeStructure.reduce((sum, f) => sum + f.amount, 0);
  const paid = myChild.feePaid;
  const balance = myChild.feeBalance;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Parent Dashboard</h1>
          <p className="text-muted-foreground">Welcome, Mr. Mwangi! Stay updated with {myChild.name}'s progress.</p>
        </div>

        {/* Child Profile Card */}
        <Card className="gradient-hero text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <User className="h-10 w-10" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold">{myChild.name}</h2>
                <p className="opacity-80">Grade {myChild.grade}{myChild.stream} • Admission: {myChild.admissionNo}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    Attendance: {myChild.attendance}%
                  </span>
                  {myChild.bus && (
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {myChild.bus}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">B+</p>
              <p className="text-sm text-muted-foreground">Overall Grade</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{myChild.attendance}%</p>
              <p className="text-sm text-muted-foreground">Attendance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">KES {paid.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Fees Paid</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-destructive" />
              <p className="text-2xl font-bold text-destructive">KES {balance.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Balance Due</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Results */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Results</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {childResults.slice(0, 5).map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                    <div>
                      <p className="font-semibold">{result.subject}</p>
                      <p className="text-sm text-muted-foreground">{result.examType}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{result.marks}%</p>
                      <span className={`text-sm font-medium px-2 py-0.5 rounded ${
                        result.grade.startsWith('A') ? 'bg-primary/10 text-primary' :
                        result.grade.startsWith('B') ? 'bg-sky/10 text-sky' :
                        'bg-secondary/10 text-secondary-foreground'
                      }`}>
                        Grade {result.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fee Statement */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Fee Statement</CardTitle>
              <Button variant="hero" size="sm">Pay Now</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {feeStructure.map((fee, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{fee.item}</span>
                    <span className="font-medium">KES {fee.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-2">
                <div className="flex justify-between font-semibold">
                  <span>Total Fees</span>
                  <span>KES {totalFees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>Amount Paid</span>
                  <span>KES {paid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-destructive font-bold">
                  <span>Balance</span>
                  <span>KES {balance.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              School Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="p-4 bg-accent/30 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                      announcement.priority === 'high' ? 'bg-destructive' :
                      announcement.priority === 'medium' ? 'bg-secondary' : 'bg-primary'
                    }`} />
                    <div>
                      <h4 className="font-semibold">{announcement.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{announcement.content}</p>
                      <p className="text-xs text-muted-foreground mt-2">{announcement.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

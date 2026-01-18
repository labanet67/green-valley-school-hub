import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { timetable, examResults, assignments, announcements } from '@/lib/mockData';
import { Calendar, BookOpen, Award, Bell, Clock, FileText, CheckCircle2 } from 'lucide-react';

export default function StudentDashboard() {
  // Mock: Student John Mwangi
  const myResults = examResults.filter(r => r.studentId === '1').slice(0, 5);
  const todaySchedule = timetable.filter(t => t.day === 'Monday');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's your school overview.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="gradient-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">B+</p>
              <p className="text-sm opacity-80">Overall Grade</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">96%</p>
              <p className="text-sm text-muted-foreground">Attendance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">Pending Assignments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">6</p>
              <p className="text-sm text-muted-foreground">Classes Today</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Timetable */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Timetable (Monday)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaySchedule.map((slot, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-accent/30 rounded-lg">
                    <div className="text-center min-w-[80px]">
                      <p className="font-bold text-primary">{slot.time.split(' - ')[0]}</p>
                      <p className="text-xs text-muted-foreground">{slot.time.split(' - ')[1]}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{slot.subject}</p>
                      <p className="text-sm text-muted-foreground">{slot.teacher}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Results */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {myResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <div>
                    <p className="font-semibold text-sm">{result.subject}</p>
                    <p className="text-xs text-muted-foreground">{result.examType}</p>
                  </div>
                  <span className={`text-lg font-bold ${
                    result.grade.startsWith('A') ? 'text-primary' :
                    result.grade.startsWith('B') ? 'text-sky' : 'text-secondary'
                  }`}>
                    {result.grade}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Assignments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              My Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 bg-accent/30 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {assignment.subject}
                    </span>
                    {assignment.status === 'submitted' ? (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    ) : (
                      <Clock className="h-5 w-5 text-secondary" />
                    )}
                  </div>
                  <h4 className="font-semibold mb-1">{assignment.title}</h4>
                  <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                  {assignment.status !== 'submitted' && (
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      Submit
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {announcements.slice(0, 3).map((announcement) => (
                <div key={announcement.id} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
                  <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                    announcement.priority === 'high' ? 'bg-destructive' :
                    announcement.priority === 'medium' ? 'bg-secondary' : 'bg-primary'
                  }`} />
                  <div>
                    <p className="font-medium">{announcement.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{announcement.content}</p>
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

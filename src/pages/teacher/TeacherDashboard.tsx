import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { timetable, students, assignments, announcements } from '@/lib/mockData';
import { Users, BookOpen, ClipboardCheck, FileText, Clock, CheckCircle2 } from 'lucide-react';

export default function TeacherDashboard() {
  const myClasses = [
    { grade: '6A', subject: 'Mathematics', students: 32 },
    { grade: '5B', subject: 'Mathematics', students: 28 },
    { grade: '7A', subject: 'Mathematics', students: 35 },
  ];

  const todaySchedule = timetable.filter(t => t.day === 'Monday').slice(0, 4);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Mary Njeri! Here's your teaching overview.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">95</p>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky to-sky/80 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Classes Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <ClipboardCheck className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">Pending Grades</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center">
                  <FileText className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Active Assignments</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Today's Schedule
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
                      <p className="text-sm text-muted-foreground">{slot.class}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Mark Attendance
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* My Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">My Classes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {myClasses.map((cls, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <div>
                    <p className="font-semibold">Grade {cls.grade}</p>
                    <p className="text-sm text-muted-foreground">{cls.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{cls.students}</p>
                    <p className="text-xs text-muted-foreground">students</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Assignments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Assignments</CardTitle>
            <Button variant="hero" size="sm">Create New</Button>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 bg-accent/30 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {assignment.subject}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      assignment.status === 'active' ? 'bg-secondary/20 text-secondary-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                  <h4 className="font-semibold mb-1">{assignment.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{assignment.class}</p>
                  <p className="text-xs text-muted-foreground">Due: {assignment.dueDate}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

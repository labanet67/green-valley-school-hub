import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { schoolInfo, students, teachers, enrollmentByClass, feesPaidVsPending, performanceData, attendanceData, announcements } from '@/lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, GraduationCap, DollarSign, TrendingUp, ArrowUpRight, 
  Bell, Calendar, CheckCircle2, AlertCircle 
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const statsCards = [
  { 
    title: 'Total Students', 
    value: schoolInfo.totalStudents, 
    icon: <Users className="h-5 w-5" />,
    change: '+12%',
    changeType: 'positive' as const
  },
  { 
    title: 'Total Teachers', 
    value: schoolInfo.totalTeachers, 
    icon: <GraduationCap className="h-5 w-5" />,
    change: '+2',
    changeType: 'positive' as const
  },
  { 
    title: 'Fee Collection', 
    value: `KES ${(schoolInfo.feeCollectionTerm / 1000000).toFixed(1)}M`, 
    icon: <DollarSign className="h-5 w-5" />,
    change: '85%',
    changeType: 'positive' as const
  },
  { 
    title: 'Attendance Today', 
    value: `${schoolInfo.attendanceToday}%`, 
    icon: <TrendingUp className="h-5 w-5" />,
    change: '+2%',
    changeType: 'positive' as const
  },
];

const COLORS = ['hsl(152, 55%, 28%)', 'hsl(45, 93%, 47%)'];

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening at Green Valley.</p>
          </div>
          <Button variant="hero">
            <Calendar className="h-4 w-4 mr-2" />
            View Calendar
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground">
                    {stat.icon}
                  </div>
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    stat.changeType === 'positive' ? 'text-primary' : 'text-destructive'
                  }`}>
                    {stat.change}
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Enrollment Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Student Enrollment by Class</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={enrollmentByClass}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="students" fill="hsl(152, 55%, 28%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Fee Collection Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Fee Collection Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={feesPaidVsPending}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {feesPaidVsPending.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`KES ${(value / 1000000).toFixed(1)}M`, '']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[0] }} />
                  <span className="text-sm">Paid (KES 3.2M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[1] }} />
                  <span className="text-sm">Pending (KES 0.8M)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Attendance Trend */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Weekly Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} domain={[80, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="hsl(152, 55%, 28%)" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(152, 55%, 28%)', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Announcements</CardTitle>
              <Bell className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.slice(0, 3).map((announcement) => (
                <div key={announcement.id} className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                  <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                    announcement.priority === 'high' ? 'bg-destructive' :
                    announcement.priority === 'medium' ? 'bg-secondary' : 'bg-primary'
                  }`} />
                  <div>
                    <p className="font-medium text-sm">{announcement.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{announcement.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Students & Teachers */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Students */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Students</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {students.slice(0, 5).map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">Grade {student.grade}{student.stream}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${student.feeBalance > 0 ? 'text-destructive' : 'text-primary'}`}>
                        {student.feeBalance > 0 ? `KES ${student.feeBalance.toLocaleString()}` : 'Paid'}
                      </p>
                      <p className="text-xs text-muted-foreground">{student.attendance}% att.</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Teachers */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Teaching Staff</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {teachers.slice(0, 5).map((teacher) => (
                  <div key={teacher.id} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky to-sky/80 flex items-center justify-center text-primary-foreground font-semibold">
                        {teacher.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{teacher.name}</p>
                        <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                      </div>
                    </div>
                    {teacher.classTeacher && (
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {teacher.classTeacher}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

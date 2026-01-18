import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  GraduationCap, LayoutDashboard, Users, BookOpen, Calendar, DollarSign,
  Bus, FileText, MessageSquare, Settings, LogOut, Menu, X, Bell, User,
  ClipboardList, Home, ChevronRight
} from 'lucide-react';

interface SidebarItem {
  label: string;
  icon: ReactNode;
  href: string;
}

const adminSidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, href: '/admin' },
  { label: 'Students', icon: <Users className="h-5 w-5" />, href: '/admin/students' },
  { label: 'Teachers', icon: <BookOpen className="h-5 w-5" />, href: '/admin/teachers' },
  { label: 'Classes', icon: <Calendar className="h-5 w-5" />, href: '/admin/classes' },
  { label: 'Fees', icon: <DollarSign className="h-5 w-5" />, href: '/admin/fees' },
  { label: 'Transport', icon: <Bus className="h-5 w-5" />, href: '/admin/transport' },
  { label: 'Exams', icon: <ClipboardList className="h-5 w-5" />, href: '/admin/exams' },
  { label: 'Reports', icon: <FileText className="h-5 w-5" />, href: '/admin/reports' },
  { label: 'Communication', icon: <MessageSquare className="h-5 w-5" />, href: '/admin/communication' },
];

const teacherSidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, href: '/teacher' },
  { label: 'My Classes', icon: <Users className="h-5 w-5" />, href: '/teacher/classes' },
  { label: 'Attendance', icon: <ClipboardList className="h-5 w-5" />, href: '/teacher/attendance' },
  { label: 'Exams', icon: <FileText className="h-5 w-5" />, href: '/teacher/exams' },
  { label: 'Assignments', icon: <BookOpen className="h-5 w-5" />, href: '/teacher/assignments' },
];

const parentSidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, href: '/parent' },
  { label: 'My Child', icon: <User className="h-5 w-5" />, href: '/parent/child' },
  { label: 'Results', icon: <FileText className="h-5 w-5" />, href: '/parent/results' },
  { label: 'Fees', icon: <DollarSign className="h-5 w-5" />, href: '/parent/fees' },
  { label: 'Messages', icon: <MessageSquare className="h-5 w-5" />, href: '/parent/messages' },
];

const studentSidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, href: '/student' },
  { label: 'Timetable', icon: <Calendar className="h-5 w-5" />, href: '/student/timetable' },
  { label: 'Assignments', icon: <BookOpen className="h-5 w-5" />, href: '/student/assignments' },
  { label: 'Results', icon: <FileText className="h-5 w-5" />, href: '/student/results' },
];

export function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getSidebarItems = () => {
    switch (user?.role) {
      case 'admin': return adminSidebarItems;
      case 'teacher': return teacherSidebarItems;
      case 'parent': return parentSidebarItems;
      case 'student': return studentSidebarItems;
      default: return [];
    }
  };

  const sidebarItems = getSidebarItems();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getRoleLabel = () => {
    switch (user?.role) {
      case 'admin': return 'Administrator';
      case 'teacher': return 'Teacher';
      case 'parent': return 'Parent';
      case 'student': return 'Student';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-border h-16 flex items-center justify-between px-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg hover:bg-accent"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold">Green Valley</span>
        </div>
        <button className="p-2 rounded-lg hover:bg-accent relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </button>
      </header>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3">
                <div className="p-2 rounded-xl gradient-primary shadow-md">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-sm">Green Valley</h1>
                  <p className="text-xs text-muted-foreground">School Portal</p>
                </div>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1.5 rounded-lg hover:bg-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <User className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-sm">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{getRoleLabel()}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                  location.pathname === item.href
                    ? "gradient-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.icon}
                {item.label}
                {location.pathname === item.href && (
                  <ChevronRight className="h-4 w-4 ml-auto" />
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-border space-y-2">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              <Home className="h-5 w-5" />
              Back to Website
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-all"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 border-b border-border items-center justify-between px-6 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Welcome back,</span>
            <span className="font-semibold text-foreground">{user?.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-accent relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </header>

        <div className="p-4 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

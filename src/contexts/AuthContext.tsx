import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'teacher' | 'parent' | 'student' | null;

interface User {
  email: string;
  role: UserRole;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers = [
  { email: 'admin@demo.school', password: 'Admin@123', role: 'admin' as UserRole, name: 'Admin User' },
  { email: 'teacher1@demo.school', password: 'Teacher@123', role: 'teacher' as UserRole, name: 'Mary Njeri' },
  { email: 'parent1@demo.school', password: 'Parent@123', role: 'parent' as UserRole, name: 'Mr. Mwangi' },
  { email: 'student1@demo.school', password: 'Student@123', role: 'student' as UserRole, name: 'John Mwangi' },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser({ email: foundUser.email, role: foundUser.role, name: foundUser.name });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

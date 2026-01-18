// Mock Data for Green Valley Primary & Junior School

export const schoolInfo = {
  name: "Green Valley Primary & Junior School",
  location: "Nairobi, Kenya",
  phone: "0700 123 456",
  email: "info@greenvalleyschool.demo",
  levels: "Primary + Junior Secondary",
  totalStudents: 420,
  totalTeachers: 28,
  totalParents: 310,
  streams: ["A", "B", "C"],
  feeCollectionTerm: 3200000,
  attendanceToday: 94,
};

export const demoCredentials = [
  { role: "Admin", username: "admin@demo.school", password: "Admin@123" },
  { role: "Teacher", username: "teacher1@demo.school", password: "Teacher@123" },
  { role: "Parent", username: "parent1@demo.school", password: "Parent@123" },
  { role: "Student", username: "student1@demo.school", password: "Student@123" },
];

export interface Student {
  id: string;
  name: string;
  grade: string;
  stream: string;
  admissionNo: string;
  photo: string;
  parent: string;
  feeBalance: number;
  feePaid: number;
  bus?: string;
  attendance: number;
}

export const students: Student[] = [
  { id: "1", name: "John Mwangi", grade: "6", stream: "A", admissionNo: "GV2024001", photo: "", parent: "Mr. Mwangi", feeBalance: 5000, feePaid: 20000, bus: "Bus 1", attendance: 96 },
  { id: "2", name: "Aisha Hassan", grade: "4", stream: "B", admissionNo: "GV2024002", photo: "", parent: "Mrs. Hassan", feeBalance: 10000, feePaid: 15000, attendance: 92 },
  { id: "3", name: "Brian Otieno", grade: "8", stream: "A", admissionNo: "GV2024003", photo: "", parent: "Mr. Otieno", feeBalance: 0, feePaid: 25000, bus: "Bus 2", attendance: 98 },
  { id: "4", name: "Faith Wanjiku", grade: "9", stream: "A", admissionNo: "GV2024004", photo: "", parent: "Mrs. Wanjiku", feeBalance: 8000, feePaid: 17000, bus: "Bus 2", attendance: 95 },
  { id: "5", name: "Kevin Kamau", grade: "7", stream: "B", admissionNo: "GV2024005", photo: "", parent: "Mr. Kamau", feeBalance: 3000, feePaid: 22000, attendance: 94 },
  { id: "6", name: "Grace Njeri", grade: "5", stream: "C", admissionNo: "GV2024006", photo: "", parent: "Mrs. Njeri", feeBalance: 0, feePaid: 25000, bus: "Bus 1", attendance: 97 },
  { id: "7", name: "Daniel Kipchoge", grade: "3", stream: "A", admissionNo: "GV2024007", photo: "", parent: "Mr. Kipchoge", feeBalance: 12000, feePaid: 13000, attendance: 89 },
  { id: "8", name: "Mercy Wambui", grade: "2", stream: "B", admissionNo: "GV2024008", photo: "", parent: "Mrs. Wambui", feeBalance: 1500, feePaid: 23500, attendance: 93 },
];

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  classTeacher?: string;
  photo: string;
}

export const teachers: Teacher[] = [
  { id: "1", name: "Mary Njeri", subject: "Mathematics", email: "mary@greenvalley.demo", phone: "0722111222", classTeacher: "Grade 6A", photo: "" },
  { id: "2", name: "Peter Otieno", subject: "English", email: "peter@greenvalley.demo", phone: "0722111223", classTeacher: "Grade 5B", photo: "" },
  { id: "3", name: "Grace Wambui", subject: "Science", email: "grace@greenvalley.demo", phone: "0722111224", classTeacher: "Grade 7A", photo: "" },
  { id: "4", name: "David Kimani", subject: "ICT", email: "david@greenvalley.demo", phone: "0722111225", classTeacher: "Grade 9A", photo: "" },
  { id: "5", name: "Sarah Achieng", subject: "Kiswahili", email: "sarah@greenvalley.demo", phone: "0722111226", photo: "" },
  { id: "6", name: "James Mutua", subject: "Social Studies", email: "james@greenvalley.demo", phone: "0722111227", classTeacher: "Grade 8B", photo: "" },
];

export const classes = [
  { grade: "1", streams: ["A", "B"], students: 45 },
  { grade: "2", streams: ["A", "B", "C"], students: 52 },
  { grade: "3", streams: ["A", "B"], students: 48 },
  { grade: "4", streams: ["A", "B", "C"], students: 55 },
  { grade: "5", streams: ["A", "B"], students: 42 },
  { grade: "6", streams: ["A", "B", "C"], students: 58 },
  { grade: "7", streams: ["A", "B"], students: 40 },
  { grade: "8", streams: ["A", "B"], students: 38 },
  { grade: "9", streams: ["A"], students: 42 },
];

export const timetable = [
  { day: "Monday", time: "8:00 - 9:00", subject: "Mathematics", teacher: "Mary Njeri", class: "Grade 6A" },
  { day: "Monday", time: "9:00 - 10:00", subject: "English", teacher: "Peter Otieno", class: "Grade 6A" },
  { day: "Monday", time: "10:30 - 11:30", subject: "Science", teacher: "Grace Wambui", class: "Grade 6A" },
  { day: "Tuesday", time: "8:00 - 9:00", subject: "Kiswahili", teacher: "Sarah Achieng", class: "Grade 6A" },
  { day: "Tuesday", time: "9:00 - 10:00", subject: "Social Studies", teacher: "James Mutua", class: "Grade 6A" },
  { day: "Tuesday", time: "10:30 - 11:30", subject: "ICT", teacher: "David Kimani", class: "Grade 6A" },
  { day: "Wednesday", time: "8:00 - 9:00", subject: "Mathematics", teacher: "Mary Njeri", class: "Grade 6A" },
  { day: "Wednesday", time: "9:00 - 10:00", subject: "Science", teacher: "Grace Wambui", class: "Grade 6A" },
  { day: "Thursday", time: "8:00 - 9:00", subject: "English", teacher: "Peter Otieno", class: "Grade 6A" },
  { day: "Thursday", time: "9:00 - 10:00", subject: "Mathematics", teacher: "Mary Njeri", class: "Grade 6A" },
  { day: "Friday", time: "8:00 - 9:00", subject: "Kiswahili", teacher: "Sarah Achieng", class: "Grade 6A" },
  { day: "Friday", time: "9:00 - 10:00", subject: "Physical Education", teacher: "James Mutua", class: "Grade 6A" },
];

export const feeStructure = [
  { item: "Tuition", amount: 25000 },
  { item: "Development Fund", amount: 5000 },
  { item: "Transport (Optional)", amount: 6000 },
  { item: "Lunch Program", amount: 4000 },
  { item: "Books & Materials", amount: 3000 },
];

export const buses = [
  { id: "1", name: "Bus 1", route: "Eastlands", capacity: 45, assigned: 38, driver: "John Kamau" },
  { id: "2", name: "Bus 2", route: "Westlands", capacity: 45, assigned: 42, driver: "Peter Wafula" },
];

export interface ExamResult {
  studentId: string;
  studentName: string;
  examType: string;
  subject: string;
  marks: number;
  grade: string;
  term: string;
}

export const examResults: ExamResult[] = [
  { studentId: "1", studentName: "John Mwangi", examType: "CAT 1", subject: "Mathematics", marks: 85, grade: "A", term: "Term 1" },
  { studentId: "1", studentName: "John Mwangi", examType: "CAT 1", subject: "English", marks: 78, grade: "B+", term: "Term 1" },
  { studentId: "1", studentName: "John Mwangi", examType: "CAT 1", subject: "Science", marks: 92, grade: "A", term: "Term 1" },
  { studentId: "1", studentName: "John Mwangi", examType: "Mid-Term", subject: "Mathematics", marks: 88, grade: "A", term: "Term 1" },
  { studentId: "1", studentName: "John Mwangi", examType: "Mid-Term", subject: "English", marks: 75, grade: "B", term: "Term 1" },
  { studentId: "2", studentName: "Aisha Hassan", examType: "CAT 1", subject: "Mathematics", marks: 72, grade: "B", term: "Term 1" },
  { studentId: "2", studentName: "Aisha Hassan", examType: "CAT 1", subject: "English", marks: 88, grade: "A", term: "Term 1" },
];

export const announcements = [
  { id: "1", title: "Mid-term Exams Schedule", content: "Mid-term exams will start next week. Please ensure all students are well prepared.", date: "2024-03-15", priority: "high" },
  { id: "2", title: "Fee Balance Reminder", content: "Parents with outstanding fee balances are reminded to clear by end of month.", date: "2024-03-14", priority: "medium" },
  { id: "3", title: "Sports Day", content: "Annual sports day will be held on March 25th. All students should participate.", date: "2024-03-13", priority: "low" },
  { id: "4", title: "Parent-Teacher Meeting", content: "Scheduled for next Friday at 2:00 PM. All parents are encouraged to attend.", date: "2024-03-12", priority: "high" },
];

export const assignments = [
  { id: "1", subject: "Mathematics", title: "Fractions Homework", dueDate: "2024-03-20", class: "Grade 6A", teacher: "Mary Njeri", status: "active" },
  { id: "2", subject: "English", title: "Essay Writing", dueDate: "2024-03-22", class: "Grade 6A", teacher: "Peter Otieno", status: "active" },
  { id: "3", subject: "Science", title: "Lab Report", dueDate: "2024-03-18", class: "Grade 6A", teacher: "Grace Wambui", status: "submitted" },
];

export const enrollmentByClass = [
  { name: "Grade 1", students: 45 },
  { name: "Grade 2", students: 52 },
  { name: "Grade 3", students: 48 },
  { name: "Grade 4", students: 55 },
  { name: "Grade 5", students: 42 },
  { name: "Grade 6", students: 58 },
  { name: "Grade 7", students: 40 },
  { name: "Grade 8", students: 38 },
  { name: "Grade 9", students: 42 },
];

export const feesPaidVsPending = [
  { name: "Paid", value: 3200000, fill: "hsl(152, 55%, 28%)" },
  { name: "Pending", value: 800000, fill: "hsl(45, 93%, 47%)" },
];

export const performanceData = [
  { subject: "Mathematics", average: 75 },
  { subject: "English", average: 72 },
  { subject: "Science", average: 78 },
  { subject: "Kiswahili", average: 70 },
  { subject: "Social Studies", average: 68 },
  { subject: "ICT", average: 82 },
];

export const attendanceData = [
  { day: "Mon", attendance: 96 },
  { day: "Tue", attendance: 94 },
  { day: "Wed", attendance: 92 },
  { day: "Thu", attendance: 95 },
  { day: "Fri", attendance: 90 },
];

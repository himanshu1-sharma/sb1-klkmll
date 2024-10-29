export const employeeData = {
  employees: [
    { 
      id: 1, 
      name: "Sarah Wilson", 
      role: "Software Engineer", 
      attendance: 92, 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80" 
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      role: "Product Designer", 
      attendance: 88, 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80" 
    },
    { 
      id: 3, 
      name: "Emily Rodriguez", 
      role: "Marketing Manager", 
      attendance: 95, 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128&q=80" 
    },
    { 
      id: 4, 
      name: "David Kim", 
      role: "Data Analyst", 
      attendance: 90, 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80" 
    },
  ],
  todayAttendance: [
    { id: 1, name: "Sarah Wilson", status: "Present", checkIn: "09:00 AM" },
    { id: 2, name: "Michael Chen", status: "Present", checkIn: "09:15 AM" },
    { id: 3, name: "Emily Rodriguez", status: "Late", checkIn: "10:30 AM" },
    { id: 4, name: "David Kim", status: "Absent", checkIn: "-" },
  ],
} as const;
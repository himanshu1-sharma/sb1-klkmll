import { Card } from "@/components/ui/card";
import { Users, Calendar as CalendarIcon, BarChart3 } from "lucide-react";
import { employeeData } from "@/lib/data";

export function StatisticsCards() {
  const presentCount = employeeData.todayAttendance.filter(e => e.status === "Present").length;
  const averageAttendance = Math.round(
    employeeData.employees.reduce((acc, curr) => acc + curr.attendance, 0) / 
    employeeData.employees.length
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-primary/10 rounded-full">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Employees</p>
            <h2 className="text-3xl font-bold">{employeeData.employees.length}</h2>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-green-500/10 rounded-full">
            <CalendarIcon className="h-8 w-8 text-green-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Present Today</p>
            <h2 className="text-3xl font-bold">{presentCount}</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-blue-500/10 rounded-full">
            <BarChart3 className="h-8 w-8 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Average Attendance</p>
            <h2 className="text-3xl font-bold">{averageAttendance}%</h2>
          </div>
        </div>
      </Card>
    </div>
  );
}
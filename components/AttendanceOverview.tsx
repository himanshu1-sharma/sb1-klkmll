"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { employeeData } from "@/lib/data";

export function AttendanceOverview() {
  return (
    <Card className="col-span-2">
      <Tabs defaultValue="today" className="w-full">
        <div className="p-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Attendance Overview</h3>
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="today" className="p-6 pt-0">
          <div className="space-y-6">
            {employeeData.todayAttendance.map((employee) => (
              <div key={employee.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={employeeData.employees.find(e => e.id === employee.id)?.image} />
                    <AvatarFallback>{employee.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-sm text-muted-foreground">Check-in: {employee.checkIn}</p>
                  </div>
                </div>
                <Badge variant={
                  employee.status === "Present" ? "default" :
                  employee.status === "Late" ? "warning" : "destructive"
                }>
                  {employee.status}
                </Badge>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="monthly" className="p-6 pt-0">
          <div className="space-y-6">
            {employeeData.employees.map((employee) => (
              <div key={employee.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={employee.image} />
                      <AvatarFallback>{employee.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">{employee.role}</p>
                    </div>
                  </div>
                  <p className="font-medium">{employee.attendance}%</p>
                </div>
                <Progress value={employee.attendance} className="h-2" />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
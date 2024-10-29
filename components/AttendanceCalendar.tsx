"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function AttendanceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Attendance Calendar</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </Card>
  );
}
import { TimeDisplay } from "@/components/TimeDisplay";
import { StatisticsCards } from "@/components/StatisticsCards";
import { AttendanceOverview } from "@/components/AttendanceOverview";
import { AttendanceCalendar } from "@/components/AttendanceCalendar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Employee Management</h1>
          <TimeDisplay />
        </div>

        <StatisticsCards />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AttendanceOverview />
          <AttendanceCalendar />
        </div>
      </div>
    </div>
  );
}
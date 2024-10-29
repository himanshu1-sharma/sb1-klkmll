"use client";

import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function TimeDisplay() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <Badge variant="outline" className="text-lg px-4 py-2">
        <Clock className="mr-2 h-4 w-4" />
        Loading...
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="text-lg px-4 py-2">
      <Clock className="mr-2 h-4 w-4" />
      {time}
    </Badge>
  );
}
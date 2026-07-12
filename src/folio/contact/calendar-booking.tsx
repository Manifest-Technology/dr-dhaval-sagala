"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CalendarBooking() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <section className="relative w-full">

      {/* LOADING SKELETON */}
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="animate-pulse text-sm text-muted-foreground">
            Loading calendar...
          </div>
        </div>
      )}

      {/* ERROR FALLBACK */}
      {error && (
        <div className="p-10 text-center">
          <p className="text-red-500 font-medium">
            Unable to load booking system.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Please try again later or contact support.
          </p>
        </div>
      )}

      {/* IFRAME */}
      {!error && (
        <motion.iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ32waWCU4Qr87_WvLSfLjn2EsNpPqH5doO7Mia1h8vmHMYRjBbllVndpf9345-GT7k1NS6M7L1B?gv=true"
          className="w-full border-0"
          height="650"
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </section>
  );
}
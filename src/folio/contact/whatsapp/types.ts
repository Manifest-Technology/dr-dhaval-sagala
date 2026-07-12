import {
  faCalendarCheck,
  faClock,
  faLocationDot,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";

export type Message = {
  id: number;
  sender: "bot" | "user";
  name: string;
  text: string;
  time: string;
};

export const OPTIONS = [
  {
    title: "Book Appointment",
    icon: faCalendarCheck,
  },
  {
    title: "Injury Consultation",
    icon: faPersonRunning,
  },
  {
    title: "Hospital Location",
    icon: faLocationDot,
  },
  {
    title: "Consultation Timings",
    icon: faClock,
  },
];

export function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}
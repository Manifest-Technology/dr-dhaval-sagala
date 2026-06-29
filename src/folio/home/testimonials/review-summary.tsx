"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faStar,
  faUsers,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export function ReviewSummary() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-3xl border border-border/60 bg-card/70 px-8 py-6 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl font-bold tracking-tight">
            4.9
          </span>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-sm text-amber-400"
              />
            ))}
          </div>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Average Rating
        </p>
      </div>

      <div className="rounded-3xl border border-border/60 bg-card/70 px-8 py-6 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-primary"
          />

          <span className="text-4xl font-bold tracking-tight">
            300+
          </span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Verified Reviews
        </p>
      </div>

      <div className="rounded-3xl border border-border/60 bg-card/70 px-8 py-6 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="text-primary"
          />

          <span className="text-4xl font-bold tracking-tight">
            98%
          </span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Patient Satisfaction
        </p>
      </div>
    </div>
  );
}
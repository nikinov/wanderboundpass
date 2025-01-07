"use client";

import React from 'react';

interface TimelineEvent {
  day: string;
  title: string;
  activities: string[];
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const getIcon = (index: number) => {
    const icons = [
      <path key="plane" d="M3.7 10.3l15.3-6.9c.4-.2.8-.1 1.1.2.3.3.3.7.2 1.1l-7 15.3c-.2.4-.6.6-1 .6s-.8-.3-.9-.7l-2-6.7-6.7-2c-.4-.1-.7-.5-.7-.9s.3-.8.7-1z" />,
      <path key="location" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />,
      <path key="camel" d="M19.5 16.5l-.7-1.5H17v-1.3c1.8-.4 3-2 3-3.7 0-2.2-1.8-4-4-4h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-1v-4H9v4H8c-1.1 0-2-.9-2-2s.9-2 2-2h2V6H8C5.8 6 4 7.8 4 10c0 1.7 1.2 3.3 3 3.7V15H5.2l-.7 1.5C4.2 17.1 4 17.7 4 18.3V20h16v-1.7c0-.6-.2-1.2-.5-1.8z" />,
      <path key="mosque" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />,
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="relative">
      <div className="timeline-container">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item opacity-0 animate-fadeIn ${
              index % 2 === 0 ? 'md:timeline-left' : 'md:timeline-right'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-content">
              <div className="timeline-point">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  {getIcon(index)}
                </svg>
              </div>
              <div className="p-6 bg-accent/5 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-sm font-medium">
                    {event.day}
                  </span>
                  <span className="h-0.5 flex-grow bg-accent/20"></span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <ul className="space-y-2 text-muted">
                  {event.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 
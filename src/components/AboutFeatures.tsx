import React from 'react';

const AboutFeatures = () => {
  const features = [
    {
      title: "Personal Journey",
      description: "After five years of exploring Morocco's hidden gems, I'm excited to share this unique adventure with you. This isn't just a tour; it's a journey into the heart of Moroccan culture, where you'll forge connections that will last a lifetime.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Immerse Yourself in Artistry",
      description: "Experience the beauty of Moroccan crafts first-hand! Learn ancient techniques from master artisans, create your own Zellige tiles, plaster carvings, or Berber rugs, and support the preservation of cultural heritage. This is an experience you will cherish forever.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Savour the Flavours",
      description: "We'll dive into the vibrant world of Moroccan cooking, uncovering tagine secrets from local chefs, blending aromatic spices, and baking traditional bread. Experience the magic of Moroccan cuisine up close!",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      title: "Connect & Create Memories",
      description: "Connect with local artisans, share stories around a table filled with delicious food, and create memories that will last a lifetime. Join us on this unforgettable Moroccan adventure!",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-accent/5 p-8 transition-all hover:bg-accent/10"
        >
          <div className="absolute right-0 top-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-accent/10 transition-all group-hover:scale-[2.5]"></div>
          <div className="relative space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutFeatures; 
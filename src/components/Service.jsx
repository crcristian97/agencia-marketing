import React from "react";
import ServiceTitle from "./ServiceTitle";

export default function Services() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-xl font-bold mb-8">
          NUESTROS SERVICIOS
        </h2>

        <div className="grid gap-4 md:gap-6">
          <ServiceTitle
            services={[
              { text: "MARKETING", highlight: true },
              { text: "CRM" },
              { text: "WEBDESIGN" },
              { text: "BRANDING" },
              { text: "EMAIL MARKETING" },
              { text: "SEO" },
              { text: "MUCHO MAS" },
            ]}
          />
        </div>
        <div className="mt-8 h-px w-full bg-white/100"></div>

        <div className="mt-12 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Team collaboration"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

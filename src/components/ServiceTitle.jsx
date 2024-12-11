import React from "react";

export default function ServiceTitle({ services }) {
  return (
    <div className="flex flex-wrap gap-4 items-center text-3 xl md:text-4xl lg:text-5xl font-bold tracking-tight">
      {services.map((service, index) => (
        <React.Fragment key={service.text}>
          <span className={service.highlight ? "text-violet-600" : "text-white"}>
            {service.text}
          </span>
          {index < services.length - 1 && (
            <span className="text-white">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

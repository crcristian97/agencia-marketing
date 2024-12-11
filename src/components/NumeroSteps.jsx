export default function NumberedSteps({ steps }) {
  

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(({ number, title, description }, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative group mb-8">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ease-in-out border-2 border-gray-300 text-gray-700 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600"
              >
                {number}
                <div className="absolute -inset-2 bg-violet-600/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-in-out -z-10" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">{title}</h3>

            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

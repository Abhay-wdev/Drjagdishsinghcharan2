export default function ConditionWeTreat({conditions}) {
  
  return (
    <section className="w-full py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Conditions We Treat
      </h2>

      <div className="space-y-10 max-w-5xl mx-auto">
        {conditions.map((condition, index) => (
          <div
            key={index}
            className="w-full border-l-blue-500 border-l-4 p-4 bg-blue-50 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 w-full">
              {condition.title}
            </h3>
            <p className="text-base text-gray-600 w-full">
              {condition.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

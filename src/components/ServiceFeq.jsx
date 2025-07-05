export default function ServiceFeq ({faqs}){
  return <>
  <section>
        <h2 className="text-3xl font-bold mb-6 text-blue-700  ">FAQs</h2>
        {faqs.map(({ q, a } ,index) => (
          <details 
            key={index}
            className="mb-4 rounded-md border-l-4 border-blue-600 bg-white p-4 shadow transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <summary className="cursor-pointer font-medium text-lg text-gray-900">
              {q}
            </summary>
            <p className="mt-2 text-gray-700 leading-relaxed">{a}</p>
          </details>
        ))}
      </section>
  </>
}
export default function Expertise() {
  const expertiseCards = [
    {
      title: "Cybersecurity",
      description: "Knowledge in security best practices and vulnerability assessment"
    },
    {
      title: "Frontend Specialist",
      description: "React, Next.js, TypeScript - my strongest expertise in creating beautiful, responsive interfaces"
    },
    {
      title: "Backend Skills",
      description: "MongoDB, PostgreSQL, Firebase, Supabase - solid database and API development"
    }
  ]

  return (
    <section className="py-20 px-6 bg-[#FAFAFA]">
      <div className="container-custom">
        
        {/* Cards - EXACT 3-column layout from image */}
        <div className="space-y-12">
          {expertiseCards.map((card, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              {index < expertiseCards.length - 1 && (
                <div className="w-full h-px bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Horizontal line - EXACT from image */}
        <div className="w-full h-px bg-gray-300 my-12"></div>

        {/* EXPERTISE footer - EXACT from image */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">EXPERTISE</h2>
          <p className="text-gray-600">Skills & Technologies</p>
        </div>

      </div>
    </section>
  )
}
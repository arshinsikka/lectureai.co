export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      description: "Former ML Engineer at Google, Stanford CS PhD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      roleColor: "text-orange-500"
    },
    {
      name: "Dr. Sarah Martinez",
      role: "CTO & Co-Founder",
      description: "AI Research Scientist, MIT AI Lab alumni",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      roleColor: "text-blue-800"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      description: "Full-stack engineer, UC Berkeley graduate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      roleColor: "text-orange-500"
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      description: "UX Designer, previously at Apple Design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      roleColor: "text-blue-800"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate educators and technologists working together to revolutionize learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <img 
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className={`${member.roleColor} font-medium mb-2`}>{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

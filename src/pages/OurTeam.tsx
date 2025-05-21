import React from "react";

const teamMembers = [
  { name: "Alice Johnson", position: "Chief Executive Officer" },
  { name: "Bob Smith", position: "Head of Engineering" },
  { name: "Carol Davis", position: "Marketing Director" },
  { name: "David Brown", position: "Product Manager" },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

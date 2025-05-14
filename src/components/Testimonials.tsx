import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Web Developer",
    quote: "As a developer, I need to visit a wide range of websites for research. GuardianScan has caught several sketchy scripts that my antivirus missed. The detailed reports help me understand exactly what was blocked.",
    stars: 5
  },
  {
    name: "Michael Chen",
    title: "Small Business Owner",
    quote: "Before installing GuardianScan, my business website was compromised by a cryptomining script. Since using this extension, we've had zero security incidents and my team feels much safer browsing online.",
    stars: 5
  },
  {
    name: "Emily Rodriguez",
    title: "Privacy Advocate",
    quote: "I've tried many security extensions, but GuardianScan offers the perfect balance of protection without being intrusive. The control panel is intuitive and I appreciate being able to see what's running in real-time.",
    stars: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust GuardianScan to protect their online activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={18} 
                    className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="bg-white rounded-lg shadow-md px-6 py-4 flex items-center">
            <div className="flex -space-x-2 mr-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium border-2 border-white">SJ</div>
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium border-2 border-white">MC</div>
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium border-2 border-white">ER</div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium border-2 border-white">+</div>
            </div>
            <div>
              <p className="font-medium text-gray-900">Join 50,000+ users worldwide</p>
              <p className="text-sm text-gray-600">Trusted by individuals and businesses alike</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
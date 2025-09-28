import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export default function StudentGallerySection() {
  const students = [
    { name: 'Priya S.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Michael C.', img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Sofia L.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'David K.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Emily R.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Alex J.', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Jessica B.', img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Carlos G.', img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Linda H.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Kevin T.', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  ];

  const allStudents = [...students, ...students]; // Duplicate for seamless scroll

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <style>{`
        .scrolling-wrapper {
          display: flex;
          flex-wrap: nowrap;
          animation: scroll 40s linear infinite;
        }
        
        .scrolling-wrapper-reverse {
          animation-direction: reverse;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .scrolling-wrapper:hover, .scrolling-wrapper-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-700 px-6 py-2 rounded-full shadow-lg border border-gray-600 mb-6">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-gray-200 font-medium text-sm">Wall of Success</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Celebrating Our Successful Students
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join the hundreds of happy drivers who passed their tests with confidence. 
            You could be next!
          </p>
        </motion.div>
      </div>
      
      <div className="space-y-8">
        {/* First row */}
        <div className="scrolling-wrapper">
          {allStudents.map((student, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 mx-4">
              <div className="group relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="font-bold text-white">{student.name}</h4>
                  <div className="flex items-center gap-1 text-green-300 text-xs font-medium">
                    <Check className="w-3 h-3"/>
                    <span>Passed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row (reverse) */}
        <div className="scrolling-wrapper scrolling-wrapper-reverse">
          {allStudents.map((student, index) => (
             <div key={`row2-${index}`} className="flex-shrink-0 mx-4">
              <div className="group relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="font-bold text-white">{student.name}</h4>
                  <div className="flex items-center gap-1 text-green-300 text-xs font-medium">
                    <Check className="w-3 h-3"/>
                    <span>Passed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
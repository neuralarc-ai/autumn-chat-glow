import React from 'react';
import { Sparkles, Coffee, BookOpen, Lightbulb } from 'lucide-react';

const WelcomeMessage = () => {
  const suggestions = [
    {
      icon: Coffee,
      title: "Tell me a joke",
      description: "Brighten up my day",
      tags: ["Fun-Fact"],
      borderImageUrl: "/card1.png",
    },
    {
      icon: BookOpen,
      title: "Sustainable Packaging",
      description: "Receive detailed investment.",
      tags: ["Eco - Friendly Tech"],
      borderImageUrl: "/card2.png",
    },
    {
      icon: Lightbulb,
      title: "Creative brainstorming",
      description: "Generate ideas together",
      tags: ["Brainstorm"],
      borderImageUrl: "/card3.png",
    },
    {
      icon: Sparkles,
      title: "Plan my day",
      description: "Organize my schedule",
      tags: ["Time Management"],
      borderImageUrl: "/card4.png",
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8 animate-fade-in">
        <div className="w-16 h-16 bg-gradient-to-br from-autumn-sage to-autumn-brown rounded-full flex items-center justify-center mb-4 mx-auto">
          <Sparkles size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to MAYA</h2>
        <p className="text-gray-600 max-w-md">
        Hi, I'm Maya, Ready to help! Ask me anything or tap a suggestion to begin.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={`group rounded-[8px] shadow-xl hover:shadow-xl transition-all duration-200 cursor-pointer animate-slide-up overflow-hidden`}
            style={{
              animationDelay: `${index * 100}ms`,
              backgroundImage: `url(${suggestion.borderImageUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              padding: '12px',
            }}
          >
            <div className="bg-white rounded-lg h-full w-full p-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <suggestion.icon size={20} className="text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg font-mono">
                    {suggestion.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-mono mb-0">
                    {suggestion.description}
                  </p>
                  {suggestion.tags && suggestion.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {suggestion.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeMessage;

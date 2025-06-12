
import React from 'react';
import { Sparkles, Coffee, BookOpen, Lightbulb } from 'lucide-react';

const WelcomeMessage = () => {
  const suggestions = [
    {
      icon: Coffee,
      title: "Tell me a joke",
      description: "Brighten up my day"
    },
    {
      icon: BookOpen,
      title: "Help me learn something",
      description: "Explain a concept"
    },
    {
      icon: Lightbulb,
      title: "Creative brainstorming",
      description: "Generate ideas together"
    },
    {
      icon: Sparkles,
      title: "Plan my day",
      description: "Organize my schedule"
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8 animate-fade-in">
        <div className="w-16 h-16 bg-gradient-to-br from-autumn-sage to-autumn-brown rounded-full flex items-center justify-center mb-4 mx-auto">
          <Sparkles size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to Your Personal Assistant</h2>
        <p className="text-gray-600 max-w-md">
          I'm here to help you with anything you need. Start a conversation by typing a message or try one of these suggestions:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-autumn-sage hover:shadow-md transition-all duration-200 cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-autumn-light rounded-lg flex items-center justify-center group-hover:bg-autumn-sage group-hover:text-white transition-colors">
                <suggestion.icon size={18} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 group-hover:text-autumn-brown transition-colors">
                  {suggestion.title}
                </h3>
                <p className="text-sm text-gray-500">{suggestion.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeMessage;

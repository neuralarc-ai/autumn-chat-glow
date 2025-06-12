
import React from 'react';
import { Sparkles, Coffee, BookOpen, Lightbulb } from 'lucide-react';

const WelcomeMessage = () => {
  const suggestions = [
    {
      icon: Coffee,
      title: "Tell me a joke",
      description: "Brighten up my day",
      borderColor: "border-l-orange-400"
    },
    {
      icon: BookOpen,
      title: "Help me learn something",
      description: "Explain a concept",
      borderColor: "border-l-blue-400"
    },
    {
      icon: Lightbulb,
      title: "Creative brainstorming",
      description: "Generate ideas together",
      borderColor: "border-l-green-400"
    },
    {
      icon: Sparkles,
      title: "Plan my day",
      description: "Organize my schedule",
      borderColor: "border-l-purple-400"
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
            className={`group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 border-l-8 ${suggestion.borderColor} hover:shadow-md transition-all duration-200 cursor-pointer animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-autumn-sage group-hover:text-white transition-colors">
                <suggestion.icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {suggestion.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {suggestion.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeMessage;

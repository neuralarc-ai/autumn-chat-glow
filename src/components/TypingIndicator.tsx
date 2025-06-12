
import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex items-start gap-3 mb-6 chat-message-enter">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-autumn-sage flex items-center justify-center">
        <Bot size={16} className="text-white" />
      </div>
      
      <div className="flex flex-col items-start">
        <div className="px-4 py-3 bg-white rounded-2xl rounded-tl-md shadow-sm">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;

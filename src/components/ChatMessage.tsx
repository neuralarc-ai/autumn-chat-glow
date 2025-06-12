import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex items-start gap-3 mb-6 chat-message-enter ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden ${
        isBot ? 'bg-autumn-sage' : 'bg-autumn-brown'
      }`}>
        {isBot ? (
          <img src="/ai-agent.png" alt="AI Agent" className="w-full h-full object-cover" />
        ) : (
          <User size={16} className="text-white" />
        )}
      </div>
      
      <div className={`flex flex-col max-w-[70%] ${isBot ? 'items-start' : 'items-end'}`}>
        <div className={`px-4 py-3 rounded-2xl shadow-sm ${
          isBot 
            ? 'bg-white text-gray-800 rounded-tl-md' 
            : 'bg-autumn-brown text-white rounded-tr-md'
        }`}>
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        
        <span className="text-xs text-gray-500 mt-1 px-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;

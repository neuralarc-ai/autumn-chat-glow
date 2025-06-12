import React from 'react';
import { MessageSquare, MoreVertical, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onNewChat: () => void;
}

const ChatHeader = ({ onNewChat }: ChatHeaderProps) => {
  return (
    <div className="border-b border-gray-200 bg-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="font-semibold text-gray-800">Maya</h1>
          <p className="text-sm text-gray-500">Your Personal Assistant</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        
      </div>
    </div>
  );
};

export default ChatHeader;

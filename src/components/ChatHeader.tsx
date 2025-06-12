
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
        <div className="w-10 h-10 bg-gradient-to-br from-autumn-sage to-autumn-brown rounded-xl flex items-center justify-center">
          <MessageSquare size={20} className="text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-gray-800">Personal Assistant</h1>
          <p className="text-sm text-gray-500">Always here to help</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          onClick={onNewChat}
          variant="ghost"
          size="sm"
          className="text-autumn-sage hover:text-autumn-brown hover:bg-autumn-light"
        >
          New Chat
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="text-autumn-sage hover:text-autumn-brown hover:bg-autumn-light"
        >
          <Settings size={18} />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="text-autumn-sage hover:text-autumn-brown hover:bg-autumn-light"
        >
          <MoreVertical size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;

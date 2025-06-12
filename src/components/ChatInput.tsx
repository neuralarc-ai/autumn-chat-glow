import React, { useState } from 'react';
import { ChevronRight, Mic, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleMicClick = async () => {
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.ELEVENLABS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: 'Hello, how can I assist you today?',
          voice_id: 'agent_01jxajnxg3eb69kz07dnpspvrk',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to synthesize speech');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error('Error processing audio:', error);
    }
  };

  return (
    <div className="bg-[white] p-4 ">
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        
        <div className="flex-1 relative rounded-lg overflow-hidden"
          style={{
            borderWidth: '4px',
            borderStyle: 'solid',
            borderImage: 'linear-gradient(90deg, #262626 -10.57%, #8B9C76 24.74%, #CEAF8E 56.8%) 4',
            animation: 'rotateBorder 5s linear infinite',
          }}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={disabled}
            className="w-full resize-none px-4 py-3 pr-24 text-sm focus:outline-none focus:ring-0 focus:border-0 transition-all  max-h-32 min-h-[48px]"
            rows={1}
            style={{
              height: 'auto',
              minHeight: '48px',
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = Math.min(target.scrollHeight, 128) + 'px';
            }}
          />
          <Button
            type="button"
            disabled={disabled}
            className="absolute right-14 top-1/2 -translate-y-1/2 text-white rounded-full h-10 w-10 p-0 bg-autumn-brown"
            onClick={handleMicClick}
          >
            <Mic size={18} />
          </Button>
          <Button
            type="submit"
            disabled={!message.trim() || disabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white rounded-[4px] h-10 w-10 p-0 bg-autumn-brown"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;

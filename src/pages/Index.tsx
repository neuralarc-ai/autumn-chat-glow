
import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from '@/components/ChatHeader';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import TypingIndicator from '@/components/TypingIndicator';
import WelcomeMessage from '@/components/WelcomeMessage';
import OTPScreen from '@/components/OTPScreen';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleOTPSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const getBotResponse = (userText: string): string => {
    const responses = [
      "That's a great question! Let me think about that for a moment. Based on what you've shared, I'd suggest considering multiple perspectives on this topic.",
      "I understand what you're asking. This is definitely something worth exploring further. Have you considered the various approaches you could take?",
      "Thanks for sharing that with me. It sounds like you're dealing with something important. Let me help you work through this step by step.",
      "I appreciate you bringing this up. This reminds me of a few key principles that might be helpful to consider in your situation.",
      "That's an interesting point you've raised. There are several ways we could approach this, and I'm happy to help you explore the options.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleNewChat = () => {
    setMessages([]);
    setIsTyping(false);
  };

  // Show OTP screen if not authenticated
  if (!isAuthenticated) {
    return <OTPScreen onSuccess={handleOTPSuccess} />;
  }

  // Show main chat interface once authenticated
  return (
    <div className="min-h-screen bg-autumn-beige flex flex-col">
      <ChatHeader onNewChat={handleNewChat} />
      
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <div className="p-6">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isBot={message.isBot}
                  timestamp={message.timestamp}
                />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default Index;

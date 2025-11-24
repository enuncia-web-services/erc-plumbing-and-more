import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm the ERC Plumbing automated assistant. How can I help you today? I can answer questions about our services, hours, or help you book an appointment." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Prepare history for API context (excluding the very last user message which is sent separately)
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await getChatResponse(history, userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-blue animate-bounce'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X color="white" size={28} /> : <MessageCircle color="white" size={28} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 border border-gray-200 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 120px)', height: '500px' }}
      >
        {/* Header */}
        <div className="bg-brand-blue p-4 text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <h3 className="font-bold">ERC Plumbing Support</h3>
          </div>
          <p className="text-xs text-blue-200 mt-1">Ask about services, hours, or emergencies.</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-orange text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                <Loader2 className="animate-spin text-brand-blue" size={20} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !inputText.trim()}
              className="p-2 bg-brand-blue text-white rounded-full hover:bg-brand-darkBlue disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
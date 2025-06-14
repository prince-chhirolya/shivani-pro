

'use client'
import { useState } from 'react';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="w-full fixed top-0 left-0 bg-black/90 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-105">
                Taggart Advisors
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Expertise', 'Transactions', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white hover:text-gray-300 focus:outline-none transition-transform duration-300 hover:scale-110">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>


      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/16.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Strategic Financial Solutions for Your Business
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Expert advisory services helping businesses navigate complex financial landscapes and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          {/* Main button */}
          <button className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h2a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 012-2z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12v-2a9 9 0 0118 0v2"></path>
            </svg>  </button>  {/* Options that appear on hover/click */}
          <div className="absolute bottom-full mb-4 right-0 flex flex-col gap-3 items-end scale-0 origin-bottom-right group-hover:scale-100 transition-all duration-300">
            {/* WhatsApp option */}
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3">
              <span className="px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg shadow-lg whitespace-nowrap text-sm">
                WhatsApp Us
              </span>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </a>

            {/* Live Chat option */}
            <a href="#chat" onClick={(e) => {
              e.preventDefault();
              setChatOpen(true);
            }}
              className="flex items-center gap-3">
              <span className="px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg shadow-lg whitespace-nowrap text-sm">
                Live Chat
              </span>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </a>
            {/* Side Chat Interface */}
            {chatOpen && (
              <div className="fixed right-0 bottom-0 top-0 z-50 w-96 md:w-1/3 lg:w-1/4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-all duration-300 flex flex-col overflow-hidden">
                {/* Chat Header */}
                <div className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-600 to-purple-600 border-b border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-100 h-100 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Live Chat</h3>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                        <p className="text-xs text-white/80">Advisors online now</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
                  {/* Session Info */}
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-gray-300 text-xs font-medium">
                      Conversation started • Today at 11:45 AM
                    </div>
                  </div>

                  {/* Welcome message */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-3 max-w-[85%]">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        TA
                      </div>
                      <div className="bg-gray-700/70 backdrop-blur-sm text-white rounded-2xl rounded-tl-none py-3 px-4 shadow-lg">
                        <p>👋 Welcome to Taggart Advisors. How can our team help you today?</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 mt-1 ml-12">11:45 AM</span>
                  </div>

                  {/* User message */}
                  <div className="flex flex-col items-end">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl rounded-tr-none py-3 px-4 max-w-[85%] shadow-lg">
                      <p>Hi, I'm interested in learning more about your investment advisory services.</p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">11:47 AM</span>
                  </div>

                  {/* Bot response */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-3 max-w-[85%]">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        TA
                      </div>
                      <div className="bg-gray-700/70 backdrop-blur-sm text-white rounded-2xl rounded-tl-none py-3 px-4 shadow-lg">
                        <p>Of course! Our investment advisory services include personalized portfolio management, risk assessment, and strategic growth planning tailored to your specific goals.</p>
                        <p className="mt-2">Would you like to schedule a consultation with one of our senior advisors?</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 mt-1 ml-12">11:48 AM</span>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      TA
                    </div>
                    <div className="bg-gray-700/40 backdrop-blur-sm text-white rounded-2xl rounded-tl-none py-3 px-4 shadow-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-gray-800/90 backdrop-blur-md border-t border-white/10">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full bg-gray-700/50 border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 p-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-3 text-xs text-center text-gray-400">
                    Your conversation is encrypted end-to-end
                  </div>
                </div>
              </div>
            )}

            {/* Side Chat Interface */}
            {chatOpen && (
              <div className="fixed right-0 bottom-0 top-0 z-50 w-full max-w-md bg-gray-900/95 backdrop-blur-md border-l border-white/10 shadow-2xl transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <h3 className="text-white font-semibold">Live Chat</h3>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Example chat messages */}
                  <div className="flex flex-col items-start">
                    <div className="bg-blue-600 text-white rounded-lg py-2 px-4 max-w-xs">
                      Hello! How can I assist you today?
                    </div>
                    <span className="text-xs text-gray-400 mt-1">Support • 11:45 AM</span>
                  </div>
                </div>

                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}  </div>

          {/* Ping animation */}
          <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping opacity-75"></div>
        </div>
      </div>
    </div>
  );
}

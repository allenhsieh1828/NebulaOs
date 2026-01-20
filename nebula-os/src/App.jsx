import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      {/* 導覽列 */}
      <nav className="p-6 flex justify-between items-center border-b border-white/10">
        <h1 className="text-xl font-bold tracking-tighter italic">
          NEBULA<span className="text-cyan-400">OS</span>
        </h1>
        <div className="space-x-6 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Vision</a>
          <a href="#" className="hover:text-white transition-colors">System</a>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section 主視覺 */}
      <main className="flex flex-col items-center justify-center pt-32 px-6 text-center">
        <div className="inline-block px-3 py-1 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-400 mb-6 uppercase tracking-widest animate-pulse">
          v1.0 Launching 2026
        </div>
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          Redefine Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Workspace.
          </span>
        </h2>
        <p className="text-gray-400 max-w-lg text-lg md:text-xl leading-relaxed">
          The first modular desktop OS designed for peak productivity and aesthetic minimalists. 
          Experience the future of focused work.
        </p>
        
        {/* 這裡之後會放滾動動畫的產品圖預留區 */}
        <div className="mt-20 w-full max-w-4xl aspect-video bg-gradient-to-b from-white/5 to-transparent rounded-3xl border border-white/10 flex items-center justify-center">
          <p className="text-white/20 font-mono">Product Preview Animation Area</p>
        </div>
      </main>
    </div>
  );
}

export default App;
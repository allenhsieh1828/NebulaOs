import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden selection:bg-cyan-500/30">
      
      {/* 背景裝飾：發光圓點 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* 導覽列動畫 */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full p-8 flex justify-between items-center z-50 backdrop-blur-sm"
      >
        <h1 className="text-xl font-black tracking-tighter">
          NEBULA<span className="text-cyan-400">OS</span>
        </h1>
        <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <button className="text-xs font-mono tracking-widest text-gray-400 hover:text-cyan-400 transition-colors">
          v1.0.4_READY
        </button>
      </motion.nav>

      {/* 主內容區 */}
      <main className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 小標籤 */}
          <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono tracking-[0.3em] text-cyan-500 mb-6 bg-white/5 uppercase">
            Neural Interface Online
          </span>

          {/* 大標題 */}
          <h2 className="text-7xl md:text-9xl font-bold tracking-[ -0.05em] leading-none mb-8">
            Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
              Workspace.
            </span>
          </h2>

          {/* 說明文字 */}
          <p className="max-w-md mx-auto text-gray-500 text-sm md:text-base leading-relaxed font-light mb-10">
            A minimalist desktop environment designed for peak focus. 
            Experience the harmony of modular logic and aesthetic precision.
          </p>

          {/* 按鈕組合 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Initialize System
            </motion.button>
            <button className="px-8 py-3 text-white/60 hover:text-white text-sm font-medium transition-colors">
              Read Documentation
            </button>
          </div>
        </motion.div>
      </main>

      {/* 底部裝飾 */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="fixed bottom-8 w-full text-center"
      >
        <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
          Stability: Stable / Latency: 12ms
        </div>
      </motion.footer>

    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const introLines = [
  "人はみな、角（カド）を持って生まれてくる。",
  "目には見えないけれど、空気を変え、人を動かし、記憶に残る“角”。",
  "この診断は、生年月日からあなたの角の性質を読み解くものです。",
  "やさしい角、静かな角、走る角、そして伝説の角──",
  "角のあり方は、十人十色。けれど、どの角にも意味がある。",
  "この診断は、あなたの“角（カド）”に名前を与えるための儀式です。",
  "ようこそ、角（カド）の世界へ。"
];

export default function KadoIntro() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

   useEffect(() => {
    if (visibleIndex < introLines.length) {
      const timer = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      const delayButton = setTimeout(() => {
        setShowButton(true);
      }, 1800); // ← ボタンの出現を遅らせる
      return () => clearTimeout(delayButton);
    }
  }, [visibleIndex]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fdf5e6", backgroundRepeat: "repeat", backgroundSize: "auto", color: "#222", fontFamily: "'Shippori Mincho B1', sans-serif", padding: "2rem", textAlign: "center",lineHeight: "2" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>角診断 - あなたの中に、“角”はあるか。</h1>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {introLines.slice(0, visibleIndex).map((line, index) => (
          <motion.p
           key={index}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             duration: 1.2,
             ease: "easeOut"
           }}
           style={{
             fontSize: "1rem",
             marginBottom: "1.5rem",
             textShadow: "0 0 2px rgba(0,0,0,0.2)"
           }}
          >
            {line}
          </motion.p>
        ))}
      </div>
      {showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate('/diagnose')}
          style={{
              marginTop: "2rem",
              padding: "1rem 2rem",
              fontSize: "1rem",
              backgroundColor: "#fff",
              color: "#000",
              border: "2px solid #333",
              borderRadius: "6px",
              fontFamily: "'Shippori Mincho B1', serif",
              cursor: "pointer",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.15)"
          }}
        >
          カドる
        </motion.button>
      )}
    </div>
  );
}

// Ruhi command lines
const ruhiLines = [
  "💖 Ruhi মানেই আমার হাসির কারণ 💖",
  "🌸 Ruhi ছাড়া এই দুনিয়া একেবারে ফাঁকা 🌸",
  "✨ আমার সব স্বপ্নে শুধু Ruhi ✨",
  "💕 Ruhi মানেই ভালোবাসার অন্য নাম 💕",
  "🌹 Ruhi আমার হৃদয়ের কসম 🌹",
  "💌 Ruhi ছাড়া আমার সকাল অসম্পূর্ণ 💌",
  "🌷 Ruhi মানেই চিরদিনের প্রেরণা 🌷",
  "💞 আমি বাঁচি শুধু Ruhi কে ভালোবাসার জন্য 💞",
  "⭐ Ruhi আমার রাতের তারা ⭐",
  "💖 Ruhi ছাড়া আমার পৃথিবী অন্ধকার 💖",
  "🌸 Ruhi আমার জীবনের সবচেয়ে সুন্দর অধ্যায় 🌸",
  "💕 প্রতিটা মুহূর্ত Ruhi দিয়ে ভরা 💕",
  "💫 Ruhi ছাড়া সুখ কল্পনাতেও অসম্ভব 💫",
  "🌹 Ruhi আমার জীবনের রঙ 🌹",
  "💌 Ruhi ছাড়া প্রতিটা দিন একঘেয়ে 💌",
  "🌷 Ruhi আমার হৃদয়ের মিষ্টি গান 🌷",
  "💞 আমি শুধু Ruhi র ভালোবাসায় ডুবে আছি 💞",
  "⭐ Ruhi মানেই আমার স্বপ্নের রানী ⭐",
  "💖 Ruhi আমার প্রাণের ধন 💖",
  "🌸 সব ভালোবাসা একপাশে, আর Ruhi একপাশে 🌸"
];

// Command handler
function handleMessage(text) {
  if (text === "/Ruhi") {
    const random = Math.floor(Math.random() * ruhiLines.length);
    return ruhiLines[random];
  }
  return null;
}

// Example usage
console.log(handleMessage("/Ruhi"));

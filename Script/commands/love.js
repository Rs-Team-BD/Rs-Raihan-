module.exports.config = {
  name: "love",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "🥰 𝗥𝗦 𝗥𝗔𝗜𝗛𝗔𝗡 🥰",
  description: "story VEDIO",
  commandCategory: "RS BD",
  usages: "love7 vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  
  var hi = [
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

  var know = hi[Math.floor(Math.random() * hi.length)];
  
  var link = [
    "https://drive.google.com/uc?id=1QYWcqg1ijPhtNVlIzDqluKft-jDG22cW",
    "https://drive.google.com/uc?id1Qcmn9WNHtm_JWQOpEZ1qExa5SffoEjji",
    "https://drive.google.com/uc?id=1Q9rvj5eJblhxEBznqGELP3DRLywzOGA6",
    "https://drive.google.com/uc?id=1Q9PfN8ZWd8W7YZGAqSxmXVedj-5zN42_",
    "https://drive.google.com/uc?id=1QWCNSSo_zbZF3Ypfl9rme50_Vgtc1Uhb",
    "https://drive.google.com/uc?id=1QOXQydrqA0RV3z_nD4s4OYuxW8hmpDGF",
    "https://drive.google.com/uc?id=1QPLCEvrfSALGdZ8pNjAEvmeor4AdB72G",
    "https://drive.google.com/uc?id=1QLoecfZzW5UJSbuiJKs0ARudeToKTn11",
    "https://drive.google.com/uc?id=1QV8coP5g26qyJGB-rljHeWYwSwnsQuSu",
    "https://drive.google.com/uc?id=1QTWryt4tlhIMa9NJkOlHHdNdBiodFhc9",
    "https://drive.google.com/uc?id=1QFyKjvumAPH9FlLweTMRN2pWDEfD5HN4"
  ];

  var callback = () => api.sendMessage(
    {body:`${know}`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4")},
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/15.mp4")
  );

  return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
         .pipe(fs.createWriteStream(__dirname + "/cache/15.mp4"))
         .on("close", () => callback());
};

const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "🛡️ 𝗥𝘀 𝗛𝗮𝗰𝗸𝗲𝗿 𝗧𝗲𝗮𝗺 𝗕𝗱 🛡️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস উল্লাস এর কে একটা গফ দে 🙄" , "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস উল্লাস এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার বস উল্লাস কে একটা জি এফ দাও-😽🫶🌺","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার বস উল্লাস এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস আলভী চৌধুরী'র পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস আলভী চৌধুরী'র  জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস উল্লাস এর নবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/profile.php?id=100086680386976","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস উল্লাস কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস উল্লাস কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস উল্লাস ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস উল্লাস এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস উল্লাস এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস উল্লাস' এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস উল্লাস মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস উল্লাস  কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস উল্লাস এর মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস উল্লাস'এর সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস উল্লাস এর এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "মাইয়া হলে আমার বস উল্লাস কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস উল্লাস এর সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস উল্লাস কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস উল্লাস আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    // গ্লোবাল ভ্যারিয়েবল (সবার উপরে রাখো)
let captionQueue = [];

// এই ফাংশন ক্যাপশন র‍্যান্ডম করে দেবে, একবারে সব শেষ না হলে রিপিট হবে না
function getNextCaption() {
  const captions = [
    "💌❤️ Ruhi, তুমি শুধু আমার দিনের একটা মুহূর্ত নও—তুমি পুরো দিনের অর্থ। আমি যতবার হাসি, তার প্রতিটা কারন তুমি 💖💕",
    "🌹💘 Ruhi, আমার দোয়ার জবাব তুমি—শান্তি, সান্ত্বনা, আর নিরাপত্তার নাম তুমি 💞💝",
    "✨💕 হাজার তারা থাকলেও, আমার আকাশে উজ্জ্বল একটা নামই জ্বলে—Ruhi ❤️🌙",
    "🔥💖 ভালোবাসা যদি একটা বই হয়, প্রথম পাতায় লেখা থাকবে—Ruhi; আর শেষ পাতায়ও—Ruhi 💌💘",
    "🌈💗 তুমি কাছে থাকলে পৃথিবী রঙিন লাগে, দূরে থাকলেও মনে হয় তুমি আমার ভেতরেই আছো—Ruhi 💖💕",
    "💖💝 প্রতিদিন নতুন করে তোমায় ভালোবাসি, যেন প্রথম দিন। নামটা মনে পড়লেই হৃদয়টা নরম হয়ে যায়—Ruhi ❤️💞",
    "😇💓 তোমায় পাওয়ার পর বুঝেছি—ঘর বলতে একজন মানুষকেই বোঝায়, আর সে মানুষটা তুমি—Ruhi 💖💘",
    "💎💖 জীবন যদি ধাঁধা হয়, তার সবচেয়ে সুন্দর সমাধান—Ruhi ❤️💞",
    "📝💕 ‘ভালোবাসা কাকে বলে?’—আমি বলবো, যে আমাকে সবচেয়ে বেশি শান্তি দেয়, তার নাম Ruhi 💖💘",
    "🌸💗 Ruhi, তুমি এলে শব্দগুলো কবিতা হয়ে যায়, নিশ্বাসগুলো দোয়া হয়ে যায়, অপেক্ষাগুলো অর্থ পায় ❤️💝",
    "🎀💖 দূরত্ব কখনো তোমায় কমায়নি, বরং জানিয়ে দিয়েছে—তুমি না থাকলে আমি অসম্পূর্ণ, Ruhi 💞💘",
    "🌟💝 সব গোলমালের মাঝেও তোমার নামটা আমার কানে সুর হয়ে বাজে—Ruhi, তুমি আমার শান্তির ঠিকানা ❤️💕",
    "🧿💖 চোখে রাখার মতন প্রার্থনা যদি একটা হয়—তা হলো সারাজীবন তোমার পাশে থাকা, Ruhi 💗💞",
    "💞❤️ তুমি আমার একমাত্র অভ্যাস, যাকে ছাড়তে চাই না কোনদিনই—Ruhi 💖💘",
    "🌙💘 রাত গভীর হলে যে নামটা সবচেয়ে স্পষ্ট শোনা যায়, তা হলো—Ruhi; আমার স্বপ্নের ঠিকানা 💝💕"
  ];

  // যদি Queue খালি থাকে → Shuffle করে ভরে নাও
  if (captionQueue.length === 0) {
    captionQueue = captions
      .map(c => ({ c, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ c }) => c);
  }

  // Queue থেকে পরেরটা নাও
  return captionQueue.shift();
}

// মূল ইভেন্ট চেক
if (
  event.body.toLowerCase() === "caption" ||
  event.body.toLowerCase() === "ক্যাপশন" ||
  event.body.toLowerCase() === "ভালোবাসা" ||
  event.body.toLowerCase() === "love" ||
  event.body.toLowerCase() === "লাভ"
) {
  return api.sendMessage(getNextCaption(), threadID);
};
    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমার বস রায়হান তোমাকে রাইতে মিস করে🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("type /help", threadID);
   };

   if (event.body.toLowerCase() === "ruhi") {
  // Ruhi নিয়ে ক্যাপশন লিস্ট
  const captions = [
    "💖 Ruhi মানেই আমার হাসির কারণ 💖",
    "🌸 Ruhi ছাড়া এই দুনিয়া একেবারে ফাঁকা 🌸",
    "✨ আমার সব স্বপ্নে শুধু Ruhi ✨",
    "💕 Ruhi মানেই ভালোবাসার অন্য নাম 💕",
    "🌹 Ruhi এলে মনটা ফুরফুরে হয়ে যায় 🌹",
    "⭐ Ruhi = My World ⭐",
    "🥰 Ruhi ছাড়া আমি কিছুই না 🥰",
    "🎶 প্রতিটা গানে Ruhi 🎶",
    "🫶 My Queen Ruhi 🫶",
    "🌈 Ruhi এলে জীবন রঙিন হয়ে যায় 🌈",
    "🔥 Ruhi মানেই পাওয়ার 🔥",
    "🌻 Ruhi = Happiness 🌻",
    "👑 Ruhi আমার রাজকন্যা 👑",
    "💎 Ruhi এর হাসি = ডায়মন্ড 💎",
    "⚡ Ruhi ছাড়া দিন জমে না ⚡",
    "🍫 Ruhi এর মিষ্টি হাসি = Chocolate 🍫",
    "🎀 Ruhi মানেই Special 🎀",
    "💌 Every heartbeat says Ruhi 💌",
    "🌷 Ruhi = Love Forever 🌷",
    "💫 Ruhi ছাড়া স্বপ্নই অসম্পূর্ণ 💫"
  ];

  // Random caption বাছাই
  const randomCaption = captions[Math.floor(Math.random() * captions.length)];

  return api.sendMessage(randomCaption, threadID);
   };

   if (event.body.toLowerCase() === "valobasha") {
  const loveCaptions = [
    "আমার বস শুধু রুহি ভাবির জন্য পাগল 😍",
    "রুহি ছাড়া আমি কিছুই না 💖",
    "আমার সব হাসি, সব সুখ শুধুই Ruhi এর জন্য 🫶",
    "রুহি মানেই আমার জীবন 💫",
    "আমার হৃদয় কেবল Ruhi এর জন্য 💌",
    "রুহি আমার Crowned Queen 👑",
    "আমি শুধু Ruhi এর জন্য Boss 😎🔥",
    "আমার স্বপ্ন, আমার দিন, সব Ruhi এর জন্য ✨",
    "রুহি ছাড়া সব ফাঁকা, শুধুই Ruhi আমার Universe 🌸",
    "আমি পাগল Ruhi এর জন্য 💕",
    "আমার ভালোবাসার রাজকন্যা 🌹 শুধু Ruhi 💖"
  ];

  const randomCaption = loveCaptions[Math.floor(Math.random() * loveCaptions.length)];
  return api.sendMessage(randomCaption, threadID);
   };

   if (event.body.toLowerCase() === "gf") {
  const gfCaptions = [
    "রুহি হলো রায়হান বস এর Sweetheart 💖",
    "আমার Life-এর সবচেয়ে স্পেশাল 💕 রুহি হলো আমার Gf 😍",
    "রুহি মানেই আমার হাসি এবং সুখ 🌸",
    "My Queen Ruhi 👑 শুধু আমার জন্য 💌",
    "রুহি ছাড়া দিন অসম্পূর্ণ ⚡ আমি তোমায় চাই 🫶",
    "আমার হৃদয়ের রানি 🌹 রুহি আমার Gf 💖",
    "রুহি = আমার ভালোবাসার সব 💫",
    "মিষ্টি Ruhi 😘 আমার জীবন রঙিন করে 🥰",
    "আমার সব স্বপ্নে শুধু Ruhi ✨ She’s mine 💕",
    "My Love, My Heart 💌 রুহি হলো আমার Forever 💖"
  ];

  const randomCaption = gfCaptions[Math.floor(Math.random() * gfCaptions.length)];
  return api.sendMessage(randomCaption, threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("simsimi কমান্ড এড় নাই টাইপ করুন baby", threadID);
   };
  
   if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "oi keray") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("মধু মধু রসমালাই 🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "Raihan") || (event.body.toLowerCase() == "Raihan vai") || (event.body.toLowerCase() == "@Md Abu Raihan ") || (event.body.toLowerCase() == "রায়হান")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ 🥰 𝗥𝗦 𝗥𝗔𝗜𝗛𝗔𝗡 🥰 ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Rs Raihan.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100058415330417\nতার সাতে যোগা যোগ করবেন WhatsApp :- +019628592*****", threadID);
   };

   if (message.includes("❤️")) {
   reply("ভালোবাসা মানেই শুধু রায়হান ❤️🔥");
} else if (message.includes("🥹")) {
   reply("এত আবেগ করিস না ঝাং, রায়হান তো আছেই 🥹💖");
} else if (message.includes("😈")) {
   reply("শয়তানি করলে রায়হানও পাগল হয়ে যাবে 😈🔥");
} else if (message.includes("🥲")) {
   reply("হাসতে হাসতে কাঁদিস কেনো ঝাং, রায়হান তোকে জড়িয়ে ধরবে 🥲🤗");
} else if (message.includes("🥰")) {
   reply("এত প্রেম দিবি না ঝাং, রায়হান লজ্জা পাইছে 🥰💖");
} else if (message.includes("😄")) {
   reply("তোর হাসি দেখে রায়হানও হাসলো 😄✨");
} else if (message.includes("💟")) {
   reply("লাভ সাইন মানেই রায়হান + ঝাং 💟😍");
} else if (message.includes("😀") || message.includes("😃")) {
   reply("হাসি মানেই রায়হানের এনার্জি 😀😃");
} else if (message.includes("😅")) {
   reply("লজ্জা পাচ্ছিস নাকি ঝাং? রায়হান বুঝে ফেলছে 😅❤️");
} else if (message.includes("😁")) {
   reply("দাঁত বের কইরা হাসিস, রায়হান তো মুগ্ধ 😁✨");
} else if (message.includes("💚")) {
   reply("সবুজ ভালোবাসা মানেই রায়হান 💚🍀");
} else if (message.includes("💙")) {
   reply("নীল ভালোবাসা শুধু রায়হানের জন্য 💙😎");
} else if (message.includes("😩")) {
   reply("এত ক্লান্ত ঝাং? রায়হান এসে শক্তি দিবে 😩💪");
} else if (message.includes("💔")) {
   reply("হৃদয় ভাঙলেও রায়হান তোর পাশে আছে 💔🙂");
} else if (message.includes("💋")) {
   reply("এই চুমু শুধু রায়হানের জন্য 💋😘");
} else if (message.includes("🙂")) {
   reply("এভাবে তাকাইস না ঝাং, রায়হান লজ্জা পাইছে 🙂❤️");
} else if (message.includes("🫠")) {
   reply("গলিয়া গেছিস নাকি ঝাং? রায়হানের প্রেমে 🫠🔥");
} else if (message.includes("🤡")) {
   reply("জোকার হলেও রায়হান তোর রাজা 🤡👑");
} else if (message.includes("🙃")) {
   reply("উল্টা হাসলেও রায়হান বুঝে ফেলে 🙃😉");
} else if (message.includes("🤓")) {
   reply("চশমা পড়া ঝাংও রায়হানের কিউটি 🤓💖");
} else if (message.includes("✅")) {
   reply("ঝাং + রায়হান = অফিশিয়ালি কনফার্ম ✅💯");
} else if (message.includes("👍")) {
   reply("থাম্বস আপ দিলে রায়হান খুশি 👍😎");
} else if (message.includes("🧐")) {
   reply("এভাবে তাকিয়ে কি খুঁজছিস? রায়হান তো এখানেই 🧐❤️");
} else if (message.includes("💛")) {
   reply("হলুদ ভালোবাসা মানেই রায়হান 💛🌼");
} else if (message.includes("🥴")) {
   reply("মাতাল হইছিস নাকি ঝাং? রায়হান ধরছে তোকে 🥴😂");
} else if (message.includes("🤭")) {
   reply("লুকাইস না ঝাং, রায়হান সব বুঝে গেছে 🤭❤️");
} else if (message.includes("😔")) {
   reply("মন খারাপ কিসের ঝাং, রায়হান তোকে হাসাবে 😔💕");
} else if (message.includes("😊")) {
   reply("এই হাসি শুধু রায়হানের জন্য রাখিস 😊💖");
} else if (message.includes("😰") || message.includes("🫣")) {
   reply("ভয় পাস না ঝাং, রায়হান পাশে আছে 😰🫣❤️");
} else if (message.includes("🙄")) {
   reply("চোখ ঘুরাইলেও রায়হান তোর দিকে তাকাই 🙄😂");
} else if (message.includes("😴")) {
   reply("ঘুমিয়ে পড় ঝাং, স্বপ্নে রায়হান আসবে 😴💤");
} else if (message.includes("😭")) {
   reply("কাঁদিস না ঝাং, রায়হান তোর টিস্যু হয়ে যাবে 😭❤️");
} else if (message.includes("🙀")) {
   reply("আতঙ্কিত হইস না ঝাং, রায়হান এখানে আছে 🙀😎");
} else if (message.includes("🤣")) {
   reply("এত হেসে পেট ব্যাথা করিস না ঝাং, রায়হান ডাক্তার ডাকবে 🤣🩺");
} else if (message.includes("😏")) {
   reply("এমন স্মার্ট লুক দিলে রায়হানও হার মানে 😏🔥");
} else if (message.includes("😒")) {
   reply("মন খারাপ কিসের ঝাং? রায়হান আছে তো 😒❤️");
} else if (message.includes("🤨")) {
   reply("শকড হইস কেনো ঝাং? রায়হান কি আবার কিউট হইলো নাকি 🤨😂");
} else if (message.includes("🤐")) {
   reply("চুপ করলেও রায়হানের নাম বলবি 🤐❤️");
} else if (message.includes("🫡")) {
   reply("স্যালুট শুধু রায়হানের জন্য 🫡🔥");
} else if (message.includes("🤔")) {
   reply("চিন্তা করিস না ঝাং, রায়হান সব উত্তর দিবে 🤔📚");
} else if (message.includes("🤫")) {
   reply("শশশ… রায়হান কিন্তু সব জানে 🤫😉");
} else if (message.includes("🤢")) {
   reply("অসুস্থ লাগছে? রায়হান ডাক্তার হয়ে আসছে 🤢🩺");
} else if (message.includes("🤕")) {
   reply("মাথায় ব্যাথা নাকি ঝাং? রায়হান মালিশ দিবে 🤕❤️");
} else if (message.includes("🤧")) {
   reply("হাঁচি দিলি ঝাং, রায়হান বলবে Bless You 🤧💖");
} else if (message.includes("🤮")) {
   reply("কি খাইস ঝাং? রায়হানকেই উল্টাই দিস নাকি 🤮😂");
} else if (message.includes("😪")) {
   reply("ঘুম পাইলেও রায়হানের কথা মনে রাখিস 😪💤");
} else if (message.includes("🤤")) {
   reply("এত লালা ঝরিস কেনো ঝাং? রায়হান কি এত সুস্বাদু নাকি 🤤🤣");
} else if (message.includes("😷")) {
   reply("মাস্ক পরিস ঝাং, রায়হান তোকে সেফ রাখবে 😷❤️");
} else if (message.includes("🤒")) {
   reply("জ্বর হইছে নাকি ঝাং? ডাক্তার রায়হান আসতেছে 🤒🩺");
} else if (message.includes("😮‍💨")) {
   reply("হুহ… নিশ্বাস ফেলিস কেনো ঝাং? রায়হান তো আছেই 😮‍💨💖");
} else if (message.includes("😑")) {
   reply("ফেস সাইলেন্ট হলেও মনে রায়হান 😑😂");
} else if (message.includes("🫢")) {
   reply("ওমা! চমকাইলা ঝাং, রায়হান অবাক 😳🫢");
} else {
   reply("ঝাং, তুই যে ইমোজিই দিস না কেনো, রায়হান ফানি হবেই 🤣✨");
           };
   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke")) {
     return api.sendMessage("My Creator: 🥰 𝗥𝗦 𝗥𝗔𝗜𝗛𝗔𝗡 🥰 ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস রায়হান আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is Rs Raihan  ッ❤️ তাকে সবাই আরএস রায়হান নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami raihan") || (event.body.toLowerCase() == "cup sala ami ullash") || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if (event.body.includes("@Řûhî Išĺẫḿ")) {
  const mentionReplies = [
    "খবরদার 😅 কেও রায়হান বস এর বউ এর নক দিবা না 🫣",
    "ওই দেখি 😜 কেও রায়হান বস এর বউকে বিরক্ত করতে চাচ্ছিস নাকি 🤭",
    "আরে ভাবি 😎 রায়হান বস এর বউ এর নক মারার সাহস 😅",
    "খবরদার 😂 হাতপা ঝরবে রায়হান বস এর 😏",
    "ওহো 🤣 কেও রায়হান বস এর বউ কে টাচ করতে চায় নাকি 🐰",
    "শুনছো 😬 কেও রায়হান বস এর বউ এর নক দিবা না, বুঝেছো 😜",
    "হেহে 🙈 রায়হান বস এর বউ কেও নক খাবে না 🫶",
    "কেয়ামত আনে রায়হান বস 😅 বউ কে বিরক্ত করো না 😎",
    "ওই ভাবি 🤣 কেও রায়হান বস এর বউ কে বিরক্ত করতে পারবে না 😏",
    "খবরদার 😇 রায়হান বস এর বউ এর শান্তি রাখতে হবে 🐼"
  ];

  const randomReply = mentionReplies[Math.floor(Math.random() * mentionReplies.length)];
  return api.sendMessage(randomReply, threadID);
};

   if ((event.body.toLowerCase() == "@fàrïyä Ïsläm Måïrâ") || (event.body.toLowerCase() == "@Fàrïyä Ïsläm Måïrâ")) {
     return api.sendMessage("খবরদার কেউ এই আইড়ি মেনশন দিবানা এটা আমার বস রায়হান এর বউ এর আইডি😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Fariha") || (event.body.toLowerCase() == "fariya")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রায়হান এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "mim") || (event.body.toLowerCase() == "Mim")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রায়হান এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Arohi") || (event.body.toLowerCase() == "Arohi")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রায়হান এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "@Lêbù Røåśtêr ") || (event.body.toLowerCase() == "Labu")) {
     return api.sendMessage("🥰-লেবু🌺 আমার বস রায়হান'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে আমার বস রায়হান কে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body?.toLowerCase() == "ভালোবাসা দিবা") || (event.body?.toLowerCase() == "valo basha diba")) {
  return api.sendMessage(
    {
      body: "🥰 রুহি, রায়হান তোমাকে ভালোবাসে 😘🥰🤗💖",
      attachment: "https://raw.githubusercontent.com/Rs-Team-BD/ruhiislam/ad08c3834d411b84c1fe8f232dbb75f7775bbf5d/lv_7538001397388823861_20250824145208.mp4"
    },
    threadID
  );
};

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hum")) {
     return api.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>🛡️ 𝗥𝘀 𝗛𝗮𝗰𝗸𝗲𝗿 𝗧𝗲𝗮𝗺 𝗕𝗱 🛡️ 𝗯𝗼𝘁", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে আমার বস রায়হান এর ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("সব মুতার জায়গায় গুঁতা দেওয়ার ধান্দা 😪🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho,")) {
     return api.sendMessage("হুম ঝাং আমার বস রায়হান তোমাকে রাইতে ভালোবাসে <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "raihan") || (event.body.toLowerCase() == "Raihan")) {
     return api.sendMessage("হ্যা বস কেমন আছেন..?☺️", threadID);
   };
  mess = "{name}"
  
  if (event.body.indexOf("/Bot") == 0 || (event.body.indexOf("/bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }

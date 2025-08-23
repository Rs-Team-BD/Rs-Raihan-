const axios = require('axios');

// Funny + emoji-packed messages
const prayerMessages = {
  fajr: "🌙 হ্যালো রুহি! ফজরের নামাজের ১০ মিনিট বাকি 😇 উঠো আর নামাজ পড়ো 🙏",
  zuhr: "☀️ রুহি, জোহরের নামাজ শুরু হতে ১০ মিনিট বাকি! ⏰ সময় বাঁচাও আর নামাজ পড়ো 😂",
  asr: "🌤️ রুহি! আসরের নামাজের আগে ১০ মিনিট ⏳ মজা করে নামাজ শুরু করো ✨",
  maghrib: "🌇 রুহি, মাগরিবের নামাজ ১০ মিনিটে! 🌟 হাত ধুয়ে, অজু করে নামাজ পড়তে যাও 🕌",
  isha: "🌌 রুহি, ইশার নামাজের ১০ মিনিট বাকি 😴 কিন্তু উঠে নামাজ পড়া ভালো 🕋"
};

// Auto fetch prayer times
let prayerTimes = {};

async function updatePrayerTimes() {
  try {
    const response = await axios.get('https://api.aladhan.com/v1/timingsByCity', {
      params: {
        city: 'Dhaka',
        country: 'Bangladesh',
        method: 2
      }
    });
    const timings = response.data.data.timings;

    prayerTimes = {
      fajr: subtractMinutes(timings.Fajr, 10),
      zuhr: subtractMinutes(timings.Dhuhr, 10),
      asr: subtractMinutes(timings.Asr, 10),
      maghrib: subtractMinutes(timings.Maghrib, 10),
      isha: subtractMinutes(timings.Isha, 10)
    };

    console.log("Prayer times updated:", prayerTimes);
  } catch (err) {
    console.error("Prayer time fetch error:", err);
  }
}

function subtractMinutes(timeStr, mins) {
  const [hour, minute] = timeStr.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute - mins, 0);
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function checkTime() {
  const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit', hour12: true });
  
  for (const [prayer, time] of Object.entries(prayerTimes)) {
    if (now === time) {
      console.log(prayerMessages[prayer]); // Local reminder
    }
  }

  setTimeout(checkTime, 60000); // প্রতি 1 মিনিটে check
}

// Start
(async () => {
  await updatePrayerTimes();
  setInterval(updatePrayerTimes, 1000 * 60 * 60); // প্রতি 1 ঘন্টা update
  checkTime();
})();

const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "info2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rs Raihan",
    description: "Show bot information",
    commandCategory: "Info",
    cooldowns: 2,
};

module.exports.run = async function({ api, event }) {
    const time = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || hh:mm:ss A");

    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const msg = `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃        🌟 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 🌟
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 Owner : Rs Raihan
┃ 🤖 Bot Name : RS CYBER TEAM BOT
┃ 📌 Prefix : /
┃ 🕘 Today : ${time}
┃ ⏳ Uptime : ${hours}:${minutes}:${seconds}
┃ 📞 Number : 01XXXXXXXXX
┃ 🌐 Github : https://github.com/RS_TEAM_BD
┃ ▶️ Youtube : https://youtube.com/@rshackerteam
┗━━━━━━━━━━━━━━━━━━━━━┛
`;

    // নিজের ফটো attach
    api.sendMessage({
        body: msg,
        attachment: fs.createReadStream(__dirname + "/cache/myphoto.jpg")
    }, event.threadID);
};

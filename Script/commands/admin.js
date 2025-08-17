const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "🥰 𝗥𝗦 𝗥𝗔𝗜𝗛𝗔𝗡 🥰", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝗡𝗮𝗺𝗲      : 🥰 𝗥𝗦 𝗥𝗔𝗜𝗛𝗔𝗡 🥰
┃ 🚹 𝗚𝗲𝗻𝗱𝗲𝗿    : 𝗠𝗮𝗹𝗲
┃ ❤️ 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻  : 𝗦𝗶𝗻𝗴𝗹𝗲
┃ 🎂 𝗔𝗴𝗲       : 18
┃ 🕌 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻  : 𝗜𝘀𝗹𝗮𝗺
┃ 🏫 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗜𝗻𝘁𝗲𝗿 2 𝘆𝗲𝗮𝗿
┃ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀  : 𝗦𝗮𝘁𝗸𝗵𝗶𝗿𝗮, 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝗧𝗶𝗸𝘁𝗼𝗸  : 𝗿𝘀𝗿𝗮𝗶𝗵𝗮𝗻420𝘃
┃ 📢 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : https://t.me/rsraihan247
┃ 🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : https://www.facebook.com/profile.php?id=rsraihan215
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/100058415330417/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};

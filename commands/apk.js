const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
cmd({
    pattern: "downapk",
    alias: ["ps","apk","playstore"],
    desc: "download playstore app",
    react: "💾",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
    const lastupdate = result.lastup
    const packagename = result.package
    const size = result.size
      await Void.sendMessage(citel.chat, {
        image: {
            url: icon,
        },
        caption: ` 👋*Hello ${citel.pushName} , _Please wait...._ ,I Am Finding Your Apk File*\n╭─────🎀\n│🧙‍♀️${tlang().title}\n│★ *Playstore Download*\n│★ *App name:* ${getname}\n│★ *Last update:* ${lastupdate}\n│★ *Package name:* ${packagename}\n│★ *File size:* ${size}\n╰──────────🎀\n⦿ *You can also download the App from the link below* 👇: \n${applink}`,
    })
    return Void.sendMessage(citel.chat, {
        document: {
            url: applink,
        },
        mimetype: "application/vnd.android.package-archive",
        fileName: getname,
    }, {
        quoted: citel,
    });
  } catch (err) {
    console.error(err);
    citel.reply(`❌ An error occurred while processing your request. Please try again later.${err}`);
  }
})

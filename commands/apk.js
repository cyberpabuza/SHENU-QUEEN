const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
cmd({
    pattern: "downapk",
    alias: ["ps","apk","playstore"],
    desc: "download playstore app",
    react: "🏷️",
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
        caption: `*Hello ${citel.pushName} , _𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...._ ,𝐼 𝐴𝑚 𝐹𝑖𝑛𝑑𝑖𝑛𝑔 𝑌𝑜𝑢𝑟 𝐴𝑝𝑘 𝐹𝑖𝑙𝑒*\n╔─────▣\n *Playstore Download*\n *App name:* ${getname}\n *Last update:* ${lastupdate}\n *Package name:* ${packagename}\n *File size:* ${size}\n╚──────────▣\n⦿ 𝚂𝙷𝙴𝙽𝚄 𝚀𝚄𝙴𝙴𝙽 𝙰𝙿𝙿 𝙳𝙾𝚆𝙽𝙻𝙾𝙳 ✅`,
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

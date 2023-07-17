const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

cmd({

            pattern: "ss",

            desc: "web ss", 

            react: "📸",

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return

const webss = await fetchJson(`https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}`)

            citel.reply (`*Screenshot is taking, please wait...*`)

       Void.sendMessage(citel.chat, {

                image: {

                    url: `https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}` ,

                },

                caption: tlang().footer,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "fb",

            desc: "fb down",

            react: "📥",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdl = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/facebook?url=${text}&apikey=prabath`)

const videolink = fbdl.result[0].url[0].url

            citel.reply (`_*Hello ${citel.pushName} I Am Finding Your Facebook Video*_`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                caption: tlang().footer,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "tt",

            alias: ["tiktok"],

            desc: "tiktok downloader",

            react:"🎊",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const ttdl = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/facebook?url=${text}&apikey=prabath`)

    

const videolink = ttdl.result[0].url[0].url

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Tiktok Video*`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                

                 caption: tlang().footer,

            }, {

                quoted: citel,

            });

 }

)



            
            
     

            




                    

                

             



            


                


                


           



cmd({



            pattern: "tvideo",



            alias: ["විඩියො","videot"],



            desc: "song dl",



            react: "🎥 ",



            category: "downloader"



        },



        async(Void, citel, text) => {    



        let yts = require("secktor-pack");



            let search = await yts(text);



            let anu = search.videos[0];



            if (!text) return     







const tsong = await fetchJson(`https://legend-army-api.onrender.com/api/dowloader/yt?url=${anu.url}&apikey=7cbc80f5`)



const videolink = tsong.download



            citel.reply (`*Download Your Video*`);

            citel.reply (`*Upload Your Video*`);



            return Void.sendMessage(citel.chat, {



                video: {



                    url: videolink ,



                },



                mimetype: "video/mp4",







            }, {



                quoted: citel,



            });



        }



    )

cmd({

            pattern: "fbs",

            desc: "fb down",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdls = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=${Config.botapikey}`)

const videolink = fbdls.result.audio

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Audio*`);

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: videolink ,

                },

                mimetype: "audio/mpeg",

                fileName: `prabath-md-fb-song-downloader`,

            }, {

                quoted: citel,

            });

        }

    )

cmd({

            pattern: "apk2",

            desc: "apk down",

            react: "🗃️",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const apkdl = await fetchJson(`application/vnd.android.package-archive`)

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Apk*`);

const applink = apkdl.data.dllink

const getname = apkdl.data.name

const lastupdate = apkdl.data.lastup

       return Void.sendMessage(citel.chat, {

                document: {

                    url: applink ,

                },

                mimetype: "application/vnd.android.package-archive",

                caption: tlang().footer,

                fileName: getname ,

            }, {

                quoted: citel,

            });

        }

    )

    

    

  cmd({

            pattern: "dadu",

            desc: "dadu", 

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `𝙳𝙰𝚁𝙺-𝙽𝙴𝚁𝙾 (9.𝟷.𝟶) ✔️`

            author = `𝚔𝚊𝚟𝚎𝚎𝚜𝚑𝚊\n𝙼𝙰𝙳𝙴 𝙱𝚈 𝚈𝙰𝙺𝚄𝚉𝙰 🪀`

            

                let image = `https://api.botcahx.biz.id/api/randomgambar/dadu?apikey=${Config.botapikey}`

                citel.react("🎲");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )

cmd({

            

            pattern: "ttp",

            desc: "emoji infomation",

            category: "downloader"

            

            

            

            

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `𝙳𝙰𝚁𝙺-𝙽𝙴𝚁𝙾-𝚖𝚍 (9.𝟷.𝟶) ✔️`

            author = `𝚔𝚊𝚟𝚎𝚎𝚜𝚑𝚊\n𝙼𝙰𝙳𝙴 𝙱𝚈 𝚈𝙰𝙺𝚄𝚉𝙰 🪀`

            

                let image = `https://api.botcahx.biz.id/api/maker/ttp?text=${text}&apikey=${Config.botapikey}`

                citel.react("✔️");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )

cmd({

            pattern: "video3",

            desc: "video dl",

            react: "📽️",

            category: "downloader"

        },

        async(Void, citel, text) => {    

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

            if (!text) return     

            

const tvideo = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4?url={anu.url}`)

const videolink = tvideo.result.url

            citel.reply (`📽️ ━━━━━━━━━━ *𝗩𝗜𝗗𝗘𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 📽️\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n🖇️ *Url:* ${anu.url}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}`);

            return Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                mimetype: "video/mp4",

                caption: tlang().footer,

            }, {

                quoted: citel,

            });

        }

    )

    

    

    cmd({

            pattern: "testsong",

            desc: "song dl",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {    

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

            if (!text) return     

            

const tsong = await fetchJson(`https://legendarmy-api.onrender.com/api/dowloader/yt?url=${anu.url}&apikey=db16e3b7`)

const videolink = tsong.download

            citel.reply (`🎵 ━━━━━━━━━━ *𝗔𝗨𝗗𝗜𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 🎵\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n🖇️ *Url:* ${anu.url}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}`);

            return Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                mimetype: "video/mp4",

                

            }, {

                quoted: citel,

            });

        }

    )

cmd({

            

            pattern: "attp",

            desc: "emoji infomation",

            category: "downloader"

            

         

            

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `𝙳𝙰𝚁𝙺-𝙽𝙴𝚁𝙾-𝙼𝙳 (9.𝟷.𝟶) ✔️`

            author = `𝚔𝚊𝚟𝚎𝚎𝚜𝚑𝚊\n𝙼𝙰𝙳𝙴 𝙱𝚈 𝚈𝙰𝙺𝚄𝚉𝙰 🪀`

            

                let image = `https://api.botcahx.biz.id/api/maker/attp?text=${text}&apikey=${Config.botapikey}`

                citel.react("✔️");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )
cmd({
    pattern: "wabetainfo",
    alias: ["findapk","playstore"],
    react: "🧾",
    desc: "",
    category: "download",
    use: '.wabetainfo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const wanews = await fetchJson(`https://legend-army-api.onrender.com/api/search/wabetainfo?&apikey=7cbc80f5`);


          await conn.sendMessage(from , { text:`Hello ${mek.pushname ||  '\n'} I Am Finding Whatsapp New Update Details..` }, { quoted: mek } )    

          const images = `${wanews.result.image}`
           const title = `${wanews.result.title}`
           const date = `${wanews.result.date}`
           const news = `${wanews.result.fulldesc}`

await conn.sendMessage(from,  { image: { url: images }, caption: `\n${ title }\n\n ${ news }\n\n${date}`}, { quoted: mek })
}
catch(e){
console.log(e)
}})
cmd({
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
        caption: `*Hello ${citel.pushName} , _Please wait...._ ,I Am Finding Your Apk File*\n╭─────🎀\n│🧙‍♀️${tlang().title}\n│★ *Playstore Download*\n│★ *App name:* ${getname}\n│★ *Last update:* ${lastupdate}\n│★ *Package name:* ${packagename}\n│★ *File size:* ${size}\n╰──────────🎀\n⦿ *You can also download the App from the link below* 👇: \n${applink}`,
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

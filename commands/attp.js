cmd({
            pattern: "attp",
            alias: ["circlestic","circlesticker","cs"],
            desc: "Makes sticker of replied image/video.",
            category: "sticker",
filename: __filename,
            use: '<reply to any image/video.>'
        },
        async(Void, citel, text) => {
if(!text) return citel.reply("```Uhh Please, Give Me text```")
let url = `https://raganork-api.onrender.com/api/attp?text=${text}&apikey=with_love_souravkl11`
let media  = await getBuffer(url)

                let sticker = new Sticker(media, {
                    pack: Config.packname, 
                    author: Config.author, 
                    type: StickerTypes.FULL,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                    background: "transparent", 
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });

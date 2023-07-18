cmd({
            pattern: "so",
            alias: ["au"],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<give text>',
        },
        async(Void, citel, text) => {
  
                if (!text) return await citel.reply(`*_Ohh PLease, Give Me Song Name_*`);
                let yts = require("secktor-pack")
                let search = await yts(text);
                let i = search.all[1] ;
                let cap = "\t ╭──────Youtube Search Result─────╮  \n\n🏷Title : " + i.title + "\n🖇️Url : " + i.url +"\n🔖Description : " + i.timestamp +"\n👀Views : "+i.views +"\n📤Uploaded : " +i.ago +"\n👲🏻Author : "+i.author.name+"\n\n\nType .video Download Your Video \nReply 2 Download Your Audio" ;
                Void.sendMessage(citel.chat,{image :{url : i.thumbnail}, caption :  cap });

const{bot, forwadOrBroadCast }= require(../lib)

bot({
     pattern: ,'vdo ?(.*)'
     frome: true,
     desc: 'whatsapp',
     user: 'owner',
    },
    asynce (m, match) => {
    
           if (!m.reply-massage.video) return m.send('_Reply to a video_')
           const pvt = {
               ptvMessage: m.reply.message.message.message['videoMessage']
           }
           m.reply.message.message.message = pvt
           await forwardOrBroadCast(match || m.jid,m,{
           constextTnfo: {
                isForwarded: false
                }
           })
    }
}

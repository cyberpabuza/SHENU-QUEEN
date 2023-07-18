cmd({
             pattern: "setsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
  async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("Number Already Exist In Sudo");
    global.sudo += ',' + user ;
const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
                  method: 'PATCH',
                  headers,
                  body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => { return citel.reply(`*${user} Added Succesfully.*\nSudo Numbers : ${newVarValue}`); })
.catch(error => citel.reply('Error While Adding new Sudo :'+ error));

         })

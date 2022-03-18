const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageResponse = await lib.discord.channels['@0.0.6'].messages.create({

  channel_id: `${context.params.event.channel_id}`,

  content: [

    `<@!${context.params.event.author.id}> tag我幹嘛,好玩喔`,

    `歸剛唉 ||~~來互相傷害啊啊啊啊啊~~||`

  ].join('\n'),

});

return messageResponse;

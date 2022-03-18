const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Command`,
      "description": "",
      "color": 0x00FFFF,
      "fields": [
        {
          "name": `/help:顯示此頁面`,
          "value": "\u200B"
        },
        {
          "name": `/member-count:顯示伺服器成員數`,
          "value": "\u200B"
        },
        {
          "name": `其他指令製作中`,
          "value": "\u200B"
        }
      ],
      "image": {
        "url": `https://c.tenor.com/aH7BIsPypoUAAAAi/forge-anvil.gif`,
        "height": 0,
        "width": 0
      }
    }
  ]
});

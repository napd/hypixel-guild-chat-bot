module.exports = {
   bot: {
      prefix: 'h!', // Used to be used for commands, now used to not send a message to Minecraft in guildChannel
      owner: 'xMdb#7897', // Set this to your Discord username
   },

   ids: {
      owner: '253699775377965056', // Bot owner (to enable dev commands)
      testingServer: '558901518808383488', // Server to test slash commands in (registers in both prod and testing server by default)
      server: '520948670758387722', // Prod server (has guildChannel and trustedRole)
      guildChannel: '833112550970359830', // Server to send and receive Minecraft messages
      trustedRole: '520952297694560276', // Role to access certain restricted commands (currently only "say" command at the moment)
      moderatorRole: '762473575277133824', // Role used for access to moderator commands (currently only "slowmode" command at the moment)
   },

   messages: {
      errorDev: 'There was an error while trying to execute that command! Check the console log for more details.',
      errorUserFriendly: 'There was an error while trying to perform that task!',
      noPermissionNormal: 'You do not have the correct permissions to use this command.',
      noPermissionDev: "You shouldn't be using this command.",
      selfNoPermissions: 'Sorry, I do not have the correct permissions to perform that task.',
      footer: 'Bot by xMdb#7897',
      statuses: [
         'Horus Goes Shopping on Spotify',
         'Hypixel Knights Talent Show Album on repeat',
         'Hypixel Knights Talent Show Album',
         'What Makes You Beautiful Cover on Soundcloud',
         'Demons (Imagine Dragons Cover) on Soundcloud',
         'hitches and iro dying of laughter on Soundcloud',
         '505 (Arctic Monkeys Cover) on Soundcloud',
         "Isabella's Lullaby on Soundcloud",
         'Hotel Yorba (White Stripes Cover) on Soundcloud',
         'Mine Diamonds (MCAP Cover) on Soundcloud',
         'I Miss The Old Meanie on Soundcloud',
         'Payphone (Maroon 5 Cover) on Soundcloud',
      ],
   },

   colours: {
      error: '#E74C3C',
      success: '#3A783F',
      informational: '#3F51B5',
   },
};

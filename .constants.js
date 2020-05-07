module.exports = Object.freeze({
  TOKEN: '1211311959:AAF2znEy3VgOMrGGSV5MMl5Vob8UTZ1PGnU',
  ARIA_SECRET: 'torrentgd',
  ARIA_DOWNLOAD_LOCATION: '/app/downloads)',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [''], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [''], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '0AHhr370EIxJoUk9PVA',
  SUDO_USERS: [-1211311959],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001125187364],	// Telegram chat IDs. Anyone in these chats can use the bot.
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'https://ariamirrorbotkerala.herokuapp.com/',
    port: 80,
    path: '/botNotify'
  } 
});

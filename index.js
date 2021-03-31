// PLEASE DO NOT CHANGE ANYTHING. THIS IS THE CODE FOR MY DISCORD BOT!
// Create some constant values
const { Client, MessageAttachment, Discord, MessageEmbed } = require('discord.js');
const client = new Client();
const keep_alive = require('./keep_alive.js')

// Grab the bot token from the .env file
const token = process.env.DISCORD_BOT_SECRET;

// Bot startup
client.on('ready', () => {
  // What is the bot currently playing?
  client.user.setActivity("I'm looking for A!help.");
  console.log("Logged into " + client.user.tag);
});

//---------- Bot Setup (Please DO NOT CHANGE ANY BOT SETUP COMMANDS) ----------
client.on('message', message => {
  
  // Prefix for commands
  const prefix = "A!";

  // Keeps the bot from triggering commands from other bots
  if (message.author.bot) return;

  // If a piece of text does not start with the prefix just ignore
  if (!message.content.startsWith(prefix)) return;

  // Splits the command from the prefix
  const args = message.content.slice(prefix.length) .trim().split(/ +/g);
  
  // Turns any upper case letters to lower case
  const command = args.shift().toLowerCase();
  
  //-------------------- BOT SETUP OVER --------------------

  // -------------------- Basic Command to check the ping of your bot --------------------
  if (command === "ping") {
    message.channel.send(`Pong!`);
  }

 // -------------------- Intro mesage for bot --------------------
 if (message.content === `Hi AnimeWrld`) {
   message.channel.send(`Hi there! I am an awsome bot created by Ninja_5000#0255! Type A!help!`)
 }

  // ------------------------- Code for help (embed) -------------------------
  // If the message is "A!help"
  if (command === 'help') {
    // inside a command, event listener, etc.
   const embed = new MessageEmbed()
	   .setColor('#0099ff')
	   .setAuthor('Anime Wrld', 'https://cdn.discordapp.com/app-icons/780323561172107264/f3965adfc2dd85edb56ff6c673086aa2.png')
	   .setDescription('My Prefix: A! \n A!help = Shows you the help. (This Command)')
	   .setThumbnail    ('https://cdn.discordapp.com/app-icons/780323561172107264/f3965adfc2dd85edb56ff6c673086aa2.png')
	   .addFields(
	  	 { name: 'Info', value: 'A!info = Shows my info! \n A!server-info = Shows you the server info. \n A!invite = Gives you an invite link for me! \n A!bot-avatar = Shows you my Avatar!'},
		   { name: 'Moderation', value: 'A!kick = Will kick a user. \n A!ban = Will ban a user \n A!clear = Will delete an amount of messages'},
		   { name: 'Fun', value: 'A!ping = Will send you a message! \n A!my avatar = will show you your avatar! \n A!rip = (Find out what this command does) \n A!shutup = (Find out what this command does!)'},
       { name: 'Using Animated Emoji For Free!', value: 'A!happy-emoji = Will send the Happy emoji on your behalf!'},
	    );
   message.channel.send(embed);
  }

  // -------------------- Code for info of the bot --------------------
  // If the message is "A!info"
  if (command === 'info') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('My Info!')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the author
      .setAuthor('Anime Wrld', 'https://cdn.discordapp.com/app-icons/780323561172107264/f3965adfc2dd85edb56ff6c673086aa2.png', 'https://discord.gg/FQf8CtUX9c')
      // Set the main content of the embed
      .setDescription('Hi, I am AnimeWrld\n Version 2.4.1')
      // Add Fields
      .addFields(
        {name: 'My Creator', value: '`Ninja_5000#0255, ℕ𝕠𝕥_𝕋𝕙𝕒𝕟𝕚#7506`'},
       // {name: ' My Testers', value: 'Ninja_5000#0255, ℕ𝕠𝕥_𝕋𝕙𝕒𝕟𝕚#7506'}
      );
    // Send the embed to the same channel as the message
    message.channel.send(embed)
  }

  // -------------------- Server info command --------------------
  if (message.content === `A!server-info`) {
	message.channel.send(`Server name: **${message.guild.name}**\nTotal members: **${message.guild.memberCount}**`);
  }

  // -------------------- Member info command --------------------
  if (message.content === `A!user-info`) {
	message.channel.send(`Your username: **${message.author.username}**\nYour ID: **${message.author.id}**`);
  }

  // -------------------- Comand for getting invite link of the bot --------------------
  if (command === "invite") {
    message.channel.send(
      `Here is the link to invite me into your server: https://discord.com/oauth2/authorize?client_id=780323561172107264&scope=bot&permissions=2147483647`
    );
  }

  // ------------------------- Code for A!rip -------------------------
  // If the message is 'A!rip'
  if (command === 'rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author},`, attachment);
  }

  // -------------------- Command for A!shutup --------------------
  if (command === "shutup") {
    message.channel.send(`Why should I shutup, ${message.author}?`)
  }

  // -------------------- Command for clear --------------------
  if (command === 'clear') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('That doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('You need to input a number between 1 and 99.');
		}

	 message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('There was an error trying to clear messages in this channel!');
		});
 }

 // -------------------- Code for kicking users --------------------
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  // If the message content starts with "A!kick"
  if (message.content.startsWith('A!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }

  // -------------------- Code for banning members --------------------
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  // if the message content starts with "A!ban"
  if (message.content.startsWith('A!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'You are bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});

// -------------------- Code for showing avatar --------------------
// Create an event listener for messages
client.on('message', message => {
  // If the message is "A!my avatar"
  if (message.content === 'A!my-avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }

  if (message.content === 'A!bot-avatar') {
    const attachment = new MessageAttachment ('https://cdn.discordapp.com/avatars/780323561172107264/1a18375086e8d5751a2957a526db9e83.png?size=128');
    message.channel.send(`${message.author}, my avatar -`, attachment);
  }
});

// -------------------- Welcome Messages --------------------
//  Code for Welcome message
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === '📢announcements');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member} \n Please read the rules and then react to MEE6's message with :thumbsup: . \n Then Have Fun!`);
});
// Code for Welcome Message (DM)
client.on("guildMemberAdd", (member) => {
  member.send(
    `Welcome to Anime Wrld! Have fun 😀`
  )
});
// -------------------- Welcome Messages OVER --------------------

// -------------------- Code for sending custom animated emojis --------------------
client.on('message', message => {
  // Animated Happy-emoji
  if (message.content === 'A!happy-emoji') {
   // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://cdn.discordapp.com/emojis/778658948885905418.gif?v=1');
    // Send the attachment in the message channel with a content
    message.channel.send(`I am sending this on behalf of ${message.author} because he is -`, attachment,);
  }
});
// -------------------- Code for sending custom animated emojis OVER --------------------

client.login(token);


/** Code for help (embed)
client.on('message', message => {
  // If the message is "A!help"
  if (message.content === 'A!help') {
    // inside a command, event listener, etc.
   const embed = new MessageEmbed()
	   .setColor('#0099ff')
	   .setAuthor('Anime Wrld', 'https://cdn.discordapp.com/app-icons/780323561172107264/f3965adfc2dd85edb56ff6c673086aa2.png')
	   .setDescription('My Prefix: A! \n A!help = Shows you the help. (This Command)')
	   .setThumbnail    ('https://cdn.discordapp.com/app-icons/780323561172107264/f3965adfc2dd85edb56ff6c673086aa2.png')
	   .addFields(
	  	 { name: 'Info', value: 'A!info = Shows my info! \n A!server-info = Shows you the server info. \n A!invite = Gives you an invite link for me!'},
		   { name: 'Moderation', value: 'A!kick = Will kick a user. \n A!ban = Will ban a user \n A!clear = Will delete an amount of messages'},
		   { name: 'Fun', value: 'A!ping = Will send you a message! \n A!my avatar = will show you your avatar! \n A!rip = (Find out what this command does)'},
       { name: 'Using Animated Emoji For Free!', value: 'A!happy-emoji = Will send the Happy emoji on your behalf!'},
	    );
   message.channel.send(embed);
  }
}); */

/** -------------------- Code for info of the bot --------------------
client.on('message', message => {
  // If the message is "A!info"
  if (message.content === 'A!info') {
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
      .setDescription('Hi, I am AnimeWrld\n Version 2.2.0')
      // Add Fields
      .addFields(
        {name: 'My Creator', value: '`Ninja_5000#0255, ℕ𝕠𝕥_𝕋𝕙𝕒𝕟𝕚#7506`'},
       // {name: ' My Testers', value: 'Ninja_5000#0255, ℕ𝕠𝕥_𝕋𝕙𝕒𝕟𝕚#7506'}
      );
    // Send the embed to the same channel as the message
    message.channel.send(embed)
  }
}); */

/** -------------------- Code for A!rip --------------------
client.on('message', message => {
  // If the message is 'A!rip'
  if (message.content === 'A!rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author},`, attachment);
  }
}); */

/** -------------------- Code for kicking users --------------------
client.on('message', message => {
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
         *-/
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
}); */

/** -------------------- Code for banning members --------------------
client.on('message', message => {
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
         *-/
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
}); */

/** client.on('message', message => {
 // -------------------- Server info command --------------------
  if (message.content === `A!server-info`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
}); */

/** client.on('message', message => {
 // -------------------- Member info command --------------------
  if (message.content === `A!user-info`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
}); */


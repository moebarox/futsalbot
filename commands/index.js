const { flattenDeep } = require('lodash');
const Telegraf = require('telegraf');
const Stage = require('telegraf/stage');
const session = require('telegraf/session');

const {
  BOT_TOKEN,
  ADMIN_ID,
} = process.env;

const commands = {
  menu: require('./menu'),
  booking: require('./booking'),
  member: require('./member'),
};

const bot = new Telegraf(BOT_TOKEN);

bot.catch((err, ctx) => {
  console.error(err);
  const { from, chat, text } = ctx.message;
  ctx.telegram.sendMessage(
    ADMIN_ID,
    `*error*\ntext: ${text}\nusername: @${from.username}\ntype: ${chat.type}\n\n\`${err}\``,
    { parse_mode: 'markdown' },
  );
});

const cmd = Object.keys(commands);
const scenes = flattenDeep(cmd.map(key => commands[key].scene()));
const stage = new Stage(scenes);

bot.use(session());
bot.use(stage.middleware());

cmd.forEach(cmd => commands[cmd].action(bot));

bot.launch();

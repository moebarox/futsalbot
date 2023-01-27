import { Telegraf } from 'telegraf';

export default defineNitroPlugin(() => {
  const bot = new Telegraf(<string>process.env.BOT_TOKEN);
  bot.telegram.getMe().then(console.log);
  bot.command('hehe', ctx => ctx.reply('Hallo juga'));
  bot.launch();

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
});

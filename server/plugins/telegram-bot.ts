import { Telegraf } from 'telegraf';

export default defineNitroPlugin(() => {
  const bot = new Telegraf(<string>process.env.BOT_TOKEN);
  bot.telegram.getMe();
  bot.launch();

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
});

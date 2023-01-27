import { Telegraf } from 'telegraf';

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig();
  const bot = new Telegraf(config.botToken);
});

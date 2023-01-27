import { Telegraf } from 'telegraf';

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig();
  console.log(config.botToken)
});

const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

module.exports = {
  scene: () => {
    const bookingStart = new Scene('booking-start');
    bookingStart.enter(ctx => {
      const availableHours = ['19.00', '19.30', '20.00', '20.30', '21.00', '📲 Menu Utama'];
      ctx.reply('Mulai main jam berapa?', Markup
        .keyboard(availableHours, { columns: 3 })
        .oneTime()
        .resize()
        .extra()
      );
    });
    bookingStart.on('text', async ctx => {
      ctx.scene.enter('booking-end', { start: ctx.message.text });
    });

    const bookingEnd = new Scene('booking-end');
    bookingEnd.enter(ctx => {
      const { start } = ctx.scene.state;
      const availableHours = ['19.00', '19.30', '20.00', '20.30', '21.00', '🔙 Kembali', '📲 Menu Utama'];
      ctx.reply('Sampe jam berapa mainnya?', Markup
        .keyboard(availableHours, { columns: 3 })
        .oneTime()
        .resize()
        .extra()
      );
    });
    bookingEnd.hears('🔙 Kembali', ctx => {
      ctx.scene.enter('booking-start');
    });
    bookingEnd.on('text', async ctx => {
      ctx.reply('oke');
      ctx.scene.enter('main-menu');
    });

    return [bookingStart, bookingEnd];
  },
  action: bot => {
    bot.command('/booking', ctx => {
      ctx.scene.enter('booking-start');
    });
  },
};

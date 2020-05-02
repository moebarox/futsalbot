const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

module.exports = {
  scene: () => {
    const mainMenu = new Scene('main-menu');
    mainMenu.enter(ctx => {
      const menu = [
        '📅 Booking',
        '👥 Member',
      ];
      ctx.reply('Halo, kamu mau apa?', Markup
        .keyboard(menu, { columns: 2 })
        .oneTime()
        .resize()
        .extra()
      );
    });
    mainMenu.hears('📅 Booking', async ctx => {
      ctx.scene.enter('booking-start');
    });
    mainMenu.hears('👥 Member', async ctx => {
      ctx.scene.enter('member-menu');
    });

    return [mainMenu];
  },
  action: bot => {
    bot.start(ctx => {
      console.log(ctx.scene.session, ctx.scene.current)
      ctx.scene.enter('main-menu');
    });
    
    bot.command('menu', ctx => {
      ctx.scene.enter('main-menu');
    });
    
    bot.hears('📲 Menu Utama', ctx => {
      ctx.scene.enter('main-menu');
    });
    
    bot.on('text', ctx => {
      if (!ctx.scene.current) {
        ctx.scene.enter('main-menu');
      }
    });
  },
};

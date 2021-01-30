const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

module.exports = {
  scene: () => {
    const memberMenu = new Scene('member-menu');
    memberMenu.enter(ctx => {
      const menu = [
        '📅 Daftar Member',
        '📅 Lihat Status Member',
        '👥 Berhenti jadi Member',
        '📲 Menu Utama',
      ];
      ctx.reply('Udah jadi member belum? Yuk daftar!', Markup
        .keyboard(menu, { columns: 2 })
        .oneTime()
        .resize()
        .extra()
      );
    });
    memberMenu.hears('📅 Lihat Status Member', ctx => {
      ctx.reply('Status member kamu aktif sampai: 12 Januari 2020');
      ctx.scene.reenter();
    });

    return [memberMenu];
  },
  action: bot => {
    bot.command('member', ctx => {
      ctx.scene.enter('member-menu');
    });
  },
};

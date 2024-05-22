const TelegramApi = require('node-telegram-bot-api');

const token = '6582353052:AAGI4B_9zwOcc-z64hsNgBLfIbG4vypUw4w';

const bot = new TelegramApi(token, {polling: true});


const start = () => {
  bot.setMyCommands([
    { command: 'info', description: 'Информация о магазине' },
    { command: 'start', description: 'Начало работы с ботом' }
  ])

  const buttons = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: 'Каталог', callback_data: 'catalog' },
          { text: 'О нас', callback_data: 'about' }
        ]
      ]
    })
  }

  
  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    
  
    if (text === '/start') {
      await bot.sendSticker(chatId, 'https://sl.combot.org/daemoen/webp/2xf09f918b.webp');
      await bot.sendPhoto(chatId, 'https://biz-nes.ru/wp-content/uploads/2023/04/market-1-2.jpg', { caption: 'Добро пожаловать в бот интернет-магазина «Мягкие Игрушки»!' });
      return  bot.sendMessage(chatId, '💁‍♀️Добро пожаловать в бот интернет-магазина «Мягкие Игрушки»!', buttons);
    }
    if (text === '/info') {
      return bot.sendMessage(chatId, 'Магазин "мягкие игрушки" — это уютное место, где каждый посетитель может найти идеального друга для себя или своих близких. Здесь представлен огромный ассортимент мягких игрушек различных форм, размеров и цветов: от классических медведей и котиков до экзотических животных и персонажей из популярных мультфильмов. В магазине "мягкие игрушки" царит атмосфера радости и волшебства. Приятные цвета, мягкий свет и мелодичная музыка создают умиротворенное окружение, идеальное для выбора нового плюшевого друга или подарка. Приветливый персонал всегда готов помочь с выбором, рассказать о каждой игрушке и порадовать посетителей приятными сюрпризами. Магазин "мягкие игрушки" — это место, где каждый может найти не только игрушку, но и кусочек детства и теплые воспоминания.');
    }
      return bot.sendMessage(chatId, 'Я тебе не понимаю, попробуй еще раз!');
  });
}

bot.on('callback_query', async (msg) => {
  const data = msg.data;
  const chatId = msg.message.chat.id;

  switch (data) {
    case 'catalog':
      // Действия для кнопки "Каталог"
      bot.sendPhoto(chatId, 'https://ir.ozone.ru/s3/multimedia-m/c1000/6447188602.jpg', { caption: 'Мягкая игрушка Стич, 30 см', reply_markup: { inline_keyboard: [[{ text: 'Заказать 156,000₽', callback_data: 'order' }]] } });

      bot.sendPhoto(chatId, 'https://kinoigrushki.ru/image/cache/catalog/tovary/igrushki-disney/bolshaya-plyushevaya-angel-podruga-sticha-rozovaya-56-sm-lilo-i-stich-disney-store_1-1000x1000.jpg', { caption: 'Мягкая игрушка Ангел, 30 см', reply_markup: { inline_keyboard: [[{ text: 'Заказать 156,000₽', callback_data: 'order2' }]] } });

      bot.sendPhoto(chatId, 'https://static.richfamily.ru/photo/35/24/352481/1.webp', { caption: 'Мягкая игрушка Корги, 50 см', reply_markup: { inline_keyboard: [[{ text: 'Заказать 233,000₽', callback_data: 'order3' }]] } });
      
      
      // Отправка каталога товаров
      break;
    case 'about':
      // Действия для кнопки "О нас"
      await bot.sendPhoto(chatId, 'https://sdvv.ru/upload/iblock/de6/de63c45c3ae808039c93fd88c8abfef6.jpg', { caption: 'Магазин "мягкие игрушки" — это уютное место, где каждый посетитель может найти идеального друга для себя или своих близких. Здесь представлен огромный ассортимент мягких игрушек различных форм, размеров и цветов: от классических медведей и котиков до экзотических животных и персонажей из популярных мультфильмов. В магазине "мягкие игрушки" царит атмосфера радости и волшебства. Приятные цвета, мягкий свет и мелодичная музыка создают умиротворенное окружение, идеальное для выбора нового плюшевого друга или подарка. Приветливый персонал всегда готов помочь с выбором, рассказать о каждой игрушке и порадовать посетителей приятными сюрпризами. Магазин "мягкие игрушки" — это место, где каждый может найти не только игрушку, но и кусочек детства и теплые воспоминания.' });
      // Отправка информации о компании
      break;
  }
});
bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  switch (data) {
    case 'order':
      await bot.sendMessage(chatId, 'https://www.donationalerts.com/r/kosyx');
      break;
    case 'order2':
      await bot.sendMessage(chatId, 'https://www.donationalerts.com/r/kosyx');
      break;
    case 'order3':
      await bot.sendMessage(chatId, 'https://www.donationalerts.com/r/kosyx');
      break;
  }
});


start();
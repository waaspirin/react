import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import card9 from "../assets/card9.png";
import card10 from "../assets/card10.png";

export const categories = [
  {
    id: 'all',
    name: 'Все товары',
  },
  {
    id: 1,
    name: 'Для дома',
  },
  {
    id: 2,
    name: 'Электроника',
  },
  {
    id: 3,
    name: 'Аксессуары',
  },
  {
    id: 4,
    name: 'Спорт и отдых',
  },
];

export const products  = [
  {
    id: 1,
    title: 'Керамическая кружка «Утро»',
    price: 890,
    categoryId: 1,
    category: 'Для дома',
    image: card2,
    description: 'Керамическая кружка для уютных утренних завтраков.',
    color: 'Белый',
    color_block: '#F2F0E9',
  },
  {
    id: 2,
    title: 'Органайзер «Порядок»',
    price: 1290,
    categoryId: 1,
    category: 'Для дома',
    image: card3,
    description: 'Практичный органайзер для хранения необходимых мелочей.',
    color: 'Бежевый',
    color_block: '#D8C5A5',
  },
  {
    id: 3,
    title: 'Термобутылка «Поток», 500 мл',
    price: 1490,
    categoryId: 4,
    category: 'Спорт и отдых',
    image: card4,
    description: 'Термобутылка объёмом 500 мл для прогулок и тренировок.',
    color: 'Кремовый',
    color_block: '#E8DDC8',
  },
  {
    id: 4,
    title: 'Коврик для йоги «Баланс»',
    price: 2190,
    categoryId: 4,
    category: 'Спорт и отдых',
    image: card5,
    description: 'Коврик для занятий йогой и домашними тренировками.',
    color: 'Оливковый',
    color_block: '#777B52',
  },
  {
    id: 5,
    title: 'Хлопковый плед «Тепло»',
    price: 2490,
    categoryId: 1,
    category: 'Для дома',
    image: card6,
    description: 'Мягкий хлопковый плед для уютного отдыха дома.',
    color: 'Бежевый',
    color_block: '#C8B59B',
  },
  {
    id: 6,
    title: 'Портативная колонка «Волна»',
    price: 2990,
    categoryId: 2,
    category: 'Электроника',
    image: card7,
    description: 'Компактная портативная колонка для прослушивания музыки.',
    color: 'Чёрный',
    color_block: '#242628',
  },
  {
    id: 7,
    title: 'Настольная лампа «Линия»',
    price: 3490,
    categoryId: 1,
    category: 'Для дома',
    image: card8,
    description: 'Настольная лампа для рабочего места и уютного интерьера.',
    color: 'Бежевый',
    color_block: '#D8C5A5',
  },
  {
    id: 8,
    title: 'Городской рюкзак «Маршрут»',
    price: 4290,
    categoryId: 3,
    category: 'Аксессуары',
    image: card9,
    description: 'Городской рюкзак для повседневных дел и прогулок.',
    color: 'Коричневый',
    color_block: '#795548',
  },
  {
    id: 9,
    title: 'Беспроводные наушники «Ритм»',
    price: 5990,
    categoryId: 2,
    category: 'Электроника',
    image: card10,
    description: 'Беспроводные наушники для музыки и повседневного использования.',
    color: 'Чёрный',
    color_block: '#242628',
  },
];

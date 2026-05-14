// ============================================
// IMPORT SYNDICATE — КОНТЕНТ САЙТА
// ============================================
// Здесь хранятся все тексты, товары, бандлы, отзывы и FAQ.
// Редактируй здесь, чтобы менять контент на сайте.
// ============================================

const SITE = {
  "brand": "Import Syndicate",
  "tagline": "Редкие напитки из Европы",
  "year": "2023–2026",
  "formspreeId": "YOUR_FORMSPREE_ID",
  "sellerEmail": "hello@importsyndicate.ru",
  "telegram": "https://t.me/importsyndicate",
  "imagesPath": "images/",
  "nav": [
    {
      "text": "Наборы",
      "href": "#bundles"
    },
    {
      "text": "Энергетики",
      "href": "#products"
    },
    {
      "text": "FAQ",
      "href": "#faq"
    },
    {
      "text": "Контакты",
      "href": "#footer"
    }
  ],
  "hero": {
    "headline": "Редкие напитки из Европы",
    "subheadline": "Мы уже собрали лучшие вкусы в готовые наборы. Ограниченные партии — прямой импорт.",
    "badges": [
      "Прямой импорт",
      "Ограниченные партии",
      "Быстрая доставка"
    ]
  },
  "bundles": [
    {
      "id": "starter-pack",
      "name": "Starter Pack",
      "shortDesc": "Идеальный набор для первого знакомства — 2 × Celsius + 1 × AA Drink",
      "price": 1290,
      "oldPrice": 1700,
      "tag": "Хит",
      "tagColor": "green",
      "emoji": "🎁",
      "image": "starter-pack.jpg",
      "thumb": "starter-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Kiwi Guava",
        "AA Drink Protein Water Grape Gojiberry"
      ],
      "fullDesc": "Starter Pack — идеальный выбор для тех, кто только начинает знакомиться с миром редких импортных напитков. В набор вошли 2 лучших вкуса Celsius и 1 AA Drink Protein Water. Каждый напиток отобран лично нашей командой в Европе.",
      "details": [
        {
          "label": "Количество",
          "value": "3 банки"
        },
        {
          "label": "Объем",
          "value": "355–500 мл"
        },
        {
          "label": "Страны",
          "value": "Швеция, США"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "Все напитки из последней поставки — свежие даты",
        "Ни одной позиции нет в обычных магазинах РФ",
        "Идеально для подарка или первого заказа",
        "Экономия 24% vs покупки поштучно"
      ],
      "reviews": [
        {
          "name": "Артём",
          "date": "15.04.2026",
          "rating": 5,
          "text": "Отличный набор для знакомства! Celsius Arctic Vibe — просто бомба, такой освежающий."
        },
        {
          "name": "Мария",
          "date": "02.04.2026",
          "rating": 5,
          "text": "Заказала парню на день рождения, он в восторге. Спасибо за подарочную упаковку!"
        }
      ]
    },
    {
      "id": "discovery-pack",
      "name": "Discovery Pack",
      "shortDesc": "Попробуй всё и выбери свой вкус — 4 × Celsius + 1 × AA Drink",
      "price": 2190,
      "oldPrice": 2900,
      "tag": "Топ",
      "tagColor": "blue",
      "emoji": "🔍",
      "image": "discovery-pack.jpg",
      "thumb": "discovery-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Kiwi Guava",
        "Celsius Mango Lemonade",
        "Celsius Peach Vibe",
        "AA Drink Protein Water Peach Yuzu"
      ],
      "fullDesc": "Discovery Pack — расширенная подборка для тех, кто хочет попробовать больше. 5 уникальных позиций из Швеции и США. В наборе как классика Celsius, так и редкие вкусы AA Drink.",
      "details": [
        {
          "label": "Количество",
          "value": "5 банок"
        },
        {
          "label": "Объем",
          "value": "355–500 мл"
        },
        {
          "label": "Страны",
          "value": "Швеция, США"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "Включает все 4 вкуса Celsius из текущей поставки",
        "AA Drink Peach Yuzu — эксклюзивный вкус, редко встречается",
        "Идеально для дегустации и выбора фаворита",
        "Экономия 24% + бесплатная доставка"
      ],
      "reviews": [
        {
          "name": "Дима",
          "date": "20.04.2026",
          "rating": 5,
          "text": "Discovery Pack — это что-то невероятное. Все 4 вкуса Celsius и ещё protein water. Лучший выбор!"
        },
        {
          "name": "Катя",
          "date": "10.04.2026",
          "rating": 4,
          "text": "Хороший набор, но хотелось бы ещё один вкус AA Drink. В остальном всё огонь."
        }
      ]
    },
    {
      "id": "protein-duo",
      "name": "Protein Duo",
      "shortDesc": "Лёгкий старт с protein water — 2 × AA Drink",
      "price": 890,
      "oldPrice": 1200,
      "tag": "Дешёвый вход",
      "tagColor": "purple",
      "emoji": "🧃",
      "image": "protein-duo.jpg",
      "thumb": "protein-duo-thumb.jpg",
      "composition": [
        "AA Drink Protein Water Grape Gojiberry",
        "AA Drink Protein Water Peach Yuzu"
      ],
      "fullDesc": "Protein Duo — лёгкий старт для тех, кто хочет попробовать protein water. 2 уникальных вкуса AA Drink из Швеции с натуральным белком и фруктовыми нотками.",
      "details": [
        {
          "label": "Количество",
          "value": "2 банки"
        },
        {
          "label": "Объем",
          "value": "500 мл"
        },
        {
          "label": "Страны",
          "value": "Швеция"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "2 уникальных вкуса protein water",
        "20г белка в каждой банке",
        "Нет сахара, натуральные ароматизаторы",
        "Экономия 26% vs покупки поштучно"
      ],
      "reviews": [
        {
          "name": "Сергей",
          "date": "18.04.2026",
          "rating": 5,
          "text": "Наконец-то нормальный protein water в РФ! Вкус Peach Yuzu — просто топ."
        },
        {
          "name": "Анна",
          "date": "05.04.2026",
          "rating": 5,
          "text": "Беру после тренировок. Отличный набор для знакомства с AA Drink."
        }
      ]
    },
    {
      "id": "energy-pack",
      "name": "Energy Pack",
      "shortDesc": "Чистая энергия на каждый день — 3 × Celsius",
      "price": 1590,
      "oldPrice": 2100,
      "tag": "Базовый",
      "tagColor": "blue",
      "emoji": "⚡",
      "image": "energy-pack.jpg",
      "thumb": "energy-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Kiwi Guava",
        "Celsius Mango Lemonade"
      ],
      "fullDesc": "Energy Pack — чистая энергия без компромиссов. 3 банки Celsius с лучшими вкусами для тех, кто ценит бодрость и фокус на протяжении всего дня.",
      "details": [
        {
          "label": "Количество",
          "value": "3 банки"
        },
        {
          "label": "Объем",
          "value": "355 мл"
        },
        {
          "label": "Страны",
          "value": "США"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "3 лучших вкуса Celsius",
        "Без сахара, натуральные ингредиенты",
        "200мг кофеина в каждой банке",
        "Экономия 24% vs покупки поштучно"
      ],
      "reviews": [
        {
          "name": "Макс",
          "date": "22.04.2026",
          "rating": 5,
          "text": "Energy Pack — мой must-have. Celsius Arctic Vibe лучший энергетик, который я пробовал."
        },
        {
          "name": "Лена",
          "date": "08.04.2026",
          "rating": 5,
          "text": "Отличный набор для рабочих дней. 3 банки хватает на неделю."
        }
      ]
    },
    {
      "id": "classic-pack",
      "name": "Classic Pack",
      "shortDesc": "Только проверенные вкусы — 4 × Celsius",
      "price": 1990,
      "oldPrice": 2800,
      "tag": "Классика",
      "tagColor": "green",
      "emoji": "🟢",
      "image": "classic-pack.jpg",
      "thumb": "classic-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Kiwi Guava",
        "Celsius Mango Lemonade",
        "Celsius Peach Vibe"
      ],
      "fullDesc": "Classic Pack — все 4 вкуса Celsius в одном наборе. Для тех, кто не хочет выбирать и хочет попробовать каждый вкус легендарного шведского энергетика.",
      "details": [
        {
          "label": "Количество",
          "value": "4 банки"
        },
        {
          "label": "Объем",
          "value": "355 мл"
        },
        {
          "label": "Страны",
          "value": "США"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "Все 4 вкуса Celsius из текущей поставки",
        "Полная коллекция для истинных ценителей",
        "Без сахара, витамины и метаформин",
        "Экономия 29% vs покупки поштучно"
      ],
      "reviews": [
        {
          "name": "Павел",
          "date": "25.04.2026",
          "rating": 5,
          "text": "Classic Pack — это must have. Все вкусы Celsius в одном месте, нигде такого нет."
        },
        {
          "name": "Юля",
          "date": "12.04.2026",
          "rating": 5,
          "text": "Заказала себе и подруге. Обе в восторге от Peach Vibe!"
        }
      ]
    },
    {
      "id": "balance-pack",
      "name": "Balance Pack",
      "shortDesc": "Классика + немного нового — 4 × Celsius",
      "price": 1990,
      "oldPrice": 2800,
      "tag": "Баланс",
      "tagColor": "blue",
      "emoji": "⚖️",
      "image": "balance-pack.jpg",
      "thumb": "balance-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Kiwi Guava",
        "Celsius Mango Lemonade",
        "Celsius Peach Vibe"
      ],
      "fullDesc": "Balance Pack — идеальный баланс между классикой и новым. 4 банки Celsius с лучшими вкусами для тех, кто ценит разнообразие без перебора.",
      "details": [
        {
          "label": "Количество",
          "value": "4 банки"
        },
        {
          "label": "Объем",
          "value": "355 мл"
        },
        {
          "label": "Страны",
          "value": "США"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "4 разных вкуса Celsius",
        "От Arctic Vibe до Peach Vibe — полный спектр",
        "Без сахара, только натуральные ингредиенты",
        "Экономия 29% vs покупки поштучно"
      ],
      "reviews": [
        {
          "name": "Игорь",
          "date": "19.04.2026",
          "rating": 5,
          "text": "Balance Pack — отличный выбор. Каждый день новый вкус, не надоедает."
        },
        {
          "name": "Настя",
          "date": "03.04.2026",
          "rating": 4,
          "text": "Хороший набор, но хотелось бы больше вкусов. В остальном всё супер."
        }
      ]
    },
    {
      "id": "recovery-pack",
      "name": "Recovery Pack",
      "shortDesc": "Энергия + восстановление — 2 × Celsius + 2 × AA Drink",
      "price": 1790,
      "oldPrice": 2400,
      "tag": "Сильный",
      "tagColor": "gold",
      "featured": true,
      "emoji": "🔄",
      "image": "recovery-pack.jpg",
      "thumb": "recovery-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Peach Vibe",
        "AA Drink Protein Water Grape Gojiberry",
        "AA Drink Protein Water Peach Yuzu"
      ],
      "fullDesc": "Recovery Pack — один из самых сильных наборов. Идеальное сочетание энергии Celsius и восстановления AA Drink Protein Water. Для тренировок, работы и активной жизни.",
      "details": [
        {
          "label": "Количество",
          "value": "4 банки"
        },
        {
          "label": "Объем",
          "value": "355–500 мл"
        },
        {
          "label": "Страны",
          "value": "США, Швеция"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "2 × Celsius для энергии + 2 × AA Drink для восстановления",
        "Идеально до и после тренировки",
        "20г белка в каждом AA Drink",
        "Экономия 25% + бесплатная доставка"
      ],
      "reviews": [
        {
          "name": "Влад",
          "date": "28.04.2026",
          "rating": 5,
          "text": "Recovery Pack — это уровень. Celsius перед тренировкой, AA Drink после — идеально!"
        },
        {
          "name": "Оля",
          "date": "14.04.2026",
          "rating": 5,
          "text": "Муж тащится. Говорит, что такого выбора нет даже в Duty Free."
        }
      ]
    },
    {
      "id": "protein-pack",
      "name": "Protein Pack",
      "shortDesc": "Лёгкий белковый набор — 4 × AA Drink",
      "price": 1690,
      "oldPrice": 2400,
      "tag": "Фитнес",
      "tagColor": "purple",
      "emoji": "🧃",
      "image": "protein-pack.jpg",
      "thumb": "protein-pack-thumb.jpg",
      "composition": [
        "AA Drink Protein Water Grape Gojiberry",
        "AA Drink Protein Water Peach Yuzu",
        "AA Drink Protein Water Grape Gojiberry",
        "AA Drink Protein Water Peach Yuzu"
      ],
      "fullDesc": "Protein Pack — лёгкий белковый набор для тех, кто следит за питанием. 4 банки AA Drink Protein Water с двумя уникальными вкусами из Швеции.",
      "details": [
        {
          "label": "Количество",
          "value": "4 банки"
        },
        {
          "label": "Объем",
          "value": "500 мл"
        },
        {
          "label": "Страны",
          "value": "Швеция"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "4 банки protein water — 80г белка total",
        "2 вкуса: Grape Gojiberry и Peach Yuzu",
        "Без сахара, лактозы и глютена",
        "Экономия 30% vs покупки поштучно"
      ],
      "reviews": [
        {
          "name": "Андрей",
          "date": "21.04.2026",
          "rating": 5,
          "text": "Protein Pack — отлично для спортзала. 80г белка в 4 банках, и вкусно!"
        },
        {
          "name": "Ксюша",
          "date": "09.04.2026",
          "rating": 5,
          "text": "Наконец-то нормальный protein water без химозного привкуса. Peach Yuzu 🔥"
        }
      ]
    },
    {
      "id": "fitness-pro-pack",
      "name": "Fitness Pro Pack",
      "shortDesc": "Для тренировок и восстановления — 3 × Celsius + 3 × AA Drink",
      "price": 2790,
      "oldPrice": 3900,
      "tag": "Фитнес Pro",
      "tagColor": "gold",
      "emoji": "💪",
      "image": "fitness-pro-pack.jpg",
      "thumb": "fitness-pro-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Kiwi Guava",
        "Celsius Peach Vibe",
        "AA Drink Protein Water Grape Gojiberry",
        "AA Drink Protein Water Peach Yuzu",
        "AA Drink Protein Water Grape Gojiberry"
      ],
      "fullDesc": "Fitness Pro Pack — максимальный набор для спортсменов и активных людей. 3 банки Celsius для энергии и фокуса + 3 банки AA Drink для восстановления мышц.",
      "details": [
        {
          "label": "Количество",
          "value": "6 банок"
        },
        {
          "label": "Объем",
          "value": "355–500 мл"
        },
        {
          "label": "Страны",
          "value": "США, Швеция"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "3 × Celsius для энергии + 3 × AA Drink для восстановления",
        "60г белка total из AA Drink",
        "Идеально для недельного цикла тренировок",
        "Экономия 28% + бесплатная доставка + стикерпак"
      ],
      "reviews": [
        {
          "name": "Денис",
          "date": "26.04.2026",
          "rating": 5,
          "text": "Fitness Pro Pack — лучший набор для спортзала. Беру каждый месяц."
        },
        {
          "name": "Маша",
          "date": "11.04.2026",
          "rating": 5,
          "text": "Наконец-то полноценный фитнес-набор. Celsius перед, AA Drink после — идеально!"
        }
      ]
    },
    {
      "id": "pro-pack",
      "name": "Pro Pack",
      "shortDesc": "Максимальный набор с лучшими вкусами — 5 × Celsius + 1 × AA Drink",
      "price": 3290,
      "oldPrice": 4500,
      "tag": "Главный апселл",
      "tagColor": "gold",
      "emoji": "🔥",
      "image": "pro-pack.jpg",
      "thumb": "pro-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Kiwi Guava",
        "Celsius Mango Lemonade",
        "Celsius Peach Vibe",
        "Celsius Arctic Vibe",
        "AA Drink Protein Water Peach Yuzu"
      ],
      "fullDesc": "Pro Pack — наш бестселлер и главный апселл. 6 напитков, максимальное разнообразие. Включает все вкусы Celsius и редкий AA Drink Peach Yuzu. Разбирается первым при каждой поставке.",
      "details": [
        {
          "label": "Количество",
          "value": "6 банок"
        },
        {
          "label": "Объем",
          "value": "355–500 мл"
        },
        {
          "label": "Страны",
          "value": "США, Швеция"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "Самый полный ассортимент — от классики до эксклюзива",
        "Включает премиум: AA Drink Peach Yuzu",
        "5 × Celsius + 1 × AA Drink — идеальный баланс",
        "Экономия 27% + бесплатная доставка + стикерпак"
      ],
      "reviews": [
        {
          "name": "Игорь",
          "date": "25.04.2026",
          "rating": 5,
          "text": "Брал уже 3 раза. Pro Pack — это love. Все вкусы Celsius + AA Drink — просто космос."
        },
        {
          "name": "Саша",
          "date": "18.04.2026",
          "rating": 5,
          "text": "Лучший набор на рынке, проверено. 6 разных напитков, ни одного повтора."
        },
        {
          "name": "Настя",
          "date": "05.04.2026",
          "rating": 5,
          "text": "Муж тащится. Говорит, что такого выбора нет даже в Duty Free."
        }
      ]
    },
    {
      "id": "week-pack",
      "name": "Week Pack",
      "shortDesc": "Запас энергии на несколько дней — 6 × Celsius",
      "price": 2890,
      "oldPrice": 4200,
      "tag": "Запас",
      "tagColor": "purple",
      "emoji": "📦",
      "image": "week-pack.jpg",
      "thumb": "week-pack-thumb.jpg",
      "composition": [
        "Celsius Arctic Vibe",
        "Celsius Kiwi Guava",
        "Celsius Mango Lemonade",
        "Celsius Peach Vibe",
        "Celsius Arctic Vibe",
        "Celsius Mango Lemonade"
      ],
      "fullDesc": "Week Pack — максимальный запас для настоящих ценителей. 6 банок Celsius на неделю. Включает все 4 вкуса + дубли лучших позиций.",
      "details": [
        {
          "label": "Количество",
          "value": "6 банок"
        },
        {
          "label": "Объем",
          "value": "355 мл"
        },
        {
          "label": "Страны",
          "value": "США"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        },
        {
          "label": "Доставка",
          "value": "1–5 дней по РФ"
        }
      ],
      "features": [
        "Все 4 вкуса Celsius + 2 дубля",
        "Хватит на 6–12 дней",
        "Без сахара, только натуральные ингредиенты",
        "Экономия 31% + бесплатная доставка + стикерпак + открывалка"
      ],
      "reviews": [
        {
          "name": "Влад",
          "date": "28.04.2026",
          "rating": 5,
          "text": "Week Pack — это уровень. 6 банок Celsius, каждый день новый вкус."
        },
        {
          "name": "Оля",
          "date": "12.04.2026",
          "rating": 5,
          "text": "Заказала на корпоратив — коллеги в шоке. Теперь все хотят знать, где я беру."
        }
      ]
    }
  ],
  "products": [
    {
      "id": "celsius-arctic-vibe",
      "name": "Celsius Arctic Vibe",
      "price": 450,
      "oldPrice": 590,
      "tag": "Бестселлер",
      "tagClass": "tag-green",
      "emoji": "❄️",
      "image": "celsius-arctic-vibe.jpg",
      "shortDesc": "Освежающий энергетик с арктическим вкусом",
      "fullDesc": "Celsius Arctic Vibe — легендарный шведский энергетик с освежающим арктическим вкусом. Без сахара, с натуральными ингредиентами и 200мг кофеина для максимальной бодрости. Идеален для утра, тренировок и продуктивных дней.",
      "details": [
        {
          "label": "Объем",
          "value": "355 мл"
        },
        {
          "label": "Страна",
          "value": "США"
        },
        {
          "label": "Кофеин",
          "value": "200 мг"
        },
        {
          "label": "Сахар",
          "value": "0 г"
        },
        {
          "label": "Калории",
          "value": "10 ккал"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        }
      ],
      "features": [
        "Освежающий арктический вкус",
        "200мг кофеина для максимальной энергии",
        "Без сахара и искусственных красителей",
        "Содержит витамины группы B и C",
        "Идеален для тренировок и работы"
      ],
      "reviews": [
        {
          "name": "Артём",
          "date": "15.04.2026",
          "rating": 5,
          "text": "Celsius Arctic Vibe — просто бомба! Самый освежающий энергетик, который я пробовал."
        },
        {
          "name": "Марина",
          "date": "02.04.2026",
          "rating": 5,
          "text": "Беру каждую поставку. Лучший вкус Celsius, без сомнений."
        }
      ]
    },
    {
      "id": "celsius-kiwi-guava",
      "name": "Celsius Kiwi Guava",
      "price": 450,
      "oldPrice": 590,
      "tag": "Новинка",
      "tagClass": "tag-green",
      "emoji": "🥝",
      "image": "celsius-kiwi-guava.jpg",
      "shortDesc": "Тропический микс киви и гуавы",
      "fullDesc": "Celsius Kiwi Guava — тропический энергетик с насыщенным вкусом киви и гуавы. Без сахара, с натуральными ингредиентами и 200мг кофеина. Идеальный выбор для любителей экзотических фруктовых ноток.",
      "details": [
        {
          "label": "Объем",
          "value": "355 мл"
        },
        {
          "label": "Страна",
          "value": "США"
        },
        {
          "label": "Кофеин",
          "value": "200 мг"
        },
        {
          "label": "Сахар",
          "value": "0 г"
        },
        {
          "label": "Калории",
          "value": "10 ккал"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        }
      ],
      "features": [
        "Насыщенный тропический вкус киви и гуавы",
        "200мг кофеина для энергии и фокуса",
        "Без сахара и искусственных красителей",
        "Содержит витамины группы B и C",
        "Идеален для тропических настроений"
      ],
      "reviews": [
        {
          "name": "Дима",
          "date": "20.04.2026",
          "rating": 5,
          "text": "Kiwi Guava — это что-то невероятное. Вкус тропиков в каждой банке!"
        },
        {
          "name": "Алина",
          "date": "10.04.2026",
          "rating": 4,
          "text": "Очень вкусно, но немного сладковат для меня. В остальном огонь."
        }
      ]
    },
    {
      "id": "celsius-mango-lemonade",
      "name": "Celsius Mango Lemonade",
      "price": 450,
      "oldPrice": 590,
      "tag": "Хит",
      "tagClass": "tag-gold",
      "emoji": "🥭",
      "image": "celsius-mango-lemonade.jpg",
      "shortDesc": "Сочетание манго и лимонада",
      "fullDesc": "Celsius Mango Lemonade — яркий энергетик с сочетанием сладкого манго и освежающего лимонада. Без сахара, с натуральными ингредиентами. Один из самых популярных вкусов Celsius в Европе.",
      "details": [
        {
          "label": "Объем",
          "value": "355 мл"
        },
        {
          "label": "Страна",
          "value": "США"
        },
        {
          "label": "Кофеин",
          "value": "200 мг"
        },
        {
          "label": "Сахар",
          "value": "0 г"
        },
        {
          "label": "Калории",
          "value": "10 ккал"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        }
      ],
      "features": [
        "Сочетание манго и лимонада — идеальный баланс",
        "200мг кофеина для энергии",
        "Без сахара и искусственных красителей",
        "Содержит витамины группы B и C",
        "Один из топовых вкусов в Европе"
      ],
      "reviews": [
        {
          "name": "Сергей",
          "date": "22.04.2026",
          "rating": 5,
          "text": "Mango Lemonade — мой фаворит! Идеальное сочетание сладости и кислинки."
        },
        {
          "name": "Катя",
          "date": "08.04.2026",
          "rating": 5,
          "text": "Заказываю только этот вкус. Не могу остановиться!"
        }
      ]
    },
    {
      "id": "celsius-peach-vibe",
      "name": "Celsius Peach Vibe",
      "price": 450,
      "oldPrice": 590,
      "tag": "Популярный",
      "tagClass": "tag-purple",
      "emoji": "🍑",
      "image": "celsius-peach-vibe.jpg",
      "shortDesc": "Нежный персиковый вкус",
      "fullDesc": "Celsius Peach Vibe — нежный энергетик с ароматом спелого персика. Без сахара, с натуральными ингредиентами. Мягкий и приятный вкус для тех, кто предпочитает фруктовые нотки без резкой кислоты.",
      "details": [
        {
          "label": "Объем",
          "value": "355 мл"
        },
        {
          "label": "Страна",
          "value": "США"
        },
        {
          "label": "Кофеин",
          "value": "200 мг"
        },
        {
          "label": "Сахар",
          "value": "0 г"
        },
        {
          "label": "Калории",
          "value": "10 ккал"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        }
      ],
      "features": [
        "Нежный персиковый аромат и вкус",
        "200мг кофеина для бодрости",
        "Без сахара и искусственных красителей",
        "Содержит витамины группы B и C",
        "Мягкий вкус без резкой кислоты"
      ],
      "reviews": [
        {
          "name": "Анна",
          "date": "18.04.2026",
          "rating": 5,
          "text": "Peach Vibe — мягкий и приятный вкус. Идеально для тех, кто не любит кислое."
        },
        {
          "name": "Михаил",
          "date": "05.04.2026",
          "rating": 5,
          "text": "Жена в восторге от этого вкуса. Заказываем постоянно."
        }
      ]
    },
    {
      "id": "aa-drink-grape-goji",
      "name": "AA Drink Protein Water Grape Gojiberry",
      "price": 520,
      "oldPrice": 690,
      "tag": "Редкость",
      "tagClass": "tag-gold",
      "emoji": "🍇",
      "image": "aa-drink-grape-goji.jpg",
      "shortDesc": "Protein water с виноградом и годжи",
      "fullDesc": "AA Drink Protein Water Grape Gojiberry — премиальный protein water из Швеции с виноградом и ягодами годжи. 20г белка в каждой банке, без сахара и лактозы. Идеален для восстановления после тренировок.",
      "details": [
        {
          "label": "Объем",
          "value": "500 мл"
        },
        {
          "label": "Страна",
          "value": "Швеция"
        },
        {
          "label": "Белок",
          "value": "20 г"
        },
        {
          "label": "Сахар",
          "value": "0 г"
        },
        {
          "label": "Калории",
          "value": "85 ккал"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        }
      ],
      "features": [
        "20г высококачественного белка",
        "Уникальный вкус винограда и годжи",
        "Без сахара, лактозы и глютена",
        "Идеален для восстановления мышц",
        "Редкая позиция, не найти в обычных магазинах"
      ],
      "reviews": [
        {
          "name": "Игорь",
          "date": "25.04.2026",
          "rating": 5,
          "text": "AA Drink Grape Gojiberry — лучший protein water! 20г белка и отличный вкус."
        },
        {
          "name": "Оля",
          "date": "12.04.2026",
          "rating": 5,
          "text": "Наконец-то нормальный protein water в РФ. Grape Gojiberry — просто 🔥"
        }
      ]
    },
    {
      "id": "aa-drink-peach-yuzu",
      "name": "AA Drink Protein Water Peach Yuzu",
      "price": 520,
      "oldPrice": 690,
      "tag": "Эксклюзив",
      "tagClass": "tag-purple",
      "emoji": "🍑",
      "image": "aa-drink-peach-yuzu.jpg",
      "shortDesc": "Protein water с персиком и юдзу",
      "fullDesc": "AA Drink Protein Water Peach Yuzu — эксклюзивный protein water из Швеции с персиком и японским цитрусом юдзу. 20г белка, без сахара. Один из самых редких вкусов, который сложно найти даже в Европе.",
      "details": [
        {
          "label": "Объем",
          "value": "500 мл"
        },
        {
          "label": "Страна",
          "value": "Швеция"
        },
        {
          "label": "Белок",
          "value": "20 г"
        },
        {
          "label": "Сахар",
          "value": "0 г"
        },
        {
          "label": "Калории",
          "value": "85 ккал"
        },
        {
          "label": "Срок годности",
          "value": "до 12 месяцев"
        }
      ],
      "features": [
        "20г высококачественного белка",
        "Эксклюзивный вкус персика и юдзу",
        "Без сахара, лактозы и глютена",
        "Редкая позиция — юдзу сложно найти",
        "Идеален для восстановления и гидратации"
      ],
      "reviews": [
        {
          "name": "Влад",
          "date": "28.04.2026",
          "rating": 5,
          "text": "Peach Yuzu — это нечто! Юдзу придаёт такую изысканную нотку. Любимый вкус."
        },
        {
          "name": "Настя",
          "date": "14.04.2026",
          "rating": 5,
          "text": "Эксклюзивный вкус, который нигде не найти. AA Drink Peach Yuzu — топ!"
        }
      ]
    }
  ],
  "whyUs": [
    {
      "icon": "✈️",
      "title": "Прямой импорт из Европы",
      "desc": "Закупаем напрямую у производителей и дистрибьюторов в ЕС и США"
    },
    {
      "icon": "🔒",
      "title": "Нет в обычных магазинах",
      "desc": "Эти позиции не найти в сетевых магазинах России — только у нас"
    },
    {
      "icon": "🔥",
      "title": "Ограниченные партии",
      "desc": "Каждая поставка — уникальна. Пропустишь — может не повториться"
    },
    {
      "icon": "🚚",
      "title": "Быстрая доставка",
      "desc": "Отправляем в день заказа. Доставка по всей России 1–5 дней"
    }
  ],
  "categories": [
    {
      "name": "Наборы",
      "desc": "Готовые подборки напитков",
      "emoji": "📦",
      "href": "#bundles"
    },
    {
      "name": "Энергетики",
      "desc": "Редкие энергетики из Европы и США",
      "emoji": "⚡",
      "href": "#products"
    }
  ],
  "steps": [
    {
      "num": "01",
      "title": "Отбираем в Европе",
      "desc": "Мониторим рынок, находим редкие и хайповые позиции, которые не представлены в России"
    },
    {
      "num": "02",
      "title": "Привозим ограниченными партиями",
      "desc": "Оформляем импорт, проходим таможню и доставляем товар на наш склад"
    },
    {
      "num": "03",
      "title": "Ты получаешь доступ",
      "desc": "Разбиваем на готовые наборы и отправляем тебе в день заказа"
    }
  ],
  "urgency": {
    "headline": "Если товар закончился — он может больше не появиться",
    "subheadline": "Ограниченные партии не ждут. Забери свой набор, пока он в наличии."
  },
  "faq": [
    {
      "question": "Что такое Import Syndicate?",
      "answer": "Import Syndicate — это сервис прямого импорта редких напитков из Европы и США. Мы привозим ограниченными партиями энергетики и protein water, которых нет в обычных магазинах России."
    },
    {
      "question": "Какие напитки вы продаёте?",
      "answer": "Мы специализируемся на редких импортных энергетиках и protein water. В ассортименте: Celsius (4 вкуса — Arctic Vibe, Kiwi Guava, Mango Lemonade, Peach Vibe) и AA Drink Protein Water (Grape Gojiberry, Peach Yuzu)."
    },
    {
      "question": "Почему ваши цены выше, чем в обычных магазинах?",
      "answer": "Мы привозим напитки прямым импортом из Европы и США. Эти позиции официально не поставляются в Россию, поэтому их нет в сетевых магазинах. Цена включает логистику, таможню и гарантию свежести."
    },
    {
      "question": "Как быстро доставляете?",
      "answer": "Отправляем в день заказа. Доставка по всей России занимает 1–5 дней в зависимости от региона. Работаем с СДЭК и Почтой России."
    },
    {
      "question": "Можно ли купить напитки поштучно?",
      "answer": "Да, все напитки доступны как в наборах, так и поштучно. Но выгоднее брать наборы — экономия до 31% + бесплатная доставка на крупные заказы."
    },
    {
      "question": "Что такое Celsius?",
      "answer": "Celsius — премиальный энергетик из США. Без сахара, с натуральными ингредиентами, 200мг кофеина, витамины группы B и C. Популярен среди спортсменов и людей, ведущих активный образ жизни."
    },
    {
      "question": "Что такое AA Drink Protein Water?",
      "answer": "AA Drink Protein Water — шведский protein water с 20г белка в банке. Без сахара, лактозы и глютена. Идеален для восстановления после тренировок и как замена сладким напиткам."
    },
    {
      "question": "Как оформить заказ?",
      "answer": "Выберите набор или напиток, нажмите 'В корзину', затем 'Оформить заказ'. Заполните форму с контактами и адресом — менеджер свяжется в течение 15 минут для подтверждения."
    },
    {
      "question": "Какие способы оплаты?",
      "answer": "Принимаем перевод на карту, СБП, криптовалюту. Оплата после подтверждения заказа менеджером."
    },
    {
      "question": "Что делать, если товар закончился?",
      "answer": "Каждая партия ограничена. Если товар закончился — подпишитесь на наш Telegram, чтобы узнать о новых поставках первым. Повторение партии не гарантируется."
    }
  ],
  "checkout": {
    "title": "Оформление заказа",
    "subtitle": "Заполни форму — мы отправим чек на твою почту и свяжемся для подтверждения",
    "fields": [
      {
        "id": "firstName",
        "label": "Имя",
        "type": "text",
        "required": true,
        "placeholder": "Иван"
      },
      {
        "id": "lastName",
        "label": "Фамилия",
        "type": "text",
        "required": true,
        "placeholder": "Иванов"
      },
      {
        "id": "phone",
        "label": "Телефон",
        "type": "tel",
        "required": true,
        "placeholder": "+7 (999) 000-00-00"
      },
      {
        "id": "email",
        "label": "Email",
        "type": "email",
        "required": true,
        "placeholder": "ivan@email.ru"
      },
      {
        "id": "address",
        "label": "Адрес доставки",
        "type": "text",
        "required": true,
        "placeholder": "г. Москва, ул. Примерная, д. 1, кв. 10"
      },
      {
        "id": "comment",
        "label": "Комментарий",
        "type": "textarea",
        "required": false,
        "placeholder": "Позвонить за час до доставки"
      }
    ],
    "orderSummaryTitle": "Ваш заказ",
    "totalLabel": "Итого к оплате",
    "submitBtn": "Подтвердить заказ",
    "privacyNote": "Мы не передаём данные третьим лицам.",
    "successTitle": "Заказ оформлен!",
    "successSubtitle": "Мы получили твой заказ. Менеджер свяжется в течение часа для подтверждения.",
    "successCta": "Вернуться на главную"
  }
};

// ============================================
// Экспорт для Node.js (если нужно)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE };
}
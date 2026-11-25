const SITE_DATA = {
  ru: {
    routePrefix: "/ru/",
    pageTitle: "IV Международный фестиваль адаптивных видов спорта «Импульс» — International Inclusive Games 2027",
    brandTitle: "ИМПУЛЬС 2027",
    brandSub: "International Inclusive Games",
    a11yBtn: "Aa Контраст",
    cmsBtn: "CMS Демо",
    nav: [
      { id: "about", slug: "mission", label: "Миссия" },
      { id: "program", slug: "program", label: "Программа" },
      { id: "awaits", slug: "highlights-2027", label: "2027" },
      { id: "expo", slug: "exhibition", label: "Выставка" },
      { id: "news", slug: "news", label: "Новости" },
      { id: "history", slug: "history", label: "История" },
      { id: "partners", slug: "support", label: "Партнёры" },
      { id: "documents", slug: "documents", label: "Документы" },
      { id: "apply", slug: "apply", label: "Заявка" }
    ],
    hero: {
      badge: "11–15 ИЮНЯ 2027 • ОТКРЫТИЕ В ДЕНЬ РОССИИ",
      venue: "Нижний Новгород • Совкомбанк Арена",
      titleTop: "IV МЕЖДУНАРОДНЫЙ ФЕСТИВАЛЬ АДАПТИВНЫХ ВИДОВ СПОРТА",
      titleGrad: "«ИМПУЛЬС» — 2027",
      subtitle: "Крупнейшее международное событие в мире адаптивного и инклюзивного спорта — International Inclusive Games 2027. Четыре арены мирового класса, две категории атлетов и открытый международный приём делегаций.",
      ctaRu: "Заявка для России и стран СНГ",
      ctaInt: "Международная заявка",
      checks: [
        "Более 30 видов спорта",
        "Более 20 стран-участниц",
        "Более 4 000 спортсменов"
      ],
      emblemTagLeft: "Международный инклюзивный комитет",
      emblemTagRight: "IV Игры • 2027",
      cdUnits: ["Дней", "Часов", "Мин", "Сек"],
      cdSide: "ДО СТАРТА"
    },
    marquee: [
      "Россия (50+ регионов)", "Греция (Новая заявка!)", "Уганда", "Беларусь", "Бразилия", "Китай",
      "Индия", "Сербия", "ЮАР", "Куба", "Вьетнам", "Узбекистан", "Таджикистан", "Армения", "Мексика", "Иран", "Оман"
    ],
    stats: [
      { num: 4000, suffix: "+", label: "Спортсменов и участников делегаций" },
      { num: 30, suffix: "+", label: "Дисциплин адаптивного и инклюзивного спорта" },
      { num: 20, suffix: "+", label: "Стран Европы, Азии, Африки и Латинской Америки" },
      { num: 4, suffix: " арены", label: "Совкомбанк Арена, Спорт Порт, VOLGA Арена, Гребной канал" }
    ],
    about: {
      eyebrow: "О ФЕСТИВАЛЕ И МИССИИ",
      title: "Россия — магнит для мирового инклюзивного спортивного движения",
      p1: "Три фестиваля подряд доказали: спорт стирает любые границы. В июне 2027 года Нижний Новгород примет четвёртый, самый масштабный в истории проекта Международный фестиваль адаптивных видов спорта «Импульс» (International Inclusive Games).",
      p2: "Среди участников Игр — люди с ограниченными возможностями здоровья и инвалидностью, дети, молодёжь и взрослые, воспитанники профильных центров, титулованные паралимпийцы и дебютанты со всего мира.",
      quote: "«Каждый старт и каждый финиш здесь — это история преодоления, силы духа и дружбы народов, где трибуны одинаково горячо поддерживают и дебютанта, и чемпиона».",
      venuesTitle: "Официальные кластеры проведения (11–15 июня 2027):",
      venues: [
        "Стадион «Совкомбанк Арена»",
        "Спортивный комплекс «Спорт Порт»",
        "Комплекс «VOLGA Арена»",
        "Акватория Гребного канала"
      ]
    },
    program: {
      eyebrow: "В ПРОГРАММЕ ИГР 2027",
      title: "Две новые лиги: «Любитель» и «Профессионал»",
      desc: "Впервые в истории фестиваля программа разделена на два дивизиона для честной конкуренции и максимальной открытости.",
      divisions: [
        {
          type: "amateur",
          tag: "Открытый старт • Новая категория",
          title: "Категория «Любитель»",
          text: "Открывает двери для каждого, кто делает первые шаги в адаптивном спорте, хочет ощутить атмосферу международного праздника и испытать себя без страха конкуренции с профи.",
          bullets: [
            "Инклюзивные старты, эстафеты и открытые турниры",
            "Мастер-классы с чемпионами и тренерами сборных",
            "Дружеская поддержка и памятные награды участникам"
          ]
        },
        {
          type: "pro",
          tag: "Высшее мастерство • Официальный зачёт",
          title: "Категория «Профессионал»",
          text: "Пространство для сильнейших атлетов и национальных сборных, для которых адаптивный спорт стал делом жизни и борьбой за рекорды.",
          bullets: [
            "Международное квалифицированное судейство и регламенты",
            "Более 30 видов адаптивного спорта и 70+ комплектов наград",
            "Прямые трансляции и освещение федеральными СМИ"
          ]
        }
      ],
      catalogTitle: "Реестр видов спорта 2027 (формируется по заявкам делегаций)",
      cmsBadge: "Редактируется из CMS • Аккредитация дисциплин открыта",
      filters: [
        { key: "all", label: "Все направления (30+)" },
        { key: "team", label: "Командные" },
        { key: "track", label: "Лёгкая атлетика и вода" },
        { key: "precision", label: "Точность и единоборства" }
      ],
      sports: [
        { name: "Пара-лёгкая атлетика", cat: "track", tag: "Арена" },
        { name: "Адаптивное плавание", cat: "track", tag: "Вода" },
        { name: "Адаптивная гребля", cat: "track", tag: "Гребной канал" },
        { name: "Стрельба из лука", cat: "precision", tag: "Точность" },
        { name: "Бочча (Инклюзивная лига)", cat: "precision", tag: "Паралимпийский" },
        { name: "Баскетбол на колясках", cat: "team", tag: "Командный" },
        { name: "Волейбол сидя", cat: "team", tag: "Командный" },
        { name: "Настольный теннис (ПОДА/ЛИН)", cat: "precision", tag: "Ракеточный" },
        { name: "Пауэрлифтинг (жим лёжа)", cat: "precision", tag: "Силовой" },
        { name: "Голбол и торбол", cat: "team", tag: "Спорт слепых" },
        { name: "Адаптивное тхэквондо / дзюдо", cat: "precision", tag: "Единоборства" },
        { name: "+ ещё 20 дисциплин по заявкам", cat: "all", tag: "В разработке" }
      ]
    },
    awaits: {
      eyebrow: "ЧТО ВАС ЖДЁТ В 2027?",
      title: "Пять дней большого спорта, технологий и культуры",
      desc: "Нижний Новгород на 5 дней превратится в мировую столицу инклюзии, дружбы народов и безбарьерных инноваций.",
      cards: [
        {
          num: "01 • СОРЕВНОВАНИЯ",
          title: "30+ видов адаптивного спорта",
          text: "Масштабные старты на четырёх лучших спортивных аренах Нижнего Новгорода в дивизионах «Любитель» и «Профессионал»."
        },
        {
          num: "02 • ЭКСПО",
          title: "Международная выставка «ИМПУЛЬС»",
          text: "12–14 июня на «Совкомбанк Арене»: новейшая реабилитационная техника, спортивное протезирование, ИТ-сервисы и доступный туризм."
        },
        {
          num: "03 • ДЕЛОВАЯ ПРОГРАММА",
          title: "Международный инклюзивный форум",
          text: "Экспертные сессии и живые истории преодоления. Среди спикеров — Сергей Евсеев, Сергей Бурлаков, Рустам Набиев, Ирек Зарипов, Ярослав Святославский."
        },
        {
          num: "04 • КУЛЬТУРА И ГОРОД",
          title: "Бесплатные экскурсии для делегаций",
          text: "Знакомство с историческим кремлём, слиянием Оки и Волги и безбарьерными туристическими маршрутами Нижнего Новгорода."
        },
        {
          num: "05 • ШОУ-ПРОГРАММА",
          title: "Гала-концерты открытия и закрытия",
          text: "Торжественное открытие в День России с парадом флагов стран-участниц, звёздными артистами и световым шоу факела Игр."
        },
        {
          num: "06 • ФЕСТИВАЛЬ ДЛЯ ВСЕХ",
          title: "Открытая городская фан-зона",
          text: "Интерактивные площадки, инклюзивные мастер-классы, тест-драйвы экипировки и свободный вход для жителей и гостей города."
        }
      ]
    },
    expo: {
      eyebrow: "12–14 ИЮНЯ 2027 • СОВКОМБАНК АРЕНА",
      title: "Международная выставка товаров и услуг «ИМПУЛЬС»",
      text: "Практическая B2B/B2G/B2C-платформа, объединяющая российских и зарубежных производителей, реабилитационные центры и технологические компании. Тестируйте разработки вживую и находите партнёров на международном уровне.",
      cta: "Забронировать стенд экспонента",
      sectors: [
        "Спортивная экипировка, коляски и активные протезы",
        "Решения для реабилитации и повышения мобильности",
        "Умные технологии, ИИ-ассистенты и безбарьерная среда",
        "Специализированное и здоровое питание от производителей",
        "Доступный туризм и санаторно-курортные программы",
        "Социальные и государственные проекты качества жизни"
      ]
    },
    news: {
      eyebrow: "ПРЕСС-ЦЕНТР ФЕСТИВАЛЯ",
      title: "Новости и хроника подготовки Игр",
      desc: "Публикуются сотрудником через CMS на русском и английском языках в 2 клика.",
      readMore: "Читать полностью",
      items: [
        {
          id: 68,
          date: "29 окт 2026",
          img: "assets/1793279765.webp",
          title: "Греция — с нами! География International Inclusive Games 2027 расширяется",
          excerpt: "Родина Олимпийских игр подала предварительную заявку на участие в IV фестивале «Импульс» в Нижнем Новгороде. Вслед за Африкой к Играм присоединяется Европа.",
          full: "Греческая Республика официально направила предварительную заявку на участие в IV Международном фестивале адаптивных видов спорта «Импульс» — International Inclusive Games 2027. Для оргкомитета это событие с особым смыслом: Греция — колыбель мирового олимпийского движения. Вслед за Угандой Греция стала новой зарубежной страной в списке делегаций. Соревнования пройдут 11–15 июня 2027 года на «Совкомбанк Арене», в «Спорт Порту», на «VOLGA Арене» и Гребном канале."
        },
        {
          id: 67,
          date: "28 окт 2026",
          img: "assets/1793204147.webp",
          title: "Уганда — первая зарубежная делегация International Inclusive Games 2027!",
          excerpt: "Африканский континент открыл международный зачёт предварительных заявок на игры в Нижнем Новгороде. Атлеты готовятся к стартам в двух категориях.",
          full: "Приём предварительных заявок на IV Международный фестиваль адаптивных видов спорта «Импульс» стартовал с яркой международной новости: первой зарубежной страной, подтвердившей своё намерение выступить в Нижнем Новгороде, стала Республика Уганда. Именно предварительные заявки формируют итоговую сетку аккредитованных спортивных дисциплин 2027 года."
        },
        {
          id: 66,
          date: "27 окт 2026",
          img: "assets/1793080273.png",
          title: "Открыт приём предварительных заявок на IV фестиваль «Импульс» 2027",
          excerpt: "Оргкомитет запустил отдельные формы регистрации для сборных из регионов России/СНГ и международных делегаций. Впервые доступны категории Любитель и Профессионал.",
          full: "Международный инклюзивный комитет официально объявил о старте приёма предварительных заявок на участие в International Inclusive Games 2027 (11–15 июня 2027, Нижний Новгород). Ожидается более 4000 спортсменов из 20+ государств. Подать заявку могут спортивные федерации, НКО, клубы и индивидуальные атлеты."
        }
      ]
    },
    history: {
      eyebrow: "НАСЛЕДИЕ ДВИЖЕНИЯ • 2024–2026",
      title: "История фестивалей «Импульс»",
      desc: "Путь от первого тёплого старта до крупнейших Международных инклюзивных игр.",
      years: {
        "2026": {
          badge: "III Фестиваль • 26–29 марта 2026 • Сочи",
          title: "III Международный фестиваль «Импульс» в Сочи",
          text: "Событие в солнечном Сочи объединило более 3 000 спортсменов и гостей из 50+ регионов России, Беларуси, Таджикистана, Узбекистана, Армении и Абхазии. В оргкомитет поступило рекордные 3 480 заявок из 22 стран мира! Разыграны медали в 20 видах спорта и более чем 70 дисциплинах.",
          img: "assets/1793025982.jpg",
          kpis: [
            { v: "3 480", l: "заявок из 22 стран" },
            { v: "3 000+", l: "очных участников в Сочи" },
            { v: "70+", l: "спортивных дисциплин" }
          ]
        },
        "2025": {
          badge: "II Фестиваль • 2025",
          title: "Масштабирование программы и интерактивных арен",
          text: "Второй фестиваль укрепил международный статус проекта: программа пополнилась новыми адаптивными дисциплинами, открытыми мастер-классами, культурными и образовательными треками с участием федеральных партнёров и послов спорта.",
          img: "assets/1793097554.png",
          kpis: [
            { v: "15+", l: "видов спорта" },
            { v: "40+", l: "регионов и делегаций" },
            { v: "2x", l: "рост охвата СМИ" }
          ]
        },
        "2024": {
          badge: "I Фестиваль • 2024 • Точка отсчёта",
          title: "Рождение традиции «Импульса»",
          text: "Первый фестиваль заложил фундамент инклюзивного спортивного братства: соревнования, выставки, концерты и живой обмен опытом между региональными командами и общественными организациями доказали огромную востребованность проекта.",
          img: "assets/1793025447.png",
          kpis: [
            { v: "I", l: "исторический старт" },
            { v: "100%", l: "безбарьерная среда" },
            { v: "Старт", l: "международного комитета" }
          ]
        }
      }
    },
    partners: {
      eyebrow: "ПОДДЕРЖКА И ПАРТНЁРЫ",
      title: "Государственная, благотворительная и медиа-поддержка",
      desc: "Логотипы и карточки партнёров управляются через визуальную CMS без участия программиста.",
      sponsorTitle: "Титульный и Генеральный спонсор 2027",
      sponsorSub: "Пакет интеграции открыт • Индивидуальный статус на 4 аренах Нижнего Новгорода и в эфире федеральных СМИ",
      sponsorCta: "Запросить спонсорский пакет",
      list: [
        { role: "Благотворитель", name: "ДоброFON", img: "assets/1764651719.png" },
        { role: "Государственный партнёр", name: "МИД России", img: "assets/1766326762.jpg" },
        { role: "Международный партнёр", name: "Россотрудничество", img: "assets/1765960233.jpeg" },
        { role: "Федеральный приоритет", name: "Национальные проекты России", img: "assets/1768576726.png" },
        { role: "Информационный партнёр", name: "Телеканал «Россия 1»", img: "assets/1745081757.jpg" },
        { role: "Спортивный вещатель", name: "МАТЧ! ТВ", img: "assets/1740158713.jpg" },
        { role: "Информационный партнёр", name: "МИЦ «Известия»", img: "assets/1745081899.jpg" }
      ]
    },
    docs: {
      eyebrow: "ОФИЦИАЛЬНЫЕ ДОКУМЕНТЫ И ЗАЯВКИ",
      title: "Регламенты, положения и связь с оргкомитетом",
      items: [
        {
          title: "Правила размещения рекламы для участников и экспонентов 2027",
          meta: "Официальный документ • PDF • 288 КБ",
          href: "assets/1793028333.pdf",
          btn: "Скачать PDF"
        },
        {
          title: "Общее Положение о IV Международном фестивале «Импульс» 2027",
          meta: "Регламент категорий Любитель / Профессионал • Публикация через CMS",
          href: "#apply",
          btn: "Запросить"
        },
        {
          title: "Памятка по аккредитации СМИ и зарубежных делегаций (RU / EN)",
          meta: "pr@inclusivecommittee.com • Визовая и логистическая поддержка",
          href: "mailto:blago@inclusivecommittee.com",
          btn: "Аккредитация"
        }
      ],
      formTitle: "Обратная связь с оргкомитетом (с защитой от спама)",
      formSub: "Для официальной регистрации спортсмена используйте кнопки форм РФ/СНГ или International ниже, либо напишите напрямую в комитет:",
      fName: "Ваше имя / Организация *",
      fEmail: "E-mail для ответа *",
      fRole: "Статус обращения",
      fRoles: ["Спортсмен / Команда", "Международная делегация", "Экспонент выставки", "Спонсор / Партнёр", "Аккредитация СМИ"],
      fMsg: "Сообщение или вопрос *",
      fSpam: "Защита от спама: сколько дней длится фестиваль (11–15 июня)? *",
      fSubmit: "Отправить в Оргкомитет",
      fSuccess: "Спасибо! Обращение зафиксировано и отправлено на blago@inclusivecommittee.com.",
      fError: "Подсказка антиспама: с 11 по 15 июня включительно — введите число 5."
    },
    footer: {
      mission: "Международный инклюзивный комитет (МОО «Национальный инклюзивный комитет»). Мы создаём пространство, где спорт объединяет континенты, а возможности человека сильнее любых обстоятельств.",
      navTitle: "Разделы сайта",
      contactTitle: "Контакты Оргкомитета",
      address: "Нижний Новгород, Российская Федерация",
      rights: "© 2024–2027 International Inclusive Games «Импульс». Все права защищены. SEO Schema.org/SportsEvent • RU/EN."
    },
    concierge: {
      fab: "Гид Игр 2027",
      title: "Интерактивный гид участника",
      sub: "Быстрые ответы для спортсменов, делегаций и партнёров:",
      defaultAns: "Выберите вопрос выше — подскажу формат подачи заявки, отличия категорий «Любитель» и «Профессионал» или площадки в Нижнем Новгороде.",
      qna: [
        {
          q: "Как подать заявку спортсмену?",
          a: "Для участников из РФ и СНГ открыта отдельная форма (кнопка «Заявка для России и СНГ»), для зарубежных сборных — «Международная заявка». Участие возможно как от федерации/НКО, так и индивидуально."
        },
        {
          q: "В чём разница Любитель и Профессионал?",
          a: "«Любитель» — открытые старты для новичков и тех, кто хочет испытать себя в праздничной атмосфере. «Профессионал» — официальные соревнования для разрядников и сборных с международным судейством."
        },
        {
          q: "Где пройдут соревнования и ЭКСПО?",
          a: "11–15 июня 2027 в Нижнем Новгороде: стадион «Совкомбанк Арена» (включая выставку ЭКСПО 12–14 июня), «Спорт Порт», «VOLGA Арена» и Гребной канал."
        },
        {
          q: "Как стать экспонентом или спонсором?",
          a: "Напишите на blago@inclusivecommittee.com или оставьте запрос в форме обратной связи со статусом «Экспонент выставки» / «Спонсор»."
        }
      ]
    },
    cmsModal: {
      title: "Как сотрудник без навыков кода управляет сайтом (/ru/ и /en/)",
      lead: "Архитектура подготовлена в 2 вариантах на выбор заказчика — нативная визуальная админка с раздельными языковыми версиями без машинного автоперевода:",
      points: [
        "1. Раздельные ветки /ru/... и /en/...: каждая страница, новость и PDF-документ имеют точную языковую пару, свои SEO title/description, OpenGraph и чистый ЧПУ-адрес.",
        "2. Публикация новостей за 2 минуты: сотрудник вставляет заголовок, дату, фото/видео и текст на русском и английском — карточка сразу попадает в ленту и sitemap.xml.",
        "3. Управление видами спорта и партнёрами: карточки дисциплин (сейчас в статусе формирования) и логотипы спонсоров включаются/добавляются обычным переключателем.",
        "4. Стек на выбор под ваш хостинг: Tilda Publishing (с мгновенным визуальным редактированием блоков Zero/Standard и экспортом на ваш домен/сервер) ИЛИ WordPress + Polylang Pro + кастомные ACF-блоки на вашем хостинге."
      ]
    }
  },

  en: {
    routePrefix: "/en/",
    pageTitle: "4th International Inclusive Games “Impulse” 2027 — Nizhny Novgorod",
    brandTitle: "IMPULSE 2027",
    brandSub: "International Inclusive Games",
    a11yBtn: "Aa Contrast",
    cmsBtn: "CMS Demo",
    nav: [
      { id: "about", slug: "mission", label: "Mission" },
      { id: "program", slug: "program", label: "Program" },
      { id: "awaits", slug: "highlights-2027", label: "2027" },
      { id: "expo", slug: "exhibition", label: "Exhibition" },
      { id: "news", slug: "news", label: "News" },
      { id: "history", slug: "history", label: "History" },
      { id: "partners", slug: "support", label: "Partners" },
      { id: "documents", slug: "documents", label: "Documents" },
      { id: "apply", slug: "apply", label: "Apply" }
    ],
    hero: {
      badge: "JUNE 11–15, 2027 • NIZHNY NOVGOROD, RUSSIA",
      venue: "Sovcombank Arena & 3 Olympic-Class Clusters",
      titleTop: "4TH INTERNATIONAL ADAPTIVE SPORTS FESTIVAL",
      titleGrad: "“IMPULSE” — 2027",
      subtitle: "The flagship global gathering in adaptive and inclusive sports — International Inclusive Games 2027. Uniting 4,000+ athletes across Amateur and Professional divisions from over 20 nations.",
      ctaRu: "Application (Russia & CIS)",
      ctaInt: "International Application",
      checks: [
        "More than 30 adaptive sports",
        "20+ participating nations",
        "Over 4,000 athletes"
      ],
      emblemTagLeft: "International Inclusive Committee",
      emblemTagRight: "IV Edition • 2027",
      cdUnits: ["Days", "Hours", "Min", "Sec"],
      cdSide: "COUNTDOWN"
    },
    marquee: [
      "Russia (50+ Regions)", "Greece (New Delegation!)", "Uganda", "Belarus", "Brazil", "China",
      "India", "Serbia", "South Africa", "Cuba", "Vietnam", "Uzbekistan", "Tajikistan", "Armenia", "Mexico", "Iran", "Oman"
    ],
    stats: [
      { num: 4000, suffix: "+", label: "Athletes & international delegation members" },
      { num: 30, suffix: "+", label: "Adaptive & inclusive sports disciplines" },
      { num: 20, suffix: "+", label: "Participating countries across 4 continents" },
      { num: 4, suffix: " Arenas", label: "Sovcombank Arena, Sport Port, VOLGA Arena, Rowing Canal" }
    ],
    about: {
      eyebrow: "ABOUT THE GAMES & MISSION",
      title: "Uniting Nations Into One Global Sporting Family",
      p1: "Three consecutive festivals have proven that real boundaries exist only in the imagination. From June 11 to 15, 2027, Nizhny Novgorod will host the 4th and most ambitious edition of the International Inclusive Games “Impulse”.",
      p2: "The Games welcome athletes with disabilities and health limitations — children, youth, and adults, NGO teams, national delegations, newcomers, and decorated champions standing side by side at the same starting line.",
      quote: "“Every start and every finish tells a story of human resilience, equality, and international friendship — where the stands cheer equally for both the debutant and the champion.”",
      venuesTitle: "Official Host Venues in Nizhny Novgorod (June 11–15, 2027):",
      venues: [
        "Sovcombank Arena Stadium",
        "Sport Port Athletic Complex",
        "VOLGA Arena Complex",
        "Nizhny Novgorod Rowing Canal"
      ]
    },
    program: {
      eyebrow: "2027 SPORTS PROGRAM",
      title: "Two Official Divisions: Amateur & Professional",
      desc: "For the first time in Impulse history, competitions feature two dedicated tracks ensuring fair rivalry and universal accessibility.",
      divisions: [
        {
          type: "amateur",
          tag: "Open Entry • New Division",
          title: "“Amateur” Category",
          text: "Opens the door to everyone taking their first steps in adaptive sports who wishes to experience a world-class festival, connect with peers, and celebrate personal courage.",
          bullets: [
            "Open inclusive starts, relays, and friendly tournaments",
            "Workshops led by world champions and national coaches",
            "Equal support and commemorative awards for participants"
          ]
        },
        {
          type: "pro",
          tag: "High Performance • Official Medals",
          title: "“Professional” Category",
          text: "Designed for seasoned athletes and national delegations for whom inclusive sport is a lifelong calling and a pursuit of international records.",
          bullets: [
            "Certified international referees and official classifications",
            "30+ adaptive sports and over 70 medal events",
            "Live television & global digital media coverage"
          ]
        }
      ],
      catalogTitle: "2027 Sports Roster (Accredited via Preliminary Applications)",
      cmsBadge: "CMS-Managed • Sport Accreditation Open",
      filters: [
        { key: "all", label: "All Sports (30+)" },
        { key: "team", label: "Team Sports" },
        { key: "track", label: "Track & Water" },
        { key: "precision", label: "Precision & Combat" }
      ],
      sports: [
        { name: "Para Athletics (Track & Field)", cat: "track", tag: "Stadium" },
        { name: "Adaptive Swimming", cat: "track", tag: "Aquatics" },
        { name: "Adaptive Rowing", cat: "track", tag: "Rowing Canal" },
        { name: "Para Archery", cat: "precision", tag: "Precision" },
        { name: "Boccia (Inclusive League)", cat: "precision", tag: "Paralympic" },
        { name: "Wheelchair Basketball", cat: "team", tag: "Team" },
        { name: "Sitting Volleyball", cat: "team", tag: "Team" },
        { name: "Para Table Tennis", cat: "precision", tag: "Racket" },
        { name: "Para Powerlifting", cat: "precision", tag: "Strength" },
        { name: "Goalball & Torball", cat: "team", tag: "Vision Sport" },
        { name: "Para Taekwondo & Judo", cat: "precision", tag: "Combat" },
        { name: "+ 20 More Sports in Accreditation", cat: "all", tag: "In Progress" }
      ]
    },
    awaits: {
      eyebrow: "WHAT AWAITS YOU IN 2027?",
      title: "Five Days of Sport, Assistive Tech & Cultural Exchange",
      desc: "For five unforgettable days in June, Nizhny Novgorod transforms into the world capital of inclusion and human potential.",
      cards: [
        {
          num: "01 • COMPETITIONS",
          title: "30+ Adaptive Sports",
          text: "Thrilling competitions across four premier venues in Nizhny Novgorod spanning both Amateur and Professional divisions."
        },
        {
          num: "02 • INTERNATIONAL EXPO",
          title: "“IMPULSE” Goods & Services Expo",
          text: "June 12–14 at Sovcombank Arena: assistive technology, sports prosthetics, rehabilitation solutions, and accessible tourism."
        },
        {
          num: "03 • EXPERT SUMMIT",
          title: "International Inclusive Forum",
          text: "Keynotes and practical panels featuring Sergey Evseev, Sergey Burlakov, Rustam Nabiev, Irek Zaripov, and Yaroslav Svyatoslavsky."
        },
        {
          num: "04 • HERITAGE & TOURS",
          title: "Complimentary City Excursions",
          text: "Accessible guided tours of the historic Nizhny Novgorod Kremlin and the scenic confluence of the Volga and Oka rivers."
        },
        {
          num: "05 • GALA SHOWS",
          title: "Opening & Closing Ceremonies",
          text: "Grand opening celebration on Russia Day featuring the Parade of Nations, headline artists, and lighting of the Impulse Torch."
        },
        {
          num: "06 • OPEN CITY FESTIVAL",
          title: "Public Fan Zones & Workshops",
          text: "Interactive sports zones, equipment test-drives, inclusive masterclasses, and free admission for spectators and families."
        }
      ]
    },
    expo: {
      eyebrow: "JUNE 12–14, 2027 • SOVCOMBANK ARENA",
      title: "International Exhibition of Goods & Services “IMPULSE”",
      text: "More than exhibition booths — a practical international platform uniting manufacturers, rehab innovators, and NGOs. Test assistive breakthroughs firsthand and build cross-border partnerships.",
      cta: "Apply as an Exhibitor",
      sectors: [
        "Adaptive sports gear, wheelchairs & active prosthetics",
        "Rehabilitation medicine & mobility solutions",
        "Assistive IT, smart tech & barrier-free architecture",
        "Functional & Direct-from-Producer Nutrition",
        "Accessible tourism & health resort programs",
        "Social impact & public accessibility initiatives"
      ]
    },
    news: {
      eyebrow: "OFFICIAL PRESS ROOM",
      title: "Latest Festival News & Updates",
      desc: "Dedicated editorial articles managed separately in /ru/ and /en/ via CMS.",
      readMore: "Read Full Story",
      items: [
        {
          id: 68,
          date: "29 Oct 2026",
          img: "assets/1793279765.webp",
          title: "Greece Is With Us! International Inclusive Games 2027 Roster Expands",
          excerpt: "The birthplace of the Olympic Games has submitted its preliminary application for the 4th Impulse Festival in Nizhny Novgorod, uniting Europe and Africa.",
          full: "The Hellenic Republic (Greece) has officially submitted a preliminary application to participate in the 4th International Festival of Adaptive Sports “Impulse” — International Inclusive Games 2027. As the historic cradle of the Olympic spirit, Greece joins Uganda in expanding the global geography of the Games ahead of June 11–15, 2027 in Nizhny Novgorod."
        },
        {
          id: 67,
          date: "28 Oct 2026",
          img: "assets/1793204147.webp",
          title: "Uganda Leads the Way as First International Delegation for 2027!",
          excerpt: "Athletes from the Republic of Uganda opened the international preliminary registration list for the 4th International Inclusive Games.",
          full: "Preliminary registration for the 2027 International Inclusive Games opened with inspiring global momentum as Uganda became the first international nation to submit its application. Preliminary entries directly determine the final list of accredited adaptive sports disciplines in Nizhny Novgorod."
        },
        {
          id: 66,
          date: "27 Oct 2026",
          img: "assets/1793080273.png",
          title: "Preliminary Applications Now Open for International Inclusive Games 2027",
          excerpt: "Dedicated registration portals are now live for Russia/CIS teams and international delegations across both Amateur and Professional categories.",
          full: "The International Inclusive Committee invites national federations, adaptive sports clubs, NGOs, and individual athletes worldwide to submit preliminary applications for the 4th Impulse Games (June 11–15, 2027, Nizhny Novgorod). Over 4,000 athletes from 20+ countries are expected."
        }
      ]
    },
    history: {
      eyebrow: "FESTIVAL HERITAGE • 2024–2026",
      title: "Three Years of Unstoppable Momentum",
      desc: "Explore how Impulse grew from an inspiring debut into a global adaptive sports movement.",
      years: {
        "2026": {
          badge: "3rd Edition • March 26–29, 2026 • Sochi",
          title: "3rd International Inclusive Games 2026 in Sochi",
          text: "Hosted in sunny Sochi, the 2026 festival united over 3,000 athletes and guests on-site, including delegations from 50+ Russian regions, Belarus, Tajikistan, Uzbekistan, Armenia, and Abkhazia. A record 3,480 applications from 22 countries were received across 20 adaptive sports and 70+ disciplines!",
          img: "assets/1793025982.jpg",
          kpis: [
            { v: "3,480", l: "applications from 22 nations" },
            { v: "3,000+", l: "participants in Sochi" },
            { v: "70+", l: "medal disciplines" }
          ]
        },
        "2025": {
          badge: "2nd Edition • 2025",
          title: "Expanding Arenas, Sports & Cultural Formats",
          text: "The 2025 edition scaled up the movement with new adaptive disciplines, interactive fan zones, guest performances, and nationwide broadcast partnerships.",
          img: "assets/1793097554.png",
          kpis: [
            { v: "15+", l: "adaptive sports" },
            { v: "40+", l: "regional & guest teams" },
            { v: "2x", l: "media audience growth" }
          ]
        },
        "2024": {
          badge: "1st Edition • 2024 • Milestone Launch",
          title: "Where the Impulse Movement Began",
          text: "The inaugural 2024 festival brought together athletes, social organizations, cultural exhibitions, and educational sessions in a warm, barrier-free atmosphere.",
          img: "assets/1793025447.png",
          kpis: [
            { v: "Ist", l: "historic edition" },
            { v: "100%", l: "accessible environment" },
            { v: "Launch", l: "International Committee" }
          ]
        }
      }
    },
    partners: {
      eyebrow: "PARTNERS & INSTITUTIONAL SUPPORT",
      title: "Backed by Ministries, Foundations & National Broadcasters",
      desc: "Partner tiers and logos are easily updated by staff in both RU and EN via CMS.",
      sponsorTitle: "2027 Title & General Sponsorship",
      sponsorSub: "Sponsorship packages available • Brand integration across 4 Nizhny Novgorod arenas & international broadcasts",
      sponsorCta: "Request Sponsorship Deck",
      list: [
        { role: "General Charity Partner", name: "DobroFON", img: "assets/1764651719.png" },
        { role: "Institutional Partner", name: "MFA of Russia", img: "assets/1766326762.jpg" },
        { role: "International Partner", name: "Rossotrudnichestvo", img: "assets/1765960233.jpeg" },
        { role: "National Initiative", name: "National Projects of Russia", img: "assets/1768576726.png" },
        { role: "Media Partner", name: "Russia 1 TV", img: "assets/1745081757.jpg" },
        { role: "Sports Broadcaster", name: "Match TV", img: "assets/1740158713.jpg" },
        { role: "Media Partner", name: "Izvestia", img: "assets/1745081899.jpg" }
      ]
    },
    docs: {
      eyebrow: "DOCUMENTS & CONTACT DESK",
      title: "Official Regulations, Downloads & Direct Inquiry",
      items: [
        {
          title: "Advertising Placement Rules for 2027 Participants & Exhibitors",
          meta: "Official PDF Document • 288 KB",
          href: "assets/1793028333.pdf",
          btn: "Download PDF"
        },
        {
          title: "General Regulations — IV International Inclusive Games 2027",
          meta: "Amateur & Professional Division Rules • Managed via CMS",
          href: "#apply",
          btn: "Request Copy"
        },
        {
          title: "International Delegation & Media Accreditation Guide (EN / RU)",
          meta: "pr@inclusivecommittee.com • Visa & hospitality support",
          href: "mailto:blago@inclusivecommittee.com",
          btn: "Media Desk"
        }
      ],
      formTitle: "Contact the Organizing Committee (Spam-Protected)",
      formSub: "To register athletes, use the official Russia/CIS or International forms above, or send a direct inquiry to our team:",
      fName: "Full Name / Organization *",
      fEmail: "Reply E-mail *",
      fRole: "Inquiry Category",
      fRoles: ["Athlete / National Team", "International Delegation", "Expo Exhibitor", "Sponsor / Partner", "Press & Media"],
      fMsg: "Your Message or Question *",
      fSpam: "Anti-spam check: how many days does the festival run (June 11–15)? *",
      fSubmit: "Send Message",
      fSuccess: "Thank you! Your inquiry has been routed to blago@inclusivecommittee.com.",
      fError: "Anti-spam hint: June 11 through June 15 inclusive is 5 days — enter 5."
    },
    footer: {
      mission: "Organized by the International Inclusive Committee. Building a world where adaptive sport unites nations and human potential knows no barriers.",
      navTitle: "Navigation",
      contactTitle: "Organizing Committee",
      address: "Nizhny Novgorod, Russian Federation",
      rights: "© 2024–2027 International Inclusive Games “Impulse”. All Rights Reserved. Schema.org/SportsEvent • /ru/ & /en/."
    },
    concierge: {
      fab: "2027 Games Guide",
      title: "Interactive Delegation Desk",
      sub: "Instant answers on registration, divisions, and venues:",
      defaultAns: "Select a topic above for instant details on athlete registration, Amateur vs. Professional divisions, or Nizhny Novgorod arenas.",
      qna: [
        {
          q: "How do international teams apply?",
          a: "Click “International Application” in the Hero or Apply section to submit your preliminary roster via the official form. Preliminary applications determine accredited sports."
        },
        {
          q: "Amateur vs. Professional division?",
          a: "Amateur welcomes newcomers and open-entry participants in a supportive festival setting. Professional features certified international referees and official medal standings."
        },
        {
          q: "Where are the 2027 venues located?",
          a: "June 11–15, 2027 in Nizhny Novgorod across Sovcombank Arena (also hosting the June 12–14 Expo), Sport Port, VOLGA Arena, and the Rowing Canal."
        },
        {
          q: "How to book an Expo booth or sponsor?",
          a: "Email blago@inclusivecommittee.com or submit the contact form selecting “Expo Exhibitor” or “Sponsor / Partner”."
        }
      ]
    },
    cmsModal: {
      title: "Zero-Code Bilingual CMS Workflow (/ru/ & /en/)",
      lead: "Designed so non-technical staff can update every section in minutes without machine auto-translation:",
      points: [
        "1. True Mirror URLs (/ru/... & /en/...): independent human-translated pages, custom SEO title/description tags, OpenGraph previews, and XML sitemaps.",
        "2. 2-Minute News Publishing: upload cover photo/video, date, headline, and body text in RU & EN through a clean visual editor.",
        "3. Dynamic Sports & Sponsors: toggle sports from 'In Development' to live schedules, upload PDF regulations, and reorder partner logos visually.",
        "4. Flexible CMS Deployment: available on Tilda Publishing (visual blocks + custom domain/export) OR WordPress + Polylang Pro on your own hosting."
      ]
    }
  }
};

/**
 * Complete list of Bulgaria's 28 oblasts (provinces) and 265 municipalities (общини).
 *
 * Solar irradiance values (GHI, kWh/m2/year) are approximate annual averages
 * derived from Global Solar Atlas / Solargis data. Bulgaria ranges roughly from
 * ~1300 in the cloudy northwest to ~1550+ in the sunny southeast/south.
 *
 * Sources:
 *   - National Statistical Institute of Bulgaria (nsi.bg)
 *   - Global Solar Atlas (globalsolaratlas.info)
 *   - Solargis (solargis.com)
 */

const OBLASTS = {
  "Blagoevgrad": {
    irradiance: 1480,
    municipalities: [
      "Bansko", "Belitsa", "Blagoevgrad", "Garmen", "Gotse Delchev",
      "Hadzhidimovo", "Kresna", "Petrich", "Razlog", "Sandanski",
      "Satovcha", "Simitli", "Strumyani", "Yakoruda"
    ]
  },
  "Burgas": {
    irradiance: 1520,
    municipalities: [
      "Aytos", "Burgas", "Kameno", "Karnobat", "Malko Tarnovo",
      "Nesebar", "Pomorie", "Primorsko", "Ruen", "Sozopol",
      "Sredets", "Sungurlare", "Tsarevo"
    ]
  },
  "Dobrich": {
    irradiance: 1420,
    municipalities: [
      "Balchik", "Dobrich", "Dobrichka", "General Toshevo",
      "Kavarna", "Krushari", "Shabla", "Tervel"
    ]
  },
  "Gabrovo": {
    irradiance: 1350,
    municipalities: [
      "Dryanovo", "Gabrovo", "Sevlievo", "Tryavna"
    ]
  },
  "Haskovo": {
    irradiance: 1520,
    municipalities: [
      "Dimitrovgrad", "Harmanli", "Haskovo", "Ivaylovgrad",
      "Lyubimets", "Madzharovo", "Mineralni Bani", "Simeonovgrad",
      "Stambolovo", "Svilengrad", "Topolovgrad"
    ]
  },
  "Kardzhali": {
    irradiance: 1480,
    municipalities: [
      "Ardino", "Chernoochene", "Dzhebel", "Kardzhali",
      "Kirkovo", "Krumovgrad", "Momchilgrad"
    ]
  },
  "Kyustendil": {
    irradiance: 1400,
    municipalities: [
      "Boboshevo", "Bobov Dol", "Dupnitsa", "Kocherinovo",
      "Kyustendil", "Nevestino", "Rila", "Sapareva Banya", "Treklyano"
    ]
  },
  "Lovech": {
    irradiance: 1350,
    municipalities: [
      "Apriltsi", "Letnitsa", "Lovech", "Lukovit",
      "Teteven", "Troyan", "Ugarchin", "Yablanitsa"
    ]
  },
  "Montana": {
    irradiance: 1320,
    municipalities: [
      "Berkovitsa", "Boychinovtsi", "Brusartsi", "Chiprovtsi",
      "Georgi Damyanovo", "Lom", "Medkovets", "Montana",
      "Valchedram", "Varshets", "Yakimovo"
    ]
  },
  "Pazardzhik": {
    irradiance: 1460,
    municipalities: [
      "Batak", "Belovo", "Bratsigovo", "Lesichovo",
      "Panagyurishte", "Pazardzhik", "Peshtera", "Rakitovo",
      "Sarnitsa", "Septemvri", "Strelcha", "Velingrad"
    ]
  },
  "Pernik": {
    irradiance: 1380,
    municipalities: [
      "Breznik", "Kovachevtsi", "Pernik", "Radomir", "Tran", "Zemen"
    ]
  },
  "Pleven": {
    irradiance: 1380,
    municipalities: [
      "Belene", "Cherven Bryag", "Dolna Mitropoliya", "Dolni Dabnik",
      "Gulyantsi", "Iskar", "Knezha", "Levski", "Nikopol",
      "Pleven", "Pordim"
    ]
  },
  "Plovdiv": {
    irradiance: 1490,
    municipalities: [
      "Asenovgrad", "Brezovo", "Hisarya", "Kaloyanovo", "Karlovo",
      "Krichim", "Kuklen", "Laki", "Maritsa", "Parvomay",
      "Perushtitsa", "Plovdiv", "Rakovski", "Rodopi", "Sadovo",
      "Saedinenie", "Sopot", "Stamboliyski"
    ]
  },
  "Razgrad": {
    irradiance: 1380,
    municipalities: [
      "Isperih", "Kubrat", "Loznitsa", "Razgrad",
      "Samuil", "Tsar Kaloyan", "Zavet"
    ]
  },
  "Ruse": {
    irradiance: 1390,
    municipalities: [
      "Borovo", "Byala", "Dve Mogili", "Ivanovo",
      "Ruse", "Slivo Pole", "Tsenovo", "Vetovo"
    ]
  },
  "Shumen": {
    irradiance: 1390,
    municipalities: [
      "Hitrino", "Kaolinovo", "Kaspichan", "Nikola Kozlevo",
      "Novi Pazar", "Shumen", "Smyadovo", "Varbitsa",
      "Veliki Preslav", "Venets"
    ]
  },
  "Silistra": {
    irradiance: 1380,
    municipalities: [
      "Alfatar", "Dulovo", "Glavinitsa", "Kaynardzha",
      "Silistra", "Sitovo", "Tutrakan"
    ]
  },
  "Sliven": {
    irradiance: 1460,
    municipalities: [
      "Kotel", "Nova Zagora", "Sliven", "Tvarditsa"
    ]
  },
  "Smolyan": {
    irradiance: 1420,
    municipalities: [
      "Banite", "Borino", "Chepelare", "Devin", "Dospat",
      "Madan", "Nedelino", "Rudozem", "Smolyan", "Zlatograd"
    ]
  },
  "Sofia City": {
    irradiance: 1400,
    municipalities: [
      "Stolichna"
    ]
  },
  "Sofia Province": {
    irradiance: 1380,
    municipalities: [
      "Anton", "Bozhurishte", "Botevgrad", "Chavdar", "Chelopech",
      "Dolna Banya", "Dragoman", "Elin Pelin", "Etropole",
      "Godech", "Gorna Malina", "Ihtiman", "Koprivshtitsa",
      "Kostenets", "Kostinbrod", "Mirkovo", "Pirdop", "Pravets",
      "Samokov", "Slivnitsa", "Svoge", "Zlatitsa"
    ]
  },
  "Stara Zagora": {
    irradiance: 1480,
    municipalities: [
      "Bratya Daskalovi", "Chirpan", "Galabovo", "Gurkovo",
      "Kazanlak", "Maglizh", "Nikolaevo", "Opan",
      "Pavel Banya", "Radnevo", "Stara Zagora"
    ]
  },
  "Targovishte": {
    irradiance: 1380,
    municipalities: [
      "Antonovo", "Omurtag", "Opaka", "Popovo", "Targovishte"
    ]
  },
  "Varna": {
    irradiance: 1450,
    municipalities: [
      "Aksakovo", "Avren", "Beloslav", "Byala", "Dalgopol",
      "Devnya", "Dolni Chiflik", "Provadiya", "Suvorovo",
      "Valchi Dol", "Varna", "Vetrino"
    ]
  },
  "Veliko Tarnovo": {
    irradiance: 1370,
    municipalities: [
      "Elena", "Gorna Oryahovitsa", "Lyaskovets", "Pavlikeni",
      "Polski Trambesh", "Strazhitsa", "Suhindol", "Svishtov",
      "Veliko Tarnovo", "Zlataritsa"
    ]
  },
  "Vidin": {
    irradiance: 1300,
    municipalities: [
      "Belogradchik", "Boynitsa", "Bregovo", "Chuprene",
      "Dimovo", "Gramada", "Kula", "Makresh",
      "Novo Selo", "Ruzhintsi", "Vidin"
    ]
  },
  "Vratsa": {
    irradiance: 1330,
    municipalities: [
      "Borovan", "Byala Slatina", "Hayredin", "Kozloduy",
      "Krivodol", "Mezdra", "Mizia", "Oryahovo", "Roman", "Vratsa"
    ]
  },
  "Yambol": {
    irradiance: 1500,
    municipalities: [
      "Bolyarovo", "Elhovo", "Straldzha", "Tundzha", "Yambol"
    ]
  }
};

/**
 * Bulgarian Cyrillic names — parallel structure.
 */
const OBLASTS_BG = {
  "Благоевград": {
    municipalities: [
      "Банско", "Белица", "Благоевград", "Гърмен", "Гоце Делчев",
      "Хаджидимово", "Кресна", "Петрич", "Разлог", "Сандански",
      "Сатовча", "Симитли", "Струмяни", "Якоруда"
    ]
  },
  "Бургас": {
    municipalities: [
      "Айтос", "Бургас", "Камено", "Карнобат", "Малко Търново",
      "Несебър", "Поморие", "Приморско", "Руен", "Созопол",
      "Средец", "Сунгурларе", "Царево"
    ]
  },
  "Добрич": {
    municipalities: [
      "Балчик", "Добрич", "Добричка", "Генерал Тошево",
      "Каварна", "Крушари", "Шабла", "Тервел"
    ]
  },
  "Габрово": {
    municipalities: [
      "Дряново", "Габрово", "Севлиево", "Трявна"
    ]
  },
  "Хасково": {
    municipalities: [
      "Димитровград", "Харманли", "Хасково", "Ивайловград",
      "Любимец", "Маджарово", "Минерални бани", "Симеоновград",
      "Стамболово", "Свиленград", "Тополовград"
    ]
  },
  "Кърджали": {
    municipalities: [
      "Ардино", "Черноочене", "Джебел", "Кърджали",
      "Кирково", "Крумовград", "Момчилград"
    ]
  },
  "Кюстендил": {
    municipalities: [
      "Бобошево", "Бобов дол", "Дупница", "Кочериново",
      "Кюстендил", "Невестино", "Рила", "Сапарева баня", "Трекляно"
    ]
  },
  "Ловеч": {
    municipalities: [
      "Априлци", "Летница", "Ловеч", "Луковит",
      "Тетевен", "Троян", "Угърчин", "Ябланица"
    ]
  },
  "Монтана": {
    municipalities: [
      "Берковица", "Бойчиновци", "Брусарци", "Чипровци",
      "Георги Дамяново", "Лом", "Медковец", "Монтана",
      "Вълчедръм", "Вършец", "Якимово"
    ]
  },
  "Пазарджик": {
    municipalities: [
      "Батак", "Белово", "Брацигово", "Лесичово",
      "Панагюрище", "Пазарджик", "Пещера", "Ракитово",
      "Сърница", "Септември", "Стрелча", "Велинград"
    ]
  },
  "Перник": {
    municipalities: [
      "Брезник", "Ковачевци", "Перник", "Радомир", "Трън", "Земен"
    ]
  },
  "Плевен": {
    municipalities: [
      "Белене", "Червен бряг", "Долна Митрополия", "Долни Дъбник",
      "Гулянци", "Искър", "Кнежа", "Левски", "Никопол",
      "Плевен", "Пордим"
    ]
  },
  "Пловдив": {
    municipalities: [
      "Асеновград", "Брезово", "Хисаря", "Калояново", "Карлово",
      "Кричим", "Куклен", "Лъки", "Марица", "Първомай",
      "Перущица", "Пловдив", "Раковски", "Родопи", "Садово",
      "Съединение", "Сопот", "Стамболийски"
    ]
  },
  "Разград": {
    municipalities: [
      "Исперих", "Кубрат", "Лозница", "Разград",
      "Самуил", "Цар Калоян", "Завет"
    ]
  },
  "Русе": {
    municipalities: [
      "Борово", "Бяла", "Две могили", "Иваново",
      "Русе", "Сливо поле", "Ценово", "Ветово"
    ]
  },
  "Шумен": {
    municipalities: [
      "Хитрино", "Каолиново", "Каспичан", "Никола Козлево",
      "Нови пазар", "Шумен", "Смядово", "Върбица",
      "Велики Преслав", "Венец"
    ]
  },
  "Силистра": {
    municipalities: [
      "Алфатар", "Дулово", "Главиница", "Кайнарджа",
      "Силистра", "Ситово", "Тутракан"
    ]
  },
  "Сливен": {
    municipalities: [
      "Котел", "Нова Загора", "Сливен", "Твърдица"
    ]
  },
  "Смолян": {
    municipalities: [
      "Баните", "Борино", "Чепеларе", "Девин", "Доспат",
      "Мадан", "Неделино", "Рудозем", "Смолян", "Златоград"
    ]
  },
  "София (столица)": {
    municipalities: [
      "Столична"
    ]
  },
  "Софийска област": {
    municipalities: [
      "Антон", "Божурище", "Ботевград", "Чавдар", "Челопеч",
      "Долна баня", "Драгоман", "Елин Пелин", "Етрополе",
      "Годеч", "Горна Малина", "Ихтиман", "Копривщица",
      "Костенец", "Костинброд", "Мирково", "Пирдоп", "Правец",
      "Самоков", "Сливница", "Своге", "Златица"
    ]
  },
  "Стара Загора": {
    municipalities: [
      "Братя Даскалови", "Чирпан", "Гълъбово", "Гурково",
      "Казанлък", "Мъглиж", "Николаево", "Опан",
      "Павел баня", "Раднево", "Стара Загора"
    ]
  },
  "Търговище": {
    municipalities: [
      "Антоново", "Омуртаг", "Опака", "Попово", "Търговище"
    ]
  },
  "Варна": {
    municipalities: [
      "Аксаково", "Аврен", "Белослав", "Бяла", "Дългопол",
      "Девня", "Долни чифлик", "Провадия", "Суворово",
      "Вълчи дол", "Варна", "Ветрино"
    ]
  },
  "Велико Търново": {
    municipalities: [
      "Елена", "Горна Оряховица", "Лясковец", "Павликени",
      "Полски Тръмбеш", "Стражица", "Сухиндол", "Свищов",
      "Велико Търново", "Златарица"
    ]
  },
  "Видин": {
    municipalities: [
      "Белоградчик", "Бойница", "Брегово", "Чупрене",
      "Димово", "Грамада", "Кула", "Макреш",
      "Ново село", "Ружинци", "Видин"
    ]
  },
  "Враца": {
    municipalities: [
      "Борован", "Бяла Слатина", "Хайредин", "Козлодуй",
      "Криводол", "Мездра", "Мизия", "Оряхово", "Роман", "Враца"
    ]
  },
  "Ямбол": {
    municipalities: [
      "Болярово", "Елхово", "Стралджа", "Тунджа", "Ямбол"
    ]
  }
};

/**
 * Mapping from English oblast name to Bulgarian Cyrillic oblast name.
 */
const OBLAST_NAME_MAP = {
  "Blagoevgrad":     "Благоевград",
  "Burgas":          "Бургас",
  "Dobrich":         "Добрич",
  "Gabrovo":         "Габрово",
  "Haskovo":         "Хасково",
  "Kardzhali":       "Кърджали",
  "Kyustendil":      "Кюстендил",
  "Lovech":          "Ловеч",
  "Montana":         "Монтана",
  "Pazardzhik":      "Пазарджик",
  "Pernik":          "Перник",
  "Pleven":          "Плевен",
  "Plovdiv":         "Пловдив",
  "Razgrad":         "Разград",
  "Ruse":            "Русе",
  "Shumen":          "Шумен",
  "Silistra":        "Силистра",
  "Sliven":          "Сливен",
  "Smolyan":         "Смолян",
  "Sofia City":      "София (столица)",
  "Sofia Province":  "Софийска област",
  "Stara Zagora":    "Стара Загора",
  "Targovishte":     "Търговище",
  "Varna":           "Варна",
  "Veliko Tarnovo":  "Велико Търново",
  "Vidin":           "Видин",
  "Vratsa":          "Враца",
  "Yambol":          "Ямбол"
};

// Quick validation
const totalMunicipalities = Object.values(OBLASTS).reduce(
  (sum, oblast) => sum + oblast.municipalities.length, 0
);
console.log(`Total oblasts: ${Object.keys(OBLASTS).length}`);
console.log(`Total municipalities: ${totalMunicipalities}`);

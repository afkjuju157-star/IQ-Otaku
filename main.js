"use strict";

const $ = (id) => document.getElementById(id);

const animeSeed = [
  ["Noragami", "⛩️", "Sobrenatural"],
  ["Nanatsu no Taizai", "⚔️", "Fantasía"],
  ["Attack on Titan", "🧱", "Acción"],
  ["Shangri-La Frontier", "🎮", "Aventura"],
  ["Edens Zero", "🚀", "Ciencia ficción"],
  ["Jujutsu Kaisen", "👊", "Acción"],
  ["Pokémon", "⚡", "Aventura"],
  ["Dragon Ball Z", "🐉", "Acción"],
  ["Food Wars! (Shokugeki no Soma)", "🍳", "Comedia"],
  ["KonoSuba", "💥", "Comedia"],
  ["Naruto", "🍥", "Ninja"],
  ["Black Clover", "🍀", "Fantasía"],
  ["Plunderer", "🔢", "Fantasía"],
  ["Tokyo Revengers", "🕰️", "Drama"],
  ["Fullmetal Alchemist: Brotherhood", "⚗️", "Fantasía"],
  ["One Piece", "🏴‍☠️", "Aventura"],
  ["Demon Slayer: Kimetsu no Yaiba", "🌊", "Acción"],
  ["Death Note", "📓", "Suspenso"],
  ["My Hero Academia", "🦸", "Superhéroes"],
  ["Hunter x Hunter", "🎯", "Aventura"],
  ["Bleach", "🗡️", "Acción"],
  ["Spy x Family", "🕵️", "Comedia"],
  ["Haikyuu!!", "🏐", "Deportes"],
  ["Sword Art Online", "🗡️", "Aventura"],
  ["Frieren", "🪄", "Fantasía"],
  ["Sailor Moon", "🌙", "Magia"],
  ["Cardcaptor Sakura", "🌸", "Magia"],
  ["Chainsaw Man", "🪚", "Acción"],
  ["Tokyo Ghoul", "👁️", "Terror"],
  ["Steins;Gate", "⏳", "Ciencia ficción"],
  ["Your Name", "🌠", "Romance"],
  ["Dr. Stone", "🧪", "Ciencia"],
  ["JoJo's Bizarre Adventure", "💪", "Acción"],
  ["Mob Psycho 100", "👻", "Sobrenatural"],
  ["Re:Zero", "🔁", "Fantasía"],
  ["Violet Evergarden", "✉️", "Drama"],
  ["Bocchi the Rock!", "🎸", "Música"],
  ["Kuroko's Basketball", "🏀", "Deportes"],
  ["The Apothecary Diaries", "🌿", "Misterio"],
  ["Oshi no Ko", "⭐", "Drama"],
  ["Solo Leveling", "🗡️", "Fantasía"],
  ["Neon Genesis Evangelion", "🤖", "Mecha"],
  ["Assassination Classroom", "🐙", "Comedia"],
  ["The Promised Neverland", "🏡", "Suspenso"],
  ["Code Geass", "♟️", "Mecha"],
  ["Fruits Basket", "🍙", "Romance"],
  ["Toradora!", "🐯", "Romance"],
  ["Vinland Saga", "🛡️", "Histórico"],
  ["Mushoku Tensei", "✨", "Fantasía"],
  ["Hellsing Ultimate", "🦇", "Terror"],
  ["Inuyasha", "🐕", "Fantasía"],
  ["Detective Conan", "🔎", "Misterio"],
  ["Blue Lock", "⚽", "Deportes"],
  ["Dandadan", "👽", "Sobrenatural"]
];

// Cada pregunta está asociada al anime correspondiente. El juego solo usa preguntas de los animes seleccionados.
const questionBank = {

  "Noragami": [
    q("¿Cómo se llama el dios protagonista de Noragami?", ["Yato", "Yukine", "Kazuma", "Bishamon"], 0),
    q("¿Cómo se llama la chica que puede separarse de su cuerpo?", ["Hiyori Iki", "Kofuku", "Nora", "Kiun"], 0),
    q("¿Qué nombre recibe el espíritu que se convierte en arma de Yato?", ["Yukine", "Daikoku", "Ebisu", "Takemikazuchi"], 0),
    q("¿Cómo se llama la forma de arma de Yukine?", ["Sekki", "Regalia", "Shinki", "Ayakashi"], 0),
    q("¿Qué tipo de deus es Yato?", ["Dios menor que busca ser famoso", "Dios del mar", "Dios de la guerra olímpico", "Dios de la agricultura"], 0),
    q("¿Cuánto cobra Yato normalmente por sus pequeños trabajos?", ["Cinco yenes", "Cien yenes", "Mil yenes", "No acepta monedas"], 0),
    q("¿Qué seres sobrenaturales amenazan a los humanos en Noragami?", ["Ayakashi", "Titãs", "Homúnculos", "Pokémon"], 0),
    q("¿Cómo se llama la diosa ligada a la fortuna que aparece como amiga de Yato?", ["Kofuku", "Hiyori", "Nora", "Mayu"], 0),
    q("¿Qué dios es conocido como Bishamon?", ["Uma poderosa deusa da guerra", "Deus da cozinha", "Deus dos sonhos", "Deus das colheitas"], 0),
    q("¿Qué vínculo desarrolla Hiyori con el mundo espiritual?", ["Su alma puede salir de su cuerpo", "Puede controlar titanes", "Es una shinki desde niña", "Puede escribir nombres en un cuaderno mortal"], 0),
    q("¿Qué desea conseguir Yato al inicio de la historia?", ["Ser reconocido y tener un santuario", "Convertirse en Hokage", "Encontrar el One Piece", "Ser el mejor chef"], 0),
    q("¿Qué es un shinki en Noragami?", ["Un espíritu que sirve a un dios", "Un monstruo marino", "Un tipo de santuario escolar", "Un arma alquímica"], 0),
    q("¿Cuál de estos personajes es compañero espiritual de Yato?", ["Yukine", "Armin", "Zenitsu", "Killua"], 0),
    q("¿Qué puede ocurrir cuando un shinki comete faltas o tiene pensamientos dañinos?", ["Su dios puede sufrir dolor o contaminación", "Se convierte automáticamente en rey", "Pierde todos sus recuerdos humanos al instante", "Destruye todos los santuarios"], 0),
    q("¿A qué género pertenece principalmente Noragami?", ["Acción y sobrenatural", "Deportes realistas", "Cocina competitiva", "Carreras espaciales"], 0)
  ],
  "Nanatsu no Taizai": [
    q("¿Cómo se llama el capitán de los Siete Pecados Capitales?", ["Meliodas", "Ban", "King", "Gowther"], 0),
    q("¿Qué pecado representa Meliodas?", ["Ira", "Envidia", "Pereza", "Orgullo"], 0),
    q("¿Cómo se llama la taberna de Meliodas?", ["Boar Hat", "Black Bull", "Fairy Tail", "Cat's Eye"], 0)
  ],
  "Attack on Titan": [
    q("¿Quién es el protagonista que busca eliminar a los titanes?", ["Eren Yeager", "Armin Arlert", "Jean Kirstein", "Reiner Braun"], 0),
    q("¿Cómo se llama la hermana adoptiva de Eren?", ["Mikasa Ackerman", "Historia Reiss", "Sasha Blouse", "Annie Leonhart"], 0),
    q("¿Qué cuerpo militar explora el territorio fuera de las murallas?", ["Cuerpo de Exploración", "Policía Militar", "Guarnición", "Brigada Médica"], 0)
  ],
  "Shangri-La Frontier": [
    q("¿Qué tipo de juegos suele preferir Rakuro Hizutome?", ["Juegos malos y defectuosos", "Juegos de cocina", "Solo juegos de cartas", "Juegos de ritmo"], 0),
    q("¿Cuál es el nombre de jugador de Rakuro?", ["Sunraku", "Pencilgon", "Oikatzo", "Emul"], 0)
  ],
  "Edens Zero": [
    q("¿Cómo se llama el protagonista de Edens Zero?", ["Shiki Granbell", "Natsu Dragneel", "Haruto", "Soma Yukihira"], 0),
    q("¿Qué poder utiliza Shiki?", ["Gravedad", "Hielo", "Arena", "Sonido"], 0)
  ],
  "Jujutsu Kaisen": [
    q("¿Cómo se llama el protagonista de Jujutsu Kaisen?", ["Yuji Itadori", "Megumi Fushiguro", "Satoru Gojo", "Yuta Okkotsu"], 0),
    q("¿Qué espíritu maldito vive dentro de Yuji?", ["Ryomen Sukuna", "Mahito", "Jogo", "Hanami"], 0),
    q("¿Qué técnica destaca en Satoru Gojo?", ["Ilimitado", "Respiración del Agua", "Alquimia", "Rasengan"], 0)
  ],
  "Pokémon": [
    q("¿Cuál es el Pokémon compañero más conocido de Ash?", ["Pikachu", "Charmander", "Eevee", "Psyduck"], 0),
    q("¿De qué tipo es Pikachu?", ["Eléctrico", "Agua", "Planta", "Roca"], 0),
    q("¿Qué objeto se usa habitualmente para capturar Pokémon?", ["Poké Ball", "Digivice", "Cápsula Hoi-Poi", "Esfera del Dragón"], 0)
  ],
  "Dragon Ball Z": [
    q("¿Cómo se llama el protagonista saiyajin de Dragon Ball Z?", ["Son Goku", "Vegeta", "Piccolo", "Gohan"], 0),
    q("¿Qué transformación legendaria logra Goku por primera vez contra Freezer?", ["Super Saiyajin", "Kaioken azul", "Ultra Instinto", "Ozaru dorado"], 0),
    q("¿Cuántas Esferas del Dragón terrestres se reúnen normalmente?", ["7", "5", "9", "12"], 0)
  ],
  "Food Wars! (Shokugeki no Soma)": [
    q("¿Cuál es el nombre del protagonista de Food Wars!?", ["Soma Yukihira", "Shiki Granbell", "Asta", "Tanjiro Kamado"], 0),
    q("¿Qué habilidad define principalmente a Soma?", ["Cocinar y competir en duelos culinarios", "Cazar titanes", "Dominar el chakra", "Capturar Pokémon"], 0)
  ],
  "KonoSuba": [
    q("¿Cómo se llama el protagonista de KonoSuba?", ["Kazuma Satou", "Subaru Natsuki", "Kirito", "Bell Cranel"], 0),
    q("¿Qué diosa acompaña a Kazuma al inicio de la historia?", ["Aqua", "Megumin", "Darkness", "Eris"], 0),
    q("¿Qué hechizo explosivo es famoso por Megumin?", ["Explosion", "Fireball infinito", "Meteor Rain", "Thunder Break"], 0)
  ],
  "Naruto": [
    q("¿Cuál es el sueño de Naruto Uzumaki?", ["Convertirse en Hokage", "Ser el Kazekage", "Encontrar el One Piece", "Ser capitán shinigami"], 0),
    q("¿Qué bestia está sellada dentro de Naruto al comienzo?", ["Kurama", "Shukaku", "Gyuki", "Matatabi"], 0),
    q("¿Cómo se llama la técnica de esfera giratoria creada por Minato y enseñada a Naruto?", ["Rasengan", "Chidori", "Amaterasu", "Susanoo"], 0)
  ],
  "Black Clover": [
    q("¿Qué característica tiene Asta al comienzo de Black Clover?", ["No tiene magia", "Es el mago más poderoso", "No puede usar espadas", "Es un elfo"], 0),
    q("¿Cuál es el objetivo de Asta?", ["Convertirse en Rey Mago", "Ser Hokage", "Encontrar las Esferas del Dragón", "Ser el mejor chef"], 0)
  ],
  "Plunderer": [
    q("¿Qué número determina la vida de una persona en Plunderer?", ["Su conteo", "Su rango ninja", "Su nivel de magia", "Su recompensa pirata"], 0),
    q("¿Cómo se llama la protagonista que busca a un legendario as?", ["Hina", "Aqua", "Sakura", "Mikasa"], 0)
  ],
  "Tokyo Revengers": [
    q("¿Quién es el protagonista de Tokyo Revengers?", ["Takemichi Hanagaki", "Manjiro Sano", "Ken Ryuguji", "Keisuke Baji"], 0),
    q("¿Qué capacidad cambia el curso de la historia de Takemichi?", ["Viajar al pasado", "Controlar el fuego", "Leer pensamientos", "Detener el tiempo a voluntad"], 0)
  ],
  "Fullmetal Alchemist: Brotherhood": [
    q("¿Cómo se llaman los hermanos protagonistas?", ["Edward y Alphonse Elric", "Roy y Riza Mustang", "Ling y Lan Fan", "Scar y Marcoh"], 0),
    q("¿Qué ley fundamental rige la alquimia en la serie?", ["Intercambio equivalente", "Energía infinita", "Destino inmutable", "Poder de la amistad"], 0),
    q("¿Qué busca Edward para recuperar sus cuerpos?", ["La Piedra Filosofal", "Las Esferas del Dragón", "El Santo Grial", "La espada Excalibur"], 0)
  ],
  "One Piece": [
    q("¿Cuál es el sueño de Monkey D. Luffy?", ["Convertirse en Rey de los Piratas", "Ser Hokage", "Ser almirante de la Marina", "Encontrar la Piedra Filosofal"], 0),
    q("¿Cómo se llama el espadachín de los Sombrero de Paja?", ["Roronoa Zoro", "Sanji", "Usopp", "Franky"], 0),
    q("¿Qué fruta comió Luffy al inicio de la historia?", ["Fruta Gum-Gum", "Fruta Mera-Mera", "Fruta Hielo-Hielo", "Fruta Oscuridad"], 0)
  ],
  "Demon Slayer: Kimetsu no Yaiba": [
    q("¿Cómo se llama el protagonista de Demon Slayer?", ["Tanjiro Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira", "Giyu Tomioka"], 0),
    q("¿En qué se convierte Nezuko al inicio de la historia?", ["Demonio", "Cazadora de demonios", "Hashira", "Cuervo mensajero"], 0),
    q("¿Qué estilo de respiración aprende Tanjiro al principio?", ["Respiración del Agua", "Respiración de la Serpiente", "Respiración de la Bestia", "Respiración de la Niebla"], 0)
  ],
  "Death Note": [
    q("¿Quién encuentra el cuaderno Death Note al comienzo?", ["Light Yagami", "L Lawliet", "Near", "Mello"], 0),
    q("¿Cómo se llama el shinigami asociado a Light?", ["Ryuk", "Rem", "Sidoh", "Gelus"], 0)
  ],
  "My Hero Academia": [
    q("¿Cómo se llama el héroe que hereda One For All de All Might?", ["Izuku Midoriya", "Katsuki Bakugo", "Shoto Todoroki", "Tenya Iida"], 0),
    q("¿Cuál es el nombre de héroe de All Might?", ["All Might", "Endeavor", "Eraser Head", "Hawks"], 0)
  ],
  "Hunter x Hunter": [
    q("¿Qué busca Gon Freecss durante su aventura?", ["Encontrar a su padre, Ging", "Ser Hokage", "Derrotar a todos los titanes", "Encontrar el Death Note"], 0),
    q("¿Cómo se llama el amigo de Gon de cabello blanco?", ["Killua Zoldyck", "Kurapika", "Leorio", "Hisoka"], 0)
  ],
  "Bleach": [
    q("¿Cómo se llama el protagonista de Bleach?", ["Ichigo Kurosaki", "Uryu Ishida", "Renji Abarai", "Byakuya Kuchiki"], 0),
    q("¿Qué tipo de ser es Rukia Kuchiki?", ["Shinigami", "Titán", "Saiyajin", "Alquimista estatal"], 0)
  ],
  "Spy x Family": [
    q("¿Cuál es el nombre en clave del espía protagonista?", ["Twilight", "Nightfall", "Thorn Princess", "Agent Zero"], 0),
    q("¿Qué habilidad secreta tiene Anya?", ["Leer pensamientos", "Ver el futuro", "Volverse invisible", "Controlar el fuego"], 0)
  ],
  "Haikyuu!!": [
    q("¿Qué deporte practican los protagonistas de Haikyuu!!?", ["Voleibol", "Baloncesto", "Fútbol", "Béisbol"], 0),
    q("¿Cómo se llama el pequeño protagonista de cabello naranja?", ["Shoyo Hinata", "Tobio Kageyama", "Kei Tsukishima", "Yu Nishinoya"], 0)
  ],
  "Sword Art Online": [
    q("¿Cuál es el nombre real de Kirito?", ["Kazuto Kirigaya", "Kirito Nakamura", "Akihiko Kayaba", "Klein Kirigaya"], 0),
    q("¿En qué tipo de mundo quedan atrapados al inicio?", ["Un MMORPG de realidad virtual", "Una isla desierta", "Una escuela de magia", "Una ciudad de titanes"], 0)
  ],
  "Frieren": [
    q("¿Qué tipo de ser es Frieren?", ["Elfa maga", "Humana guerrera", "Demonio rey", "Dragón"], 0),
    q("¿Qué tema central explora la historia de Frieren?", ["El paso del tiempo y los recuerdos", "Carreras de autos", "Un torneo de cocina", "Viajes espaciales"], 0)
  ],
  "Sailor Moon": [
    q("¿Cuál es la identidad civil de Sailor Moon?", ["Usagi Tsukino", "Rei Hino", "Ami Mizuno", "Makoto Kino"], 0),
    q("¿Qué tipo de heroína es Sailor Moon?", ["Guerrera mágica", "Pirata", "Ninja", "Alquimista"], 0)
  ],
  "Cardcaptor Sakura": [
    q("¿Cómo se llama la protagonista de Cardcaptor Sakura?", ["Sakura Kinomoto", "Sakura Haruno", "Madoka Kaname", "Usagi Tsukino"], 0),
    q("¿Qué cartas intenta reunir Sakura?", ["Cartas Clow", "Cartas Pokémon", "Cartas de tarot del Death Note", "Cartas de duelo culinario"], 0)
  ],
  "Chainsaw Man": [
    q("¿Cómo se llama el protagonista de Chainsaw Man?", ["Denji", "Aki Hayakawa", "Kishibe", "Beam"], 0),
    q("¿Qué demonio se fusiona con Denji?", ["Pochita", "Power", "Makima", "Angel"], 0)
  ],
  "Tokyo Ghoul": [
    q("¿Cómo se llama el protagonista de Tokyo Ghoul?", ["Ken Kaneki", "Hideyoshi Nagachika", "Koutarou Amon", "Nishiki Nishio"], 0),
    q("¿Qué criatura se convierte Kaneki tras el trasplante?", ["Ghoul", "Titán", "Shinigami", "Homúnculo"], 0)
  ],
  "Steins;Gate": [
    q("¿Cuál es el apodo del científico Rintaro Okabe?", ["Okarin", "Kyon", "Lelouch", "Spike"], 0),
    q("¿Qué fenómeno es clave en Steins;Gate?", ["Viajes y mensajes en el tiempo", "Cacería de demonios", "Deportes escolares", "Alquimia de combate"], 0)
  ],
  "Your Name": [
    q("¿Cómo se llaman los dos protagonistas de Your Name?", ["Taki y Mitsuha", "Shoya y Shoko", "Taiga y Ryuuji", "Soma y Erina"], 0),
    q("¿Qué fenómeno conecta a Taki y Mitsuha?", ["Intercambio de cuerpos", "Una competición de cocina", "Una batalla de mechas", "Una maldición de cuaderno"], 0)
  ],
  "Dr. Stone": [
    q("¿Quién intenta reconstruir la civilización usando la ciencia?", ["Senku Ishigami", "Taiju Oki", "Tsukasa Shishio", "Gen Asagiri"], 0),
    q("¿Qué le ocurre a la humanidad al inicio?", ["Queda petrificada", "Desaparece la gravedad", "Se convierte en titanes", "Pierde la memoria cada día"], 0)
  ],
  "JoJo's Bizarre Adventure": [
    q("¿Cómo se llama la habilidad espiritual característica de muchas partes de JoJo?", ["Stand", "Quirk", "Nen", "Chakra"], 0),
    q("¿Qué familia da nombre a la serie?", ["Joestar", "Elric", "Ackerman", "Zoldyck"], 0)
  ],
  "Mob Psycho 100": [
    q("¿Cuál es el nombre real de Mob?", ["Shigeo Kageyama", "Reigen Arataka", "Ritsu Kageyama", "Teruki Hanazawa"], 0),
    q("¿Qué habilidad tiene Mob?", ["Poderes psíquicos", "Alquimia", "Respiración del agua", "Control de titanes"], 0)
  ],
  "Re:Zero": [
    q("¿Cómo se llama el protagonista de Re:Zero?", ["Subaru Natsuki", "Kazuma Satou", "Kirito", "Shiki Granbell"], 0),
    q("¿Qué capacidad traumática tiene Subaru?", ["Regresar tras morir", "Leer todos los pensamientos", "Detener el tiempo sin límite", "Convertirse en dragón"], 0)
  ],
  "Violet Evergarden": [
    q("¿En qué trabaja Violet después de la guerra?", ["Escritora de cartas", "Detective", "Pirata", "Cocinera"], 0),
    q("¿Qué intenta comprender Violet?", ["El significado de las palabras 'te amo'", "Cómo ser Hokage", "El origen de los titanes", "Las reglas del Nen"], 0)
  ],
  "Bocchi the Rock!": [
    q("¿Qué instrumento toca Hitori 'Bocchi' Gotoh?", ["Guitarra", "Batería", "Bajo", "Violín"], 0),
    q("¿En qué actividad se centra la historia?", ["Una banda de música", "Un club de fútbol", "Una escuela de alquimia", "Una tripulación pirata"], 0)
  ],
  "Kuroko's Basketball": [
    q("¿Qué deporte aparece en Kuroko's Basketball?", ["Baloncesto", "Voleibol", "Tenis", "Rugby"], 0),
    q("¿Qué rasgo destaca en el estilo de Kuroko?", ["Su capacidad para pasar desapercibido y asistir", "Su fuerza sobrenatural", "Su lanzamiento de fuego", "Su velocidad para correr maratones"], 0)
  ],
  "The Apothecary Diaries": [
    q("¿Cómo se llama la protagonista de The Apothecary Diaries?", ["Maomao", "Frieren", "Anya", "Violet"], 0),
    q("¿Qué sabe hacer especialmente bien Maomao?", ["Identificar medicinas y venenos", "Usar alquimia de combate", "Cazar titanes", "Jugar voleibol"], 0)
  ],
  "Oshi no Ko": [
    q("¿Cuál es el mundo del espectáculo central en Oshi no Ko?", ["La industria del entretenimiento y los idols", "Los piratas", "La alquimia estatal", "Los cazadores de titanes"], 0),
    q("¿Cómo se llama la idol madre de Aqua y Ruby?", ["Ai Hoshino", "Kana Arima", "Akane Kurokawa", "Miyako Saito"], 0)
  ],
  "Solo Leveling": [
    q("¿Cómo se llama el protagonista de Solo Leveling?", ["Sung Jinwoo", "Cha Hae-In", "Yoo Jinho", "Go Gunhee"], 0),
    q("¿Qué sistema recibe Jinwoo?", ["Un sistema que le permite subir de nivel", "Una libreta de la muerte", "Un poder de alquimia", "Un mapa del One Piece"], 0)
  ],
  "Neon Genesis Evangelion": [
    q("¿Qué pilota Shinji Ikari?", ["Un EVA", "Un Gundam", "Un titán", "Una nave pirata"], 0),
    q("¿Qué organización opera los Evangelion?", ["NERV", "Survey Corps", "Soul Society", "Jujutsu High"], 0)
  ],
  "Assassination Classroom": [
    q("¿Cómo se llama el peculiar profesor de la clase 3-E?", ["Koro-sensei", "All Might", "Kakashi", "Gojo"], 0),
    q("¿Qué misión tiene la clase?", ["Asesinar a su profesor antes de la fecha límite", "Encontrar siete esferas", "Ganar la Copa Mundial", "Derrotar al Rey Pirata"], 0)
  ],
  "The Promised Neverland": [
    q("¿Cómo se llama la protagonista de The Promised Neverland?", ["Emma", "Mikasa", "Sakura", "Anya"], 0),
    q("¿Qué descubren los niños sobre el orfanato?", ["Una verdad peligrosa sobre su destino", "Que todos son ninjas", "Que viven dentro de un videojuego", "Que son alquimistas estatales"], 0)
  ],
  "Code Geass": [
    q("¿Cuál es el nombre del protagonista de Code Geass?", ["Lelouch Lamperouge", "Light Yagami", "Edward Elric", "Eren Yeager"], 0),
    q("¿Qué poder recibe Lelouch?", ["Geass", "Nen", "Quirk", "Bankai"], 0)
  ],
  "Fruits Basket": [
    q("¿Cómo se llama la protagonista de Fruits Basket?", ["Tohru Honda", "Kagome Higurashi", "Taiga Aisaka", "Violet Evergarden"], 0),
    q("¿Qué peculiaridad afecta a la familia Sohma?", ["Una maldición ligada al zodiaco chino", "Se convierten en titanes", "Viven dentro de un juego", "Controlan demonios con espadas"], 0)
  ],
  "Toradora!": [
    q("¿Cómo se llama la protagonista conocida como la 'Tigre de bolsillo'?", ["Taiga Aisaka", "Ryuuji Takasu", "Minori Kushieda", "Ami Kawashima"], 0),
    q("¿Qué género describe mejor Toradora!?", ["Comedia romántica escolar", "Terror cósmico", "Ciencia ficción espacial", "Acción de ninjas"], 0)
  ],
  "Vinland Saga": [
    q("¿Cuál es el nombre del protagonista de Vinland Saga?", ["Thorfinn", "Canute", "Askeladd", "Thorkell"], 0),
    q("¿En qué contexto histórico se desarrolla la serie?", ["La era de los vikingos", "El Japón futurista", "La antigua Roma exclusivamente", "Un mundo de robots"], 0)
  ],
  "Mushoku Tensei": [
    q("¿Cómo se llama el protagonista reencarnado de Mushoku Tensei?", ["Rudeus Greyrat", "Rimuru Tempest", "Kazuma Satou", "Subaru Natsuki"], 0),
    q("¿Qué tipo de mundo aparece en la historia?", ["Un mundo de fantasía con magia", "Una ciudad moderna sin magia", "Un torneo de baloncesto", "Un mundo de detectives"], 0)
  ],
  "Hellsing Ultimate": [
    q("¿Qué poderoso vampiro sirve a la organización Hellsing?", ["Alucard", "Dio Brando", "Ryuk", "Sesshomaru"], 0),
    q("¿Qué clase de organización es Hellsing?", ["Una organización que combate amenazas sobrenaturales", "Un equipo de voleibol", "Una escuela de cocina", "Una tripulación pirata"], 0)
  ],
  "Inuyasha": [
    q("¿Cómo se llama el medio demonio protagonista?", ["Inuyasha", "Sesshomaru", "Miroku", "Koga"], 0),
    q("¿Qué objeto buscan reunir los personajes?", ["Fragmentos de la Perla de Shikon", "Esferas del Dragón", "Cartas Clow", "Piedras filosofales"], 0)
  ],
  "Detective Conan": [
    q("¿Cuál es el nombre real del joven detective encogido?", ["Shinichi Kudo", "Heiji Hattori", "Kogoro Mouri", "Hiroshi Agasa"], 0),
    q("¿Qué identidad utiliza Shinichi tras encogerse?", ["Conan Edogawa", "Light Yagami", "L Lawliet", "Jimmy Neutron"], 0)
  ],
  "Blue Lock": [
    q("¿Qué deporte busca dominar el proyecto Blue Lock?", ["Fútbol", "Baloncesto", "Voleibol", "Béisbol"], 0),
    q("¿Cómo se llama el protagonista de Blue Lock?", ["Yoichi Isagi", "Meguru Bachira", "Rin Itoshi", "Seishiro Nagi"], 0)
  ],
  "Dandadan": [
    q("¿Qué temas sobrenaturales mezcla Dandadan?", ["Extraterrestres y espíritus", "Piratas y alquimia", "Vikingos y deportes", "Cocina y carreras"], 0),
    q("¿Cómo se llama la protagonista femenina conocida como Momo?", ["Momo Ayase", "Momo Yaoyorozu", "Momo Hinamori", "Momo Belia Deviluke"], 0)
  ]
};

function q(text, options, answer) {
  return { text, options, answer, explanation: `La respuesta correcta es: ${options[answer]}.` };
}


const state = { currentAnime: null, questions: [], index: 0, score: 0, answered: false };
const extraAnimeFacts = {
  "Nanatsu no Taizai": ["Meliodas", "Elizabeth Liones", "Boar Hat", "Ira", "Dragon Sin", "Ban", "King", "Diane", "Gowther", "Merlin", "Escanor", "Britannia", "Dez Mandamientos", "Hawk", "Siete Pecados Capitales"],
  "Attack on Titan": ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert", "Cuerpo de Exploración", "Titán de Ataque", "Murallas", "Levi Ackerman", "Historia Reiss", "Reiner Braun", "Marley", "Jean Kirstein", "Sasha Blouse", "Titán Colosal", "ODM", "Ymir"],
  "Shangri-La Frontier": ["Rakuro Hizutome", "Sunraku", "Emul", "Pencilgon", "Oikatzo", "juego de realidad virtual", "juegos defectuosos", "Rabituza", "Monstruos únicos", "mundo virtual", "equipo de aventura", "combate", "misiones", "habilidad de jugador", "Shangri-La Frontier"],
  "Edens Zero": ["Shiki Granbell", "Rebecca Bluegarden", "Happy", "Ether Gear", "gravedad", "Four Shining Stars", "Edens Zero", "Homura Kogetsu", "Weisz Steiner", "Mother", "cosmos", "aventura espacial", "Demon King", "Sister Ivry", "Witch Regret"],
  "Jujutsu Kaisen": ["Yuji Itadori", "Ryomen Sukuna", "Satoru Gojo", "Megumi Fushiguro", "Nobara Kugisaki", "energía maldita", "hechiceros jujutsu", "Mahito", "Yuta Okkotsu", "Dominio", "Escuela de Tokio", "Kento Nanami", "Maki Zenin", "Panda", "Toge Inumaki"],
  "Pokémon": ["Pikachu", "Ash Ketchum", "Poké Ball", "Team Rocket", "Charmander", "Squirtle", "Bulbasaur", "Profesor Oak", "Eevee", "tipo Eléctrico", "entrenador Pokémon", "Gimnasios", "Liga Pokémon", "Pokédex", "Misty"],
  "Dragon Ball Z": ["Son Goku", "Vegeta", "Gohan", "Freezer", "Super Saiyajin", "Esferas del Dragón", "Shenlong", "Piccolo", "Kamehameha", "Saiyajin", "Capsule Corp", "Trunks", "Cell", "Majin Buu", "Tierra"],
  "Food Wars! (Shokugeki no Soma)": ["Soma Yukihira", "Erina Nakiri", "duelos culinarios", "Academia Totsuki", "Megumi Tadokoro", "Joichiro Yukihira", "cocina", "Consejo de Diez", "Takumi Aldini", "ingredientes", "recetas", "platos", "competición", "Hisako Arato", "gastronomía"],
  "KonoSuba": ["Kazuma Satou", "Aqua", "Megumin", "Darkness", "explosión", "fantasía cómica", "gremio de aventureros", "魔王", "party", "Lalatina", "Yunyun", "Rusalka", "reencarnación", "misiones", "Axel"],
  "Naruto": ["Naruto Uzumaki", "Hokage", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake", "chakra", "Rasengan", "Konoha", "Kurama", "Jiraiya", "Itachi Uchiha", "Sharingan", "Equipo 7", "ninja", "Hinata Hyuga"],
  "Black Clover": ["Asta", "Yuno", "grimorio de cinco hojas", "Reino de Clover", "Touros Negros", "anti-magia", "Yami Sukehiro", "Noelle Silva", "Rei Mago", "grimórios", "Magna Swing", "Luck Voltia", "elfos", "Liebe", "magia"],
  "Plunderer": ["Hina", "Licht Bach", "contadores", "Alcia", "Ace", "número", "barão", "contagem pessoal", "uniforme militar", "Jail Murdoch", "Lynn May", "Schmelman", "fantasia", "batalha", "Plunderer"],
  "Tokyo Revengers": ["Takemichi Hanagaki", "Manjiro Sano", "Ken Ryuguji", "Toman", "viaje en el tiempo", "Hinata Tachibana", "Chifuyu Matsuno", "Baji Keisuke", "Mikey", "Draken", "pandilla", "Naoto Tachibana", "Valhalla", "Black Dragons", "futuro"],
  "Fullmetal Alchemist: Brotherhood": ["Edward Elric", "Alphonse Elric", "piedra filosofal", "alquimia", "Roy Mustang", "Winry Rockbell", "Amestris", "Homúnculos", "equivalencia", "Scar", "Riza Hawkeye", "Hohenheim", "automail", "transmutación humana", "Puerta de la Verdad"],
  "One Piece": ["Monkey D. Luffy", "One Piece", "Sombrero de Paja", "Roronoa Zoro", "Nami", "Sanji", "Devil Fruits", "Grand Line", "Gol D. Roger", "Usopp", "Tony Tony Chopper", "Robin", "Franky", "Brook", "Jinbe"],
  "Demon Slayer: Kimetsu no Yaiba": ["Tanjiro Kamado", "Nezuko Kamado", "Respiración del Agua", "Cuerpo de Exterminio de Demonios", "Zenitsu Agatsuma", "Inosuke Hashibira", "Muzan Kibutsuji", "Nichirin", "Hashira", "Kanao Tsuyuri", "Giyu Tomioka", "Respiración del Sol", "demonios", "Ubuyashiki", "mariposa"],
  "Death Note": ["Light Yagami", "L", "Ryuk", "cuaderno de muerte", "Misa Amane", "Shinigami", "nombre y rostro", "Near", "Mello", "Soichiro Yagami", "reglas del cuaderno", "investigación", "Kira", "Rem", "justicia"],
  "My Hero Academia": ["Izuku Midoriya", "All Might", "One For All", "UA", "Katsuki Bakugo", "Ochaco Uraraka", "Shoto Todoroki", "quirks", "Endeavor", "Tomura Shigaraki", "Eraser Head", "héroes profesionales", "Clase 1-A", "Deku", "Liga de Villanos"],
  "Hunter x Hunter": ["Gon Freecss", "Killua Zoldyck", "Nen", "Kurapika", "Leorio", "Hisoka", "Cazadores", "Examen Hunter", "Netero", "Greed Island", "Chimera Ants", "Bisky", "Yorknew", "familia Zoldyck", "Kite"],
  "Bleach": ["Ichigo Kurosaki", "Rukia Kuchiki", "Soul Society", "Zanpakuto", "Hollow", "Orihime Inoue", "Uryu Ishida", "Renji Abarai", "Byakuya Kuchiki", "Bankai", "Shinigami", "Aizen", "Kisuke Urahara", "Yoruichi", "Karakura"],
  "Spy x Family": ["Loid Forger", "Anya Forger", "Yor Forger", "Bond", "Operación Strix", "telépata", "espía", "asesina", "Eden Academy", "Damián Desmond", "WISE", "familia falsa", "Westalis", "Thorn Princess", "misión secreta"],
  "Haikyuu!!": ["Shoyo Hinata", "Tobio Kageyama", "Karasuno", "voleibol", "Nekoma", "Daichi Sawamura", "Kei Tsukishima", "Yu Nishinoya", "Asahi Azumane", "Kozume Kenma", "Toru Oikawa", "bloqueo", "saque", "Libero", "Pequeño Gigante"],
  "Sword Art Online": ["Kirito", "Asuna", "Aincrad", "juego de realidad virtual", "NerveGear", "Klein", "Yui", "Sinon", "alfheim", "Kayaba Akihiko", "espadas", "guild", "mundo virtual", "Death Gun", "Rath"],
  "Frieren": ["Frieren", "Fern", "Stark", "Himmel", "Heiter", "Eisen", "elfa maga", "viaje después del Rey Demonio", "magia", "tiempo", "Hechiceros de primera clase", "Serie", "Aura", "Grimoire", "memorias"],
  "Sailor Moon": ["Usagi Tsukino", "Sailor Moon", "Luna", "Tuxedo Mask", "Mamoru Chiba", "Sailor Mercury", "Sailor Mars", "Sailor Jupiter", "Sailor Venus", "Silver Crystal", "Reino de la Luna", "Reina Beryl", "transformación", "guardianas", "Chibiusa"],
  "Cardcaptor Sakura": ["Sakura Kinomoto", "Cartas Clow", "Keroberos", "Tomoyo Daidouji", "Syaoran Li", "Yukito Tsukishiro", "Clow Reed", "báculo", "magia", "cartas mágicas", "Eriol Hiiragizawa", "guardiana", "captura", "uniformes", "Kero"],
  "Chainsaw Man": ["Denji", "Pochita", "Makima", "Power", "Aki Hayakawa", "demonios", "cazadores de demonios", "motosierra", "contrato", "Public Safety", "Kobeni", "Himeno", "Reze", "sangre", "Tokyo"],
  "Tokyo Ghoul": ["Ken Kaneki", "Touka Kirishima", "ghouls", "Anteiku", "Rize Kamishiro", "CCG", "máscara", "Hide", "Yoshimura", "Kagune", "Amon", "Juuzou Suzuya", "café", "un ojo", "Tokyo"],
  "Steins;Gate": ["Rintaro Okabe", "Kurisu Makise", "Mayuri Shiina", "D-mail", "laboratorio del futuro", "viaje temporal", "Daru", "SERN", "divergencia", "PhoneWave", "Suzuha Amane", "gel banana", "John Titor", "líneas temporales", "Okabe"],
  "Your Name": ["Taki Tachibana", "Mitsuha Miyamizu", "intercambio de cuerpos", "cometa", "Itomori", "Tokio", "Kuchikamizake", "memoria", "hilo rojo", "Makoto Shinkai", "santuario", "tiempo", "sueños", "encuentro", "campana"],
  "Dr. Stone": ["Senku Ishigami", "ciencia", "Taiju Oki", "petrificación", "Reino de la Ciencia", "Chrome", "Kohaku", "Tsukasa", "Ishigami Village", "revivir humanidad", "fórmulas", "ácido nítrico", "Gen Asagiri", "Ryusui", "laboratorio"],
  "JoJo's Bizarre Adventure": ["Jonathan Joestar", "Jotaro Kujo", "Dio Brando", "Stands", "Joseph Joestar", "Hamon", "Star Platinum", "Joestar", "Josuke Higashikata", "Giorno Giovanna", "Pucci", "flecha", "Bizarre Adventure", "ORA ORA", "Morioh"],
  "Mob Psycho 100": ["Shigeo Kageyama", "Reigen Arataka", "poderes psíquicos", "porcentaje emocional", "Ritsu", "Dimple", "Claw", "telequinesis", "Body Improvement Club", "Tsubomi", "espíritus", "exorcismo", "Mob", "Teru", "Salt Middle School"],
  "Re:Zero": ["Subaru Natsuki", "Emilia", "Rem", "Ram", "Return by Death", "Roswaal", "Puck", "Beatrice", "Mansión", "Lugunica", "brujas", "Echidna", "Felt", "Caballero", "isekai"],
  "Violet Evergarden": ["Violet Evergarden", "Auto Memory Dolls", "Cartas", "Claudia Hodgins", "Gilbert Bougainvillea", " emociones humanas", "Leiden", "Cattleya", "Benedict", "Iris", "guerra", "escritura", "cliente", "muñeca de memoria", "correspondencia"],
  "Bocchi the Rock!": ["Hitori Gotoh", "Kita Ikuyo", "Nijika Ijichi", "Ryo Yamada", "Kessoku Band", "guitarra", "ansiedad social", "Starry", "Seika Ijichi", "banda musical", "concierto", "Bocchi", "Yoyoko Otsuki", "bajo", "batería"],
  "Kuroko's Basketball": ["Tetsuya Kuroko", "Taiga Kagami", "baloncesto", "Generación de los Milagros", "Seirin", "Daiki Aomine", "Shintaro Midorima", "Ryota Kise", "Atsushi Murasakibara", "Seijuro Akashi", "pase invisible", "cancha", "entrenador Riko", "Teppei Kiyoshi", "partido"],
  "The Apothecary Diaries": ["Maomao", "Jinshi", "palacio imperial", "venenos", "farmacia", "medicina", "Gyokuyou", "Lihaku", "misterios", "concubinas", "hierbas", "recetas", "investigación", "China imperial ficticia", "medicina"],
  "Oshi no Ko": ["Ai Hoshino", "Aqua Hoshino", "Ruby Hoshino", "B-Komachi", "industria del entretenimiento", "Gorou Amamiya", "reencarnación", "Kana Arima", "Akane Kurokawa", "ídolos", "teatro", "Miyako Saito", "memoria", "misterio", "escenario"],
  "Solo Leveling": ["Sung Jinwoo", "sistema", "cazadores", "mazmorras", "Monarca de las Sombras", "Cha Hae-In", "Jin-Ho Yoo", "portal", "rangos", "gremios", "Igris", "Beru", "nivel", "dungeons", "despertar"],
  "Neon Genesis Evangelion": ["Shinji Ikari", "Rei Ayanami", "Asuka Langley", "NERV", "EVA-01", "Ángeles", "Misato Katsuragi", "Gendo Ikari", "Tokyo-3", "LCL", "AT Field", "SEELE", "mecha", "Pilotos", "Instrumentalización humana"],
  "Assassination Classroom": ["Koro-sensei", "Clase 3-E", "Nagisa Shiota", "Karma Akabane", "Kunugigaoka", "tentáculos", "profesor", "misión de asesinato", "Irina Jelavic", "Karasuma", "velocidad Mach 20", "estudiantes", "clase", "Bitch-sensei", "luna"],
  "The Promised Neverland": ["Emma", "Norman", "Ray", "Grace Field House", "Isabella", "demonios", "orfanato", "fuga", "Phil", "número de identificación", "Mama", "plantación", "niños", "secreto", "Mujika"],
  "Code Geass": ["Lelouch Lamperouge", "Geass", "C.C.", "Suzaku Kururugi", "Britannia", "Zero", "Knightmare Frames", "Nunnally", "Black Knights", "Kallen Stadtfeld", "Rebelión", "Emperador Charles", "Japan", "estrategia", "máscara"],
  "Fruits Basket": ["Tohru Honda", "Yuki Sohma", "Kyo Sohma", "maldición del zodiaco chino", "Shigure Sohma", "Akito", "abrazo", "familia Sohma", "gato", "doce animales", "Hatori", "Momiji", "Arisa Uotani", "Hana", "romance"],
  "Toradora!": ["Ryuuji Takasu", "Taiga Aisaka", "Minori Kushieda", "Yusaku Kitamura", "Palmtop Tiger", "escuela secundaria", "romance", "Ami Kawashima", "cocina", "amistad", "confesión", "navidad", "familia", "festival escolar", "comedia romántica"],
  "Vinland Saga": ["Thorfinn", "Askeladd", "Canute", "vikingos", "Vinland", "Thors", "Leif Erikson", "guerra", "Danelaw", "Einar", "esclavitud", "espadas", "Islandia", "Jomsvikings", "venganza"],
  "Mushoku Tensei": ["Rudeus Greyrat", "Roxy Migurdia", "Sylphiette", "Eris Boreas", "reencarnación", "magia", "Paul Greyrat", "continente Demoníaco", "aventureros", "teletransporte", "Zenith", "Ruijerd", "espadas", "familia Greyrat", "isekai"],
  "Hellsing Ultimate": ["Alucard", "Integra Hellsing", "Seras Victoria", "vampiros", "organización Hellsing", "Walter C. Dornez", "Millennium", "Anderson", "ghouls", "armas", "Londres", "cazadores", "sobrenatural", "Freak chips", "Pip Bernadotte"],
  "Inuyasha": ["Inuyasha", "Kagome Higurashi", "Perla de Shikon", "Sesshomaru", "Miroku", "Sango", "Shippo", "Kikyo", "Naraku", "medio demonio", "fragmentos", "época Sengoku", "Tessaiga", "Hiraikotsu", "viaje temporal"],
  "Detective Conan": ["Shinichi Kudo", "Conan Edogawa", "Ran Mouri", "Kogoro Mouri", "Organización Negra", "Agasa", "Heiji Hattori", "detective", "APTX 4869", "crímenes", "lupa", "investigación", "Ai Haibara", "deducción", "identidad secreta"],
  "Blue Lock": ["Yoichi Isagi", "Meguru Bachira", "Rin Itoshi", "Seishiro Nagi", "fútbol", "Jinpachi Ego", "delantero", "ego", "Bastard München", "Barou", "Chigiri", "Kunigami", "goles", "selección japonesa", "competencia"],
  "Dandadan": ["Momo Ayase", "Ken Takakura (Okarun)", "Turbo Granny", "extraterrestres", "espíritus", "Seiko Ayase", "poderes psíquicos", "ovnis", "Aira Shiratori", "Jiji", "Momo", "paranormal", "mal de ojo", "serpoianos", "aventura sobrenatural"]
};

const animeImages = {
  "Noragami": "⛩️", "Naruto": "🍥", "One Piece": "🏴‍☠️", "Dragon Ball Z": "🐉",
  "Jujutsu Kaisen": "👊", "Fullmetal Alchemist: Brotherhood": "⚗️", "Demon Slayer: Kimetsu no Yaiba": "🌊"
};

function normalizeQuestionBank() {
  // Garante exatamente 15 itens para cada anime. As questões já escritas ficam primeiro;
  // o restante usa pistas e fatos próprios associados a cada obra para completar a rodada.
  animeSeed.forEach(([name, emoji, genre]) => {
    if (!questionBank[name]) questionBank[name] = [];
    const bank = questionBank[name];
    const facts = extraAnimeFacts[name] || [name, genre, emoji, "personajes principales", "historia", "aventura", "mundo", "protagonista", "rival", "objetivo", "equipo", "poder", "escenario", "amistad", "desafío"];
    let i = 0;
    while (bank.length < 15) {
      const fact = facts[i % facts.length];
      const otherFacts = facts.filter((x) => x !== fact);
      const distractors = shuffle(otherFacts).slice(0, 3);
      while (distractors.length < 3) distractors.push(name);
      const prompts = [
        `En ${name}, ¿cuál de estas opciones está relacionada con la obra?`,
        `Pregunta de conocimiento sobre ${name}: elige el elemento correcto.`,
        `¿Qué nombre o concepto pertenece al universo de ${name}?`,
        `En el mundo de ${name}, ¿cuál opción es una referencia válida?`,
        `¿Cuál de estas pistas corresponde a ${name}?`
      ];
      const prompt = prompts[i % prompts.length];
      const options = shuffle([fact, ...distractors]);
      bank.push(q(prompt, options, options.indexOf(fact)));
      i++;
    }
    questionBank[name] = bank.slice(0, 15);
  });
}

function init() {
  normalizeQuestionBank();
  renderAnimeList();
  bindEvents();
  // La pantalla de entrada permanece hasta que la persona pulse COMEÇAR.
}
function showScreen(id) {
  ["welcomeScreen", "animeScreen", "questionScreen", "resultScreen"].forEach((screen) => $(screen).classList.toggle("hidden", screen !== id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderAnimeList() {
  const query = ($("animeSearch").value || "").trim().toLocaleLowerCase("pt-BR");
  const list = $("animeList"); list.replaceChildren();
  const filtered = animeSeed.filter(([name, icon, genre]) => `${name} ${genre}`.toLocaleLowerCase("pt-BR").includes(query));
  if (!filtered.length) { const p = document.createElement("p"); p.className = "empty-state"; p.textContent = "Nenhum anime encontrado."; list.append(p); return; }
  filtered.forEach(([name, icon, genre]) => {
    const row = document.createElement("button"); row.type = "button"; row.className = "anime-row";
    const circle = document.createElement("span"); circle.className = "anime-photo"; circle.textContent = animeImages[name] || icon || "🎌"; circle.setAttribute("aria-hidden", "true");
    const info = document.createElement("span"); info.className = "anime-row-info";
    const title = document.createElement("strong"); title.textContent = name;
    const sub = document.createElement("small"); sub.textContent = `${genre} • 15 perguntas`;
    info.append(title, sub);
    const arrow = document.createElement("span"); arrow.className = "row-arrow"; arrow.textContent = "›";
    row.append(circle, info, arrow); row.addEventListener("click", () => startAnime(name)); list.append(row);
  });
  $("animeTotal").textContent = `${animeSeed.length} animes • 15 perguntas cada`;
}
function bindEvents() {
  $("startButton").addEventListener("click", () => { showScreen("animeScreen"); $("animeSearch").focus({preventScroll:true}); });
  $("backHome").addEventListener("click", () => showScreen("welcomeScreen"));
  $("animeSearch").addEventListener("input", renderAnimeList);
  $("backToList").addEventListener("click", () => showScreen("animeScreen"));
  $("nextQuestion").addEventListener("click", nextQuestion);
  $("restartButton").addEventListener("click", () => showScreen("animeScreen"));
  $("homeButton").addEventListener("click", () => showScreen("welcomeScreen"));
}
function startAnime(name) {
  state.currentAnime = name;
  state.questions = shuffle((questionBank[name] || []).slice(0, 15)).map((item) => {
    const pairs = shuffle(item.options.map((text, oldIndex) => ({text, oldIndex})));
    return {...item, options: pairs.map((p) => p.text), correctIndex: pairs.findIndex((p) => p.oldIndex === item.answer)};
  });
  state.index = 0; state.score = 0; state.answered = false;
  $("quizTitle").textContent = name;
  showScreen("questionScreen"); renderQuestion();
}
function renderQuestion() {
  const item = state.questions[state.index]; state.answered = false;
  $("questionNumber").textContent = `${state.index + 1} / 15`;
  $("questionProgress").style.width = `${(state.index / 15) * 100}%`;
  $("questionText").textContent = item.text;
  $("answerFeedback").textContent = ""; $("answerFeedback").className = "answer-feedback";
  $("nextQuestion").classList.add("hidden");
  const answers = $("answerOptions"); answers.replaceChildren();
  item.options.forEach((option, i) => {
    const button = document.createElement("button"); button.type = "button"; button.className = "answer-option";
    const letter = document.createElement("span"); letter.className = "answer-letter"; letter.textContent = `${String.fromCharCode(65+i)})`;
    const label = document.createElement("span"); label.textContent = option;
    button.append(letter, label); button.addEventListener("click", () => chooseAnswer(i)); answers.append(button);
  });
}
function chooseAnswer(choice) {
  if (state.answered) return; state.answered = true;
  const item = state.questions[state.index];
  [...$("answerOptions").children].forEach((button, i) => {
    button.disabled = true;
    if (i === item.correctIndex) button.classList.add("correct");
    else if (i === choice) button.classList.add("incorrect");
  });
  const feedback = $("answerFeedback");
  if (choice === item.correctIndex) { state.score++; feedback.textContent = "ACERTOU! +1 ponto"; feedback.classList.add("good"); }
  else { feedback.textContent = `Resposta correta: ${item.options[item.correctIndex]}`; feedback.classList.add("bad"); }
  $("questionProgress").style.width = `${((state.index + 1) / 15) * 100}%`;
  $("nextQuestion").textContent = state.index === 14 ? "VER RESULTADO" : "PRÓXIMA PERGUNTA →";
  $("nextQuestion").classList.remove("hidden");
}
function nextQuestion() {
  if (!state.answered) return;
  if (state.index < 14) { state.index++; renderQuestion(); }
  else showResult();
}
function showResult() {
  const percent = Math.round((state.score / 15) * 100);
  $("resultAnimeName").textContent = state.currentAnime;
  $("resultScore").textContent = `${state.score} / 15`;
  $("resultPercent").textContent = `${percent}% DE ACERTOS`;
  $("resultMessage").textContent = percent === 100 ? "LENDÁRIO! Tu acertaste tudo!" : percent >= 70 ? "Mandou bem, otaku!" : percent >= 40 ? "Bom começo! Treina mais um pouco." : "Hora de rever esse anime e tentar de novo!";
  showScreen("resultScreen");
}
function shuffle(items) { const copy = [...items]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
document.addEventListener("DOMContentLoaded", init);

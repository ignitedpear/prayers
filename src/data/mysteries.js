// The four Rosary mystery sets: names in five languages plus a one-line
// meditation for each mystery, translated into en/la/es/pt. Titles cross-
// checked against Vatican News (es/pt) and USCCB (en); Latin titles are the
// common devotional forms. Konkani (kok) meditations are intentionally left
// unset for now (falls back to English via pick()) — add a `kok:` key per
// mystery here once translated.

export const MYSTERY_SETS = {
  joyful: {
    key: 'joyful',
    name: {
      en: 'The Joyful Mysteries',
      la: 'Mysteria Gaudiosa',
      es: 'Los Misterios Gozosos',
      pt: 'Os Mistérios Gozosos',
      kok: 'Sontosache Mister',
    },
    days: {
      en: 'Monday & Saturday',
      la: 'Feria Secunda et Sabbato',
      es: 'Lunes y Sábado',
      pt: 'Segunda-feira e Sábado',
      kok: 'Somar ani Sonvar',
    },
    mysteries: [
      {
        name: {
          en: 'The Annunciation',
          la: 'Annuntiatio',
          es: 'La Encarnación del Hijo de Dios',
          pt: 'A Anunciação do Anjo à Virgem Maria',
          kok: '',
        },
        meditation: {
          en: 'The angel Gabriel announces to Mary that she will conceive the Son of God, and she consents in humble obedience.',
          la: 'Angelus Gabriel Mariae nuntiat eam Filium Dei conceptura esse, et illa in humili oboedientia consentit.',
          es: 'El ángel Gabriel anuncia a María que concebirá al Hijo de Dios, y ella consiente con humilde obediencia.',
          pt: 'O anjo Gabriel anuncia a Maria que ela conceberá o Filho de Deus, e ela consente com humilde obediência.',
          kok: 'Boddvea Gabrielan Ankvar Mariek khobor dili Devacho Put Tichea kusveant ietolo mhonn, ani Povitr Otmeache khurpen Ti gorbest zali.',
        },
      },
      {
        name: {
          en: 'The Visitation',
          la: 'Visitatio',
          es: 'La Visitación de Nuestra Señora a su Prima Santa Isabel',
          pt: 'A Visita de Maria a Santa Isabel',
          kok: '',
        },
        meditation: {
          en: 'Mary visits her cousin Elizabeth, who greets her as "the mother of my Lord," and Mary sings the Magnificat.',
          la: "Maria cognatam suam Elisabeth visitat, quae eam salutat ut 'matrem Domini mei', et Maria Magnificat canit.",
          es: "María visita a su prima Isabel, quien la saluda como 'la madre de mi Señor', y María canta el Magníficat.",
          pt: "Maria visita sua prima Isabel, que a saúda como 'a mãe do meu Senhor', e Maria canta o Magnificat.",
          kok: 'Ankvar Maria ghorbest astana, Santa Izabel aple mauxe-bhoinnik bhet korunk gheli ani tiche thaim tin mhoine ravli.',
        },
      },
      {
        name: {
          en: 'The Nativity',
          la: 'Nativitas',
          es: 'El Nacimiento del Hijo de Dios',
          pt: 'O Nascimento de Jesus em Belém',
          kok: '',
        },
        meditation: {
          en: 'Jesus is born in Bethlehem in poverty and laid in a manger.',
          la: 'Iesus in Bethlehem in paupertate nascitur et in praesepio reclinatur.',
          es: 'Jesús nace en Belén en la pobreza y es colocado en un pesebre.',
          pt: 'Jesus nasce em Belém na pobreza e é colocado numa manjedoura.',
          kok: 'Ankvar Maria Ballka Jezuk Belea Xharant, ghorvanchea ghotteant monzatim modem, porsutt zali.',
        },
      },
      {
        name: {
          en: 'The Presentation in the Temple',
          la: 'Praesentatio Domini',
          es: 'La Presentación de Jesús en el Templo',
          pt: 'A Apresentação de Jesus no Templo',
          kok: '',
        },
        meditation: {
          en: 'Mary and Joseph present the infant Jesus in the Temple in obedience to the Law, and Simeon prophesies over the child.',
          la: 'Maria et Ioseph infantem Iesum in Templo secundum Legem praesentant, et Simeon de puero prophetat.',
          es: 'María y José presentan al Niño Jesús en el Templo en obediencia a la Ley, y Simeón profetiza sobre el niño.',
          pt: 'Maria e José apresentam o Menino Jesus no Templo em obediência à Lei, e Simeão profetiza sobre a criança.',
          kok: 'Ankvar Marien Ballka Jezuk vhelo ani bhettoilo Dev Templant, ani Taka St. Simanvachea hatant dilo',
        },
      },
      {
        name: {
          en: 'The Finding of the Child Jesus in the Temple',
          la: 'Inventio Domini in Templo',
          es: 'El Niño Jesús Perdido y Hallado en el Templo',
          pt: 'A Perda e o Encontro de Jesus no Templo',
          kok: '',
        },
        meditation: {
          en: 'After being lost for three days, the boy Jesus is found in the Temple, sitting among the teachers, listening and asking questions.',
          la: 'Post tres dies amissus, puer Iesus in Templo invenitur, inter doctores sedens, audiens et interrogans eos.',
          es: 'Después de estar perdido durante tres días, el niño Jesús es hallado en el Templo, sentado entre los doctores, escuchando y haciendo preguntas.',
          pt: 'Depois de ficar perdido por três dias, o menino Jesus é encontrado no Templo, sentado entre os doutores, ouvindo e fazendo perguntas.',
          kok: "Porbechea disa sanddlea uprant, tin disamnim Ballok Jesu Dev-Templant mevlo",
        },
      },
    ],
  },

  sorrowful: {
    key: 'sorrowful',
    name: {
      en: 'The Sorrowful Mysteries',
      la: 'Mysteria Dolorosa',
      es: 'Los Misterios Dolorosos',
      pt: 'Os Mistérios Dolorosos',
      kok: 'Dukhichi Mister',
    },
    days: {
      en: 'Tuesday & Friday',
      la: 'Feria Tertia et Sexta',
      es: 'Martes y Viernes',
      pt: 'Terça-feira e Sexta-feira',
      kok: 'Mungllar ani Sukrar',
    },
    mysteries: [
      {
        name: {
          en: 'The Agony in the Garden',
          la: 'Agonia in Horto',
          es: 'La Oración de Jesús en el Huerto',
          pt: 'A Agonia de Jesus no Horto das Oliveiras',
          kok: '',
        },
        meditation: {
          en: "Jesus prays in Gethsemane in great anguish, sweating blood, and accepts His Father's will before His Passion.",
          la: 'Iesus in Gethsemani in magna angustia orat, sanguinem sudans, et voluntatem Patris ante Passionem suam accipit.',
          es: 'Jesús ora en Getsemaní con gran angustia, sudando sangre, y acepta la voluntad de su Padre antes de su Pasión.',
          pt: 'Jesus ora em Getsêmani com grande angústia, suando sangue, e aceita a vontade do Pai antes de sua Paixão.',
          kok: 'Somia Jezu Krist, Jetsemanichea molleant magnnem kortana amchea patkam pasun, rogot humelo.',
        },
      },
      {
        name: {
          en: 'The Scourging at the Pillar',
          la: 'Flagellatio',
          es: 'La Flagelación del Señor',
          pt: 'A Flagelação de Jesus, Preso à Coluna',
          kok: '',
        },
        meditation: {
          en: 'Jesus is bound to a pillar and brutally scourged by Roman soldiers.',
          la: 'Iesus ad columnam alligatur et a militibus Romanis crudeliter flagellatur.',
          es: 'Jesús es atado a una columna y brutalmente azotado por los soldados romanos.',
          pt: 'Jesus é amarrado a uma coluna e brutalmente açoitado pelos soldados romanos.',
          kok: 'Pilatachea raz-angnnant Somia Jezu Kristak eka khambeak bhandlo, ani panch hozaram voir Taka Jerbond marlet.',
        },
      },
      {
        name: {
          en: 'The Crowning with Thorns',
          la: 'Coronatio Spinis',
          es: 'La Coronación de Espinas',
          pt: 'A Coroação de Espinhos',
          kok: '',
        },
        meditation: {
          en: 'Soldiers mock Jesus as a false king, crowning Him with thorns and clothing Him in a purple robe.',
          la: 'Milites Iesum tamquam falsum regem illudunt, spinis coronantes et purpurea veste induentes.',
          es: 'Los soldados se burlan de Jesús como de un falso rey, coronándolo de espinas y vistiéndolo con un manto púrpura.',
          pt: 'Os soldados zombam de Jesus como um falso rei, coroando-o de espinhos e vestindo-o com um manto púrpura.',
          kok: 'Somia Jezu Kristachea mostokar kantteancho mukut ghalo.',
        },
      },
      {
        name: {
          en: 'The Carrying of the Cross',
          la: 'Bajulatio Crucis',
          es: 'Jesús con la Cruz a Cuestas Camino del Calvario',
          pt: 'Jesus Carrega a Cruz a Caminho do Calvário',
          kok: '',
        },
        meditation: {
          en: 'Jesus carries His cross to Calvary, falling under its weight, aided briefly by Simon of Cyrene.',
          la: 'Iesus crucem suam ad Calvariam portat, sub pondere cadens, a Simone Cyrenaeo breviter adiutus.',
          es: 'Jesús carga su cruz hasta el Calvario, cayendo bajo su peso, ayudado brevemente por Simón de Cirene.',
          pt: 'Jesus carrega sua cruz até o Calvário, caindo sob o peso dela, ajudado por breves instantes por Simão de Cirene.',
          kok: 'Somia Jezu Krist choddlo kalvar dongrar aplea khandar to bharadik khuris gheun.',
        },
      },
      {
        name: {
          en: 'The Crucifixion',
          la: 'Crucifixio',
          es: 'La Crucifixión y Muerte de Nuestro Señor',
          pt: 'Jesus é Crucificado e Morre na Cruz',
          kok: '',
        },
        meditation: {
          en: 'Jesus is nailed to the cross and dies for the salvation of the world.',
          la: 'Iesus cruci affigitur et pro salute mundi moritur.',
          es: 'Jesús es clavado en la cruz y muere por la salvación del mundo.',
          pt: 'Jesus é pregado na cruz e morre pela salvação do mundo.',
          kok: 'Somia Jezu Kristak zoddlo khursar, dogam choram modhem soglle sobhemazar ani Ankvar Mariechi dixtti mukhar.',
        },
      },
    ],
  },

  glorious: {
    key: 'glorious',
    name: {
      en: 'The Glorious Mysteries',
      la: 'Mysteria Gloriosa',
      es: 'Los Misterios Gloriosos',
      pt: 'Os Mistérios Gloriosos',
      kok: 'Horkache Mister',
    },
    days: {
      en: 'Wednesday & Sunday',
      la: 'Feria Quarta et Dominica',
      es: 'Miércoles y Domingo',
      pt: 'Quarta-feira e Domingo',
      kok: 'Budhvar ani Aitar',
    },
    mysteries: [
      {
        name: {
          en: 'The Resurrection',
          la: 'Resurrectio',
          es: 'La Resurrección del Hijo de Dios',
          pt: 'A Ressurreição de Jesus',
          kok: '',
        },
        meditation: {
          en: 'Jesus rises from the dead on the third day, conquering sin and death.',
          la: 'Iesus tertia die a mortuis resurgit, peccatum et mortem vincens.',
          es: 'Jesús resucita de entre los muertos al tercer día, venciendo al pecado y a la muerte.',
          pt: 'Jesus ressuscita dos mortos ao terceiro dia, vencendo o pecado e a morte.',
          kok: 'Somia Jezu Krist, Aplech podven tisrea disa meleleantlo jivont zelo.',
        },
      },
      {
        name: {
          en: 'The Ascension',
          la: 'Ascensio',
          es: 'La Ascensión del Señor a los Cielos',
          pt: 'A Ascensão de Jesus ao Céu',
          kok: '',
        },
        meditation: {
          en: 'Jesus ascends into Heaven in the presence of His disciples, promising to send the Holy Spirit.',
          la: 'Iesus in caelum ascendit coram discipulis suis, promittens Spiritum Sanctum se missurum esse.',
          es: 'Jesús asciende al Cielo en presencia de sus discípulos, prometiendo enviar al Espíritu Santo.',
          pt: 'Jesus sobe ao Céu na presença de seus discípulos, prometendo enviar o Espírito Santo.',
          kok: 'Somia Jezu Krist jibont zatoch challis disamnim porzollit sorgar choddlo.',
        },
      },
      {
        name: {
          en: 'The Descent of the Holy Spirit',
          la: 'Descensus Spiritus Sancti',
          es: 'La Venida del Espíritu Santo sobre los Apóstoles',
          pt: 'A Descida do Espírito Santo',
          kok: '',
        },
        meditation: {
          en: 'The Holy Spirit descends upon Mary and the apostles at Pentecost in tongues of fire, empowering them to preach the Gospel.',
          la: 'Spiritus Sanctus in Pentecoste super Mariam et apostolos in linguis igneis descendit, eos ad Evangelium praedicandum roborans.',
          es: 'El Espíritu Santo desciende sobre María y los apóstoles en Pentecostés en lenguas de fuego, dándoles fuerza para predicar el Evangelio.',
          pt: 'O Espírito Santo desce sobre Maria e os apóstolos em Pentecostes em línguas de fogo, dando-lhes força para pregar o Evangelho.',
          kok: 'Somia Jezu Krist sorgar vetoch pattoilo Deva-Sprint Santa Cenekal mhonnlele svater zhoim Ankvar Maria and Apostle aslet.',
        },
      },
      {
        name: {
          en: 'The Assumption of Mary',
          la: 'Assumptio Beatae Mariae Virginis',
          es: 'La Asunción de Nuestra Señora a los Cielos',
          pt: 'A Assunção da Santíssima Virgem ao Céu',
          kok: '',
        },
        meditation: {
          en: 'At the end of her earthly life, Mary is assumed body and soul into Heavenly glory.',
          la: 'In fine vitae terrenae suae, Maria corpore et anima in caelestem gloriam assumitur.',
          es: 'Al final de su vida terrena, María es asunta en cuerpo y alma a la gloria celestial.',
          pt: 'Ao final de sua vida terrena, Maria é assunta de corpo e alma à glória celestial.',
          kok: 'Somia Jezuchea mornna uprant Ankvar Maria Sabar vorsamnim sorgar gheli.',
        },
      },
      {
        name: {
          en: 'The Coronation of Mary',
          la: 'Coronatio Beatae Mariae Virginis',
          es: 'La Coronación de la Santísima Virgen como Reina de Cielos y Tierra',
          pt: 'A Coroação de Nossa Senhora, Rainha do Céu e da Terra',
          kok: '',
        },
        meditation: {
          en: 'Mary is crowned Queen of Heaven and Earth by her Son.',
          la: 'Maria a Filio suo Regina Caeli et Terrae coronatur.',
          es: 'María es coronada Reina del Cielo y de la Tierra por su Hijo.',
          pt: 'Maria é coroada Rainha do Céu e da Terra por seu Filho.',
          kok: 'Povitr Tritven Ankvar Mariechea mostokar mukut ghalo ani keli Tika sorga ani sonvsarachi Ranni.',
        },
      },
    ],
  },

  luminous: {
    key: 'luminous',
    name: {
      en: 'The Luminous Mysteries',
      la: 'Mysteria Luminosa',
      es: 'Los Misterios Luminosos',
      pt: 'Os Mistérios Luminosos',
      kok: 'Uzvaddache Mister',
    },
    days: {
      en: 'Thursday',
      la: 'Feria Quinta',
      es: 'Jueves',
      pt: 'Quinta-feira',
      kok: 'Brestar',
    },
    mysteries: [
      {
        name: {
          en: 'The Baptism of Jesus in the Jordan',
          la: 'Baptismus in Iordane',
          es: 'El Bautismo de Jesús en el Jordán',
          pt: 'O Batismo de Jesus no Jordão',
          kok: '',
        },
        meditation: {
          en: "John the Baptist baptizes Jesus in the Jordan River, and the Father's voice proclaims Him His beloved Son as the Spirit descends like a dove.",
          la: 'Ioannes Baptista Iesum in flumine Iordane baptizat, et vox Patris eum Filium suum dilectum proclamat, dum Spiritus tamquam columba descendit.',
          es: 'Juan el Bautista bautiza a Jesús en el río Jordán, y la voz del Padre lo proclama su Hijo amado mientras el Espíritu desciende como una paloma.',
          pt: 'João Batista batiza Jesus no rio Jordão, e a voz do Pai o proclama seu Filho amado enquanto o Espírito desce como uma pomba.',
          kok: 'Jezun Jordan nodint Snan ghetlem ani Sorginchea Bapan Putak vakhannlo.',
        },
      },
      {
        name: {
          en: 'The Wedding Feast at Cana',
          la: 'Nuptiae in Cana Galilaeae',
          es: 'La Autorrevelación de Jesús en las Bodas de Caná',
          pt: 'A Autorrevelação de Jesus nas Bodas de Caná',
          kok: '',
        },
        meditation: {
          en: "At Mary's request, Jesus performs His first public miracle, turning water into wine at a wedding feast.",
          la: 'Rogante Maria, Iesus primum miraculum publicum facit, aquam in vinum in convivio nuptiarum mutans.',
          es: 'A petición de María, Jesús realiza su primer milagro público, convirtiendo el agua en vino en un banquete de bodas.',
          pt: 'A pedido de Maria, Jesus realiza seu primeiro milagre público, transformando água em vinho num banquete de bodas.',
          kok: 'Kanantlea lognak Somia Jezun ochoream korun apli ollokh dili.',
        },
      },
      {
        name: {
          en: 'The Proclamation of the Kingdom of God',
          la: 'Proclamatio Regni Dei',
          es: 'El Anuncio del Reino de Dios Invitando a la Conversión',
          pt: 'O Anúncio do Reino e o Convite à Conversão',
          kok: '',
        },
        meditation: {
          en: "Jesus preaches the coming of God's Kingdom and calls all people to conversion and faith.",
          la: 'Iesus adventum Regni Dei praedicat et omnes homines ad conversionem et fidem vocat.',
          es: 'Jesús predica la llegada del Reino de Dios y llama a todas las personas a la conversión y a la fe.',
          pt: 'Jesus prega a vinda do Reino de Deus e chama todas as pessoas à conversão e à fé.',
          kok: 'Jezun Devachem Raj porgottlem ani apleam xisank Xubhvortoman mandun, mon bodlunk xikvonn dili.',
        },
      },
      {
        name: {
          en: 'The Transfiguration',
          la: 'Transfiguratio',
          es: 'La Transfiguración',
          pt: 'A Transfiguração de Jesus no Tabor',
          kok: '',
        },
        meditation: {
          en: 'Jesus is transfigured in glory on the mountain before Peter, James, and John, revealing His divine splendor.',
          la: 'Iesus in monte coram Petro, Iacobo et Ioanne in gloria transfiguratur, divinum splendorem suum revelans.',
          es: 'Jesús se transfigura en gloria en el monte ante Pedro, Santiago y Juan, revelando su esplendor divino.',
          pt: 'Jesus se transfigura em glória no monte diante de Pedro, Tiago e João, revelando seu esplendor divino.',
          kok: 'Tabor dongrar tegam xisam mukhar Jezu Porzollit zalo ani "Tachem aikat" mhonn ek tallo aikunk ailo.',
        },
      },
      {
        name: {
          en: 'The Institution of the Eucharist',
          la: 'Institutio Eucharistiae',
          es: 'La Institución de la Eucaristía',
          pt: 'A Instituição da Eucaristia',
          kok: '',
        },
        meditation: {
          en: 'At the Last Supper, Jesus offers His Body and Blood under the appearances of bread and wine, instituting the Eucharist.',
          la: 'In Cena Novissima, Iesus Corpus et Sanguinem suum sub speciebus panis et vini offert, Eucharistiam instituens.',
          es: 'En la Última Cena, Jesús ofrece su Cuerpo y su Sangre bajo las apariencias de pan y vino, instituyendo la Eucaristía.',
          pt: 'Na Última Ceia, Jesus oferece seu Corpo e Sangue sob as aparências de pão e vinho, instituindo a Eucaristia.',
          kok: 'Jezun Aple Kuddi-Rogtacho Povitr Sonvskar ghoddunk amche modem ravlo ani to aplea ugddasak korunk lailo.',
        },
      },
    ],
  },
};

// Traditional weekday schedule (Glorious kept on Sunday for simplicity;
// some traditions substitute Sorrowful on Lenten Sundays).
const SCHEDULE = ['glorious', 'joyful', 'sorrowful', 'glorious', 'luminous', 'sorrowful', 'joyful'];

export function mysteryForDate(date) {
  const key = SCHEDULE[date.getDay()];
  return MYSTERY_SETS[key];
}

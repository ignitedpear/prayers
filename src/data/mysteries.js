// The four Rosary mystery sets: names in five languages plus a one-line
// English meditation for each mystery. Titles cross-checked against Vatican
// News (es/pt) and USCCB (en); Latin titles are the common devotional forms.

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
          kok: 'Mariek Boddvo Khobor Dita',
        },
        meditation: 'The angel Gabriel announces to Mary that she will conceive the Son of God, and she consents in humble obedience.',
      },
      {
        name: {
          en: 'The Visitation',
          la: 'Visitatio',
          es: 'La Visitación de Nuestra Señora a su Prima Santa Isabel',
          pt: 'A Visita de Maria a Santa Isabel',
          kok: 'Mari Elizabetichi Bhett Korta',
        },
        meditation: 'Mary visits her cousin Elizabeth, who greets her as "the mother of my Lord," and Mary sings the Magnificat.',
      },
      {
        name: {
          en: 'The Nativity',
          la: 'Nativitas',
          es: 'El Nacimiento del Hijo de Dios',
          pt: 'O Nascimento de Jesus em Belém',
          kok: 'Betlehemant Jezu Zolmata',
        },
        meditation: 'Jesus is born in Bethlehem in poverty and laid in a manger.',
      },
      {
        name: {
          en: 'The Presentation in the Temple',
          la: 'Praesentatio Domini',
          es: 'La Presentación de Jesús en el Templo',
          pt: 'A Apresentação de Jesus no Templo',
          kok: 'Mari Ballok Jezuk Templant Bhettoita',
        },
        meditation: 'Mary and Joseph present the infant Jesus in the Temple in obedience to the Law, and Simeon prophesies over the child.',
      },
      {
        name: {
          en: 'The Finding of the Child Jesus in the Temple',
          la: 'Inventio Domini in Templo',
          es: 'El Niño Jesús Perdido y Hallado en el Templo',
          pt: 'A Perda e o Encontro de Jesus no Templo',
          kok: 'Chukleanlo Bhurgo Jezu Templant Mellta',
        },
        meditation: 'After being lost for three days, the boy Jesus is found in the Temple, sitting among the teachers, listening and asking questions.',
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
          kok: 'Somi Jezu Molleant Magtana Rogot Ghameta',
        },
        meditation: "Jesus prays in Gethsemane in great anguish, sweating blood, and accepts His Father's will before His Passion.",
      },
      {
        name: {
          en: 'The Scourging at the Pillar',
          la: 'Flagellatio',
          es: 'La Flagelación del Señor',
          pt: 'A Flagelação de Jesus, Preso à Coluna',
          kok: 'Somia Jezuk Khambeak Bandhun Jerbandamni Martat',
        },
        meditation: 'Jesus is bound to a pillar and brutally scourged by Roman soldiers.',
      },
      {
        name: {
          en: 'The Crowning with Thorns',
          la: 'Coronatio Spinis',
          es: 'La Coronación de Espinas',
          pt: 'A Coroação de Espinhos',
          kok: 'Somia Jezuchea Mostokar Kanttyancho Mukutt Sarsitat',
        },
        meditation: 'Soldiers mock Jesus as a false king, crowning Him with thorns and clothing Him in a purple robe.',
      },
      {
        name: {
          en: 'The Carrying of the Cross',
          la: 'Bajulatio Crucis',
          es: 'Jesús con la Cruz a Cuestas Camino del Calvario',
          pt: 'Jesus Carrega a Cruz a Caminho do Calvário',
          kok: 'Somi Jezu Kalvar Porvot Poran Khuris Vaunn Veta',
        },
        meditation: 'Jesus carries His cross to Calvary, falling under its weight, aided briefly by Simon of Cyrene.',
      },
      {
        name: {
          en: 'The Crucifixion',
          la: 'Crucifixio',
          es: 'La Crucifixión y Muerte de Nuestro Señor',
          pt: 'Jesus é Crucificado e Morre na Cruz',
          kok: 'Somi Jezu Khursar Umkallon Prann Dita',
        },
        meditation: 'Jesus is nailed to the cross and dies for the salvation of the world.',
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
          kok: 'Somi Jezu Jivont Zata',
        },
        meditation: 'Jesus rises from the dead on the third day, conquering sin and death.',
      },
      {
        name: {
          en: 'The Ascension',
          la: 'Ascensio',
          es: 'La Ascensión del Señor a los Cielos',
          pt: 'A Ascensão de Jesus ao Céu',
          kok: 'Somi Jezu Sorgar Choddta',
        },
        meditation: 'Jesus ascends into Heaven in the presence of His disciples, promising to send the Holy Spirit.',
      },
      {
        name: {
          en: 'The Descent of the Holy Spirit',
          la: 'Descensus Spiritus Sancti',
          es: 'La Venida del Espíritu Santo sobre los Apóstoles',
          pt: 'A Descida do Espírito Santo',
          kok: 'Povitr Otmo Ankvar Mariecher ani Apostolancher Denvta',
        },
        meditation: 'The Holy Spirit descends upon Mary and the apostles at Pentecost in tongues of fire, empowering them to preach the Gospel.',
      },
      {
        name: {
          en: 'The Assumption of Mary',
          la: 'Assumptio Beatae Mariae Virginis',
          es: 'La Asunción de Nuestra Señora a los Cielos',
          pt: 'A Assunção da Santíssima Virgem ao Céu',
          kok: 'Ankvar Mariek Kuddi Otmea Somet Sorgar Ghetat',
        },
        meditation: 'At the end of her earthly life, Mary is assumed body and soul into Heavenly glory.',
      },
      {
        name: {
          en: 'The Coronation of Mary',
          la: 'Coronatio Beatae Mariae Virginis',
          es: 'La Coronación de la Santísima Virgen como Reina de Cielos y Tierra',
          pt: 'A Coroação de Nossa Senhora, Rainha do Céu e da Terra',
          kok: 'Ankvar Mariek Sorga-Sonvsarachi Ranni Mhonn Kurvar Kortat',
        },
        meditation: 'Mary is crowned Queen of Heaven and Earth by her Son.',
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
          kok: 'Jezu Jordan Nhoint Snan Gheta',
        },
        meditation: "John the Baptist baptizes Jesus in the Jordan River, and the Father's voice proclaims Him His beloved Son as the Spirit descends like a dove.",
      },
      {
        name: {
          en: 'The Wedding Feast at Cana',
          la: 'Nuptiae in Cana Galilaeae',
          es: 'La Autorrevelación de Jesús en las Bodas de Caná',
          pt: 'A Autorrevelação de Jesus nas Bodas de Caná',
          kok: 'Jezu Kana Nogorantlea Lognant Aplim Mahima Ugddapim Korta',
        },
        meditation: "At Mary's request, Jesus performs His first public miracle, turning water into wine at a wedding feast.",
      },
      {
        name: {
          en: 'The Proclamation of the Kingdom of God',
          la: 'Proclamatio Regni Dei',
          es: 'El Anuncio del Reino de Dios Invitando a la Conversión',
          pt: 'O Anúncio do Reino e o Convite à Conversão',
          kok: 'Jezu Devachem Raz Porgott’ta ani Mon Bodlopak Ulo Dita',
        },
        meditation: "Jesus preaches the coming of God's Kingdom and calls all people to conversion and faith.",
      },
      {
        name: {
          en: 'The Transfiguration',
          la: 'Transfiguratio',
          es: 'La Transfiguración',
          pt: 'A Transfiguração de Jesus no Tabor',
          kok: 'Jezu Rupantor Zata',
        },
        meditation: 'Jesus is transfigured in glory on the mountain before Peter, James, and John, revealing His divine splendor.',
      },
      {
        name: {
          en: 'The Institution of the Eucharist',
          la: 'Institutio Eucharistiae',
          es: 'La Institución de la Eucaristía',
          pt: 'A Instituição da Eucaristia',
          kok: 'Jezu Evkorist Ghoddta',
        },
        meditation: 'At the Last Supper, Jesus offers His Body and Blood under the appearances of bread and wine, instituting the Eucharist.',
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

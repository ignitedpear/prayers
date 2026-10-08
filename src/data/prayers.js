// Core prayer texts used throughout the Rosary and the Angelus.
// Sources: EWTN, Vatican News, USCCB, Sanctuary of Fátima (fatima.pt) for
// English/Latin/Spanish/Portuguese. Konkani (Romi script) text is drawn from
// long-standing Konkani Catholic prayer community sources (not an official
// diocesan publication) — see the note on the "Other Prayers" tab.

export const PRAYERS = {
  signOfCross: {
    title: {
      en: 'Sign of the Cross',
      la: 'Signum Crucis',
      es: 'Señal de la Cruz',
      pt: 'Sinal da Cruz',
      kok: 'Khursachi Kuru',
    },
    text: {
      en: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
      la: 'In nomine Patris, et Filii, et Spiritus Sancti. Amen.',
      es: 'En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.',
      pt: 'Em nome do Pai, e do Filho, e do Espírito Santo. Amém.',
      kok: 'Bapache, ani Putache ani Povitr Atmeache nanvim. Amen',
    },
  },

  apostlesCreed: {
    title: {
      en: "Apostles' Creed",
      la: 'Symbolum Apostolorum',
      es: 'Credo (Símbolo de los Apóstoles)',
      pt: 'Credo (Símbolo dos Apóstolos)',
      kok: "Sotmantam",
    },
    text: {
      en: 'I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son Our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into Hell; the third day He rose again from the dead; He ascended into Heaven, and sitteth at the right hand of God, the Father almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body and life everlasting. Amen.',
      la: 'Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus, descendit ad infernos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem et vitam aeternam. Amen.',
      es: 'Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.',
      pt: 'Creio em Deus, Pai todo-poderoso, Criador do Céu e da Terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos Céus; está sentado à direita de Deus Pai todo-poderoso, de onde há-de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na santa Igreja Católica; na comunhão dos Santos; na remissão dos pecados; na ressurreição da carne; e na vida eterna. Amém.',
      kok: "Sotman’tam Devak, Sorv-podvedar Bapak, sorga ani prithumechea Rochnnarak. Ani Jezu Kristak, Tachea ekleach Putak, amchea Somiak. To Povitr Atmea vorvim gorbhim sombhovlo, Ankvar Morie thavn zolmolo. Pons Pilata khal Tannem koxtt sosle, Taka Khursar zoddlo, To melo, ani Taka nikipilo. To mel’leam modem denvlo, Tisrea disa mel'leantlo jivont zalo. Sorgar choddlo, Sorv-podvedar Deva Bapachea uzveak bosla. Thoim thavn jiveam ani mel’leanchi mon’subi korunk ietolo. Sotman’tam Povitr Atmeak, Katolik Povitr Sobhek, bhoktancho ektar, patkanchem bhogsonnem, kuddichem jivontponn, sasnnachem jivit. Amen.",
    },
  },

  ourFather: {
    title: {
      en: 'Our Father',
      la: 'Pater Noster',
      es: 'Padre Nuestro',
      pt: 'Pai Nosso',
      kok: 'Amchea Bapa',
    },
    text: {
      en: 'Our Father, Who art in heaven, hallowed be Thy name, Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation; but deliver us from evil. Amen.',
      la: 'Pater noster, qui es in caelis: Sanctificetur nomen tuum: Adveniat regnum tuum: Fiat voluntas tua, sicut in caelo, et in terra. Panem nostrum quotidianum da nobis hodie: Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.',
      es: 'Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.',
      pt: 'Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém.',
      kok: "Amchea Bapa Sorginchea, Tujem Nanv povitr zanv, Tujem raz amkam ieum, Tuji khuxi sorgar zata toxi sonvsarant zanv. \n Amcho dispott'tto giras aiz amkam di, ani ami amcher chukleleank bhogxitanv, toxem amchi patkam bhogos, ani amkam tallnent poddunk dium naka, punn vaittantlim amkam nivar. Amen.",
    },
  },

  hailMary: {
    title: {
      en: 'Hail Mary',
      la: 'Ave Maria',
      es: 'Dios te Salve, María',
      pt: 'Avé Maria',
      kok: 'Noman Marie',
    },
    text: {
      en: 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
      la: 'Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc, et in hora mortis nostrae. Amen.',
      es: 'Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.',
      pt: 'Avé Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
      kok: 'Noman Marie, Kurpen bhorlele, Sorvespor tuje thaim asa, Ostoream modem tum sodoiv, ani sodoiv tuzo Put Jezu. \n Bhagevont Marie, Devache Maie, amam papiam khatir vinoti kor, atam ani amchea mornachea vellar. Amen.',
    },
  },

  gloryBe: {
    title: {
      en: 'Glory Be',
      la: 'Gloria Patri',
      es: 'Gloria al Padre',
      pt: 'Glória ao Pai',
      kok: 'Mhoima Bapak',
    },
    text: {
      en: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
      la: 'Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.',
      es: 'Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.',
      pt: 'Glória ao Pai e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre, e para todo o sempre. Amém.',
      kok: 'Mhoima Bapak, ani Putak ani Povitr Atmeak \n Adim, atam ani sodam sodankal. Amen.',
    },
  },

  fatimaPrayer: {
    title: {
      en: 'O My Jesus (Fátima Prayer)',
      la: 'O Mi Iesu',
      es: 'Oh Jesús Mío',
      pt: 'Ó Meu Jesus',
      kok: 'O Mhojea Jezu',
    },
    text: {
      en: 'O my Jesus, forgive us our sins, save us from the fires of hell. Lead all souls to Heaven, especially those in most need of thy mercy.',
      la: 'O mi Iesu, dimitte nobis debita nostra, salva nos ab igne inferni, adduc in caelum omnes animas, praesertim illas, quae misericordiae tuae maxime indigent.',
      es: '¡Oh Jesús mío!, perdona nuestros pecados, líbranos del fuego del infierno, lleva todas las almas al cielo y socorre especialmente a las más necesitadas de tu misericordia.',
      pt: 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas todas para o Céu, principalmente as que mais precisarem.',
      kok: 'O mhojea Jezu, bhogos amchim patkam, nivar amkam yemkhonddantlea ujeantlim; vhor sorgar sogllea atmeank, odik korun chodd goroz asloleank',
    },
  },

  hailHolyQueen: {
    title: {
      en: 'Hail Holy Queen',
      la: 'Salve Regina',
      es: 'Dios te Salve, Reina',
      pt: 'Salve Rainha',
      kok: 'Noman Rannie',
    },
    text: {
      en: 'Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us, and after this, our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.',
      la: 'Salve, Regina, mater misericordiae; vita, dulcedo et spes nostra, salve. Ad te clamamus exsules filii Hevae. Ad te suspiramus gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, o pia, o dulcis Virgo Maria.',
      es: 'Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh, clementísima, oh piadosa, oh dulce Virgen María!',
      pt: 'Salve, Rainha, mãe de misericórdia, vida, doçura, esperança nossa, salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses Vossos olhos misericordiosos a nós volvei. E, depois deste desterro, nos mostrai Jesus, bendito fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria.',
      kok: "Noman Rannie, kakutiche Maie, tunch ge amchem jivit, omrut ani bhorvanso. Ami pordexi Evechim ballkam tuka ulo martanv. Hea dukhachea khonddant suskar soddun, rudon korun, Maie, tuka prath'tanv. Amcher, doiall xeratini, tuji kakutichi nodor ghal, tum konnvalle ani mogall, dulob Ankvar Marie, hea pordesa uprant tuzo Put Jezu amkam dhakoi",
    },
    versicle: {
      en: { v: 'Pray for us, O holy Mother of God.', r: 'That we may be made worthy of the promises of Christ.' },
      la: { v: 'Ora pro nobis, sancta Dei Genitrix.', r: 'Ut digni efficiamur promissionibus Christi.' },
      es: { v: 'Ruega por nosotros, Santa Madre de Dios.', r: 'Para que seamos dignos de alcanzar las promesas de Cristo.' },
      pt: { v: 'Rogai por nós, Santa Mãe de Deus.', r: 'Para que sejamos dignos das promessas de Cristo.' },
      kok: { v: 'Bhagevont Devache Maie, amche khatir mag.', r: 'Jezun bhasailam tem amkam favo zauncheak.' },
    },
    closingPrayer: {
      en: 'Let us pray. O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal salvation; grant, we beseech Thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may both imitate what they contain and obtain what they promise, through Christ our Lord. Amen.',
      la: 'Oremus. Deus, cuius Unigenitus per vitam, mortem et resurrectionem suam nobis salutis aeternae praemia comparavit: concede, quaesumus, ut haec mysteria sacratissimo beatae Mariae Virginis Rosario recolentes, et imitemur quod continent, et quod promittunt, assequamur. Per eundem Christum Dominum nostrum. Amen.',
      es: 'Oremos: Oh Dios, cuyo Unigénito Hijo, con su vida, muerte y resurrección, nos ha conseguido los bienes de la vida eterna, concédenos, te suplicamos, que meditando estos misterios en el Santísimo Rosario de la Bienaventurada Virgen María, imitemos lo que contienen y alcancemos lo que prometen. Por el mismo Cristo, Nuestro Señor. Amén.',
      pt: 'Oremos: Ó Deus, cujo Filho Unigênito, por sua vida, morte e ressurreição, nos mereceu as recompensas da salvação eterna, concedei, nós Vo-lo pedimos, que, meditando estes mistérios do Santíssimo Rosário da Bem-Aventurada Virgem Maria, imitemos o que eles contêm e consigamos o que prometem. Pelo mesmo Cristo, Nosso Senhor. Amém.',
      kok: 'Magum-ia: Deva, Tujea ekleach Putan Aplea jivita, mornna ani punorjivontponna vorvim amkam sasnachea sukhacho mukutt zoddlo. Bhagevonti Ankvar Mariyeche bhov Povitr Ruzaiche Mister ami niyalltanv, tantunt atthaplelem asa tachi dekh gheum-xi ani bhasailelem asa tem amkam melloxem kor mhonn magtanv. Teach amchea Somia Jezu Krista vorvim. Oxem zaum. \n Devacho adar asum sodankal amche tthaim. Oxem zaum',
    },
  },

  // Three more "Other Prayers" tab entries, in Konkani — titles only for
  // now, and only in Konkani. `en` (and `la`/`es`/`pt`) are left blank on
  // purpose: these prayers don't have an English name yet, and the UI hides
  // a prayer's tab entirely in any language where its title is blank (see
  // AngelusPage.jsx) rather than showing an empty button. Text is left
  // blank in every language to be filled in later.
  hanvPatki: {
    title: {
      en: '',
      la: '',
      es: '',
      pt: '',
      kok: 'Hanv Patki',
    },
    text: {
      en: '',
      la: '',
      es: '',
      pt: '',
      kok: 'Hanv patki, Sorpodvedar Devak ani tumkam, bhavam-bhoinnimno, mhozo guneanv ucharun sangtam; monan chintun ani tonddan ucharun, vaitt adharun ani borem soddun, hanven zaitim patkam keleant (horddear marun mhonnta) Ho mhozo oprad, ho mhozo oprad, ho mhozo bhov vhodd oprad. Hea pasot bhagevont sodanch Ankvar Mariek, sogllea devdutank and bhoktank, ani tumkam, bhavam-bhoinnimno, mhoje khatir, amchea Sorvespora Deva lagim, vinoti korat mhonn prarthun magtam',
    },
  },

  dukhichiUcharnni: {
    title: {
      en: '',
      la: '',
      es: '',
      pt: '',
      kok: 'Dukhichi Ucharnni',
    },
    text: {
      en: '',
      la: '',
      es: '',
      pt: '',
      kok: 'Deva, mhojea Bapa, Tum chodd boro ani mogall astana Tujer ani mhojea bhavam-bhoinnincher hanvem chuk keli. Dekhun mhaka vhodd khont bhogta, ani khaltea kallzan mhaka bhogos mhunn magtam. Tujeach adharacher patieun novean patok korinam zauncheak vavrunk hanv bhas ditam.',
    },
  },

  litanyOfTheBlessedVirginMary: {
    title: {
      en: 'Litany of the Blessed Virgin Mary',
      la: '',
      es: '',
      pt: '',
      kok: 'Saibinichi Ladain',
    },
    text: {
      en: 'Lord \t *have mercy on us* \n Christ \t *"* \n Lord \t *"* \n Christ \t *hear us* \n Christ \t *graciously hear us* \n God the Father of heaven \t *have mercy on us* \n God the Son, Redeemer of the world \t *"* \n God the Holy Spirit \t *"* \n Holy Trinity, one God \t *"* \n Holy Mary  \t *pray for us* \n Holy Mother of God \t *"* \n Holy Virgin of virgins \t *"* \n Mother of Christ \t *"* \n Mother of the Church \t *"* \n Mother of mercy \t *"* \n Mother of divine grace \t *"* \n Mother of hope \t *"* \n Mother most pure \t *"* \n Mother most chaste \t *"* \n Mother inviolate \t *pray for us* \n Mother undefiled \t *"* \n Mother most amiable \t *"* \n Mother most admirable \t *"* \n Mother of good counsel \t *"* \n Mother of our Creator \t *"* \n Mother of our Savior \t *"* \n Virgin most prudent \t *"* \n Virgin most venerable \t *"* \n Virgin most renowned \t *"* \n Virgin most powerful \t *pray for us* \n Virgin most merciful \t *"* \n Virgin most faithful \t *"* \n Mirror of justice \t *"* \n Seat of wisdom \t *"* \n Cause of our joy \t *"* \n Spiritual vessel \t *"* \n Vessel of honor \t *"* \n Singular vessel of devotion \t *"* \n Mystical rose \t *"* \n Tower of David \t *pray for us* \n Tower of ivory \t *"* \n House of gold \t *"* \n Ark of the covenant \t *"* \n Gate of heaven \t *"* \n Morning star \t *"* \n Health of the sick \t *"* \n Refuge of sinners \t *"* \n Comfort of Migrants \t *"* \n Comforter of the afflicted \t *"* \n Help of Christians \t *pray for us* \n Queen of Angels \t *"* \n Queen of Patriarchs \t *"* \n Queen of Prophets \t *"* \n Queen of Apostles \t *"* \n Queen of Martyrs \t *"* \n Queen of Confessors \t *"* \n Queen of Virgins \t *"* \n Queen of all Saints \t *"* \n Queen conceived without original sin \t *"* \n Queen assumed into heaven \t *pray for us* \n Queen of the most holy Rosary \t *"* \n Queen of Families \t *"* \n Queen of Peace \t *"* \n Lamb of God, you take away the sins of the world \t *Spare us, O Lord* \n Lamb of God, you take away the sins of the world \t *Graciously hear us, O Lord* \n Lamb of God, you take away the sins of the world \t *Have mercy on us*',
      la: '',
      es: '',
      pt: '',
      kok: 'Sorvespora Deva \t *amchi kaklut kor* \n Krista Somia \t *"* \n Sorvespora Deva \t *"* \n Krista Somia \t *amkam aik* \n Krista Somia \t *doyen amkam aik* \n Deva Sorginchea Bapa \t *amchi kaklut kor* \n Deva Putra, sonvsarachea Soddvonndara \t *"* \n Deva Povitr Atmea \t *"* \n Povitr Tritve, ekleach Deva \t *"* \n Bhagevonti Marie \t *amche pasun mag* \n Bhagevonti Devache Maie \t *"* \n Bhagevonti Ankvariche Ankvari \t *"* \n Kristache Maie \t *"* \n Povitr Sobheche Maie \t *"* \n Kaklutiche Maie \t *"* \n Dev Kurpeche Maie \t *"* \n Bhorvanxeache Maie \t *"* \n Bhou nitoll Maie \t *"* \n Bhou nirmoll Maie \t *"* \n Bhoxttounaslole Maie \t *amche pasun mag* \n Khot lagonk naslole Maie \t *"* \n Mogall Maie \t *"* \n Ojapanche Maie \t *"* \n Bore budhiche Maie \t *"* \n Rochnnarache Maie \t *"* \n Soddvonndarache Maie \t *"* \n Bhou xanne Ankvari \t *"* \n Man favo aslole Ankvari \t *"* \n Onod favo aslole Ankvari \t *"* \n Podvedar Ankvari \t *amche pasun mag* \n Kaklutsar Ankvari \t *"* \n Visvaxi Ankvari \t *"* \n Nittayechea Arxea \t *"* \n Zannvayechea Thikanna \t *"* \n Amchea sontosachea prestava \t *"* \n Dev Kurpechea Aidona \t *"* \n Manachea Aidona \t *"* \n Ut`tom Devosavanchea Aidona \t *"* \n Ghuttachea Roza \t *"* \n Davidache Tori \t *amche pasun mag* \n Marfinche Tori \t *"* \n Bhangarachea Ghora \t *"* \n Ekvottachea Arka \t *"* \n Sorginchea Darvonttea \t *"* \n Fanteavelea Nokhetra \t *"* \n Piddevontache bholaike \t *"* \n Patkeanchea Asrea \t *"* \n Pordexeanchea Somadhana \t *"* \n Kristanvachea Alaxirea \t *"* \n Dukhestanche Buzvondare \t *amche pasun mag* \n Bhoddveanchea Rannie \t *"* \n Patriarkanche Rannie \t *"* \n Profetanche Rannie \t *"* \n Apostlanche Rannie \t *"* \n Martirinche Rannie \t *"* \n Konfesoranche Rannie \t *"* \n Ankvarinche Rannie \t *"* \n Soglleam Bhoktanche Rannie \t *"* \n Soimbhachea khotavinne gorb sombhoulole Rannie \t *"* \n Kuddi-Otmea soit sorgar vhelele Rannie \t *amche pasun mag* \n Bhou Povitr Ruzaiche Rannie \t *"* \n Sovostayeche Rannie \t *"* \n Devache Xellie sonvsarachim patkam kaddtole \t *amkam bhogos Saiba* \n Devache Xellie sonvsarachim patkam kaddtole \t *doyen amkam aik Saiba* \n Devache Xellie sonvsarachim patkam kaddtole \t *amchi kaklut kor*',
    },
  },
};

// The Angelus versicles (each followed by a Hail Mary) plus the closing
// versicle/response and collect. Source: catholicism.org/angelus, Vatican News.
export const ANGELUS = {
  title: {
    en: 'The Angelus',
    la: 'Angelus',
    es: 'El Ángelus',
    pt: 'O Angelus',
    kok: 'Amori',
  },
  versicles: [
    {
      v: {
        en: 'The Angel of the Lord declared unto Mary.',
        la: 'Angelus Domini nuntiavit Mariae.',
        es: 'El ángel del Señor anunció a María.',
        pt: 'O Anjo do Senhor anunciou a Maria.',
        kok: 'Sorvesporachea Boddvean Ankvar Mariek khobor dili',
      },
      r: {
        en: 'And she conceived of the Holy Spirit.',
        la: 'Et concepit de Spiritu Sancto.',
        es: 'Y concibió por obra y gracia del Espíritu Santo.',
        pt: 'E Ela concebeu pelo Espírito Santo.',
        kok: 'Ani Povitr Atmeache kurpen ti gorbhest zali.',
      },
    },
    {
      v: {
        en: 'Behold the handmaid of the Lord.',
        la: 'Ecce ancilla Domini.',
        es: 'He aquí la esclava del Señor.',
        pt: 'Eis a escrava do Senhor.',
        kok: 'Hanv Sorvesporachi Chakorn,',
      },
      r: {
        en: 'Be it done unto me according to Thy word.',
        la: 'Fiat mihi secundum verbum tuum.',
        es: 'Hágase en mí según tu palabra.',
        pt: 'Faça-se em mim, segundo a Vossa palavra.',
        kok: 'Tujea utram pormonnem mhoje sovem ghoddon',
      },
    },
    {
      v: {
        en: 'And the Word was made Flesh.',
        la: 'Et Verbum caro factum est.',
        es: 'Y el Verbo de Dios se hizo carne.',
        pt: 'E o Verbo Divino encarnou.',
        kok: 'Devacho Put moniz zalo',
      },
      r: {
        en: 'And dwelt among us.',
        la: 'Et habitavit in nobis.',
        es: 'Y habitó entre nosotros.',
        pt: 'E habitou entre nós.',
        kok: 'Ani amche modhem jielo..',
      },
    },
  ],
  closingVersicle: {
    v: {
      en: 'Pray for us, O holy Mother of God.',
      la: 'Ora pro nobis, sancta Dei Genitrix.',
      es: 'Ruega por nosotros, Santa Madre de Dios.',
      pt: 'Rogai por nós, santa Mãe de Deus.',
      kok: 'Bhagevont Devache Maie, amche khatir mag.',
    },
    r: {
      en: 'That we may be made worthy of the promises of Christ.',
      la: 'Ut digni efficiamur promissionibus Christi.',
      es: 'Para que seamos dignos de alcanzar las promesas de Jesucristo.',
      pt: 'Para que sejamos dignos das promessas de Cristo.',
      kok: 'Jezun bhasailam tem amkam favo zauncheak.',
    },
  },
  closingPrayer: {
    en: 'Let us pray. Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we, to whom the Incarnation of Christ, Thy Son, was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.',
    la: 'Oremus. Gratiam tuam, quaesumus Domine, mentibus nostris infunde: ut qui, Angelo nuntiante, Christi Filii tui incarnationem cognovimus, per passionem eius et crucem ad resurrectionis gloriam perducamur. Per eundem Christum Dominum nostrum. Amen.',
    es: 'Oremos: Oh Padre, infunde en nuestra alma tu gracia. Tú, que en la anunciación del Ángel nos has revelado la encarnación de tu Hijo, por su pasión y su cruz condúcenos a la gloria de la resurrección. Por Cristo, Nuestro Señor. Amén.',
    pt: 'Oremos: Infundi no nosso espírito a vossa graça, ó Pai; Vós que na anunciação do anjo nos revelastes a encarnação do vosso Filho, pela sua Paixão e Cruz, conduzi-nos à glória da ressurreição. Por Cristo, nosso Senhor. Amém.',
    kok: 'Prarthum-ia: Sorvespora, amchea kallzamnim Tuji kurpa ghal mhonn magtanv, Tujea bhoddvean amkam kolloilam dekhun Jezu Tuzo put monis zalo mhunn amkam ollkunk pavleanv; atam Tachea koxttam ani Khursa vorvim punor-jivontponnachea voibhovak pavum-xim kor. Teach Krista amchea Somia vorvim. Amen.',
  },
};

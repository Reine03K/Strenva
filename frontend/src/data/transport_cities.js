// Données des villes françaises avec leurs informations de transport
// Les liens vers les APIs officielles permettent de garder les informations à jour

export const transportCities = [
  {
    id: 'paris',
    name: 'Paris',
    region: 'Île-de-France',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80', // Tour Eiffel
    transportSystem: {
      name: 'RATP',
      fullName: 'Régie Autonome des Transports Parisiens',
      description: 'Le réseau de transport public de Paris comprend le métro, les bus, les tramways et le RER.',
      types: ['Métro', 'Bus', 'RER', 'Tramway']
    },
    studentCard: {
      name: 'Pass Navigo étudiant',
      description: 'Tarif réduit pour les étudiants de moins de 26 ans',
      monthlyPrice: '38.60€',
      annualPrice: '350€',
      officialLink: 'https://www.iledefrance-mobilites.fr/titres-et-tarifs/detail/forfait-navigo-annuel'
    },
    apiLinks: {
      schedules: 'https://data.ratp.fr/api',
      realTime: 'https://prim.iledefrance-mobilites.fr/fr',
      officialWebsite: 'https://www.ratp.fr/',
      officialApp: 'https://www.ratp.fr/apps'
    },
    steps: [
      {
        number: 1,
        title: 'Se renseigner sur le réseau RATP',
        description: 'Consultez le site officiel pour comprendre le fonctionnement du métro, bus, RER et tramway',
        link: 'https://www.ratp.fr/'
      },
      {
        number: 2,
        title: 'Demander le Pass Navigo étudiant',
        description: 'Rendez-vous dans une agence RATP ou commandez en ligne avec votre certificat de scolarité',
        link: 'https://www.iledefrance-mobilites.fr/titres-et-tarifs/forfait-navigo-annuel'
      },
      {
        number: 3,
        title: 'Télécharger l\'application mobile',
        description: 'Installez l\'app RATP pour consulter les horaires en temps réel et planifier vos trajets',
        link: 'https://www.ratp.fr/apps'
      },
      {
        number: 4,
        title: 'Configurer les abonnements mensuels',
        description: 'Activez le renouvellement automatique pour ne jamais oublier de recharger votre pass',
        link: 'https://www.iledefrance-mobilites.fr/'
      }
    ],
    officialLinks: [
      {
        name: 'RATP - Site officiel',
        description: 'Réseau de transport parisien',
        url: 'https://www.ratp.fr/'
      },
      {
        name: 'Île-de-France Mobilités',
        description: 'Autorité organisatrice des transports',
        url: 'https://www.iledefrance-mobilites.fr/'
      },
      {
        name: 'Application RATP',
        description: 'Horaires et itinéraires en temps réel',
        url: 'https://www.ratp.fr/apps'
      }
    ]
  },
  {
    id: 'lyon',
    name: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    image: 'https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=800&q=80', // Lyon Basilique de Fourvière
    transportSystem: {
      name: 'TCL',
      fullName: 'Transports en Commun Lyonnais',
      description: 'Le réseau TCL dessert Lyon et son agglomération avec métro, tramway, bus et funiculaire.',
      types: ['Métro', 'Bus', 'Tramway', 'Funiculaire']
    },
    studentCard: {
      name: 'Abonnement TCL étudiant',
      description: 'Tarif jeune pour les moins de 26 ans',
      monthlyPrice: '32€',
      annualPrice: '320€',
      officialLink: 'https://www.tcl.fr/tarifs/abonnements-mensuels-et-annuels'
    },
    apiLinks: {
      schedules: 'https://download.data.grandlyon.com/ws/rdata/tcl_sytral.tcllignehoraire/all.json',
      realTime: 'https://data.grandlyon.com/portail/fr/jeux-de-donnees',
      officialWebsite: 'https://www.tcl.fr/',
      officialApp: 'https://www.tcl.fr/se-deplacer/tous-les-services-tcl/application-tcl'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir le réseau TCL',
        description: 'Explorez les 4 lignes de métro, 7 lignes de tramway et le réseau de bus de Lyon',
        link: 'https://www.tcl.fr/'
      },
      {
        number: 2,
        title: 'Demander la carte TCL étudiant',
        description: 'Souscrivez à l\'abonnement jeune avec votre carte étudiante dans une agence TCL',
        link: 'https://www.tcl.fr/tarifs/abonnements-mensuels-et-annuels'
      },
      {
        number: 3,
        title: 'Télécharger l\'application TCL',
        description: 'Consultez les horaires, achetez vos titres et planifiez vos déplacements',
        link: 'https://www.tcl.fr/se-deplacer/tous-les-services-tcl/application-tcl'
      },
      {
        number: 4,
        title: 'Profiter du vélo en libre-service',
        description: 'Inscrivez-vous au service Vélo\'v pour compléter vos déplacements',
        link: 'https://velov.grandlyon.com/'
      }
    ],
    officialLinks: [
      {
        name: 'TCL Lyon',
        description: 'Transports en commun lyonnais',
        url: 'https://www.tcl.fr/'
      },
      {
        name: 'Application TCL',
        description: 'Itinéraires et horaires en temps réel',
        url: 'https://www.tcl.fr/se-deplacer/tous-les-services-tcl/application-tcl'
      },
      {
        name: 'Vélo\'v',
        description: 'Vélos en libre-service',
        url: 'https://velov.grandlyon.com/'
      }
    ]
  },
  {
    id: 'marseille',
    name: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur',
    image: 'https://images.unsplash.com/photo-1563260797-cb5cd70254c8?w=800&q=80', // Marseille Vieux-Port
    transportSystem: {
      name: 'RTM',
      fullName: 'Régie des Transports Métropolitains',
      description: 'Le réseau RTM comprend 2 lignes de métro, 3 lignes de tramway et un vaste réseau de bus.',
      types: ['Métro', 'Bus', 'Tramway', 'Ferry']
    },
    studentCard: {
      name: 'Carte RTM Jeune',
      description: 'Tarif étudiant moins de 26 ans',
      monthlyPrice: '30€',
      annualPrice: '300€',
      officialLink: 'https://www.rtm.fr/tarifs/abonnements'
    },
    apiLinks: {
      schedules: 'https://www.rtm.fr/api',
      realTime: 'https://data.ampmetropole.fr/',
      officialWebsite: 'https://www.rtm.fr/',
      officialApp: 'https://www.rtm.fr/services/application-mobile'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir le réseau RTM',
        description: 'Familiarisez-vous avec le métro, tramway et les lignes de bus de Marseille',
        link: 'https://www.rtm.fr/'
      },
      {
        number: 2,
        title: 'Obtenir la Carte Jeune',
        description: 'Demandez votre abonnement étudiant dans une agence RTM avec justificatif',
        link: 'https://www.rtm.fr/tarifs/abonnements'
      },
      {
        number: 3,
        title: 'Installer l\'application RTM',
        description: 'Téléchargez l\'app pour gérer vos déplacements et acheter des tickets',
        link: 'https://www.rtm.fr/services/application-mobile'
      },
      {
        number: 4,
        title: 'Explorer le Ferry Boat',
        description: 'Découvrez la traversée gratuite du Vieux-Port incluse dans votre abonnement',
        link: 'https://www.rtm.fr/lignes/ferry-boat'
      }
    ],
    officialLinks: [
      {
        name: 'RTM Marseille',
        description: 'Réseau de transport marseillais',
        url: 'https://www.rtm.fr/'
      },
      {
        name: 'Application RTM',
        description: 'Horaires et titres de transport',
        url: 'https://www.rtm.fr/services/application-mobile'
      },
      {
        name: 'Open Data Marseille',
        description: 'Données transport en temps réel',
        url: 'https://data.ampmetropole.fr/'
      }
    ]
  },
  {
    id: 'toulouse',
    name: 'Toulouse',
    region: 'Occitanie',
    image: 'https://images.unsplash.com/photo-1597417187178-14a0c781b42a?w=800&q=80', // Toulouse Place du Capitole
    transportSystem: {
      name: 'Tisséo',
      fullName: 'Tisséo Collectivités',
      description: 'Le réseau Tisséo propose 2 lignes de métro, 2 lignes de tramway et de nombreuses lignes de bus.',
      types: ['Métro', 'Bus', 'Tramway']
    },
    studentCard: {
      name: 'Abonnement Pastel Étudiant',
      description: 'Tarif réduit pour étudiants',
      monthlyPrice: '29€',
      annualPrice: '290€',
      officialLink: 'https://www.tisseo.fr/tarifs-et-abonnements/abonnements'
    },
    apiLinks: {
      schedules: 'https://data.toulouse-metropole.fr/explore/dataset/tisseo-horaires/',
      realTime: 'https://www.tisseo.fr/open-data',
      officialWebsite: 'https://www.tisseo.fr/',
      officialApp: 'https://www.tisseo.fr/services/application-mobile'
    },
    steps: [
      {
        number: 1,
        title: 'Explorer le réseau Tisséo',
        description: 'Découvrez les 2 lignes de métro et le réseau de tramway et bus toulousain',
        link: 'https://www.tisseo.fr/'
      },
      {
        number: 2,
        title: 'Commander la carte Pastel',
        description: 'Souscrivez à l\'abonnement étudiant en ligne ou en agence',
        link: 'https://www.tisseo.fr/tarifs-et-abonnements/abonnements'
      },
      {
        number: 3,
        title: 'Télécharger l\'application Tisséo',
        description: 'Gérez vos déplacements et consultez les horaires en temps réel',
        link: 'https://www.tisseo.fr/services/application-mobile'
      },
      {
        number: 4,
        title: 'Utiliser le vélo en libre-service',
        description: 'Profitez du service VélôToulouse pour vos trajets courts',
        link: 'https://www.velo.toulouse.fr/'
      }
    ],
    officialLinks: [
      {
        name: 'Tisséo Toulouse',
        description: 'Réseau de transport toulousain',
        url: 'https://www.tisseo.fr/'
      },
      {
        name: 'Application Tisséo',
        description: 'Itinéraires et horaires',
        url: 'https://www.tisseo.fr/services/application-mobile'
      },
      {
        name: 'VélôToulouse',
        description: 'Vélos en libre-service',
        url: 'https://www.velo.toulouse.fr/'
      }
    ]
  },
  {
    id: 'strasbourg',
    name: 'Strasbourg',
    region: 'Grand Est',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80', // Strasbourg Petite France
    transportSystem: {
      name: 'CTS',
      fullName: 'Compagnie des Transports Strasbourgeois',
      description: 'Le réseau CTS est composé de 6 lignes de tramway et d\'un réseau de bus couvrant l\'Eurométropole.',
      types: ['Tramway', 'Bus']
    },
    studentCard: {
      name: 'Carte Badgéo étudiant',
      description: 'Tarif jeune moins de 28 ans',
      monthlyPrice: '28€',
      annualPrice: '280€',
      officialLink: 'https://www.cts-strasbourg.eu/fr/titres-tarifs/'
    },
    apiLinks: {
      schedules: 'https://www.cts-strasbourg.eu/fr/api/',
      realTime: 'https://data.strasbourg.eu/',
      officialWebsite: 'https://www.cts-strasbourg.eu/',
      officialApp: 'https://www.cts-strasbourg.eu/fr/application-mobile/'
    },
    steps: [
      {
        number: 1,
        title: 'Se renseigner sur CTS',
        description: 'Découvrez le réseau de tramway et de bus de Strasbourg',
        link: 'https://www.cts-strasbourg.eu/'
      },
      {
        number: 2,
        title: 'Demander la carte Badgéo étudiant',
        description: 'Commandez votre carte avec tarif réduit en agence ou en ligne',
        link: 'https://www.cts-strasbourg.eu/fr/titres-tarifs/'
      },
      {
        number: 3,
        title: 'Télécharger l\'application mobile',
        description: 'Installez l\'app CTS pour planifier vos trajets et acheter des tickets',
        link: 'https://www.cts-strasbourg.eu/fr/application-mobile/'
      },
      {
        number: 4,
        title: 'Configurer les abonnements mensuels',
        description: 'Activez le rechargement automatique de votre abonnement',
        link: 'https://www.cts-strasbourg.eu/fr/titres-tarifs/'
      }
    ],
    officialLinks: [
      {
        name: 'CTS Strasbourg',
        description: 'Transport en commun strasbourgeois',
        url: 'https://www.cts-strasbourg.eu/'
      },
      {
        name: 'Application CTS',
        description: 'Horaires et itinéraires',
        url: 'https://www.cts-strasbourg.eu/fr/application-mobile/'
      },
      {
        name: 'Vélhop',
        description: 'Service de vélos',
        url: 'https://www.velhop.strasbourg.eu/'
      }
    ]
  },
  {
    id: 'nantes',
    name: 'Nantes',
    region: 'Pays de la Loire',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&q=80', // Nantes Château des Ducs
    transportSystem: {
      name: 'TAN',
      fullName: 'Transports de l\'Agglomération Nantaise',
      description: '3 lignes de tramway, 1 ligne de busway et un réseau de bus desservent Nantes Métropole.',
      types: ['Tramway', 'Bus', 'Busway', 'Navibus']
    },
    studentCard: {
      name: 'Abonnement TAN Jeune',
      description: 'Tarif étudiant moins de 26 ans',
      monthlyPrice: '27€',
      annualPrice: '270€',
      officialLink: 'https://www.tan.fr/abonnements'
    },
    apiLinks: {
      schedules: 'https://data.nantesmetropole.fr/explore/dataset/244400404_tan-arrets/',
      realTime: 'https://www.tan.fr/opendata',
      officialWebsite: 'https://www.tan.fr/',
      officialApp: 'https://www.tan.fr/app'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir le réseau TAN',
        description: 'Explorez le tramway, busway et navibus de Nantes',
        link: 'https://www.tan.fr/'
      },
      {
        number: 2,
        title: 'Commander l\'abonnement Jeune',
        description: 'Souscrivez en ligne ou en agence avec votre justificatif étudiant',
        link: 'https://www.tan.fr/abonnements'
      },
      {
        number: 3,
        title: 'Installer l\'application TAN',
        description: 'Téléchargez l\'app pour gérer vos déplacements',
        link: 'https://www.tan.fr/app'
      },
      {
        number: 4,
        title: 'Utiliser le Navibus',
        description: 'Découvrez la navette fluviale sur l\'Erdre incluse dans votre abonnement',
        link: 'https://www.tan.fr/navibus'
      }
    ],
    officialLinks: [
      {
        name: 'TAN Nantes',
        description: 'Réseau de transport nantais',
        url: 'https://www.tan.fr/'
      },
      {
        name: 'Application TAN',
        description: 'Horaires et titres',
        url: 'https://www.tan.fr/app'
      },
      {
        name: 'Bicloo',
        description: 'Vélos en libre-service',
        url: 'https://www.bicloo.nantesmetropole.fr/'
      }
    ]
  },
  {
    id: 'nice',
    name: 'Nice',
    region: 'Provence-Alpes-Côte d\'Azur',
    image: 'https://images.unsplash.com/photo-1608501821300-4f99e58bba77?w=800&q=80', // Nice Promenade des Anglais
    transportSystem: {
      name: 'Lignes d\'Azur',
      fullName: 'Lignes d\'Azur',
      description: '2 lignes de tramway et un réseau de bus desservent Nice et sa métropole.',
      types: ['Tramway', 'Bus']
    },
    studentCard: {
      name: 'Pass Étudiant',
      description: 'Tarif réduit moins de 26 ans',
      monthlyPrice: '25€',
      annualPrice: '250€',
      officialLink: 'https://www.lignesdazur.com/tarifs'
    },
    apiLinks: {
      schedules: 'https://www.lignesdazur.com/api',
      realTime: 'https://opendata.nicecotedazur.org/',
      officialWebsite: 'https://www.lignesdazur.com/',
      officialApp: 'https://www.lignesdazur.com/app-mobile'
    },
    steps: [
      {
        number: 1,
        title: 'Explorer Lignes d\'Azur',
        description: 'Découvrez le réseau de tramway et bus de Nice',
        link: 'https://www.lignesdazur.com/'
      },
      {
        number: 2,
        title: 'Obtenir le Pass Étudiant',
        description: 'Demandez votre abonnement dans une agence avec justificatif',
        link: 'https://www.lignesdazur.com/tarifs'
      },
      {
        number: 3,
        title: 'Télécharger l\'application',
        description: 'Installez l\'app pour consulter horaires et itinéraires',
        link: 'https://www.lignesdazur.com/app-mobile'
      },
      {
        number: 4,
        title: 'Profiter du vélo libre-service',
        description: 'Utilisez Vélo Bleu pour vos courts trajets',
        link: 'https://www.velobleu.org/'
      }
    ],
    officialLinks: [
      {
        name: 'Lignes d\'Azur',
        description: 'Transport en commun niçois',
        url: 'https://www.lignesdazur.com/'
      },
      {
        name: 'Application mobile',
        description: 'Horaires en temps réel',
        url: 'https://www.lignesdazur.com/app-mobile'
      },
      {
        name: 'Vélo Bleu',
        description: 'Vélos en libre-service',
        url: 'https://www.velobleu.org/'
      }
    ]
  },
  {
    id: 'bordeaux',
    name: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800&q=80', // Bordeaux Place de la Bourse
    transportSystem: {
      name: 'TBM',
      fullName: 'Transports Bordeaux Métropole',
      description: '4 lignes de tramway et un réseau de bus desservent Bordeaux Métropole.',
      types: ['Tramway', 'Bus', 'Bat3']
    },
    studentCard: {
      name: 'Abonnement TBM Jeune',
      description: 'Tarif étudiant moins de 25 ans',
      monthlyPrice: '26.50€',
      annualPrice: '265€',
      officialLink: 'https://www.infotbm.com/titres-tarifs/'
    },
    apiLinks: {
      schedules: 'https://opendata.bordeaux-metropole.fr/',
      realTime: 'https://www.infotbm.com/opendata/',
      officialWebsite: 'https://www.infotbm.com/',
      officialApp: 'https://www.infotbm.com/application-mobile/'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir le réseau TBM',
        description: 'Explorez les 4 lignes de tramway et le réseau de bus bordelais',
        link: 'https://www.infotbm.com/'
      },
      {
        number: 2,
        title: 'Souscrire l\'abonnement Jeune',
        description: 'Commandez votre carte avec tarif réduit',
        link: 'https://www.infotbm.com/titres-tarifs/'
      },
      {
        number: 3,
        title: 'Installer l\'application TBM',
        description: 'Téléchargez l\'app pour gérer vos trajets',
        link: 'https://www.infotbm.com/application-mobile/'
      },
      {
        number: 4,
        title: 'Essayer le Bat3',
        description: 'Découvrez la navette fluviale sur la Garonne',
        link: 'https://www.infotbm.com/bat3/'
      }
    ],
    officialLinks: [
      {
        name: 'TBM Bordeaux',
        description: 'Transports Bordeaux Métropole',
        url: 'https://www.infotbm.com/'
      },
      {
        name: 'Application TBM',
        description: 'Horaires et itinéraires',
        url: 'https://www.infotbm.com/application-mobile/'
      },
      {
        name: 'VCub',
        description: 'Vélos en libre-service',
        url: 'https://www.infotbm.com/vcub/'
      }
    ]
  },
  {
    id: 'lille',
    name: 'Lille',
    region: 'Hauts-de-France',
    image: 'https://images.unsplash.com/photo-1552449847-3e78dcbff50b?w=800&q=80', // Lille Vieille Ville
    transportSystem: {
      name: 'Ilévia',
      fullName: 'Ilévia - Transports Lilois',
      description: 'Le réseau Ilévia comprend 2 lignes de métro automatique, 2 lignes de tramway et des bus.',
      types: ['Métro', 'Tramway', 'Bus']
    },
    studentCard: {
      name: 'Abonnement Ilévia Jeune',
      description: 'Tarif réduit moins de 26 ans',
      monthlyPrice: '30€',
      annualPrice: '300€',
      officialLink: 'https://www.ilevia.fr/se-deplacer/passer-ma-commande/'
    },
    apiLinks: {
      schedules: 'https://www.ilevia.fr/open-data/',
      realTime: 'https://opendata.lillemetropole.fr/',
      officialWebsite: 'https://www.ilevia.fr/',
      officialApp: 'https://www.ilevia.fr/application-mobile/'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir Ilévia',
        description: 'Explorez le métro automatique, tramway et réseau de bus lillois',
        link: 'https://www.ilevia.fr/'
      },
      {
        number: 2,
        title: 'Commander l\'abonnement Jeune',
        description: 'Souscrivez en ligne ou en agence avec justificatif étudiant',
        link: 'https://www.ilevia.fr/se-deplacer/passer-ma-commande/'
      },
      {
        number: 3,
        title: 'Installer l\'application Ilévia',
        description: 'Téléchargez l\'app pour consulter horaires et itinéraires',
        link: 'https://www.ilevia.fr/application-mobile/'
      },
      {
        number: 4,
        title: 'Utiliser le V\'Lille',
        description: 'Profitez du service de vélos en libre-service de la métropole',
        link: 'https://www.vlille.fr/'
      }
    ],
    officialLinks: [
      {
        name: 'Ilévia Lille',
        description: 'Réseau de transport lillois',
        url: 'https://www.ilevia.fr/'
      },
      {
        name: 'Application mobile',
        description: 'Horaires et titres',
        url: 'https://www.ilevia.fr/application-mobile/'
      },
      {
        name: 'V\'Lille',
        description: 'Vélos en libre-service',
        url: 'https://www.vlille.fr/'
      }
    ]
  },
  {
    id: 'rennes',
    name: 'Rennes',
    region: 'Bretagne',
    image: 'https://images.unsplash.com/photo-1601934152049-1c3b1da4f94f?w=800&q=80', // Rennes Palais du Parlement
    transportSystem: {
      name: 'STAR',
      fullName: 'Société de Transport en Commun de l\'Agglomération Rennaise',
      description: '1 ligne de métro, 1 ligne de tramway et un large réseau de bus desservent Rennes.',
      types: ['Métro', 'Tramway', 'Bus']
    },
    studentCard: {
      name: 'Pass STAR Jeune',
      description: 'Tarif étudiant moins de 26 ans',
      monthlyPrice: '29€',
      annualPrice: '290€',
      officialLink: 'https://www.star.fr/titres-et-tarifs/'
    },
    apiLinks: {
      schedules: 'https://www.star.fr/open-data/',
      realTime: 'https://data.rennes-metropole.fr/',
      officialWebsite: 'https://www.star.fr/',
      officialApp: 'https://www.star.fr/application-mobile/'
    },
    steps: [
      {
        number: 1,
        title: 'Explorer le réseau STAR',
        description: 'Découvrez le métro automatique, tramway et bus rennais',
        link: 'https://www.star.fr/'
      },
      {
        number: 2,
        title: 'Demander le Pass Jeune',
        description: 'Commandez votre abonnement avec tarif réduit',
        link: 'https://www.star.fr/titres-et-tarifs/'
      },
      {
        number: 3,
        title: 'Télécharger l\'application STAR',
        description: 'Installez l\'app pour planifier vos trajets',
        link: 'https://www.star.fr/application-mobile/'
      },
      {
        number: 4,
        title: 'Essayer le service de vélos',
        description: 'Utilisez Vélo STAR pour vos courts trajets',
        link: 'https://www.velostar.fr/'
      }
    ],
    officialLinks: [
      {
        name: 'STAR Rennes',
        description: 'Réseau de transport rennais',
        url: 'https://www.star.fr/'
      },
      {
        name: 'Application mobile',
        description: 'Horaires et itinéraires',
        url: 'https://www.star.fr/application-mobile/'
      },
      {
        name: 'Vélo STAR',
        description: 'Vélos en libre-service',
        url: 'https://www.velostar.fr/'
      }
    ]
  },
  {
    id: 'montpellier',
    name: 'Montpellier',
    region: 'Occitanie',
    image: 'https://images.unsplash.com/photo-1609814210833-86fb5db08af0?w=800&q=80', // Montpellier Place de la Comédie
    transportSystem: {
      name: 'TaM',
      fullName: 'Transports de Montpellier',
      description: '4 lignes de tramway et un réseau de bus desservent Montpellier Méditerranée Métropole.',
      types: ['Tramway', 'Bus']
    },
    studentCard: {
      name: 'Abonnement TaM Jeune',
      description: 'Tarif réduit étudiant',
      monthlyPrice: '28€',
      annualPrice: '280€',
      officialLink: 'https://www.tam-voyages.com/titres-tarifs/'
    },
    apiLinks: {
      schedules: 'https://www.tam-voyages.com/open-data/',
      realTime: 'https://data.montpellier-metropole.fr/',
      officialWebsite: 'https://www.tam-voyages.com/',
      officialApp: 'https://www.tam-voyages.com/application-mobile/'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir le réseau TaM',
        description: 'Explorez les 4 lignes de tramway et le réseau de bus montpelliérain',
        link: 'https://www.tam-voyages.com/'
      },
      {
        number: 2,
        title: 'Souscrire l\'abonnement Jeune',
        description: 'Commandez votre abonnement avec tarif réduit',
        link: 'https://www.tam-voyages.com/titres-tarifs/'
      },
      {
        number: 3,
        title: 'Installer l\'application TaM',
        description: 'Téléchargez l\'app pour gérer vos trajets',
        link: 'https://www.tam-voyages.com/application-mobile/'
      },
      {
        number: 4,
        title: 'Utiliser Vélomagg',
        description: 'Découvrez le service de vélos en libre-service',
        link: 'https://www.velomagg.fr/'
      }
    ],
    officialLinks: [
      {
        name: 'TaM Montpellier',
        description: 'Transports montpelliérains',
        url: 'https://www.tam-voyages.com/'
      },
      {
        name: 'Application mobile',
        description: 'Horaires et titres',
        url: 'https://www.tam-voyages.com/application-mobile/'
      },
      {
        name: 'Vélomagg',
        description: 'Vélos en libre-service',
        url: 'https://www.velomagg.fr/'
      }
    ]
  },
  {
    id: 'lille',
    name: 'Lille',
    region: 'Hauts-de-France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', // Lille Grand Place
    transportSystem: {
      name: 'Transpole',
      fullName: 'Transpole',
      description: '2 lignes de métro, 2 lignes de tramway et un vaste réseau de bus desservent Lille Métropole.',
      types: ['Métro', 'Tramway', 'Bus']
    },
    studentCard: {
      name: 'Abonnement Étudiant Transpole',
      description: 'Tarif réduit pour moins de 26 ans',
      monthlyPrice: '31€',
      annualPrice: '310€',
      officialLink: 'https://www.transpole.fr/tarifs'
    },
    apiLinks: {
      schedules: 'https://www.transpole.fr/open-data',
      realTime: 'https://data.lillemetropole.fr/',
      officialWebsite: 'https://www.transpole.fr/',
      officialApp: 'https://www.transpole.fr/services/application-mobile'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir Transpole',
        description: 'Explorez le métro, tramway et bus de Lille',
        link: 'https://www.transpole.fr/'
      },
      {
        number: 2,
        title: 'Commander l\'abonnement Étudiant',
        description: 'Souscrivez en ligne ou en agence avec votre carte étudiante',
        link: 'https://www.transpole.fr/tarifs'
      },
      {
        number: 3,
        title: 'Installer l\'application Transpole',
        description: 'Téléchargez l\'app pour horaires et itinéraires',
        link: 'https://www.transpole.fr/services/application-mobile'
      },
      {
        number: 4,
        title: 'Utiliser le vélo V\'Lille',
        description: 'Découvrez le service de vélos en libre-service de Lille',
        link: 'https://www.vlille.fr/'
      }
    ],
    officialLinks: [
      {
        name: 'Transpole Lille',
        description: 'Métro, tramway et bus lillois',
        url: 'https://www.transpole.fr/'
      },
      {
        name: 'Application mobile',
        description: 'Horaires et itinéraires',
        url: 'https://www.transpole.fr/services/application-mobile'
      },
      {
        name: 'V\'Lille',
        description: 'Vélos en libre-service',
        url: 'https://www.vlille.fr/'
      }
    ]
  },
  {
    id: 'rennes',
    name: 'Rennes',
    region: 'Bretagne',
    image: 'https://images.unsplash.com/photo-1570853168989-10b6fbf1e32f?w=800&q=80', // Rennes Palais du Parlement
    transportSystem: {
      name: 'STAR',
      fullName: 'Société de Transports en Commun de l\'Agglomération Rennaise',
      description: '1 ligne de métro automatique et un réseau de bus desservent Rennes.',
      types: ['Métro', 'Bus']
    },
    studentCard: {
      name: 'Abonnement Étudiant STAR',
      description: 'Tarif jeune moins de 26 ans',
      monthlyPrice: '26€',
      annualPrice: '260€',
      officialLink: 'https://www.star.fr/titres-tarifs/abonnements-mensuels'
    },
    apiLinks: {
      schedules: 'https://www.star.fr/open-data',
      realTime: 'https://data.rennes-metropole.fr/',
      officialWebsite: 'https://www.star.fr/',
      officialApp: 'https://www.star.fr/services/application'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir le réseau STAR',
        description: 'Explorez le métro automatique et les bus de Rennes',
        link: 'https://www.star.fr/'
      },
      {
        number: 2,
        title: 'Demander l\'abonnement Étudiant',
        description: 'Souscrivez en agence ou en ligne avec justificatif',
        link: 'https://www.star.fr/titres-tarifs/abonnements-mensuels'
      },
      {
        number: 3,
        title: 'Télécharger l\'application STAR',
        description: 'Installez l\'app pour planifier vos trajets',
        link: 'https://www.star.fr/services/application'
      },
      {
        number: 4,
        title: 'Utiliser le vélo STAR',
        description: 'Découvrez le service de vélos en libre-service',
        link: 'https://www.star.fr/services/velo-star'
      }
    ],
    officialLinks: [
      {
        name: 'STAR Rennes',
        description: 'Métro et bus rennais',
        url: 'https://www.star.fr/'
      },
      {
        name: 'Application mobile',
        description: 'Horaires et itinéraires',
        url: 'https://www.star.fr/services/application'
      },
      {
        name: 'Vélo STAR',
        description: 'Vélos en libre-service',
        url: 'https://www.star.fr/services/velo-star'
      }
    ]
  },
  {
    id: 'toulon',
    name: 'Toulon',
    region: 'Provence-Alpes-Côte d\'Azur',
    image: 'https://images.unsplash.com/photo-1606137874881-7f02e948ab21?w=800&q=80', // Toulon Port
    transportSystem: {
      name: 'RMTT',
      fullName: 'Régie des Transports Toulonnais',
      description: 'Un réseau de bus moderne desserve Toulon et son agglomération.',
      types: ['Bus', 'Téléphérique']
    },
    studentCard: {
      name: 'Abonnement Jeune RMTT',
      description: 'Tarif étudiant moins de 26 ans',
      monthlyPrice: '24€',
      annualPrice: '240€',
      officialLink: 'https://www.rmtt.fr/tarifs-et-abonnements'
    },
    apiLinks: {
      schedules: 'https://www.rmtt.fr/opendata',
      realTime: 'https://www.rmtt.fr/',
      officialWebsite: 'https://www.rmtt.fr/',
      officialApp: 'https://www.rmtt.fr/services/application-mobile'
    },
    steps: [
      {
        number: 1,
        title: 'Découvrir le réseau RMTT',
        description: 'Explorez le réseau de bus et le téléphérique de Toulon',
        link: 'https://www.rmtt.fr/'
      },
      {
        number: 2,
        title: 'Demander l\'abonnement Jeune',
        description: 'Souscrivez en agence ou en ligne',
        link: 'https://www.rmtt.fr/tarifs-et-abonnements'
      },
      {
        number: 3,
        title: 'Installer l\'application RMTT',
        description: 'Téléchargez l\'app pour les horaires en temps réel',
        link: 'https://www.rmtt.fr/services/application-mobile'
      },
      {
        number: 4,
        title: 'Utiliser le téléphérique',
        description: 'Découvrez le téléphérique pour accéder au Mont Faron',
        link: 'https://www.rmtt.fr/decouvrir/telepherique'
      }
    ],
    officialLinks: [
      {
        name: 'RMTT Toulon',
        description: 'Transports toulonnais',
        url: 'https://www.rmtt.fr/'
      },
      {
        name: 'Application mobile',
        description: 'Horaires en temps réel',
        url: 'https://www.rmtt.fr/services/application-mobile'
      },
      {
        name: 'Téléphérique',
        description: 'Accès Mont Faron',
        url: 'https://www.rmtt.fr/decouvrir/telepherique'
      }
    ]
  }
];

// Fonction pour obtenir une ville par son ID
export const getCityById = (cityId) => {
  return transportCities.find(city => city.id === cityId);
};

// Fonction pour obtenir toutes les villes d'une région
export const getCitiesByRegion = (region) => {
  return transportCities.filter(city => city.region === region);
};

// Liste des régions disponibles
export const getAvailableRegions = () => {
  return [...new Set(transportCities.map(city => city.region))];
};

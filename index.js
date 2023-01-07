
const regiones = [
  { 
    id: 0,
    sigla: 'AP',
    name: 'Arica y Parinacota',
    atractivos: 'Ir pal Perú pe',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Parinacota_volcano.jpg/480px-Parinacota_volcano.jpg'
  },
  { 
    id: 1,
    sigla: 'TA',
    name: 'Tarapacá',
    atractivos: 'cagarse de la sed',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Iquique_night_skyline.jpg/480px-Iquique_night_skyline.jpg'
  },
  { 
    id: 2,
    sigla: 'AN',
    name: 'Antofagasta',
    atractivos: 'mirar el cerro',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Volcan_Lascar.jpg/480px-Volcan_Lascar.jpg'
  },
  { 
    id: 3,
    sigla: 'AT',
    name: 'Atacama',
    atractivos: 'el desierto',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ValledeCopiapo.jpg/480px-ValledeCopiapo.jpg'
  },
  { 
    id: 4,
    sigla: 'CO',
    name: 'Coquimbo',
    atractivos: 'Fumar en el Valle',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Montaje_de_la_Regi%C3%B3n_de_Coquimbo_%28202012160%29.png/284px-Montaje_de_la_Regi%C3%B3n_de_Coquimbo_%28202012160%29.png'
  },
  { 
    id: 5,
    sigla: 'VA',
    name: 'Valparaíso',
    atractivos: 'El Puerto',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Renaca4.jpg/480px-Renaca4.jpg'
  },
  { 
    id: 6,
    sigla: 'RM',
    name:  'Metropolitana de Santiago',
    atractivos: 'Conocer Chile',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Montaje_de_la_Regi%C3%B3n_Metropolitana_de_Santiago_%28202011260%29.png/299px-Montaje_de_la_Regi%C3%B3n_Metropolitana_de_Santiago_%28202011260%29.png'
  },
  { 
    id: 7,
    sigla: 'LI',
    name:  'Libertador General Bernardo O\'Higgins',
    atractivos: 'Fome. Puros mineros.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Vi%C3%B1a_Montes_%2820348984418%29.jpg/480px-Vi%C3%B1a_Montes_%2820348984418%29.jpg'
  },
  { 
    id: 8,
    sigla: 'ML',
    name: 'Maule',
    atractivos: 'Ver Vacas',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nevados_del_longavi.JPG/480px-Nevados_del_longavi.JPG'
  },
  { 
    id: 9,
    sigla: 'NB',
    name: 'Ñuble',
    atractivos: 'La playa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/R%C3%ADo_%C3%91uble%2C_regi%C3%B3n_de_%C3%91uble%2C_Chile.jpg/480px-R%C3%ADo_%C3%91uble%2C_regi%C3%B3n_de_%C3%91uble%2C_Chile.jpg'
  },
  { 
    id: 10,
    sigla: 'BI',
    name: 'Biobío',
    atractivos: 'Conocer el segundo Chile',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chenqueco.JPG/480px-Chenqueco.JPG'
  },
  { 
    id: 11,
    sigla: 'AR',
    name: 'La Araucanía',
    atractivos: 'Que quede la Zorra en el Campo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Araucaria_araucana_-_Parque_Nacional_Conguill%C3%ADo_por_lautaroj_-_001.jpg/480px-Araucaria_araucana_-_Parque_Nacional_Conguill%C3%ADo_por_lautaroj_-_001.jpg'
  },
  { 
    id: 12,
    sigla: 'LR',
    name: 'Los Ríos',
    atractivos: 'Agüita por todos lados',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chenqueco.JPG/480px-Chenqueco.JPG'
  },
  { 
    id: 13,
    sigla: 'LL',
    name: 'Los Lagos',
    atractivos: 'Mucha más Agua que en los Ríos',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Catedral_de_Osorno%2C_Osorno%2C_Chile1.jpg/480px-Catedral_de_Osorno%2C_Osorno%2C_Chile1.jpg'
  },
  { 
    id: 14,
    sigla: 'AI',
    name:  'Aysén del General Carlos Ibáñez del Campo',
    atractivos: 'Pastar como Vaca',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/.00_3210_Puerto_Chacabuco_-_Chile.jpg/480px-.00_3210_Puerto_Chacabuco_-_Chile.jpg'
  },
  { 
    id: 15,
    sigla: 'MA',
    name: 'Magallanes',
    atractivos: 'Estar fuera de Chile',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Glaciar_Serrano%2C_Laguna_Serrano%2C_a_4_horas_de_Puerto_Natales%2C_Magallanes%2C_sur_de_Chile.jpg/480px-Glaciar_Serrano%2C_Laguna_Serrano%2C_a_4_horas_de_Puerto_Natales%2C_Magallanes%2C_sur_de_Chile.jpg'
  },
];
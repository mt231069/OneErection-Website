const products = [
  // {
  //   preisCent: 2999,
  //   picture: "Shoppics/Produkte/shirt1.png",
  //   picture2: "Produktpics/shirt1_mockup.png",
  //   name: "Band T-Shirt",
  //   keywords: [
  //     "T-Shirts",
  //     "Bekleidung"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair hergestellt",
  //     punkt4: "Hochwertige Qualität",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id: "3780a883-88db-4a3d-8645-596dcabcd6a9"
  // },
  // {
  //   preisCent: 2999,
  //   picture: "Shoppics/Produkte/shirt2.png",
  //   picture2: "Produktpics/shirt2_mockup.png",
  //   name: "Band T-Shirt",
  //   keywords: [
  //     "T-Shirts",
  //     "Bekleidung"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair",
  //     punkt4: "Hochwertig",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id: "0c4f4141-7092-45e0-91d6-8c0b7dd47a2a"
  // },
  // {
  //   preisCent: 2999,
  //   picture: "Shoppics/Produkte/shirt3.png",
  //   picture2: "Produktpics/shirt3_mockup.png",
  //   name: "Band T-Shirt",
  //   keywords: [
  //     "T-Shirts",
  //     "Bekleidung"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair hergestellt",
  //     punkt4: "Hochwertige Qualität",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id: "afd5c95c-3321-4da8-b7dc-9e1e1da0bc57"
  // },
  // {
  //   preisCent: 2999,
  //   picture: "Shoppics/Produkte/shirt4.png",
  //   picture2: "Produktpics/shirt4_mockup.png",
  //   name: "Band T-Shirt",
  //   keywords: [
  //     "T-Shirts",
  //     "Bekleidung"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair hergestellt",
  //     punkt4: "Hochwertige Qualität",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id: "076dadee-231e-4fcf-a716-ed47ecaee039"
  // },
  // {
  //   preisCent: 999,
  //   picture: "Shoppics/Produkte/cap.png",
  //   picture2: "Produktpics/cap_mockup.png",
  //   name: "Mütze",
  //   keywords: [
  //     "Accesoires",
  //     "Caps/Mützen"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair hergestellt",
  //     punkt4: "Hochwertige Qualität",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id: "2ed4705b-8fc2-46af-9af8-1c1153b6ed96"
  // },
  // {
  //   preisCent: 1499,
  //   picture: "Shoppics/Produkte/tasche.png",
  //   picture2: "Produktpics/tasche_mockup.png",
  //   name: "Badetasche",
  //   keywords: [
  //     "Accesoires",
  //     "Taschen"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair hergestellt",
  //     punkt4: "Hochwertige Qualität",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id: "ab6b338b-13ab-4812-a978-162e1ec37f62"
  // },
  // {
  //   preisCent: 499,
  //   picture: "Shoppics/Produkte/sign.png",
  //   picture2: "Produktpics/poster_mockup.png",
  //   name: "One Erection Poster",
  //   keywords: [
  //     "Poster/Sticker"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair hergestellt",
  //     punkt4: "Hochwertige Qualität",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id: "8d8bb999-d94c-407d-8fc6-85c9122afac8"
  // },
  // {
  //   preisCent: 50,
  //   picture: "Shoppics/Produkte/sticker.png",
  //   picture2: "Produktpics/sticker_mockup.png",
  //   name:"Sticker",
  //   keywords: [
  //     "Poster/Sticker"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair hergestellt",
  //     punkt4: "Hochwertige Qualität",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id:"116d9bc1-230b-44cc-a9a6-88be0e8dd45c"
  // },
  // {
  //   preisCent: 2999,
  //   picture:"Shoppics/Produkte/hoodie.png",
  //   picture2: "Produktpics/hoodie_mockup2.png",
  //   name:"Hoodie",
  //   keywords: [
  //     "Hoodies",
  //     "Bekleidung"
  //   ],
  //   beschreibung: {
  //     punkt1: "Großes, auffälliges Logo",
  //     punkt2: "Provokantes Design", 
  //     punkt3: "Fair hergestellt",
  //     punkt4: "Hochwertige Qualität",
  //     punkt5: "Großer Druck des Bandlogos auf der Vorderseite"
  //   },
  //   id:"3fe60b7c-ea6e-4d06-b2a0-34b1486c3e29"
  // },
];
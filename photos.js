// ============================================================
//  TELETIJDMACHINE - 30 foto's
// ============================================================
//  Vervang de tekst en (later) de afbeeldingen door je eigen
//  selectie. Eén entry per foto:
//
//   {
//     "url":   "https://...",   // (optioneel) URL naar de foto
//                               //   leeg laten => placeholder met de info
//     "theme": "Maanlanding",   // het juiste thema
//     "year":  1969,            // het juiste jaartal (getal)
//     "place": "Maan"           // de juiste plaatsnaam
//   }
//
//  De fout antwoorden in het spel worden automatisch gekozen
//  uit de andere 29 foto's, dus je hoeft die niet zelf in
//  te vullen. Bij elke nieuwe ronde worden ze opnieuw door
//  elkaar geschud.
//
//  Tip: zorg dat de 30 thema's, jaartallen en plaatsen voldoende
//  verschillen, zodat de fout antwoorden er anders uitzien dan
//  het juiste.
// ============================================================

window.PHOTOS = [
  { url: "./images/HPP2024.jpg", theme: "Terug naar jezelf",                  year: 2024, place: "Harzé" },
  { url: "./images/HPP2023.jpg", theme: "HPP Detectives",    year: 2023, place: "Lokeren" },
  { url: "./images/HPP2021.jpg", theme: "Hotel Plezante Paljas",        year: 2021, place: "Bleialf" },
  { url: "./images/HPP2022.jpg", theme: "HPP The Oscars",year: 2022, place: "Dilsen Stokkem" },
  { url: "./images/HPP2019.jpg", theme: "Waardig oud worden",    year: 2019, place: "As" },
  { url: "./images/HPP2018.jpg", theme: "Hill Billy's",     year: 2018, place: "Boutershof" },
  { url: "./images/HPP2017.jpg", theme: "Hoofddeksel/Pijl&Boog",                 year: 2017, place: "Zelem" },
  { url: "./images/HPP2016.jpg", theme: "Back to Base Camp",   year: 2016, place: "Purnode Tent" },
  { url: "./images/HPP2015.jpg", theme: "Zeebonken",        year: 2015, place: "Broedertrouw Nederland" },
  { url: "./images/HPP2014.jpg", theme: "Nostalgie",                year: 2014, place: "Koersel Fonteintje" },
  { url: "./images/HPP2013.jpg", theme: "Extreme Outdoor",        year: 2013, place: "Grot Vechmaal & Tent Sy" },
  { url: "./images/HPP2012.jpg", theme: "HPP Travel",          year: 2012, place: "Sint Pieters Voeren" },
  { url: "", theme: "Ondergang van de Titanic",     year: 1912, place: "Atlantische Oceaan" },
  { url: "", theme: "Beatles bij Ed Sullivan",      year: 1964, place: "New York" },
  { url: "", theme: "Vrijlating van Mandela",       year: 1990, place: "Kaapstad" },
  { url: "", theme: "Olympische Spelen Berlijn",    year: 1936, place: "Berlijn" },
  { url: "", theme: "Russische Revolutie",          year: 1917, place: "Sint-Petersburg" },
  { url: "", theme: "Verdrag van Maastricht",       year: 1992, place: "Maastricht" },
  { url: "", theme: "Hindenburg-explosie",          year: 1937, place: "Lakehurst" },
  { url: "", theme: "Woodstock-festival",           year: 1969, place: "Bethel" },
  { url: "", theme: "Eerste iPhone gepresenteerd",  year: 2007, place: "San Francisco" },
  { url: "", theme: "Val van Saigon",               year: 1975, place: "Saigon" },
  { url: "", theme: "Eerste harttransplantatie",    year: 1967, place: "Kaapstad" },
  { url: "", theme: "Geboorte van het internet",    year: 1969, place: "Los Angeles" },
  { url: "", theme: "Eerste Tour de France",        year: 1903, place: "Parijs" },
  { url: "", theme: "Olympische Spelen Antwerpen",  year: 1920, place: "Antwerpen" },
  { url: "", theme: "WK-duel België - Brazilië",    year: 2018, place: "Kazan" },
  { url: "", theme: "Brexit-referendum",            year: 2016, place: "Londen" },
  { url: "", theme: "Uitbraak van COVID-19",        year: 2020, place: "Wuhan" },
  { url: "", theme: "Bevrijding van Auschwitz",     year: 1945, place: "Oświęcim" },
];

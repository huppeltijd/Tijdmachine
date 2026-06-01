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
  { url: "./images/HPP2021.jgg", theme: "Hotel Plezante Paljas",        year: 2021, place: "Bleialf" },
  { url: "", theme: "Eerste vlucht Wright Brothers",year: 1903, place: "Kitty Hawk" },
  { url: "", theme: "Aanslag op de Twin Towers",    year: 2001, place: "New York" },
  { url: "", theme: "Kroning van Elizabeth II",     year: 1953, place: "Londen" },
  { url: "", theme: "Moord op JFK",                 year: 1963, place: "Dallas" },
  { url: "", theme: "Tankman op Tiananmen-plein",   year: 1989, place: "Peking" },
  { url: "", theme: "Eerste Apple-computer",        year: 1976, place: "Cupertino" },
  { url: "", theme: "D-Day landing",                year: 1944, place: "Normandië" },
  { url: "", theme: "Watergate-hoorzitting",        year: 1973, place: "Washington" },
  { url: "", theme: "Kernramp Tsjernobyl",          year: 1986, place: "Pripjat" },
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

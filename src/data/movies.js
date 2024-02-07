const data = [
  {
    id: crypto.randomUUID(),
    cover: "neru.jpg",
    title: "Neru",
    description:
      "Sara, a blind sculptor, seeks justice after suffering trauma. She contends with the legal system and her own resilience to find resolution.",
    genre: "Drama",
    rating: 4,
    price: 140,

    isComingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "ozler.jpg",
    title: "Abraham Ozler",
    description:
      "Revolves around the personal and professional lives of veteran cop Abraham Ozler, ACP Trichur, who at one time has to take up a serial killing case and the mysterious hunt begins.",
    genre: "Crime/Drama/Mystery",
    rating: 4,
    price: 80,
    isComingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "kok.jpg",
    title: "King Of Kotha",
    description:
      "In a crime-infested town, Kannan bhai and his gang are the reigning powers. To combat this reign and seek revenge, Inspector Shahul tactfully plots the return of the 'King', leading to a transformative turn of events.",
    genre: "Action/Crime/Drama",
    rating: 4,
    price: 250,
    isTrending: true,
    isFavorite: false,
    isNewRelease: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "kannur-squad.jpg",
    title: "Kannur Squad",
    description:
      "The gripping saga of a police officer and his team, their challenging journey to nab a criminal gang across the country. Further, it shows how he leads his team towards triumph, amidst professional uncertainties in this gripping drama.",
    genre: "Action/Crime/Drama",
    rating: 5,
    price: 100,
    isTrending: true,
    isFavorite: false,
    isNewRelease: false,
    addedToWatchLater: true,
  },

  {
    id: crypto.randomUUID(),
    cover: "rdx.jpg",
    title: "RDX",
    description:
      "The life of three mysterious individuals take a turn as their faces gets exposed.",
    genre: "Action/Adventure",
    rating: 5,
    price: 150,
    isTrending: true,
    isFavorite: true,
    isNewRelease: false,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "kasargold.jpg",
    title: "Kasargold",
    description:
      "Albert ,a young and unassuming gold smuggler.Alongside his companion Faisal, they embark on an outrageously risky plan with the hope of gaining a fortune that could secure them a lifetime of wealth.",
    genre: "Action/Drama/Thriler",
    rating: 3,
    price: 270,
    isTrending: true,
    isFavorite: false,
    isNewRelease: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "2018.jpg",
    title: "2018",
    description:
      "A disaster film set during the 2018 Kerala Floods where people from all walks of life faced catastrophic consequences and put in collective efforts to survive the calamity.",
    genre: "Action/Drama/Thriller",
    rating: 4,
    price: 100,
    isTrending: true,
    isFavorite: true,
    isNewRelease: false,
    addedToWatchLater: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "romancham.jpg",
    title: "Romancham",
    description:
      "A game of Ouija board goes hilariously wrong when seven bachelors unexpectedly invite a spirit and try to make the best out of the situation.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 120,
    isTrending: true,
    isFavorite: true,
    isNewRelease: false,
    addedToWatchLater: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "falimy.jpg",
    title: "Falimy",
    description:
      "A family of self-centered individuals sets out on a journey to fulfill their grandfather's pilgrimage wish, partly to prevent his frequent escapes and partly to find a distraction from their personal problems.",
    genre: "Drama",
    rating: 4,
    price: 110,
    isTrending: true,
    isFavorite: false,
    isNewRelease: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "kaathal.jpg",
    title: "Kaathal",
    description:
      "Mathew, a retired bank secretary, reluctantly enters politics for a by-election. The movie delves into their marriage dynamics, justice, and personal fulfillment amidst a tight-knit village community.",
    genre: "Crime/Drama",
    rating: 4,
    price: 140,
    isTrending: true,
    isFavorite: false,
    isNewRelease: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "hridayam.jpg",
    title: "Hridayam",
    description:
      "The emotional journey of Arun, his carefree bachelor days in engineering college, and how he matures through various phases of life.",
    genre: "Drama/Musical/Romance",
    rating: 4,
    price: 100,
    isTrending: true,
    isFavorite: false,
    isNewRelease: false,
    addedToWatchLater: true,
  },
];

function getAllMovies() {
  return data;
}

export { getAllMovies };

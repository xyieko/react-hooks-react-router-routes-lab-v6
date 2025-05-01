// This should be populated with data from your API
// For testing purposes, you might want to export mock data

export const movies = [
    {
      id: 1,
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Adventure", "Fantasy"]
    },
    {
      id: 2,
      title: "Trolls",
      time: 92,
      genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"]
    },
    {
      id: 3,
      title: "Jack Reacher: Never Go Back",
      time: 118,
      genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"]
    }
  ];
  
  export const actors = [
    {
      id: 1,
      name: "Benedict Cumberbatch",
      movies: ["Doctor Strange", "The Imitation Game", "Black Mass"]
    },
    // ... rest of your actors data
  ];
  
  export const directors = [
    {
      id: 1,
      name: "Scott Derrickson",
      movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"]
    },
    // ... rest of your directors data
  ];
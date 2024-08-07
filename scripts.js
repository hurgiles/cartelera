const movies = [
    {
        title: "Película 1",
        time: "18:00",
        location: "Sala 1",
        description: "Descripción de la película 1.",
        poster: "https://via.placeholder.com/200x300"
    },
    {
        title: "Película 2",
        time: "20:00",
        location: "Sala 2",
        description: "Descripción de la película 2.",
        poster: "https://via.placeholder.com/200x300"
    },
    {
        title: "Película 3",
        time: "22:00",
        location: "Sala 3",
        description: "Descripción de la película 3.",
        poster: "https://via.placeholder.com/200x300"
    },
    {
        title: "Película 4",
        time: "00:00",
        location: "Sala 4",
        description: "Descripción de la película 4.",
        poster: "https://via.placeholder.com/200x300"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movie-list");
    const movieModalLabel = document.getElementById("movieModalLabel");
    const movieTime = document.getElementById("movieTime");
    const movieLocation = document.getElementById("movieLocation");
    const movieDescription = document.getElementById("movieDescription");

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("col-md-3", "movie");

        movieElement.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title} Poster" class="img-fluid">
            <h5 class="mt-2">${movie.title}</h5>
            <p>${movie.time} | ${movie.location}</p>
        `;

        movieElement.addEventListener("click", () => {
            movieModalLabel.textContent = movie.title;
            movieTime.textContent = `Hora: ${movie.time}`;
            movieLocation.textContent = `Lugar: ${movie.location}`;
            movieDescription.textContent = `Descripción: ${movie.description}`;
            $('#movieModal').modal('show');
        });

        movieList.appendChild(movieElement);
    });
});

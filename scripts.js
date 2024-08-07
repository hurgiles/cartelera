const movies = [
    {
        title: "Película 1",
        time: "18:00",
        location: "Sala 1",
        description: "Descripción de la película 1.",
        poster: "img/imagen1.png"
    },
    {
        title: "Película 2",
        time: "20:00",
        location: "Sala 2",
        description: "Descripción de la película 2.",
        poster: "img/imagen2.png"
    },
    {
        title: "Película 3",
        time: "22:00",
        location: "Sala 3",
        description: "Descripción de la película 3.",
        poster: "img/imagen3.png"
    },
    {
        title: "Película 4",
        time: "00:00",
        location: "Sala 4",
        description: "Descripción de la película 4.",
        poster: "img/imagen4.png"
    },
    {
        title: "Película 5",
        time: "00:00",
        location: "Sala 4",
        description: "Descripción de la película 4.",
        poster: "img/imagen4.png"
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
        movieElement.classList.add("movie");

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

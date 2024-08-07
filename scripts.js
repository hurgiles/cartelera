const movies = [
    {
        title: "Película 1",
        description: "Descripción de la película 1.",
        poster: "https://via.placeholder.com/200x300",
        details: "Detalles adicionales de la película 1."
    },
    {
        title: "Película 2",
        description: "Descripción de la película 2.",
        poster: "https://via.placeholder.com/200x300",
        details: "Detalles adicionales de la película 2."
    },
    {
        title: "Película 3",
        description: "Descripción de la película 3.",
        poster: "https://via.placeholder.com/200x300",
        details: "Detalles adicionales de la película 3."
    },
    {
        title: "Película 4",
        description: "Descripción de la película 4.",
        poster: "https://via.placeholder.com/200x300",
        details: "Detalles adicionales de la película 4."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movie-list");
    const movieDetails = document.getElementById("movie-details");
    const detailsContent = document.getElementById("details-content");
    const closeButton = document.getElementById("close-button");

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        movieElement.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title} Poster">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
        `;

        movieElement.addEventListener("click", () => {
            detailsContent.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title} Poster">
                <h2>${movie.title}</h2>
                <p>${movie.details}</p>
            `;
            movieDetails.classList.add("open");
        });

        movieList.appendChild(movieElement);
    });

    closeButton.addEventListener("click", () => {
        movieDetails.classList.remove("open");
    });
});

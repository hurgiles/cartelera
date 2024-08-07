const movies = [
    {
        title: "Podcast 1",
        time: "22:00",
        location: "Milagro: Sala 1",
        description: "¿El amor ya no existe?",
        poster: "img/imagen1.png"
    },
    {
        title: "Podcast 2",
        time: "22:00",
        location: "Milagro: Sala 2",
        description: "Lo que realmente quieren las mujeres.",
        poster: "img/imagen2.png"
    },
    {
        title: "Podcast 3",
        time: "22:00",
        location: "Milagro: Sala 3",
        description: "La verdad sobre las relaciones a distancia.",
        poster: "img/imagen3.png"
    },
    {
        title: "Podcast 4",
        time: "22:00",
        location: "Milagro: Sala 4",
        description: "¿Por qué me gustan las mujeres difíciles?",
        poster: "img/imagen4.png"
    },
    {
        title: "Olympic's Disney 1",
        time: "22:00",
        location: "Milagro: Sala I",
        description: "Adivina 100 personajes.",
        poster: "img/Disney1.png"
    },
    {
        title: "Olympic's Disney 2",
        time: "22:00",
        location: "Milagro: Sala II",
        description: "Adivina la pelicula por la Música.",
        poster: "img/Disney2.png"
    },
    {
        title: "Olympic's Disney 3",
        time: "22:00",
        location: "Milagro: Sala III",
        description: "Adivina la Princesa.",
        poster: "img/Disney3.png"
    },
    {
        title: "Olympic's Disney 4",
        time: "22:00",
        location: "Milagro: Sala IV",
        description: "Adivina la Pelicula por los emojis.",
        poster: "img/Disney4.png"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movie-list");
    const movieModalLabel = document.getElementById("movieModalLabel");
    const movieTime = document.getElementById("movieTime");
    const movieLocation = document.getElementById("movieLocation");
    const movieDescription = document.getElementById("movieDescription");

    const podcastTitle = document.createElement("h2");
    podcastTitle.textContent = "Podcast para compartir e interactuar";
    podcastTitle.classList.add("col-12", "text-center", "my-4");
    movieList.appendChild(podcastTitle);

    const firstRow = document.createElement("div");
    firstRow.classList.add("row", "justify-content-center");
    movieList.appendChild(firstRow);

    movies.slice(0, 4).forEach(movie => {
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

        firstRow.appendChild(movieElement);
    });

    const disneyTitle = document.createElement("h2");
    disneyTitle.textContent = "Olympics Disney's Virtual Games";
    disneyTitle.classList.add("col-12", "text-center", "my-4");
    movieList.appendChild(disneyTitle);

    const secondRow = document.createElement("div");
    secondRow.classList.add("row", "justify-content-center");
    movieList.appendChild(secondRow);

    movies.slice(4).forEach(movie => {
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

        secondRow.appendChild(movieElement);
    });
});

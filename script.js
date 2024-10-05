fetch('data.json').then((response) => {
    response.json().then((data) => {

        const main = data;
        const movies = Object.keys(main);
        let mainShow = movies[0];

        update(main[mainShow]);

        const thumbnail = document.querySelector('.container-card')
        movies.forEach(thumb => {
            const thumbMovie = main[thumb]
            const section = document.createElement('section')
            const figure = document.createElement('figure')
            const img = document.createElement('img')
            const figcaption = document.createElement('figcaption')

            img.src = thumbMovie.picture
            img.classList.add('imgThumb')
            img.setAttribute('data-thumb', thumb)

            figcaption.textContent = thumbMovie.title

            figure.appendChild(img)
            figure.appendChild(figcaption)
            section.appendChild(figure)
            thumbnail.appendChild(section)
        });
        const listThumb = document.querySelectorAll('.imgThumb')
        listThumb.forEach(element=>{
            element.addEventListener('click', function(){
                const movieClick = this.getAttribute('data-thumb')
                update(main[movieClick])
                
            })
        })
    })

    function update(movie) {
        let mainTitle = document.getElementById('mainTitle');
        mainTitle.textContent = movie.title + ' - ' + movie.year;
        let mainImg = document.getElementById('mainImg');
        mainImg.src = movie.picture;
        let mainDesc = document.getElementById('descript');
        mainDesc.textContent = movie.description + ' Critica: ' + movie.critic;
    }
});



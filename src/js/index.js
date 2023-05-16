let cardList = document.querySelector('.grid-project-cards');
let carouselIndicator = document.querySelector('.carousel-indicators');
let carrouselBanner = document.querySelector('.carousel-inner');
let indicators = ''
let card ='';
let banner = '';
projects.forEach((item) => {
    if(item.id == 0){
        indicators+=`<li data-target="#carouselExampleCaptions" data-slide-to="${item.id}" class="active"></li>`;
        banner += `<div class="carousel-item active">
                        <img src="${item.src}" class="d-block w-100" alt="Projeto1">
                        <div class="carousel-caption d-none d-md-block black">
                          <h5>${item.desc}</h5>
                          <p><a href="${item.link}">Saiba Mais</a></p>
                         </div>
                    </div>`;
    }else{
        indicators+=`<li data-target="#carouselExampleCaptions" data-slide-to="${item.id}" class=""></li>`;
        banner += `<div class="carousel-item">
                        <img src="${item.src}" class="d-block w-100" alt="Projeto1">
                        <div class="carousel-caption d-none d-md-block black">
                          <h5>${item.desc}</h5>
                          <p><a href="${item.link}">Saiba Mais</a></p>
                         </div>
                    </div>`;
    }

    card += `<div class="grid-project-card-item rounded">
                    <div class="card-item-info">
                        <h5>${item.desc}</h5>
                        <p><a href="${item.link}">Saiba Mais</a></p>
                    </div>
                    <div class="card-item-img"> 
                         <img src="${item.src}" alt="projeto1">
                    </div>
            </div>`;

})
cardList.innerHTML = card;
carouselIndicator.innerHTML = indicators;
carrouselBanner.innerHTML = banner;
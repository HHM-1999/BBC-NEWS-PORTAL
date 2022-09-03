const loadcatagories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data=>displaycatagories(data.data.news_category))
        
}
loadcatagories();
const displaycatagories = catagories => {
    //console.log(catagories);
    const CatagoriesContainer= document.getElementById('display-catagories');
    
    catagories.forEach(name => {
        //console.log(name);
        const Li = document.createElement('li');
        Li.classList.add('nav-item');
        Li.innerHTML = `
        <a  onclick="catagoriesitems('${name.category_id}')" class="nav-link active" aria-current="page" href="#">${name.category_name}</a>
        `;
        CatagoriesContainer.appendChild(Li);

        
    })

    
}
const catagoriesitems = item => {
    //  start loader
    loaderspinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${item}`)
        .then(res => res.json())
        .then(data => carditems(data.data))
    
     
}
const carditems = cards => {
    //console.log(cards)
    const cardcontainer = document.getElementById('card-container');
    cardcontainer.innerHTML = "";
    cards.forEach(card => {
        //console.log(card);
        const { image_url, title, details, author, total_view, thumbnail_url } = card;
        const div = document.createElement('div');
        div.classList.add("card", "mb-3", "shadow");
        div.innerHTML = `
            <div class="row g-0">
                <div class="col-md-3">
                    <img src="${image_url}" class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${details.length > 200 ? details.slice(0, 200) + "..." : details}</p>
                        <div class="card-text d-flex justify-content-between align-items-center flex-wrap">
                            <div class="d-flex align-items-center">
                                <img src="${card.author.img}" class="img-thumbnail" style="width: 40px; height: 40px;"/>
                                <span>Author Name : ${author.name}</span>
                            </div>
                            <span>Total views : ${total_view}</span>
                            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="singlePostDetails('${card._id}')">
                                SEE DETAILS
                            </button>
                        </div>
                    </div>  
                </div>
            </div>`;
        cardcontainer.appendChild(div);


    })

}
// spinner loader function
const loaderspinner = (loading) => {
    if (loading) {
        document.getElementById('load').classList.remove('d-none');
    }
    else {
        document.getElementById('load').classList.add('d-none');
    }

}


const loadcatagories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data=>displaycatagories(data.data.news_category))
        
}
loadcatagories();
const displaycatagories = catagories => {
    console.log(catagories);
    const CatagoriesContainer= document.getElementById('display-catagories');
    
    catagories.forEach(name => {
        console.log(name);
        const Li = document.createElement('li');
        Li.classList.add('nav-item');
        Li.innerHTML = `
        <a  onclick="catagoriesitems('${name.category_id}')" class="nav-link active" aria-current="page" href="#">${name.category_name}</a>
        `;
        CatagoriesContainer.appendChild(Li);

        
    })

    
}
const catagoriesitems = item => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${item}`)
        .then(res => res.json())
        .then(data=>console.log(data))
     
}


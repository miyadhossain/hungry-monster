const searchBtn = document.getElementById('Searchbutton');
searchBtn.addEventListener('click', () => {
    const inputMeals = document.getElementById('inputMeals').value;
    searchMeals(inputMeals);
})




//search meals
const searchMeals = mealName => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeals.value}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => notFound(error))
}

// not found
const notFound = () => {
    document.getElementById('notFound').innerText = 'Items not found';
}

// display melas 
const displayMeals = meals => {
    const mealsDiv = document.getElementById('mealsDiv');
    meals.forEach(meal => {
        //console.log(meals);
        const singleMealDiv = document.createElement('div');
        const mealInfo = `
            <div onclick="mealInfo('${meal.strMeal}')" class="card" style="width: 18rem;">
            <img src="${meal.strMealThumb}" class="card-img-top">
            <div class="card-body">
            <h5>${meal.strMeal}</h5>
            </div>
            </div>
            
        `
        singleMealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(singleMealDiv);
    });
}

// meal info
const mealInfo = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderIngredientsInfo(data.meals))
}

// render ingredients info
const renderIngredientsInfo = info => {
    info.forEach(ingreident => {
        console.log(ingreident);
        const ingreidentsInfo = document.getElementById('ingreidentInfo');
        const ing = [
            ingreident.strIngredient1,
            ingreident.strIngredient2,
            ingreident.strIngredient3,
            ingreident.strIngredient4,
            ingreident.strIngredient5,
            ingreident.strIngredient6,
            ingreident.strIngredient7,
            ingreident.strIngredient8,
            ingreident.strIngredient9,
            ingreident.strIngredient10,
            ingreident.strIngredient11,
            ingreident.strIngredient12,
            ingreident.strIngredient13,
            ingreident.strIngredient14,
            ingreident.strIngredient15,
            ingreident.strIngredient16,
            ingreident.strIngredient17,
            ingreident.strIngredient18,
            ingreident.strIngredient19,
            ingreident.strIngredient20
        ]

        ing.forEach(element => {
            if (element === null) {
                console.log('null')
            }
            else {
                console.log(element)
                ingreidentsInfo.innerHTML = `
            <img src="${ingreident.strMealThumb}">
            <h1>${ingreident.strMeal}</h1>
            <h3>Ingreidents</h3>
            <p>${element}</p>
        `
            }
        });
        // ingreidentsInfo.innerHTML = `
        //     <img src="${ingreident.strMealThumb}">
        //     <h1>${ingreident.strMeal}</h1>
        //     <h3>Ingreidents</h3>
        //     <p>${ingreident.strIngredient1}</p>
        //     <p>${ingreident.strIngredient2}</p>
        //     <p>${ingreident.strIngredient3}</p>
        //     <p>${ingreident.strIngredient4}</p>
        //     <p>${ingreident.strIngredient5}</p>
        //     <p>${ingreident.strIngredient6}</p>
        //     <p>${ingreident.strIngredient7}</p>
        //     <p>${ingreident.strIngredient8}</p>
        //     <p>${ingreident.strIngredient9}</p>
        //     <p>${ingreident.strIngredient10}</p>
        // `
    });
}
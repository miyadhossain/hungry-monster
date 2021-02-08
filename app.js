// to get search meals and  button function
const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    const inputMeals = document.getElementById('input-meals');
    searchMeals(inputMeals);
})

//search meals
const searchMeals = (mealsName) => {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName.value}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayErrorMessage('Sorry! Items not found.'))
    document.getElementById('input-meals').value = '';
}

// display meals
const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals-div');
    mealsDiv.innerHTML = '';
    errorMessage.innerHTML = '';
    infoDiv.innerHTML = '';

    meals.forEach(meal => {
        const singleMealDiv = document.createElement('div');
        const mealInfo = `
        <a class="mealLink" href="#infoDiv">
        <div onclick="mealInfo('${meal.strMeal}')" class="card rounded h-100 mealImgDiv">
        <img src="${meal.strMealThumb}" class="card-img-top rounded">
        <div class="card-body bg-light text-center">
            <h5 class="">${meal.strMeal}</h5>
        </div>
        </div>
        </a>
        `
        singleMealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(singleMealDiv);
    });

}

// error message
const displayErrorMessage = error => {
    const errorHeader = document.getElementById('errorMessage');
    errorHeader.innerText = '';
    errorHeader.innerText = error;
}

// meal info
const mealInfo = name => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderIngredientsInfo(data.meals))
        .catch(error => displayErrorMessage('Sorry! Something went wrong.'))
}

// render ingredients info
const renderIngredientsInfo = info => {
    const ingreidentsInfo = document.getElementById('infoDiv');


    info.forEach(ingreident => {

        const ingreidentArry = [
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
        ];

        ingreidentsInfo.innerHTML = `
        <img class="mealInfoImg" src="${ingreident.strMealThumb}">
        <h1 class="mt-3">${ingreident.strMeal}</h1>
        <h5 class="mt-3">Ingreidents</h5>
        `
        ingreidentArry.forEach(singleIndgredient => {
            let filterIndegredient = '';
            if (singleIndgredient != null && singleIndgredient != '') {
                filterIndegredient = singleIndgredient + filterIndegredient;
                const newDiv = document.createElement('div');
                const newDivElement = `
                        <p class="mt-3"><span class="icon"><i class="fas fa-check-square"></i></span> ${filterIndegredient}</p>
                `
                newDiv.innerHTML = newDivElement;
                ingreidentsInfo.appendChild(newDiv);
            }
        });
    });
}


// to get search meals and  button function
const searchBtn = document.getElementById('Searchbutton');
searchBtn.addEventListener('click', () => {
    const inputMeals = document.getElementById('inputMeals');
    searchMeals(inputMeals);
})

//search meals
const searchMeals = (mealsName) => {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName.value}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayErrorMessage('Sorry! Items not found.'))
        document.getElementById('inputMeals').value = '';
}


// display meals
const displayMeals = meals => {
    mealsDiv.innerText = '';
    
    meals.forEach(meal => {
        const singleMealDiv = document.createElement('div');
        const mealInfo = `
        <div onclick="mealInfo('${meal.strMeal}')" class="cols-md-3 rounded mealImgDiv">
        <div class="col">
        <img src="${meal.strMealThumb}" class="card-img-top ">
        <div class="card-body bg-light mealDiv">
          <h5 class="card-title">${meal.strMeal}</h5>
        </div>
        </div>
        </div>  
        `
        singleMealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(singleMealDiv);
    });
    
}

// error message
const displayErrorMessage = error => {
    const errorHeader = document.getElementById('itemsNotFound');
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
    info.forEach(ingreident => {
        const ingreidentsInfo = document.getElementById('ingreidentInfo');
        ingreidentsInfo.innerHTML = `
        <div class="infoDiv">
        <img class="mealInfoImg" src="${ingreident.strMealThumb}">
        <h3>${ingreident.strMeal}</h3>
        <h5>Ingreidents</h5>
        <p>${ingreident.strIngredient1}</p>
        <p>${ingreident.strIngredient2}</p>
        <p>${ingreident.strIngredient3}</p>
        <p>${ingreident.strIngredient4}</p>
        <p>${ingreident.strIngredient5}</p>
        <p>${ingreident.strIngredient6}</p>
        <p>${ingreident.strIngredient7}</p>
        <p>${ingreident.strIngredient8}</p>
        <p>${ingreident.strIngredient9}</p>
        <p>${ingreident.strIngredient10}</p>
        </div>
        `
    });
}


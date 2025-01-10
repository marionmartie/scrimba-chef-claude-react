import { useState } from "react"

const AddIngredient = () => {
    const [ingredients, setIngredients] = useState(["chicken", "oregano", "paprika", "soy sauce"])
    const [recipeShown, setRecipeShown] = useState(false)

    const ingredientsListItems = ingredients.map(el => <li key={el}> {el} </li>)

    const toggleRecipeShown = () => {
        setRecipeShown( prevState => !prevState )
    }

    const addIngredient = (formData) => {
        // const newIngredient = formData.get('ingredient')
        const data = Object.fromEntries(formData)
        setIngredients((prevIngredients) => [...prevIngredients, data.ingredient])
    }

    return (
        <section className="w-screen mx-auto pt-11 pb-6">
            <form action={addIngredient}>
                <div className="w-[420px] md:w-[720px] mx-auto">
                    <div className="flex gap-5">
                        <input name="ingredient" className="rounded w-3/4 p-2 border-2" type="text" placeholder="eg. raddish" id="btnAddIngredient" aria-label="add-ingredient" />
                        <button className="rounded bg-gray-900 w-2/4 text-white py-2 px-5">+ Add Ingredient</button>
                    </div>
                </div>
            </form>
            {
                ingredients.length > 0 &&
                <div className="w-[420px] md:w-[520px] mx-auto">
                    <section className="mt-11">
                        <h2 className="text-2xl font-bold">Ingredients on hand:</h2>
                        <ul className="ingredients-list list-disc ms-4 py-4" aria-live="polite">{ingredientsListItems}</ul>
                        {
                            ingredients.length > 3 &&
                            <div className="border rounded bg-red-200 p-5 flex md:gap-5">
                                <div>
                                    <h3 className="text-xl font-bold mt-3">Ready for a recipe?</h3>
                                    <p>Generate a recipe from your list of ingredients.</p>
                                </div>
                                <button className="bg-blue-500 rounded-md text-white px-0 md:px-4" onClick={toggleRecipeShown}>Get a recipe</button>
                            </div>
                        }
                    </section>
                    {
                        recipeShown &&
                        <section className="mt-10">
                            <h2>Chef Claude Recommends:</h2>
                            <article className="suggested-recipe-container mb-4" aria-live="polite">
                                <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                                <h3 className="text-xl font-bold mt-3">Beef Bolognese Pasta</h3>
                                <strong>Ingredients:</strong>
                                <ul className="list-disc ps-4">
                                    <li className="mb-2">1 lb. ground beef</li>
                                    <li className="mb-2">1 onion, diced</li>
                                    <li className="mb-2">3 cloves garlic, minced</li>
                                    <li className="mb-2">2 tablespoons tomato paste</li>
                                    <li className="mb-2">1 (28 oz) can crushed tomatoes</li>
                                    <li className="mb-2">1 cup beef broth</li>
                                    <li className="mb-2">1 teaspoon dried oregano</li>
                                    <li className="mb-2">1 teaspoon dried basil</li>
                                    <li className="mb-2">Salt and pepper to taste</li>
                                    <li className="mb-2">8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                                </ul>
                                <strong>Instructions:</strong>
                                <ol>
                                    <li className="mb-2">Bring a large pot of salted water to a boil for the pasta.</li>
                                    <li className="mb-2">In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                                    <li className="mb-2">Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                                    <li className="mb-2">Stir in the tomato paste and cook for 1 minute.</li>
                                    <li className="mb-2">Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                                    <li className="mb-2">Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                                    <li className="mb-2">While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                                    <li className="mb-2">Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                                    <li className="mb-2">Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                                </ol>
                            </article>
                        </section>
                    }
                </div>
            }

        </section>
    )
}

export default AddIngredient
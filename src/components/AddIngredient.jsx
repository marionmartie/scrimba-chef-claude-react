import { useState } from "react"
import Recipe from "./Recipe"
import IngredientList from "./IngredientList"

const AddIngredient = () => {
    const [ingredients, setIngredients] = useState(["chicken", "oregano", "paprika", "soy sauce"])
    const [recipeShown, setRecipeShown] = useState(false)


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
                    <IngredientList item={ingredients} handleShowRecipe={toggleRecipeShown} />
                    {
                        recipeShown && <Recipe />
                    }
                </div>
            }

        </section>
    )
}

export default AddIngredient
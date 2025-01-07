import { useState } from "react"

const AddIngredient = () => {
    const [ingredients, setIngredients] = useState([])

    const addIngredient = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        setIngredients( (prevIngredients) => [...prevIngredients, newIngredient] )
    }

    return (
        <section className="w-screen mx-auto bg-off-white pt-11 pb-6">
            <form action="" onSubmit={addIngredient}>
                <div className="flex justify-center gap-4">
                    <input name="ingredient" className="rounded p-2 w-30 border-2" type="text" placeholder="eg. raddish" id="btnAddIngredient" aria-label="add-ingredient" />
                    <button className="rounded bg-gray-900 text-white px-5">+ Add Ingredient</button>
                </div>
            </form>
            <div className="flex justify-center mt-4">
                <ul className="list-disc">
                    {
                        ingredients.map(el => <li> {el} </li>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default AddIngredient
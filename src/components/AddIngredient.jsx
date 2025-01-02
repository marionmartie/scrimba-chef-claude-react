
const AddIngredient = () => {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    return (
        <section className="w-screen mx-auto bg-off-white pt-11 pb-6">
            <div className="flex justify-center gap-4">
                <input className="rounded p-2 w-30 border-2" type="text" placeholder="eg. raddish" id="btnAddIngredient" aria-label="add-ingredient" />
                <button className="rounded bg-gray-900 text-white px-5">+ Add Ingredient</button>
            </div>
            <ul>
            {
                ingredients.map(el =>  <li> { el } </li> )
            }
            </ul>
        </section>
    )
}

export default AddIngredient


const IngredientList = ({item, handleShowRecipe}) => {    
    return (
        <section className="mt-11">
            <h2 className="text-2xl font-bold">Ingredients on hand:</h2>
            <ul className="ingredients-list list-disc ms-4 py-4" aria-live="polite">
                {item.map(el => <li key={el}> {el} </li>)}
            </ul>
            {
                item.length > 3 &&
                <div className="border rounded bg-red-200 p-5 flex md:gap-5">
                    <div>
                        <h3 className="text-xl font-bold mt-3">Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="bg-blue-500 rounded-md text-white px-0 md:px-4" onClick={handleShowRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}

export default IngredientList
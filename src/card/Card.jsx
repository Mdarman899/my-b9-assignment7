const Card = ({ recipe, handleAddCook }) => {
  // console.log(recipe);
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  // console.log(handleAddCook);
  return (
    <div className="shadow-xl/40 rounded-2xl">
      <div className="card bg-base-100 w-96 shadow-sm p-5">
        <figure className="1">
          <img className="rounded-2x" src={recipe_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <div className="">
            <div className="my-0 py-0 divider w-80 mx-auto "></div>
          </div>
          <div>
            <p className="text-xl font-medium">
              Ingrediyents: {ingredients.length}
            </p>
            <div className="">
              {ingredients.map((ingredient) => (
                <div className=" ">{ingredient}</div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="divider w-80 mx-auto my-0 py-0"></div>
          </div>
          <div className="flex justify-between">
            <p>{preparing_time}</p>
            <p>{calories}</p>
          </div>
          <div className="card-actions pt-3">
            <button
              onClick={() => {
                handleAddCook(recipe);
              }}
              className="btn btn-primary text-xl rounded-4xl shadow-xl/30"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

 
const Card = ({recipe}) => {
  console.log(recipe);
  const {recipe_image} = recipe ;
  return (
    <div className="  w-60 mb-20 rounded-2xl">
      <div className="card bg-base-100 w-96 shadow-sm p-5">
        <figure className="1">
          <img
            className=" rounded-2x"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> Buy Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

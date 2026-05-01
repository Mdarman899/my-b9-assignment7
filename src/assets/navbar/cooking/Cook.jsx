import Ccooking from "../currently cooking/Ccooking";

const Cook = ({cook}) => {
  const {recipe_name, preparing_time, calories,} = cook ;
  // console.log(cook)
  return (
    <div className="w-xl border-2 border-b-gray-100 rounded-2xl ">
      <h1 className="font-semibold text-2xl text-center pt-4"> Want to cook: 01</h1>
      <div className="">
        <div class="divider w-sm mx-auto "></div>
      </div>
      <div className=" flex justify-around text-lg font-medium">
        <p className="ml-5">Name</p>
        <p>Times</p>
        <p>Calories</p>
       <p></p>
       <p></p>
      </div>
      <div className="flex p-2 bg-gray-100 gap-6 pt-4 font-medium text-md mx-5 ">
        <p className="font-bold text-xl pt-2"></p>
        <p className="w-27">{recipe_name}</p>
        <p className="w-12 mr-10">{preparing_time}</p>
        <p className="w-10 mx-6">{calories}</p>
        <button className=" px-3 pt-0 bg-green-500 font-medium text-lg rounded-4xl">Preparing</button>
      </div>
      <Ccooking > </Ccooking>
    </div>
  
  );
};

export default Cook;

const Ccooking = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl text-center pt-8">
        Currently cooking: 01
      </h1>
      <div className="">
        <div class="divider w-sm mx-auto "></div>
      </div>
      <div className=" flex justify-around text-lg font-medium">
        <p className="ml-5">Name</p>
        <p>Times</p>
        <p>Calories</p>
        <p></p>
      </div>
      <div className="flex p-2 bg-gray-100 gap-6 pt-4 font-medium text-md mx-5 ">
        <p className="font-bold text-xl pt-2">1</p>
        <p className="w-35">Spaghetti Bolognese</p>
        <p className="w-30 ">20 minutes</p>
        <p className="w-30 ">400 Calories</p>
      </div>
    </div>
  );
};

export default Ccooking;

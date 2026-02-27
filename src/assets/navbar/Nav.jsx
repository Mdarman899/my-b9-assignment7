const Nav = () => {
  return (
    <div className=" mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl ">Recepe calories</h1>
        <div className="flex items-center gap-5 text-lg font-medium">
            <p>Home</p>
            <p>Recipe</p>
            <p>About</p>
            <p>Search</p>
        </div>
        <div>
          <input
            placeholder="find your recipe"
            type="text"
            className="bg-amber-200
            text-xl p-2 text-center font-bold rounded-2xl hover:bg-black hover:text-white "
          />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Nav;

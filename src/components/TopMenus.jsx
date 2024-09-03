import React from "react";

function TopMenus() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl mt-8 text-center">oUr Top MEnuS</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch mt-8 space-y-4 md:space-y-0 md:space-x-4 mb-12">
        <div className="bg-white shadow-md rounded-lg w-[20rem] md:w-[30rem] h-60 md:h-70 mt-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwYXN0aGV0aWN8ZW58MHx8MHx8fDA%3D"
            alt="Meals"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="bg-white shadow-md rounded-lg w-[20rem] md:w-[30rem] h-40 md:h-60 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1492778297155-7be4c83960c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYSUyMGFzdGhldGljJTIwaW1hZ2VzfGVufDB8fDB8fHww"
              alt="Drinks"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg w-[20rem] md:w-[30rem] h-40 md:h-82 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1660715683691-d1614d1dd361?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VycyUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Brunch offers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenus;

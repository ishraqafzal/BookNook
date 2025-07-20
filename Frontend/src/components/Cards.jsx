import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center"> 
        <div className="card bg-base-100 w-80 h-96 shadow-md m-2 mt-4  my-3 p-3 hover:scale-105 duration-200
        dark:bg-slate-900 dark:text-white dark:border"> 
          <figure className="h-48"> {/*fixed height for the figure */}
            <img
              src={item.image}
              alt="Shoes"
              className="w-full h-full object-cover" //image covers the area without distortion
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between cursor-pointer">
              <div className="badge badge-outline rounded-full border-[1px]">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 rounded-full border-[1px]">Read now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
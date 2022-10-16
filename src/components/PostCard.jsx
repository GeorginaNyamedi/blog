import React from "react";

const PostCard = () => {
  return (
    <div className="=min-h-60 md:h-72 border-2 grid md:grid-cols-4">
        <div className="h-full">
           <img src="/images/post-1.jpg" alt="" className="h-full object-cover" /> 
        </div>
        <div className="col-span-3 w-full p-5">
          <h3 className="="text-2xl font-semibold text-gray-700>
            This is the post title
           </h3>
           <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit, voluptatum ducimus nobis alias fugit adipisci expedita doloremque. 
            Vero praesentium commodi, aperiam fuga non sapiente quis tenetur hic? Architecto, quasi dignissimos.
           </p>
           <button className="border border-cyan-500 px-7 py-2 rounded text-cyan-500 hover:bg-cyan-500 hover:text-white duration-200 ">Read more...</button>
        </div>
    </div>
  )
}

export default PostCard;
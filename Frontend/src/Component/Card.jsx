import React from 'react'

function Card({item}) {
  console.log(item.image)
  return (
  <>
  <div className='mt-4 my-3'>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:text-pink-500 duration-500 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default Card

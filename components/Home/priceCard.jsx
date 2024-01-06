import React from 'react'

export default function PriceCard({index ,image ,title ,desc , price}) {
  return (
    <div 
    
    key={index}
    className=' shadow-2xl bg-white  rounded-2xl p-12'>


<div className=''>

<div>
    <img className=' object-cover' src={image} alt="" />
</div>


<div className='my-4 text-center flex-col  space-y-2'>

<h1 className=' text-4xl'>{title}</h1>

<p className=' text-xl font-semibold    text-purple-100'>{price}</p>


<p className=''>{desc}</p>



</div>





</div>






    </div>
  )
}

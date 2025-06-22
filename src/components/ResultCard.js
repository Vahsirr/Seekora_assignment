import React from 'react'
import Image from 'next/image'

function ResultCard({item}) {
    console.log("items from result card",item)
    return (
        <div className='border rounded-lg overflow-hidden shadow hover:shadow-lg transition'>
            <div className='relative w-full h-48 object-cover'>
                <Image src={item.image} alt={item.id} layout='fill' priority/>
            </div>
            <div className='p-4'>
                <h3 className='font-bold text-lg'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {item.tags.map((tag,idx)=>(
                        <span className='bg-gray-200 text-xs px-2 py-1 rounded-full'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResultCard
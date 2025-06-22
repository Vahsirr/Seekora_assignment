import React from 'react'
import ResultCard from './ResultCard'

function ResultGrid({results}) {
    console.log(results)
    if(results.length === 0 ){
        console.log(results)
        return <p className='text-center mt-8 text-gray-500'>No results found.</p>
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
        {results.map((items)=>{
            console.log("items",items)
            return(
            <ResultCard key={items.id} item={items} />)
        })}
    </div>
  )
}

export default ResultGrid
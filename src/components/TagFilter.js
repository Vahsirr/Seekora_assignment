import React from 'react'

function TagFilter({ tags, activeTags, setActiveTags }) {
    console.log("vhv ", tags)
    return (
        <div className='flex flex-wrap gap-2 justify-center mt-4'>
            {tags.map((tag, index) => (
                <button
                    key={index}
                    onClick={() => setActiveTags(tag)}
                    className={`px-3 py-1 rounded-full border text-sm ${tag === activeTags ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-blue-100"}`}
                >
                    {tag}
                </button>
            ))}
            {activeTags && (
                <button
                    className="px-3 py-1 bg-red-100 rounded-full"
                    onClick={() => setActiveTags(null)}
                >
                    Clear Filters
                </button>
            )}
        </div>
    )
}

export default TagFilter
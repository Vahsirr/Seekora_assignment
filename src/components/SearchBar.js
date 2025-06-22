import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar({ query, setQuery, suggestions, onSeletSuggestion }) {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <section className='relative max-w-xl mx-auto mt-6'>
            <div className='relative'>
                <input
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setShowDropdown(true) }}
                    onBlur={(e) => setTimeout(() => setShowDropdown(false), 500)}
                    placeholder='Enter the title or text to Search'
                    className='w-full p-3 border rounded-xl shadow-md'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onSeletSuggestion(query)
                            setShowDropdown(false)
                        }
                    }}
                />
                <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                    onClick={() => { onSeletSuggestion(query); setShowDropdown(false) }}
                >
                    <FaSearch />
                </button>
            </div>
            {showDropdown && suggestions.length > 0 && (
                <ul className='absolute bg-white border rounded shadow w-full z-10 mt-1 h-auto max-h-48 overflow-y-auto'>
                    {suggestions.map((s, i) => (
                        <li
                            key={i}
                            className='p-2 hover:bg-gray-100 cursor-pointer'
                            onClick={() => {
                                onSeletSuggestion(s)
                                setQuery(s)
                                setShowDropdown(false)
                            }}
                        >
                            {s}
                        </li>
                    ))}
                </ul>
            )
            }
        </section>
    )
}

export default SearchBar
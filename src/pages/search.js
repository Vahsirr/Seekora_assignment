import React, { useState, useEffect } from 'react'
import mock from '@/data/mock_data';
import SearchBar from '@/components/SearchBar';
import ResultGrid from '@/components/ResultGrid';
import TagFilter from '@/components/TagFilter';
import Loader from '@/components/Loading';

function search() {
  const [query, setQuery] = useState('')
  const [querySelect,setQuerySelect] = useState('');
  const [activeTags, setActiveTag] = useState(null);
  const [results, setResults] = useState(mock)
  const [loading, setLoading] = useState()
  const uniqueTags = [...new Set(mock.flatMap((items) => items.tags))]
  console.log("The unique tags are ", uniqueTags)

  useEffect(()=>{
    if(!query){
      setQuerySelect('')
    }
  },[query])

  const getSuggestion = () => {
    let q = query.toLowerCase()
    const titles = mock.map((items) => items.title)
    const tags = mock.flatMap((items) => items.tags)
    const uniqueArray = [...new Set([...titles, ...tags])]
    return uniqueArray.filter((e) => e.toLowerCase().includes(q))
  }

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const filtered = mock.filter((item) => {
        const matchesQuery =
          !querySelect ||
          item.title.toLowerCase().includes(querySelect.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(querySelect.toLowerCase())
          );

        const matchesTag = !activeTags || item.tags.includes(activeTags);
        return matchesQuery && matchesTag;
      });
      setResults(filtered)
      setLoading(false)
    }, 1000)

    return (() => clearTimeout(timeout));
  }, [querySelect, activeTags])


  return (
    <div className='container mx-auto px-4'>
      <SearchBar
        query={query}
        setQuery={setQuery}
        suggestions={getSuggestion()}
        onSeletSuggestion={(e) => setQuerySelect(e)}
      />
      <TagFilter tags={uniqueTags} activeTags={activeTags} setActiveTags={setActiveTag} />
      {loading ?
        <Loader />
        :
        <ResultGrid results={results} />
      }
    </div>
  )
}

export default search
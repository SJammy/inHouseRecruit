import { useState, useMemo } from 'react'
import jobsPostings from '../data/job-postings.json'

export function useSearchResults(searchKeyword, jobType, location, newJobForm) {
  const [searchResults] = useState([...jobsPostings])

  // const addNewJob = useCallback((newJobForm) => {
  //   if(newJobForm){setSearchResults([...searchResults, newJobForm])}
  // }, [searchResults])

  // useEffect(() => {
  //   if(newJobForm) {addNewJob(newJobForm)}
  // }, [addNewJob, newJobForm])

  const filteredSearchResults = useMemo(() => {
    // filter the search results based on the search keyword, job type, and location
    let filteredResults = newJobForm ? [newJobForm, ...searchResults] : searchResults
    if (searchKeyword || jobType || location) {
      filteredResults = searchResults.filter((result) => {
        const titleMatch = result['job-title']
          .toLowerCase()
          .includes(searchKeyword.toLowerCase())
        const typeMatch = result['job-type']
          .toLowerCase()
          .includes(jobType.toLowerCase())
        const locationMatch = result['location']
          .toLowerCase()
          .includes(location.toLowerCase())
        return titleMatch && typeMatch && locationMatch
      })
    }
    return filteredResults
  }, [newJobForm, searchResults, searchKeyword, jobType, location])

  return filteredSearchResults
}



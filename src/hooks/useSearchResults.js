import { useState, useEffect } from 'react'
import jobsPostings from '../data/job-postings.json'

export function useSearchResults(searchKeyword, jobType, location) {
  const [searchResults] = useState([
    // example data
    {
      'job-title': 'Software Engineer',
      'job-type': 'Full-time',
      location: 'San Francisco',
      salary: '100,000',
      requirements: [
        "Bachelor's degree in business or related field",
        '5+ years of experience in product management',
        'Experience with agile development methodologies',
      ],
      benefits: [
        'Health insurance',
        '401k plan',
        'Generous vacation time',
        'Remote work options',
      ],
      company: 'Tech Innovators',
      contact: 'careers@techinnovators.com',
      'job-description':
        'Tech Innovators is seeking a Product Manager to join our team.',
      // 'posted-date': '2022-03-01',
      // 'closing-date': '2022-03-31',
      // 'job-profile': 'Example job profile',
      // 'experience': '3+ years'
    },
    // add more example data here...
    ...jobsPostings,
  ])

  const [filteredSearchResults, setFilteredSearchResults] =
    useState(searchResults)

  useEffect(() => {
    // filter the search results based on the search keyword, job type, and location
    let filteredResults = searchResults
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
    setFilteredSearchResults(filteredResults)
  }, [searchKeyword, jobType, location, searchResults])

  return filteredSearchResults
}

import React, { useState } from 'react'
import { useSearchResults } from '../hooks/useSearchResults.js'
import JobDetailsDisplay from './components/JobDetailsDisplay.js'
import SummaryListDisplay from './components/SummaryListDisplay.js'

const RecruitAdScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('')
  const [selectedJob, setSelectedJob] = useState(null)

  const filteredResults = useSearchResults(searchTerm, jobType, location)

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value)
  }

  const handleJobClick = (job) => {
    setSelectedJob(job)
  }

  // const handleSearch = () => {}

  return (
    <div className='recruitment-ads-container'>
      <div className='recruitment-ads-left-column'>
        <div className='recruitment-ads-filters'>
          <div className='recruitment-ads-search-container recruitment-ads-filter'>
            <label htmlFor='searchTerm'>Keyword Search:</label>
            <input
              type='text'
              id='searchTerm'
              value={searchTerm}
              onChange={handleSearchTermChange}
              className='recruitment-ads-search-input'
            />
            {/* <button
            onClick={handleSearch}
            className='recruitment-ads-search-button'
          >
            Search
          </button> */}
          </div>
          <div className='recruitment-ads-filter'>
            <label htmlFor='location'>Location:</label>
            <input
              type='text'
              id='location'
              value={location}
              onChange={handleLocationChange}
              className='recruitment-ads-search-input'
            />
          </div>
          <div className='recruitment-ads-filter'>
            <label htmlFor='jobType'>Job Type:</label>
            <div>
              <input
                type='radio'
                id='alljobs'
                name='jobType'
                value='All'
                // checked={jobType === 'All'}
                checked={true}
                onChange={handleJobTypeChange}
              />
              <label htmlFor='alljobs'>All</label>
            </div>
            <div>
              <input
                type='radio'
                id='fulltime'
                name='jobType'
                value='Full-time'
                checked={jobType === 'Full-time'}
                onChange={handleJobTypeChange}
              />
              <label htmlFor='fulltime'>Full-time</label>
            </div>
            <div>
              <input
                type='radio'
                id='contract'
                name='jobType'
                value='Contract'
                checked={jobType === 'Contract'}
                onChange={handleJobTypeChange}
              />
              <label htmlFor='contract'>Contract</label>
            </div>
            <div>
              <input
                type='radio'
                id='parttime'
                name='jobType'
                value='Part-time'
                checked={jobType === 'Part-time'}
                onChange={handleJobTypeChange}
              />
              <label htmlFor='parttime'>Part-time</label>
            </div>
          </div>
        </div>
        <div className='recruitment-ads-column'>
          <SummaryListDisplay displayResults={filteredResults} onJobClick={handleJobClick} />
          {/* {filteredResults.map((job, index) => (
            <div
              key={index}
              className='recruitment-ads-job-summary'
              onClick={() => handleJobClick(job)}
            >
              <div>{job['job-title']}</div>
              <div>{job.company}</div>
              <div>{job.salary}</div>
              <div>{job['job-type']}</div>
              <div>{job.location}</div>
              <div>{job['posted-date']}</div>
            </div>
          ))} */}
        </div>
      </div>
      <div className='recruitment-ads-column recruitment-ads-right-column'>
        {/* Right section */}
        <JobDetailsDisplay selectedJob={selectedJob} />
        
      </div>
    </div>
  )
}

export default RecruitAdScreen

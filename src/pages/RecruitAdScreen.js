import React, { useRef, useState } from 'react'
import { useSearchResults } from '../hooks/useSearchResults.js'
import JobDetailsDisplay from './components/JobDetailsDisplay.js'
import SummaryListDisplay from './components/SummaryListDisplay.js'
import JobForm from './JobForm.js'

const RecruitAdScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('')
  const [newJobForm, setNewJobForm] = useState(null)
  const filteredResults = useSearchResults(
    searchTerm,
    jobType,
    location,
    newJobForm
  )
  const [selectedJob, setSelectedJob] = useState(filteredResults[0])

  const section1Ref = useRef(null)
  const section2Ref = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'instant' })
  }

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

  const handleJobForm = (data) => {
    setNewJobForm(data)
    setSelectedJob(data)
  }

  return (
    <>
      <div>
        {/* <div ref={section1Ref}>
        <h1>Section 1</h1>
        <p>This is the first section.</p>
        <button onClick={() => scrollToSection(section2Ref)}>Go to Section 2</button>
      </div> */}
      </div>
      <div ref={section1Ref} className='recruitment-ads-container'>
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
            <SummaryListDisplay
              displayResults={filteredResults}
              onJobClick={handleJobClick}
              selectedJob={selectedJob}
            />
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
          <div className='button-add-job-side'>
            <button
              className='button-add-job'
              onClick={() => scrollToSection(section2Ref)}
            >
              Add New Job Posting
            </button>
          </div>
          <JobDetailsDisplay selectedJob={selectedJob} />
        </div>
      </div>
      {/* <div ref={section2Ref}>
        <h1>Section 2</h1>
        <p>This is the second section.</p>
        <button onClick={() => scrollToSection(section1Ref)}>Go to Section 1</button>
      </div> */}
      <div ref={section2Ref}>
        {/* <div className='button-cancel'>
          <button
            id='button-cancel-back'
            onClick={() => scrollToSection(section1Ref)}
          >
            Back
          </button>
        </div> */}
        <JobForm
          onJobFormData={handleJobForm}
          scrollToSection={() => scrollToSection(section1Ref)}
        />
      </div>
    </>
  )
}

export default RecruitAdScreen

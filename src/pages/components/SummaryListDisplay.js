import React from 'react'

const SummaryListDisplay = ({displayResults, onJobClick}) => {
  return (
    <div>
      SummaryListDisplay
      {displayResults.map((job, index) => (
            <div
              key={index}
              className='recruitment-ads-job-summary'
              onClick={() => onJobClick(job)}
            >
              <div>{job['job-title']}</div>
              <div>{job.company}</div>
              <div>${job.salary}</div>
              <div>{job['job-type']} | {job.location}</div>
              {/* <div>{job.location}</div> */}
              {/* <div>{job['posted-date']}</div> */}
            </div>
          ))}
        
      </div>
  )
}

export default SummaryListDisplay

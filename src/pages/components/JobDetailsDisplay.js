import React from 'react'

const JobDetailsDisplay = ({ selectedJob }) => {
  return (
    <div>
      {/* JobDetailsDisplay */}
      {selectedJob ? (
        <div className='recruitment-ads-details'>
        <div className='recruitment-ads-details-summary'>
          <div>{selectedJob['job-title']}</div>
          <div>{selectedJob.company}</div>
          <div><span className='label-text'>Salary</span> ${selectedJob.salary}</div>
          <div><span className='label-text'>Type</span> {selectedJob['job-type']}</div>
          <div><span className='label-text'>Located</span> {selectedJob.location}</div>
          </div>

          <div>
            <h2>Description</h2>
            {selectedJob['job-description']}
          </div>
          <div>
            <h2>Requirements</h2>
            {selectedJob.requirements}
          </div>
          <div>
            <h2>Benefits</h2>
            {selectedJob.benefits}
          </div>
          <div>
            <h2>Contact</h2>
            {selectedJob.contact}
          </div>

          {/* <div>{selectedJob['posted-date']}</div>
            <div>{selectedJob['job-profile']}</div>
            <div>{selectedJob['experience']}</div> */}
          {/* Render full job information here */}
        </div>
      ) : (
        <div>Please select a job from the left column.</div>
      )}
    </div>
  )
}

export default JobDetailsDisplay

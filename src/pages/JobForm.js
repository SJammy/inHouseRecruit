import React, { useState } from 'react'

const JobForm = ({ onJobFormData, scrollToSection }) => {
  const intialFormData = {
    'job-title': '',
    'job-type': '',
    location: '',
    salary: '',
    requirements: [],
    benefits: [],
    company: '',
    contact: '',
    'job-description': '',
  }

  const [formData, setFormData] = useState(intialFormData)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    onJobFormData(formData)
    scrollToSection()
    setFormData(intialFormData)
  }

  return (
    <div className='job-form-container'>
      <div className='button-cancel'>
        <button id='button-cancel-back' onClick={() => scrollToSection()}>
          Back
        </button>
      </div>
      <h2>New Job Posting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type='text'
            name='job-title'
            value={formData['job-title']}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Job Type:
          <input
            type='text'
            name='job-type'
            value={formData['job-type']}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:
          <input
            type='text'
            name='location'
            value={formData['location']}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Salary:
          <input
            type='text'
            name='salary'
            value={formData['salary']}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Requirements:
          <ul>
            {formData['requirements'].map((requirement, index) => (
              <li key={index}>
                <input
                  type='text'
                  value={requirement}
                  onChange={(event) => {
                    const newRequirements = [...formData['requirements']]
                    newRequirements[index] = event.target.value
                    setFormData({
                      ...formData,
                      requirements: newRequirements,
                    })
                  }}
                />
              </li>
            ))}
          </ul>
        </label>
        <button
          onClick={() => {
            setFormData({
              ...formData,
              requirements: [...formData['requirements'], ''],
            })
          }}
        >
          Add Requirement
        </button>
        <label>
          Benefits:
          <ul>
            {formData['benefits'].map((benefit, index) => (
              <li key={index}>
                <input
                  type='text'
                  value={benefit}
                  onChange={(event) => {
                    const newBenefits = [...formData['benefits']]
                    newBenefits[index] = event.target.value
                    setFormData({
                      ...formData,
                      benefits: newBenefits,
                    })
                  }}
                />
              </li>
            ))}
          </ul>
        </label>
        <button
          onClick={() => {
            setFormData({
              ...formData,
              benefits: [...formData['benefits'], ''],
            })
          }}
        >
          Add Benefit
        </button>
        <label>
          Company:
          <input
            type='text'
            name='company'
            value={formData['company']}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact:
          <input
            type='text'
            name='contact'
            value={formData['contact']}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Job Description:
          <textarea
            name='job-description'
            value={formData['job-description']}
            onChange={handleInputChange}
          />
        </label>
        <div>
          <button type='submit'>Post Job</button>
        </div>
        <div className='button-cancel'>
          <button
            type='button'
            id='button-cancel-form'
            onClick={() => scrollToSection()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default JobForm

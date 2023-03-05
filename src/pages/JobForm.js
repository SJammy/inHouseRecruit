import React, { useState } from 'react'

const JobForm = () => {
  const [formData, setFormData] = useState({
    'job-title': '',
    'job-type': '',
    location: '',
    salary: '',
    requirements: [],
    benefits: [],
    company: '',
    contact: '',
    'job-description': '',
  })

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
  }

  return (
    <div className='job-form-container'>
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default JobForm

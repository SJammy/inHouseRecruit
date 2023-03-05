import React from 'react'

function ApplyButton({
  emailAddress,
  subjectData = 'Feedback on My App',
  bodyData = 'Hi,\n\nI wanted to share some feedback on your app...',
}) {
  const generateEmail = () => {
    const subject = subjectData
    const body = bodyData
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

  }

  return (
    <>
      <button className='button-apply' onClick={generateEmail}>Apply</button>
    </>
  )
}

export default ApplyButton

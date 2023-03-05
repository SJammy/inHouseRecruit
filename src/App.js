import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './pages/Layout'
// import JobForm from './pages/JobForm'
// import RecruitAdScreen from './pages/RecruitAdScreen'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="jobform" element={<JobForm />} /> */}
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

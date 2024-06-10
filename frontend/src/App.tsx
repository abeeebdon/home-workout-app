import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import SignIn from './pages/auth/signin/SignIn'
import Home from './pages/Home'
import SignUp from './pages/auth/signup/SignUp'
import OtpVerification from './pages/auth/verification/OtpVerification'
import ForgotPassword from './pages/auth/forgot-password/Index'
import Verified from './pages/auth/Verified'
import GetStarted from './pages/auth/signup/GetStarted'

import Layout from './pages/homepage/Layout'
import HomePage from './pages/homepage/Index'
import Tips from './pages/homepage/tips/Index'
import Tracker from './pages/homepage/tracker/Index'
import History from './pages/homepage/history/Index'

const App = () => {
  // const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="tips" element={<Tips />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="history" element={<History />} />
        </Route>

        <Route path="/register" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<OtpVerification />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/get-started" element={<GetStarted />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App

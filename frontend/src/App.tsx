import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import SignIn from './pages/signin/SignIn'
import Home from './pages/Home'
import SignUp from './pages/signup/SignUp'
import OtpVerification from './pages/verification/OtpVerification'
import ForgotPassword from './pages/forgot-password/Index'
import Verified from './pages/auth/Verified'

const App = () => {
  // const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<OtpVerification />} />
        <Route path="/verified" element={<Verified />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App

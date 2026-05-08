import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Write from './Pages/Write'
import Features from './Pages/Features'
import HowItWorks from './Pages/HowItWorks'
import Earnings from './Pages/Earnings'
import ForWriters from './Pages/ForWriters'
import ForReaders from './Pages/ForReaders'
import GetStarted from './Pages/GetStarted'
import GetPaid from './Pages/GetPaid'
import Topics from './Pages/Topics'
import ReferralProgram from './Pages/ReferralProgram'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Careers from './Pages/Careers'
import Contact from './Pages/Contact'
import HelpCenter from './Pages/HelpCenter'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/write" element={<Write />} />
      <Route path="/features" element={<Features />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/earnings" element={<Earnings />} />
      <Route path="/for-writers" element={<ForWriters />} />
      <Route path="/for-readers" element={<ForReaders />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/get-paid" element={<GetPaid />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/referral" element={<ReferralProgram />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/help" element={<HelpCenter />} />
    </Routes>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg.png'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* These make the cursor work from your CSS */}
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>

      {/* These are the floating blobs from your CSS */}
      <div className="blob"></div>
      <div className="blob-2"></div>

      <section id="center" style={{ textAlign: 'center', paddingTop: '10vh' }}>
        <h1 className="shimmer-text" style={{ fontSize: '4rem' }}>Ovela</h1>
        <p className="breathe">Mental health awareness, simplified.</p>
        
        <button
          className="glass"
          style={{ padding: '15px 30px', borderRadius: '12px', marginTop: '20px' }}
          onClick={() => setCount((count) => count + 1)}
        >
          Community Members: {count}
        </button>
      </section>
    </>
  )
}
export default App

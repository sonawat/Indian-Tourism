import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className="Amain">
        <div className="Aleft">
          <section className="Ahero">
            <div className="Ahero-content">
              <h1>Discover Indian Tourism</h1>
              <p>Explore the land of rich history, romantic escapes, and serene beauty.</p>
              <div className="Acta-buttons">
             
              <NavLink to="/abhi">
                <button className="Acta">Galary</button>
              </NavLink>

              </div>
            </div>
          </section>
        </div>
        <div className="Aright">
          <div className="Abox">
            <span style={{ '--i': 1 }}><img src="https://images.unsplash.com/photo-1615966192539-f1731963b19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww" alt="Tourism 1" /></span>
            <span style={{ '--i': 2 }}><img src="https://images.unsplash.com/photo-1686575192618-9bbf73aba0d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Tourism 2" /></span>
            <span style={{ '--i': 3 }}><img src="https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=-rQ0EFDuWtGCEnjFTxGoy4CEPlq6w3ncsMZ1vVumUIs=" alt="Tourism 3" /></span>
            <span style={{ '--i': 4 }}><img src="https://plus.unsplash.com/premium_photo-1677002267493-cfdcc59cee92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Tourism 4" /></span>
            <span style={{ '--i': 5 }}><img src="https://media.istockphoto.com/id/478673422/photo/golden-temple-amritsar.webp?a=1&b=1&s=612x612&w=0&k=20&c=eZKSHaoagHGLFzTVbbryIwgKLBf0VrsRAFT0VLEXiLQ=" alt="Tourism 5" /></span>
            <span style={{ '--i': 6 }}><img src="https://plus.unsplash.com/premium_photo-1677002259522-111b3e74786f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Tourism 6" /></span>
            <span style={{ '--i': 7 }}><img src="https://images.unsplash.com/photo-1523345863760-5b7f3472d14f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Tourism 7" /></span>
            <span style={{ '--i': 8 }}><img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Tourism 8" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

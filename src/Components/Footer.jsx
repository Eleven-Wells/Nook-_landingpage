import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2 className="footer-logo">NOOK</h2>
          <p>On Nook, attention isn't wasted. It's returned.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Subscribe to our newsletter" />
            <button>Subscribe</button>
          </div>
          
        <div className="footer-store-btns">
          <a href="#" className="store-btn">
            🍎 App Store
          </a>
          <a href="#" className="store-btn">
           ▶ Google Play
          </a>
        </div>
        </div>
        

        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="/explore">Explore</a>
            <a href="/features">Features</a>
            <a href="/how-it-works">How it works</a>
            <a href="/earnings">Earnings</a>
          </div>

          <div className="footer-col">
            <h4>Community</h4>
            <a href="/for-writers">For Writers</a>
            <a href="/for-readers">For Readers</a>
            <a href="/get-started">Get Started</a>
            <a href="/get-paid">Get Paid</a>
            <a href="/topics">Topics</a>
            <a href="/referral">Referral Program</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
            <a href="/help">Help Center</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© NOOK Inc</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms and Condition</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/payment-policy">Payment Policy</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
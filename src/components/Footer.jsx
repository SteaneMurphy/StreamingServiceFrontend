import './Footer.css'

function Footer() {

  return (
    <div className='footerContainer'>
        <div className='columnContainerParent'>
            <div className='columnContainer'>
                <a>Audio Description</a>
                <a>Investor Relations</a>
                <a>Privacy</a>
                <a>Contact Us</a>
            </div>
            <div className='columnContainer'>
                <a>Help Centre</a>
                <a>Jobs</a>
                <a>Legal Notices</a>
            </div>
            <div className='columnContainer'>
                <a>Gift Cards</a>
                <a>Netflix Shop</a>
                <a>Cookie Preferences</a>
            </div>
            <div className='columnContainer'>
                <a>Media Centre</a>
                <a>Terms of Use</a>
                <a>Corporate Information</a>
            </div>
        </div>
        <div>
            <span>Service code</span>
        </div>
        <div>
            <span>1997-2025 Netflix, Inc.</span>
        </div>
    </div>
  )
}

export default Footer

import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const openTab = (link) => {
    window.open(link);
  }


  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div> */}

        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link >24 Elkedra Way, Cranbourne North, Vic 3977</Link>
            <Link >30 Snow Wood Avenue Ellenbrook WA 6069</Link>
            <Link to='/'>Phone : 1300755059</Link>
            <Link to='/'>Email : admin@sunparksolar.com.au</Link>
            <Link to='/'>ABN :- <br></br> 69169754670</Link>
            {/* <Link to='/'>Sponsorships</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Important Links</h2>
            <Link to='/' >Home</Link>
            <Link to='/services'>About</Link>
            <Link to='/products'>Products</Link>
            <Link to='/sign-up'>Contact</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link onClick={() => { openTab("https://www.instagram.com/sunparksolar/?igshid=clem647dss7m") }} to='/'>Instagram</Link>
            <Link onClick={() => { openTab("https://www.facebook.com/sunparksolar") }} to='/'>Facebook</Link>
            {/* <Link to='/'>Youtube</Link> */}
            {/* <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <div>
              <img style={{ height: "40px", width: "80px" }} src="images/l.svg"></img>
            </div>
          </div>
          <small class='website-rights'>SunPark Solar © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              onClick={() => { openTab("https://www.facebook.com/sunparksolar") }}
              // target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              onClick={() => { openTab("https://www.instagram.com/sunparksolar/?igshid=clem647dss7m") }}
              // target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from 'react'

const Footer = () => {
  return (
    <>
      <footer id="footer" className="container footer">
        {/* DIVIDER */}
        <div>
          <hr></hr>
        </div>

        <article className="container">

          <h6>It would be great hearing from you</h6>

        </article>

        <article className='container footer__icons'>

          <h6>We can work together:</h6>
          <div className="icons">

            <a href="tel:+2348061103300" target="_blank" rel="noreferrer"><span><i className="icon-highlight--primary  bi bi-telephone"></i></span></a>

            <a href="sms:+2348061103300" target="_blank" rel="noreferrer"><span><i className="icon-highlight--primary  bi bi-chat-text"></i></span></a>

            <a href="https://wa.me/2348061103300" target="_blank" rel="noreferrer"><span><i className="icon-highlight--primary  bi bi-whatsapp"></i></span></a>

            <a href="https://x.com/BonaCJ99" target="_blank" rel="noreferrer"><span><i className="icon-highlight--primary bi bi-twitter-x"></i></span></a>

            <a href="mailto:bonacjugwu@gmail.com" target="_blank" rel="noreferrer"><span><i className="icon-highlight--primary  bi bi-envelope"></i></span></a>

            <a href="mailto:ugwubonaventure@gmail.com" target="_blank" rel="noreferrer"><span><i className="icon-highlight--primary  bi bi-envelope"></i></span></a>

            <a href="https://github.com/BonaventureCJ" target="_blank" rel="noreferrer"><span><i className="icon-highlight--primary  bi bi-github"></i></span></a>

            {/* <a href="#" target="_blank"><span><i className="bi bi-facebook"></i></span></a> */}
            {/* <a href="#" target="_blank"><span><i className="bi bi-instagram"></i></span></a> */}
            {/* <a href="#" target="_blank"><span><i className="bi bi-youtube"></i></span></a> */}
            {/* <a href="tel:+2348061103300" target="_blank"><span><i className="bi bi-telephone"></i>+2348061103300</span></a> */}
            {/*  <a href="sms:+2348061103300" target="_blank"><span className="ud-footer-icon ud-middle-icon"><i className="bi bi-chat-text"></i>+2348061103300</span></a> */}
            {/* <a href="mailto:bonacjugwu@gmail.com" target="_blank"><span><i className="bi bi-envelope"></i>bonacjugwu@gmail.com</span></a> */}
          </div>
        </article>

        <article className="copyright">

          <p className="text-muted">Copyright<span>&copy; </span><span>Bonaventure C. J. Ugwu </span>{new Date().getFullYear()}</p>

        </article>
      </footer>
    </>
  )
}

export default Footer
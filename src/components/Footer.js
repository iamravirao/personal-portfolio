import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Ravi</span>
        <div className="links">
          <a href="https://www.facebook.com/raoravi01?mibextid=ZbWKwL">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/Ravi37792869?t=nPLLc0NUH563GgReSFUMpQ&s=08">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/Ravi37792869?t=nPLLc0NUH563GgReSFUMpQ&s=08">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Ravi Yadav
        </p>
      </div>
    </footer>
  );
}

export default Footer;
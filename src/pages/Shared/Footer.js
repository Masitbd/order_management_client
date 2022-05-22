import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-accent text-white py-1 my-4">
        <footer className="footer mx-16 my-8">
          <div>
            <span className="footer-title">Services</span>
            <Link to={""} className="link link-hover">
              Branding
            </Link>
            <Link to="" className="link link-hover">
              Design
            </Link>
            <Link to="" className="link link-hover">
              Marketing
            </Link>
            <Link to="" className="link link-hover">
              Advertisement
            </Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to="" className="link link-hover">
              About us
            </Link>
            <Link to="" className="link link-hover">
              Contact
            </Link>
            <Link to="" className="link link-hover">
              Jobs
            </Link>
            <Link to="" className="link link-hover">
              Press kit
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to="" className="link link-hover">
              Terms of use
            </Link>
            <Link to="" className="link link-hover">
              Privacy policy
            </Link>
            <Link to="" className="link link-hover">
              Cookie policy
            </Link>
          </div>
        </footer>
      </div>
      <div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <div>
            <p>Copyright © 2022 - All right reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 mt-auto">
      <div className="border-t border-neutral-800 py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} MiHiR.dev — Designed with focus & passion.
      </div>
    </footer>
  );
};

export default Footer;

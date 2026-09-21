import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="mt-20 py-16 bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="top-section flex justify-between container mx-auto">
        <div className="left-content">
          <img className="h-[22px] mb-3" src={logo} alt="" />
          <p className="mb-3 text-[#64748B] w-[500px]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-3 text-[#475569] font-semibold text-[12px]">
            <p>GitHub</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="right-content flex justify-between gap-30">
          <div className="product">
            <h1 className="font-semibold text-[16px] mb-4">PRODUCT</h1>
            <p className="font-semibold text-[12px] mb-4 text-[#64748B]">
              Home
            </p>
            <p className="font-semibold text-[12px] mb-4 text-[#64748B]">
              Technologies
            </p>
            <p className="font-semibold text-[12px] mb-4 text-[#64748B]">
              Projects
            </p>
          </div>
          <div className="company">
            <h1 className="font-semibold text-[16px] mb-4">COMPANY</h1>
            <p className="font-semibold text-[12px] mb-4 text-[#64748B]">
              About
            </p>
            <p className="font-semibold text-[12px] mb-4 text-[#64748B]">
              Contact
            </p>
            <p className="font-semibold text-[12px] mb-4 text-[#64748B]">
              Careers
            </p>
          </div>
          <div className="legal">
            <h1 className="font-semibold text-[16px] mb-4">LEGAL</h1>
            <p className="font-semibold text-[12px] mb-4 text-[#64748B]">
              Privacy Policy
            </p>
            <p className="font-semibold text-[12px] mb-4 text-[#64748B]">
              Terms of Service
            </p>
          </div>
        </div>
      </div>

      <hr className="container mx-auto bg-white border-t border-gray-100 mb-8" />

      <div className="bottom-section container mx-auto flex justify-between">
        <div className="copy-right-msg text-[#94A3B8] text-[12px]">
          © 2026 Dev Stack. All rights reserved.
        </div>
        <div className="privacy-terms flex text-[#94A3B8] text-[12px] gap-3">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

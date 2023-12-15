function Footer() {
  return (
    <div>
      <div className="flex justify-center my-4">
        <div className="flex gap-4">
          <span>
            <i className="fa-brands fa-cc-visa fa-2xl"></i>
          </span>
          <span>
            <i className="fa-brands fa-cc-paypal fa-2xl"></i>
          </span>
          <span>
            <i className="fa-brands fa-stripe fa-2xl"></i>
          </span>
          <span>
            <i className="fa-brands fa-cc-mastercard fa-2xl"></i>
          </span>
        </div>
      </div>
      <p className="text-xs text-center text-gray-400 mb-3">
        2023 ©️ Wood Creek BBQ Beef Jerkey | Fresh, Moist and Tasty
      </p>
    </div>
  );
}

export default Footer;

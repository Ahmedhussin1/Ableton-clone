
function Navbar() {
  return (
    <div className="h-[60px] flex justify-between items-center bg-white w-[1500px] mx-auto px-[20px] py-[40px] border-b-2">
      {/* left side nav elements */}

      <div className="flex gap-10">
        <svg
          role="img"
          aria-label="Logo Ableton"
          class="main-nav__logo__image"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="21"
          viewBox="0 0 45 21"
          
        >
          <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
        </svg>
        <ul className="flex gap-10">
          <li className="font-semibold text-[15px]">Live</li>
          <li className="font-semibold text-[15px]">Push</li>
          <li className="font-semibold text-[15px]">Note</li>
          <li className="font-semibold text-[15px]">Link</li>
          <li className="font-semibold text-[15px]">Shop</li>
          <li className="font-semibold text-[15px]">Pack</li>
          <li className="font-semibold text-[15px]">Help</li>
          <li className="font-semibold text-[15px]">More +</li>
        </ul>
      </div>
      {/* right side nav elements */}
      <div className="">
        <ul className="flex gap-5">
            <li className="font-semibold text-[18px] text-[#0000ff]">Try Live 12 For Free</li>
            <li className="font-700 text-[18px]">Log in or register</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
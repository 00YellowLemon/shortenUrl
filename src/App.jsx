import { AiOutlineInstagram,AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsPinterest } from "react-icons/bs";
import './App.css'
import Content from "./Content/Content";
import NavBar from "./NavBar/NavBar";

function App() {

  return (
    <div className='w-full font-Poppins font-medium'>
      <main>
        <NavBar />
        <Content />

      </main>
      <footer className="flex flex-col text-center items-center justify-center w-full bg-[#3b3054] px-32 py-12 md:flex-row md:justify-between md:items-start md:text-left">
        <h2 className="text-4xl font-bold text-white">
          Shortly
        </h2>
        <ul>
          <li><h2 className="text-xl text-white font-bold pb-10">Features</h2></li>
          <li className="text-stone-300 mb-5 capitalize"><a className="">Link Shortening</a></li>
          <li className="text-stone-300 mb-5 capitalize"><a>Broaden Links</a></li>
          <li className="text-stone-300 mb-5 capitalize"><a>Analytics</a></li>
        </ul>
        <ul>
          <li><h2 className="text-xl text-white font-bold pb-10">Resources</h2></li>
          <li className="text-stone-300 mb-5 capitalize"><a>Blog</a></li>
          <li className="text-stone-300 mb-5 capitalize"><a>Developers</a></li>
          <li className="text-stone-300 mb-5 capitalize"><a>Support</a></li>
        </ul>
        <ul>
          <li><h2 className="text-xl text-white font-bold pb-10">Company</h2></li>
          <li  className="text-stone-300 mb-5 capitalize"><a>About</a></li>
          <li  className="text-stone-300 mb-5 capitalize"><a>Our Team</a></li>
          <li  className="text-stone-300 mb-5 capitalize"><a>Careers</a></li>
          <li  className="text-stone-300 mb-5 capitalize"><a>Contact</a></li>
        </ul>
        <div className="flex gap-4 items-start justify-center">
        <AiFillFacebook className="h-28 text-white hover:text-teal-400" />
        <FaSquareXTwitter className="h-28 text-white hover:text-teal-400" />
        <AiOutlineInstagram className="h-28 text-white hover:text-teal-400" />
        <BsPinterest className="h-28 text-white hover:text-teal-400" />
        </div>

      </footer>

    </div>
  )
}

export default App

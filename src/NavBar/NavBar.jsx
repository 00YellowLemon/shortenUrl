import { useState } from "react";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
    const [open,setOpen] = useState(true)

    function handleClick(){
        setOpen(!open)
    }


  return (
    <div className="w-full flex py-12 px-32 items-center">
        <img src="./logo.svg" alt="" className="grow-0 mr-10"/>
        <div className="flex grow-1 w-full justify-between items-center">
            <ul className="flex gap-4">
                <li className="text-md font-bold text-zinc-400 cursor-pointer hover:text-neutral-700"><a href="">Features</a></li>
                <li className="text-md font-bold text-zinc-400 cursor-pointer hover:text-neutral-700"><a href="">Pricing</a></li>
                <li className="text-md font-bold text-zinc-400 cursor-pointer hover:text-neutral-700"><a href="">Resources</a></li>
            </ul>
            <div className="btn flex gap-6">
                <button className="text-zinc-400">
                    Login
                </button>
                <button className="text-white text-bold capitalize outline-none bg-teal-300 rounded-full px-5 py-2">
                    Sign Up
                </button>

            </div>

            {
                open && <AiOutlineMenu className="cursor-pointer sm:hidden" onClick={handleClick}/>
            }

            {
                !open && <AiOutlineClose className="cursor-pointer" onClick={handleClick}/>
            }

        </div>
        <Mobile />
    </div>
  )
}
function Mobile(){
    return(
        <div className="sm:hidden block w-3/4 rounded-xl text-center px-6 py-">
            <ul className="border-b-2">
                <li className="text-white font-bold pb-8"><a href="">Features</a></li>
                <li className="text-white font-bold pb-8"><a href="">Pricing</a></li>
                <li className="text-white font-bold pb-8"><a href="">Resources</a></li>
            </ul>
            <button className="font-bold cursor-pointer py-8">
                Login
            </button>
            <button className="font-bold w-full h-7 rounded-full bg-teal-300 ">
                Sign Up
            </button>

        </div>
    )
}

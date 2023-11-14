
  

export default function Content() {

    
  return (
    <div>
        <div className="w-full flex h-screen items-stretch gap-20 relative">
            <div className="w-2/4 sm:order-2">
                <img src="./illustration-working.svg" alt="" className="w-full h-auto"/>
            </div>
            <div className="w-2/4 pt-28 text-left sm:order-1 pl-32">
                <h1 className="text-7xl font-bold text-gray-700 leading-tight">
                    More than just <br  className="xldden sm:block" /> shorter links
                </h1>
                <p className="text-lg font-bold text-zinc-400 pb-8">
                    Build your brand's recognitionlgnd get detailed insights
                    <br  className="hidden sm:block" /> 
                    on how your links are performing.
                </p>
                <button className="text-white text-bold capitalize outline-none bg-teal-300 rounded-full px-5 py-2 w-40">
                    Get Started
                </button>
            </div>
            
            <div className="w-full sm:px-32  absolute bottom-0 translate-y-2/4">
                <div className=" w-full bg-gray-700 rounded-lg ">
                    <form action="" className="flex w-full rounded-xl bg-[url('./bg-shorten-desktop.svg')] gap-6 p-8">
                        <input type="text" className="grow rounded-lg outline-none px-4" placeholder="Shorten a link here..." />
                        <button className="grow-0 h-full outline-none cursor-pointer text-white font-bold capitalize bg-teal-400 py-3 px-7 rounded-lg" >Shorten it!</button>
                    </form>
                </div>
            </div>
            
        </div>
        

        <div className="w-full p-32 sm:pt-40 bg-zinc-200 text-center">
            <h2 className="text-neutral-700 pb-6 font-bold text-4xl">
                Advanced Statistics
            </h2>
            <p className="text-neutral-700 text-md pb-24">
                Track how your links are performing across the web with our advanced
                statistics dashboard.
            </p>
            <div className="flex  gap-10 relative items-center">
                <div className="absolute w-2/3 h-2 bg-teal-400 top-2/4">

                </div>

                <div className="rounded-lg bg-white relative pt-14 px-4 text-left w-80">
                    <div className="absolute top-0 left-6 bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center -translate-y-2/4">
                        <img src="./icon-brand-recognition.svg" alt="" className="w-3/5 h-auto" />
                    </div>
                    <h3 className='text-xl text-neutral-700 font-bold pb-6'>
                        Brand Recognition
                    </h3>
                    <p className='text-lg text-zinc-300 pb-8 '>
                        Boost your brand recognition with each click.
                        Generic links don't mean a thing. Branded links 
                        help instil confidence in your content.
                    </p>
                </div>
                <div className="rounded-lg bg-white relative pt-14 px-4 text-left w-80 sm:-mb-16">

                    <div className="absolute top-0 left-6 bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center -translate-y-2/4">
                        <img src="./icon-brand-recognition.svg" alt="" className="w-3/5 h-auto" />
                    </div>
                    <h3 className='text-xl text-neutral-700 font-bold pb-6'>
                        Detailed Records
                    </h3>
                    <p className='text-lg text-zinc-300 pb-8 '>
                        Gain insights into who is clicking your links.Knowing when and where people engage
                        with your content helps inform better decisions.
                    </p>
                </div>
                <div className="rounded-lg bg-white relative pt-14 px-4 text-left w-80 sm:-mb-32">
                    <div className="absolute top-0 left-6 bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center -translate-y-2/4">
                        <img src="./icon-brand-recognition.svg" alt="" className="w-3/5 h-auto" />
                    </div>
                    <h3 className='text-xl text-neutral-700 font-bold pb-6'>
                        Full Customizable
                    </h3>
                    <p className='text-lg text-zinc-300 pb-8 '>
                        Improved brand awareness and content discoverability
                        through customizable links, supercharging audience engagement.
                    </p>
                </div>
            </div>

            <div>
            </div>
        </div>
        <div className="w-full bg-gray-700">
            <div className="w-full bg-[url('./bg-boost-desktop.svg')] text-center p-16 flex flex-col gap-8 items-center justify-center">
                <h2 className="font-bold text-white text-4xl">
                    Boost your links today
                </h2>
                <button className="text-white text-bold capitalize outline-none bg-teal-300 rounded-full px-5 py-2 w-40">
                    Get Started
                </button>
            </div>
        </div>        
    </div>
  )
}

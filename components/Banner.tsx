// import React from 'react'

import { InformationCircleIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

function Banner() {
    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
            </div>

            <h1 className="text-xl font-bold md:text-4xl lg:text-7xl">
                This Anime Movie
            </h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                this is the best anime on planet espicially in indonesia
            </p>
            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                    Play
                </button>

                <button
                    className="bannerButton bg-[gray]/70"
                >
                    <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
                </button>
            </div>
        </div>
    )
}

export default Banner
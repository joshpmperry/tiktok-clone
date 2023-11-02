"use client"

import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai"
import { MenuItemTypes } from "@/app/types"
import { BiGroup } from "react-icons/bi"
import { MdOutlineNotificationsNone } from "react-icons/md"

export default function MenuItem({ iconString, colorString, sizeString }: MenuItemTypes) {

    const icons = () => {
        if (iconString == 'For You') return <AiOutlineHome size={sizeString} color={colorString} />
        if (iconString == 'Following') return <BiGroup size={sizeString} color={colorString} />
        if (iconString == 'Messages') return <AiOutlineMessage size={sizeString} color={colorString} />
        if (iconString == 'Notification') return <MdOutlineNotificationsNone size={sizeString} color={colorString}/>
    }

    return (
        <>
            <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
                <div className="flex items-center lg:mx-0 mx-auto">

                    {icons()}

                    <p className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px] text-[${colorString}]`}>
                        {iconString}
                    </p>
                </div>
            </div>
        </>
    )
}

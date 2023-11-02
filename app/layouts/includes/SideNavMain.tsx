import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuItem from "./MenuItem"
import MenuItemFollow from "./MenuItemFollow"
import { useEffect } from "react"
import { useUser } from "@/app/context/user"
import ClientOnly from "@/app/components/ClientOnly"
import { useGeneralStore } from "@/app/stores/general"

export default function SideNavMain() {

    let { setRandomUsers, randomUsers} = useGeneralStore()

    const contextUser = useUser()
    const pathname = usePathname()

    useEffect(() => { setRandomUsers() }, [])
    return (
        <>
            <div 
                id="SideNavMain" 
                className={`
                    fixed z-20 bg-[#252424] pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                    ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'}
                `}
            >
                
                <div className="lg:w-full w-[55px] mx-auto">
                    <Link href="/">
                        <MenuItem 
                            iconString="For You" 
                            colorString={pathname == '/' ? '#5647ae' : '#f0f0f0'} 
                            sizeString="25"
                        />
                    </Link>
                    <Link href="/Following">
                        <MenuItem iconString="Following" colorString={pathname == '/Following' ? '#F02C56' : '#f0f0f0'} sizeString="25"/>
                    </Link>
                    <Link href="/Messages">
                        <MenuItem iconString="Messages" colorString={pathname == '/Messages' ? '#F02C56' : '#f0f0f0'} sizeString="25"/>
                    </Link>
                    <Link href="/Notification">
                        <MenuItem iconString="Notification" colorString={pathname == '/Notification' ? '#5647ae' : '#f0f0f0'} sizeString="25"/>
                    </Link>

                    <div className="border-b lg:ml-2 mt-2" />
                    <h3 className="lg:block hidden text-xs text-[#b6b6b6] font-semibold pt-4 pb-2 px-2">Suggested accounts</h3>

                    <div className="lg:hidden block pt-3" />
                    <ClientOnly>
                        <div className="cursor-pointer">
                            {randomUsers?.map((user, index) => ( 
                                <MenuItemFollow key={index} user={user} /> 
                            ))}
                        </div>
                    </ClientOnly>

                    <button className="lg:block hidden text-[#CF7B13] pt-1.5 pl-2 text-[13px]">See all</button>

                    {contextUser?.user?.id ? (
                        <div >
                            <div className="border-b lg:ml-2 mt-2" />
                            <h3 className="lg:block hidden text-xs text-[#b6b6b6] font-semibold pt-4 pb-2 px-2">Following accounts</h3>

                            <div className="lg:hidden block pt-3" />
                            <ClientOnly>
                                <div className="cursor-pointer">
                                    {randomUsers?.map((user, index) => ( 
                                        <MenuItemFollow key={index} user={user} /> 
                                    ))}
                                </div>
                            </ClientOnly>

                            <button className="lg:block hidden text-[#CF7B13] pt-1.5 pl-2 text-[13px]">See more</button>
                        </div>
                    ) : null}
                    <div className="lg:block hidden border-b lg:ml-2 mt-2" />

                    <div className="pb-14"></div>
                </div>

            </div>
        </>
    )
}

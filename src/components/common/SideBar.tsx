import React, { useEffect, useState } from "react";
import { Layout, LayoutHeader } from "./Layout";
import { Button } from "../ui/button";
import Nav from "./Nav";
import { cn } from "@/lib/utils";
import sideLinks from "@/data/sideLinks";
import { IconChevronsLeft, IconMenu2, IconX } from "@tabler/icons-react";

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
    isCollapsed: boolean,
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar = ({
    className,
    isCollapsed,
    setIsCollapsed
}: SideBarProps) => {
    const [navOpened, setNavOpened] = useState(false);
    const sideList = sideLinks();

    useEffect(() => {
        if (navOpened) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [navOpened]);

    return (
        <aside
            className={cn(`fixed left-0 right-0 top-0 z-50 w-full border transition-[width] md:bottom-0 md:right-auto md:h-svh ${isCollapsed ? 'md:w-14' : 'md:w-64'}`,
                className
            )}>
            <Layout>
                <LayoutHeader className="sticky top-0 justify-between px-4 py-3 shadow md:px-4">
                    <div className={`flex items-center ${!isCollapsed ? 'gap-2' : ''}`}>
                        <svg
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"

                            className={`transition-all ${isCollapsed ? 'h-6 w-6' : 'h-8 w-8'}`}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.287 9.0719C26.7811 6.94252 23.5382 5.65561 19.9999 5.65561C12.4756 5.65561 6.28482 11.472 5.68609 18.8447H0.0175781C0.626943 8.35087 9.35596 0 19.9999 0C25.0976 0 29.7555 1.91645 33.2934 5.0654L29.287 9.0719ZM38.0112 11.2876L32.7737 13.457C32.2685 12.4774 31.6535 11.5635 30.9458 10.7306L34.9522 6.72412C36.1691 8.09118 37.2021 9.62512 38.0112 11.2876ZM0.0175781 21.1906H5.68601C6.25338 28.1763 11.8413 33.7642 18.827 34.3316V40C8.72142 39.4132 0.604423 31.2962 0.0175781 21.1906ZM21.1727 34.3316V40C25.8103 39.7307 30.0287 37.8756 33.2933 34.9699L29.2869 30.9634C27.0607 32.8551 24.2528 34.0814 21.1727 34.3316ZM34.3138 18.8447H39.9823C39.8733 16.9673 39.5044 15.1587 38.9111 13.454L33.6736 15.6235C34.0048 16.652 34.2233 17.7305 34.3138 18.8447ZM34.9521 33.3111L30.9457 29.3047C32.8373 27.0785 34.0637 24.2706 34.3137 21.1906H39.9822C39.7129 25.8282 37.8578 30.0466 34.9521 33.3111Z" fill="url(#paint0_linear_377_34899)" />
                            <path d="M32.0167 20.0182C32.0167 13.3924 26.6263 8.00195 20.0005 8.00195C13.3747 8.00195 7.98438 13.3924 7.98438 20.0182C7.98438 26.6439 13.3748 32.0344 20.0006 32.0344C26.6263 32.0344 32.0167 26.6439 32.0167 20.0182ZM15.8978 26.4667H13.552V24.1209H15.8978V26.4667ZM15.8978 21.1911H13.552V18.8453H15.8978V21.1911ZM15.8978 15.9154H13.552V13.5696H15.8978V15.9154ZM26.5951 26.4667H18.6816V24.1209H26.5951V26.4667ZM26.5951 21.1911H18.6816V18.8453H26.5951V21.1911ZM26.5951 15.9154H18.6816V13.5696H26.5951V15.9154Z" fill="url(#paint1_linear_377_34899)" />
                            <defs>
                                <linearGradient id="paint0_linear_377_34899" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF7447" />
                                    <stop offset="1" stop-color="#241E1B" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_377_34899" x1="20.0005" y1="8.00195" x2="20.0005" y2="32.0344" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF7447" />
                                    <stop offset="1" stop-color="#CF5027" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className={`flex flex-col justify-end truncate ${isCollapsed ? 'invisible w-0' : 'visible w-auto'}`}>
                            <span className="font-bold text-2xl ml-1">Transacthost</span>
                        </div>
                    </div>

                    <Button
                        variant='ghost'
                        size='icon'
                        className='md:hidden'
                        aria-label='Toggle Navigation'
                        aria-controls='sidebar-menu'
                        aria-expanded={navOpened}
                        onClick={() => setNavOpened((prev) => !prev)}
                    >
                        {navOpened ? <IconX /> : <IconMenu2 />}
                    </Button>
                </LayoutHeader>
                {/* Navigation links */}

                <Nav
                    id='sidebar-menu'
                    className={`h-full flex-1 overflow-auto ${navOpened ? 'max-h-screen' : 'max-h-0 py-0 md:max-h-screen md:py-2'}`}
                    closeNav={() => setNavOpened(false)}
                    isCollapsed={isCollapsed}
                    links={sideList}
                />
                {/* scrollbar with toggle button */}
                <Button
                    onClick={() => setIsCollapsed((prev) => !prev)}
                    size='icon'
                    variant='outline'
                    className='absolute -right-5 top-1/2 hidden rounded-full md:inline-flex'
                >
                    <IconChevronsLeft
                        stroke={1.5}
                        className={`h-5 w-5 ${isCollapsed ? 'rotate-180' : ''}`}
                    />
                </Button>
            </Layout>
        </aside>
    )
}

export default SideBar;
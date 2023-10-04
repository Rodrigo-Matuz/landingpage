import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "shared/types";
import useMediaQuery from "hooks/useMediaQuery";
import ActionButton from "shared/ActionButton";
// import Button from "@mui/material/Button";

type Props = {
    isTopOfPage: boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }:Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return(
        <nav>
            {/* Main header, fixed position at the top
            stacking order of 30, takes up the full width of its container
            and has a vertical padding of 6 units */}
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                {/* Maximum width of the element to be automatically determined based on its content
                width to be 5/6 (or 83.33%) of its parent container's width */}
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    {/* Width of the element to be the full width of its parent container
                    and has a horizontal gap of 16 units between its child elements.*/}
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img alt="logo" src={Logo}/>
                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                {/* Gap or spacing of 8 units between elements
                                and it sets the text size to be small */}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link 
                                        page="Home" 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Benefits" 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Our Classes" 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Contact Us" 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <Link 
                                        page="Sign in" 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button 
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                            <MenuIcon/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                // fixed to the bottom right corner of its containing element, width of 300px
                // a background color related to the primary color, and an extra-large drop shadow
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOSE ICON */}
                    {/* flexible container with its content aligned to the right end
                    and it would have a generous 48px of padding on all sides. */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            {/* Height and width of 24px, text color of gray-400 */}
                            <CloseIcon />
                        </button>
                    </div>
                    {/* MENU ITEMS/LINK */}
                    {/* margin to one-third of the parent container's width, arranges
                    child elements in a vertical column with a 40px gap between them,
                    and increases the text size to a larger than normal size */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
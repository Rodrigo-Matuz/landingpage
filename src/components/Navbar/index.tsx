import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "shared/types";
import useMediaQuery from "hooks/useMediaQuery";
import ActionButton from "shared/ActionButton";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
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
            <AppBar className={navbarBackground} 
                color="transparent" 
                sx={{ 
                    boxShadow: "none", 
                    padding: "15px", 
                    zIndex: 30
                }}>
                <Toolbar variant="dense">
                    {/* Left side */}
                    <Box sx={{
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        width: "100%",
                        paddingRight: "20px",
                    }}>
                        <img alt="logo" src={Logo} />
                        {/* Right side */}
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
                            <IconButton 
                            color="inherit" 
                            aria-label="menu"
                            onClick={() => setIsMenuToggled(!isMenuToggled)} 
                            sx={{
                                backgroundColor: "#FFC132",
                                zIndex: 20,
                                ":hover": {
                                    backgroundColor: "#ff6a69"
                                }
                            }}>
                            <MenuIcon />
                        </IconButton>
                        )}
                        
                    </Box>
                </Toolbar>
            </AppBar>
            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                // fixed to the bottom right corner of its containing element, width of 300px
                // a background color related to the primary color, and an extra-large drop shadow
                <Box sx={{ 
                    position: "fixed", 
                    right: 0,
                    zIndex: 40,
                    backgroundColor: "#FFE1E0",
                    width: "300px",
                    height: "100%",
                }}>
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
                    child elements in a vertical column with a 40px gap between them
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
                </Box>
            )}
        </nav>
    )
}

export default Navbar
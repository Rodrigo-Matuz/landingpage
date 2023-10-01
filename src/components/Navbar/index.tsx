import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "@/assets/Logo.png"

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between"

    return (
        <nav>
            {/* Main header, fixed position at the top
            stacking order of 30, takes up the full width of its container 
            and has a vertical padding of 6 units*/}
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                {/* Maximum width of the element to be automatically determined based on its content
                width to be 5/6 (or 83.33%) of its parent container's width*/}
                <div className={`${flexBetween} max-auto w-5/6`}></div>

            </div>
        </nav>
    )
}

export default Navbar
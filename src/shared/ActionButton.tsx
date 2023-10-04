import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type props = {
    children: React.ReactNode;
    setSelectedPage : (value: SelectedPage) => void
}


const ActionButton = ({ children, setSelectedPage }: props) => {
    return (
        <AnchorLink
            // slightly rounded corners, a background color from the secondary palette
            // horizontal padding of 40px and vertical padding of 8px
            // changes its background and text color when hovered over
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            { children }
        </AnchorLink>
    )
}

export default ActionButton

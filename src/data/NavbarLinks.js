import Dashboard from "../assets/navbar/chart-pie-slice-fill.svg";
import Status from "../assets/navbar/chart-line-fill.svg";
import Profile from "../assets/navbar/user-circle-gear-fill.svg";


const NavbarLinks = [
    {
        title: "Home",
        index : 0,
        path: "/home",
        src: Dashboard
    },
    {
        title: "Status",
        index : 1,
        path: "/status",
        src: Status
    },
    {
        title : "Profile",
        index : 2,
        path : "/profile",
        src: Profile
    }
]

export default NavbarLinks
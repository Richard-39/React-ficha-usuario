import { NavLink } from "react-router-dom";

export default function Navbar () {

    const isPrimaryView = ({isActive}) => (isActive ? "active" : "notActive")

    return (
        <div>
            <NavLink className={isPrimaryView} to="/"> Home </NavLink>
            <NavLink className={({isActive}) => (isActive ? "active" : "notActive")} to="/usuario"> Usuario </NavLink>
        </div>
    )

}
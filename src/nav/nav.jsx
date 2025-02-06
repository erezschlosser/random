import { useState } from "react";
import './nav.css';

export default function Nav() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <a className="dropdown" onClick={() => setDropdown(!dropdown)}>Dropdown</a>
                {dropdown && (
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                )}
            </ul>
        </div>
    );
}


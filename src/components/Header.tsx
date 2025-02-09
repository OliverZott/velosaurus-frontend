"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '../app/globals.css';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-3">
            <div className="container">
                <Link href="/" passHref legacyBehavior>
                    <a className="navbar-brand">
                        <button
                            style={{ width: "4rem", height: "4rem", position: "relative" }}
                            className="btn btn-outline-primary rounded-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1000 1000"
                                fill="currentColor"
                            >
                                <path d="M941.4,261.9c-2.8-5.9-11.2-14-21.8-22.9c-10.6-9-19-5.6-19-5.6c-75,3.1-90.1,29.7-117.8,74.4
                            c-27.7,44.8-34.1,81.7-51.2,118s-56.8,57.1-71.6,54.3s-32.7-9.5-68-23.2s-65.5-12.6-101.5,0s-100.7,51.7-144.6,79.4
                            c-43.9,27.7-94.5,12.3-163.4,18.5c-68.8,6.2-113.8,47.6-121.1,72.2c-7.3,24.6-7.6,56.8,39.4,81.1c47,24.3,108.8,7.6,132-3.9
                            c23.2-11.5,55.4-31.9,86.4-13.7c31,18.2,7.3,44.2-7.3,56.5c-14.5,12.3-34.1,29.9-4.2,14c29.9-15.9,57.9-52.9,31.3-80.7
                            c-26.6-27.8-73.8-14.4-102.4-6.8s-71.9,9.5-93.4,2.5s-29.1-22.7-29.1-22.7c14.5-31,70.2-30.8,125.6-29.1
                            c55.4,1.7,100.1,2.8,100.1,2.8c17.9,11.5,65.5,24.6,65.5,24.6s-4.3,14.5-9.5,34.3c-5.2,19.8-3,45.9-4.8,51.1
                            c-1.9,5.2-3.7,12.3,4.1,13.8c7.8,1.5,30.6,2.2,35.1,1.5s3-14.2,4.1-21.6s9-28,10.4-37.3c1.5-9.3,10.8-15.3,14.5-20.1
                            c3.7-4.8,3-19,3-19s18.6,42.5,23.1,55.2c4.5,12.7,6,17.5,7.1,24.6s29.8,4.8,35.4,3.7c5.6-1.1,10.8-3,7.5-6
                            c-3.4-3-11.6-11.2-12.3-14.5c-0.7-3.4-0.7-54.5-0.7-54.5c25.7-3,70.9-17.5,70.9-17.5c5.6,32.8,25.7,80.2,25.7,80.2
                            s1.9,12.3,1.1,16.4c-0.7,4.1,0,7.8,7.8,6.7c7.8-1.1,25.7-2.2,32.4-3.7c6.7-1.5,4.5-5.6,4.5-5.6c6-1.1,11.6-2.2,9-5.2
                            c-2.6-3-11.6-11.9-11.9-13.8c-0.4-1.9-1.5-114.5-1.5-114.5c5.2-4.1,19.4-16.8,22.8-23.5c3.4-6.7,9.7-16.4,43.6-44
                            c33.9-27.6,49.3-76.3,55.5-106.8c6.2-30.5,2.2-50.1,26.3-97.9c24.1-47.8,45-55.1,56.2-60.4s26.3-5.3,29.4-2.8
                            c3.1,2.5,29.9,2.8,37.2,3.1C938.6,273.6,944.2,267.8,941.4,261.9z"/>
                            </svg>
                        </button>
                    </a>
                </Link>

                {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                <div className="navbar-nav me-auto">

                    <Link href="/about" passHref legacyBehavior>
                        <a className="nav-link">About</a>
                    </Link>
                    <Link href="/tours" passHref legacyBehavior>
                        <a className="nav-link">Tours</a>
                    </Link>
                </div>
                {/* <button
                        style={{ width: "4rem", height: "4rem", position: "relative" }}
                        className="btn btn-outline-primary rounded-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 1000"
                            fill="currentColor"
                        >
                            <path d="M941.4,261.9c-2.8-5.9-11.2-14-21.8-22.9c-10.6-9-19-5.6-19-5.6c-75,3.1-90.1,29.7-117.8,74.4
                            c-27.7,44.8-34.1,81.7-51.2,118s-56.8,57.1-71.6,54.3s-32.7-9.5-68-23.2s-65.5-12.6-101.5,0s-100.7,51.7-144.6,79.4
                            c-43.9,27.7-94.5,12.3-163.4,18.5c-68.8,6.2-113.8,47.6-121.1,72.2c-7.3,24.6-7.6,56.8,39.4,81.1c47,24.3,108.8,7.6,132-3.9
                            c23.2-11.5,55.4-31.9,86.4-13.7c31,18.2,7.3,44.2-7.3,56.5c-14.5,12.3-34.1,29.9-4.2,14c29.9-15.9,57.9-52.9,31.3-80.7
                            c-26.6-27.8-73.8-14.4-102.4-6.8s-71.9,9.5-93.4,2.5s-29.1-22.7-29.1-22.7c14.5-31,70.2-30.8,125.6-29.1
                            c55.4,1.7,100.1,2.8,100.1,2.8c17.9,11.5,65.5,24.6,65.5,24.6s-4.3,14.5-9.5,34.3c-5.2,19.8-3,45.9-4.8,51.1
                            c-1.9,5.2-3.7,12.3,4.1,13.8c7.8,1.5,30.6,2.2,35.1,1.5s3-14.2,4.1-21.6s9-28,10.4-37.3c1.5-9.3,10.8-15.3,14.5-20.1
                            c3.7-4.8,3-19,3-19s18.6,42.5,23.1,55.2c4.5,12.7,6,17.5,7.1,24.6s29.8,4.8,35.4,3.7c5.6-1.1,10.8-3,7.5-6
                            c-3.4-3-11.6-11.2-12.3-14.5c-0.7-3.4-0.7-54.5-0.7-54.5c25.7-3,70.9-17.5,70.9-17.5c5.6,32.8,25.7,80.2,25.7,80.2
                            s1.9,12.3,1.1,16.4c-0.7,4.1,0,7.8,7.8,6.7c7.8-1.1,25.7-2.2,32.4-3.7c6.7-1.5,4.5-5.6,4.5-5.6c6-1.1,11.6-2.2,9-5.2
                            c-2.6-3-11.6-11.9-11.9-13.8c-0.4-1.9-1.5-114.5-1.5-114.5c5.2-4.1,19.4-16.8,22.8-23.5c3.4-6.7,9.7-16.4,43.6-44
                            c33.9-27.6,49.3-76.3,55.5-106.8c6.2-30.5,2.2-50.1,26.3-97.9c24.1-47.8,45-55.1,56.2-60.4s26.3-5.3,29.4-2.8
                            c3.1,2.5,29.9,2.8,37.2,3.1C938.6,273.6,944.2,267.8,941.4,261.9z"/>
                        </svg>
                    </button> */}
            </div>
            {/* </div> */}
        </nav>
    )
};

export default Header;



// const Navbar = () => {
//     const [isCollapsed, setIsCollapsed] = useState(true);

//     const toggleNavbar = () => {
//         setIsCollapsed(!isCollapsed);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">MyApp</a>
//             <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={!isCollapsed} aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
//                 <ul className="navbar-nav">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="#">Home</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Link</a>
//                     </li>
//                     <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             Dropdown
//                         </a>
//                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <a className="dropdown-item" href="#">Action</a>
//                             <a className="dropdown-item" href="#">Another action</a>
//                             <div className="dropdown-divider"></div>
//                             <a className="dropdown-item" href="#">Something else here</a>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
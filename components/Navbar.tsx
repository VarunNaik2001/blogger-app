import Link from "next/link";
import { ContextType, useContext } from "react";
import { UserContext } from "../lib/context";
import { UserInfo } from "../lib/types";

export default function Navbar(): JSX.Element{
    const {user,username}  = useContext(UserContext);

    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link  legacyBehavior = {true} href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
            
        
                {/*User is signed in and has a username*/}
                {username && (
                    <>
                    <li className="push-left">
                        <Link legacyBehavior = {true} href='/admin'>
                            <button className="btn-blue">Write Posts</button>
                        </Link>
                    </li>

                    <li>
                        <Link legacyBehavior = {true} href={`/${username}`}>
                            <img src={user?.photoURL} />
                        </Link>

                    </li>
                    </>
                )
                }

                {/*User is not signed in OR has not created a username */}
                {!username &&(
                    <li>
                        <Link  legacyBehavior = {true} href='/enter'>
                            <button className="btn-blue">Log In</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}


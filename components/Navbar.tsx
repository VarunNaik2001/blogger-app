import Link from "next/link";

export default function Navbar(): JSX.Element{
    const user:String|null|boolean = null;
    const username:String|null|boolean = null;

    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
            
        
                {/*User is signed in and has a username*/}
                {username && (
                    <>
                    <li className="push-left">
                        <Link href='/admin'>
                            <button className="btn-blue">Write Posts</button>
                        </Link>
                    </li>

                    <li>
                        <Link href={`/${username}`}>
                            <img src={user?.photoURL} />
                        </Link>

                    </li>
                    </>
                )
                }

                {/*User is not signed in OR has not created a username */}
                {!username &&(
                    <li>
                        <Link href='/enter'>
                            <button className="btn-blue">Log In</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}


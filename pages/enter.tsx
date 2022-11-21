import {auth, googleAuthProvider} from '.././lib/firebase';
import { signInWithPopup } from 'firebase/auth';
export default function EnterPage({}){
    const user = null;
    const username = null;
    return (
        <main>
                {user ?
                    !username? <UsernameForm /> : <SignOutButton />
                    :
                    <SignInButton />}
        </main>
    )
}

function SignInButton(): JSX.Element{
    const signInWithGoogle = async () =>{
        await signInWithPopup(auth, googleAuthProvider);
    };

    return (
        <button className='btn-google' onClick={signInWithGoogle}>
            <img src={'/google.png'} /> Sign in with google
        </button>
    );
}

function SignOutButton(): JSX.Element{
    
return (
    <></>
);

}

function UsernameForm(): JSX.Element{
return(
    <></>
)
}

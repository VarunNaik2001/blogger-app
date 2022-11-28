import {auth, googleAuthProvider} from '.././lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { useState } from 'react';
export default function EnterPage({}){
    const {user, username} = useContext(UserContext)
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
    <>
    <button>
        Sign Out
    </button>
    </>
);

}

function UsernameForm():any {
    const {user, username} = useContext(UserContext)
    const [formValue, setFormValue] = useState('');
    const [isValid,setIsValid] = useState(false);
    const [loading,isLoading] = useState(false);
return(
    !username && (
        <section>
            <h3> Choose Username</h3>
            <form onSubmit={onSubmit}>
                <input name="username" placeholder="username" value= {formValue} onChange = {onChange} ></input>
            </form>
        </section>
    )
);
}

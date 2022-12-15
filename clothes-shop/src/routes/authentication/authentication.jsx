import SignInForm from '../../components/sign-in-form/sign-in-form'
import SingUpForm from '../../components/sign-up-form/sign-up-form'

import './authentication.style.scss'

const Authentication = () => {
    
    return (
        <div>
            <div className='authentication-container'>
                <SignInForm />
                <SingUpForm />
            </div>

        </div>
    )
}

export default Authentication
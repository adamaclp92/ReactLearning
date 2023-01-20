import SignInForm from '../../components/sign-in-form/sign-in-form'
import SingUpForm from '../../components/sign-up-form/sign-up-form'

import {AuthenticationContainer} from './authentication.styles'

const Authentication = () => {
    
    return (
            <AuthenticationContainer className='authentication-container'>
                <SignInForm />
                <SingUpForm />
            </AuthenticationContainer>
    )
}

export default Authentication
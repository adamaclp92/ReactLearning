import React from 'react'


export default function App(){
    const [formData, setformData]  = React.useState(
        {
            email: "",
            password: "",
            passwordConfirm: "",
            newsLetter: true
        })
   
        function handleChange(event){
            const {name, value, type, checked} = event.target
            

            setformData(prevState => {
                return  {
                    ...prevState,
                    [name]: type === 'checkbox' ? checked : value
                }
            }
   
            )
        }

        function handleSubmit(event){
            event.preventDefault()
            if(formData.password != formData.passwordConfirm){
                alert("Passwords do not match!")
            }else{
                if(formData.newsLetter){
                    alert("Successfully signed up!" + 
                    "\nEmail: " + formData.email + 
                    "\nPassword: " + formData.password + 
                    "\nConfirm: " + formData.passwordConfirm + 
                    "\nNewsLetter: " + formData.newsLetter + 
                    "\n Thanks for signing up for our newsletter!")
                }else {
                    alert("Successfully signed up!" + 
                    "\nEmail: " + formData.email + 
                    "\nPassword: " + formData.password + 
                    "\nConfirm: " + formData.passwordConfirm + 
                    "\nNewsLetter: " + formData.newsLetter)
                }

            }
            
        }

        console.log("Email: " + formData.email + 
                    "\nPassword: " + formData.password + 
                    "\nConfirm: " + formData.passwordConfirm + 
                    "\nNewsLetter: " + formData.newsLetter)

    return(
        <div className='d-flex justify-content-center form-container'>
            <form onSubmit={handleSubmit} className='main-form'>
                <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='form-control'
                    type="email"
                />
                <input 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className='form-control'
                    type="password"
                />
                <input 
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    className='form-control'
                    type="password"
                />

                <div className='form-group'>
                    <input 
                        name="newsLetter"
                        id="newsLetter"
                        checked={formData.newsLetter}
                        onChange={handleChange}
                        className='form-check-input'
                        type="checkbox"
                    />
                    <label 
                        htmlFor='newsLetter'
                        className='form-check-label'>
                            I want to join the newsletter
                    </label>
                </div>

                <button type="submit" className='btn btn-primary submitBut'>Submit</button>



            </form>
        </div>
        
    )
}
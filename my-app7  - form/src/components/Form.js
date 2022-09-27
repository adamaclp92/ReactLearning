import React from 'react'

export default function Form(){

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "" ,
            favColor: ""
        }
    )


    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
             
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    console.log("Vezetéknév: " + formData.firstName + 
                "\nKeresztnév: " + formData.lastName + 
                "\nEmail: " + formData.email + 
                "\nComment: " + formData.comments +
                "\nIsFriendly: " + formData.isFriendly +
                "\nEmployment: " + formData.employment + 
                "\nFavColor: " + formData.favColor)

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input 
                    className='form-control'
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input 
                    className='form-control'
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input 
                    className='form-control'
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea 
                    className='form-control'
                    name='comments'
                    placeholder='Comment here'
                    value={formData.comments}
                    onChange={handleChange}
                />
            </div>
            <div className='form-check'>
                <input 
                    className='form-check-input'
                    name='isFriendly'
                    id='isFriendly'
                    type='checkbox'
                    checked={formData.isFriendly}
                    onChange={handleChange}
                />
                <label 
                    className='form-check-label'
                    htmlFor='isFriendly'>Are you friendly?</label>
            </div>

        
            <fieldset className='border p-3'>
                <legend className='legend'>Current employment status</legend>

                <div className='form-group'>
                    <input 
                            type='radio'
                            id='unemployed'
                            name='employment'
                            value='unemployed'
                            onChange={handleChange}
                            className='radioBut'
                    />
                    <label htmlFor='unemployed'>Unemployed</label>
                </div>

                <div className='form-group'>
                    <input 
                        type='radio'
                        id='part-time'
                        name='employment'
                        value='part-time'
                        onChange={handleChange}
                        className='radioBut'
                    />
                    <label htmlFor='part-time'>Part-Time</label>
                </div>


                <div className='form-group'>
                    <input 
                        type='radio'
                        id='full-time'
                        name='employment'
                        value='full-time'
                        onChange={handleChange}
                        className='radioBut'
                    />
                    <label htmlFor='full-time'>Full-Time</label>
                </div>

            </fieldset>


        <div className='select-div'>
            <label htmlFor="favColor">What is yout favorite color?</label>
            <br />
            <select 
                className='form-select' 
                aria-label="Default select example" 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor">
                <option value=''>-- Choose --</option>
                <option value='Red'>Red</option>
                <option value='Green'>Green</option>
                <option value='Blue'>Blue</option>
                <option value='Yellow'>Yellow</option>
                <option value='Purple'>Purple</option>
                <option value='Black'>Black</option>
            </select>
        </div>

        <button className='btn btn-primary'>Send it in</button>

        </form>
    )
  
}
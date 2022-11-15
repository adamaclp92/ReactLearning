import React from "react"
import useInput from "../../hooks/use-input"
import Input from "../UI/Input"
import Label from "../UI/Label"
import Section from "../UI/Section"

interface Props {
    onInputDatas: (enteredProvider: string, enteredServiceName: string, enteredRmeName: string, enteredServiceFull: string) =>void
}

const RmeFilter = ({onInputDatas} : Props) => {

    const {value: enteredProvider, valueChangeHandler: providerInputChangeHandler, clearInputFields: clearInputProvider} = useInput()
    const {value: enteredServiceName, valueChangeHandler: serviceNameInputChangeHandler, clearInputFields: clearInputServiceName} = useInput()
    const {value: enteredRmeName, valueChangeHandler: rmeNameInputChangeHandler, clearInputFields: clearInputRmeName} = useInput()
    const {value: enteredServiceFull, valueChangeHandler: serviceFullInputChangeHandler, clearInputFields: clearInputServiceFull} = useInput()
 
    const formInputChange = (e: React.FormEvent) => {
        e.preventDefault()
        onInputDatas(enteredProvider, enteredServiceName, enteredRmeName, enteredServiceFull)
    }

    const clearInputFields = (e: React.FormEvent) => {
        e.preventDefault()
        clearInputProvider()
        clearInputServiceName()
        clearInputRmeName()
        clearInputServiceFull()
    }

    return(
        <React.Fragment>
        <form>
            <h1 className='text-center'>Filters</h1>
            <Section>         
                <table>
                    <thead>
                        <tr>
                            <Label htmlFor="provider" value="Provider"/>
                            <Label htmlFor="service-name" value="Service Name"/>
                            <Label htmlFor="rme-name" value="Rme Name"/>
                            <Label htmlFor="service-full" value="Service Full"/>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                            <Input type="text" id="provider" onChange={providerInputChangeHandler} value={enteredProvider} />
                            <Input type="text" id="service-name" onChange={serviceNameInputChangeHandler} value={enteredServiceName}/>
                            <Input type="text" id="rme-name" onChange={rmeNameInputChangeHandler} value={enteredRmeName}/>
                            <Input type="text" id="service-full" onChange={serviceFullInputChangeHandler} value={enteredServiceFull}/>
                        </tr>
                        <tr>
                            <button type="submit" onClick={formInputChange}>Filter</button>
                            <button type="submit" onClick={clearInputFields}>Clear</button>
                        </tr>
                    </tbody>
                </table>
            </Section>
        </form>
      </React.Fragment>
    )
}

export default RmeFilter
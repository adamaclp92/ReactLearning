
interface Props {
    type: string,
    id: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const Input = ({type, id, onChange, value} : Props) => {
  return <td><input type={type} id={id} onChange={onChange} value={value}/></td>
}

export default Input

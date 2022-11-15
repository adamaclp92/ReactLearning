
interface Props {
  htmlFor: string,
  value: string
}

const Label = ({htmlFor, value} : Props) => {
  return <td><label htmlFor={htmlFor}>{value}</label></td>
}

export default Label

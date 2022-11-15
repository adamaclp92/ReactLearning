import classes from './Section.module.css'

interface Props {
  children?: React.ReactNode
}

const Section = ({children} : Props) => {
  return <section className={classes.section}>{children}</section>
}

export default Section

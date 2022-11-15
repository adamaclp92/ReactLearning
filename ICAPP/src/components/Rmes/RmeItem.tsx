import React from 'react'
import ExtendedRme from '../../models/ExtendedRme'

interface Props {
  rme: ExtendedRme
}

const RmeItem = ({rme}:Props)=> {

  return (
    <React.Fragment >
        <td>{rme.provider}</td>
        <td>{rme.service}</td>
        <td>{rme.rme}</td>
        <td>{rme.serviceFull}</td>

    </React.Fragment>

  )
}

export default RmeItem
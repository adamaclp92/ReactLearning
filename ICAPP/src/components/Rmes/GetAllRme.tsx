import React from 'react'
import Section from '../UI/Section'
import HttpRequestParam from '../../models/HttpRequestParam'
import Rme from '../../models/Rme'
import RmeItem from './RmeItem'

import style from './GetAllRme.module.css'
import ExtendedRme from '../../models/ExtendedRme'

interface Props {
  error: string,
  items: ExtendedRme[]
  loading: boolean,
  onFetch: (HttpRequestParam: HttpRequestParam, applyData: (data: Rme[]) => void) => Promise<void>
}

const GetAllRme = ({error, items, loading, onFetch} : Props) => {
  let rmeList = <h2>Nem található RME.</h2>


  if (items.length > 0) {

    rmeList = (
        <React.Fragment>
          <div className={style.container}>
            <table className={style.table}>
              <thead>
                    <tr>
                        <td>Provider</td>
                        <td>Service Name</td>
                        <td>Rme Name</td>
                        <td>Service Full</td>      
                    </tr>
                </thead>

              <tbody>
                    {
                        items.map(
                            rme => 
                            <tr key={rme.id}>
                              <RmeItem 
                                rme={rme}
                              />
                            </tr>
                          
                        )
                    }
                </tbody>
           
               
            </table>
          </div>
         
      </React.Fragment>
    )

  }

  let content = rmeList

  if (error) {
    content = <button onClick={(e:any) => onFetch}>Próbáld újra.</button>
  
  }

  if (loading) {
    content = <p>Betöltés...</p>
  }

  return (
    <React.Fragment>
      <h1 className='text-center'>List of RME</h1>
      <Section>         
        <div className={style.container}>{content}</div>
      </Section>
    </React.Fragment>

  );
};

export default GetAllRme

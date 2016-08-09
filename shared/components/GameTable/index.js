import React from 'react'
import moment from 'moment'

import CSSModules from 'react-css-modules'
import style from './style'


const titles = [ '', 'Команда', 'Раунд 1', 'Раунд 2', 'Раунд 3', 'Раунд 4', 'Раунд 5', 'Раунд 6', 'Раунд 7', 'Итого' ]

const GameTable = ({ name, created, data }) => {
  const formatCreated = moment(created).format('DD.MM.YY')

  return (
    <div>
      <div styleName="title">{ `${ name } | ${ formatCreated }` }</div>
      <div styleName="tableContainer">
        <table styleName="table">
          <thead>
            <tr>
              {
                titles.map((item, index) => {
                  return (
                    <th key={ index }>{ item }</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => (
                <tr key={ index }>
                  {
                    item.map((value, index) => (
                      <td key={ index }>{ value }</td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CSSModules(GameTable, style)

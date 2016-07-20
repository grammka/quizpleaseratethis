import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


const titles = ['', 'Команда', 'Раунд 1', 'Раунд 2', 'Раунд 3', 'Раунд 4', 'Раунд 5', 'Раунд 6', 'Раунд 7', 'Итого']

const GameTable = CSSModules((props) => (
  <div>
    <div styleName="title">{ '21 Игра | 12.08.16' }</div>
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
        props.data.map((itemData, index) => {
          return (
            <tr key={ index }>
              {
                itemData.map((value, valueIndex) => {
                  return (
                    <td key={ valueIndex }>{ value }</td>
                  )
                })
              }
            </tr>
          )
        })
      }
      </tbody>
    </table>
  </div>
), style)

export default GameTable

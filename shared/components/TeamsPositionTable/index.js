import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import style from './style'


const titles = ['', 'Команда', 'Ранг', 'Кол. игр', 'Сумма', 'Среднее', '%']

const GameTable = CSSModules((props) => (
  <div>
    <div styleName="title">{ 'Командный рейтинг' }</div>
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
          props.data.map((itemData, index) => {
            return (
              <tr key={ index }>
                <td width="1%">{ index + 1 }</td>
                <td>{ itemData.name }</td>
                <td>{ itemData.rank }</td>
                <td>{ itemData.playedGamesCnt }</td>
                <td>{ itemData.pointsSum }</td>
                <td>{ itemData.pointsAvg }</td>
                <td>{ itemData.winPercent }</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      {
        props.showMore && (
          <Link styleName="showMore" to="/teams-rating">{ 'Показать все' }</Link>
        )
      }
    </div>
  </div>
), style)

export default GameTable

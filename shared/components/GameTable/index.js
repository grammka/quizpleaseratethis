import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Link } from 'react-router'
import moment from 'moment'

import CSSModules from 'react-css-modules'
import style from './style'

import Button from 'components/Button'


const titles = [ '', 'Команда', 'Раунд 1', 'Раунд 2', 'Раунд 3', 'Раунд 4', 'Раунд 5', 'Раунд 6', 'Раунд 7', 'Итого' ]

const GameTable = ({ title, id, name, createdAt, data }) => {
  const createdDate = moment(createdAt).format('DD.MM.YY')

  return (
    <div>
      <div styleName="title">
        <Flex justify="space-between">
          <Box pr={3}>{ title }</Box>
          <Box>{ createdDate }</Box>
          <Box auto>
            <div styleName="editContainer">
              <Link to={ `/games/${ id }/edit` }>
                <Button warning h={24}>{ 'Редактировать' }</Button>
              </Link>
            </div>
          </Box>
        </Flex>
      </div>
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

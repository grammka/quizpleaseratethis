import React from 'react'
import ValueLink from 'valuelink'
import { Flex, Box } from 'reflexbox'

import CSSModules from 'react-css-modules'
import style from './style'

import Select from 'react-select'
import Input from 'components/Input'
import Indent from 'components/Indent'
import Button from 'components/Button'


@CSSModules(style)
export default class EditGameTable extends React.Component {
  static defaultProps = {
    titles: [ '', 'Команда', 'Раунд 1', 'Раунд 2', 'Раунд 3', 'Раунд 4', 'Раунд 5', 'Раунд 6', 'Раунд 7', '' ],
    selectOptions: [
      { value: 1, label: 'Team 1' },
      { value: 2, label: 'Team 2' },
      { value: 3, label: 'Team 3' },
      { value: 4, label: 'Team 4' },
      { value: 5, label: 'Team 5' },
      { value: 6, label: 'Team 6' },
    ]
  }

  constructor(props) {
    super()

    this.state = {
      team: null,
      username: ''
    }
  }

  handleSelectTeam = () => {

  }


  render() {
    const { team } = this.state
    const { titles, selectOptions } = this.props

    const linked = ValueLink.all(this, 'team', 'username')


    return (
      <div>
        <div styleName="title">{ '21 Игра | 12.08.16' }</div>
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
                [1,2,3,4].map((itemData, index) => {
                  return (
                    <tr key={ index }>
                      <td></td>
                      <td width="180px">
                        <Select
                          name="team"
                          value={ team }
                          clearable={ false }
                          options={ selectOptions }
                          onChange={ ::linked.team.set }
                        />
                      </td>
                      {
                        [1,2,3,4,5,6,7].map((value, index) => {
                          return (
                            <td key={ index }>
                              <Input
                                styleName="input"
                                h={30}
                                type="text"
                                name="username"
                                valueLink={ linked.username }
                              />
                            </td>
                          )
                        })
                      }
                      <td>
                        <Indent px={5}>
                          <Button red h={30}>&times;</Button>
                        </Indent>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <Indent mt={8}>
          <Flex
            justify="flex-end"
          >
            <Box>
              <Button green h={30}>{ 'Сохранить' }</Button>
            </Box>
            <Box pl={1}>
              <Button red h={30}>{ 'Отмена' }</Button>
            </Box>
          </Flex>
        </Indent>
      </div>
    )
  }
}

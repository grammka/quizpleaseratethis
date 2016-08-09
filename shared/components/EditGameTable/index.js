import React from 'react'
import update from 'react/lib/update'
import ValueLink from 'valuelink'
import { Flex, Box } from 'reflexbox'
import actions from 'core/actions'
import { connect } from 'react-redux'
import { Icon } from 'react-fa'

import CSSModules from 'react-css-modules'
import style from './style'

import Select from 'react-select'
import Input from 'components/Input'
import Indent from 'components/Indent'
//import Button from 'components/Button'
import Button from '@compowombo/button'


@connect((state) => {
  const result = {}

  if (state.teams && state.teams.list && state.teams.list.data) {
    result.teams = state.teams.list.data.map(({ id, name }) => ({ value: id, label: name }))
  }

  return result
})
@CSSModules(style)
export default class EditGameTable extends React.Component {
  static defaultProps = {
    rowEntity: {
      teamId: null,
      rounds: [
        { score: '' },
        { score: '' },
        { score: '' },
        { score: '' },
        { score: '' },
        { score: '' },
        { score: '' },
      ]
    }
  }

  // static defaultProps = {
  //   teamsData: [
  //     { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
  //     { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
  //     { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 }
  //   ],
  //   gameData: [
  //     [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
  //     [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
  //     [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100]
  //   ]
  // }

  constructor(props) {
    super()

    this.state = {
      rows: [ props.rowEntity ]
    }
  }

  componentWillMount() {
    actions.teams.list({
      subset: 'list'
    })
  }

  handleSelectTeam = () => {

  }

  addRow = () => {
    const { rows } = this.state
    const { rowEntity } = this.props
    
    this.setState({
      rows: update(rows, {
        $unshift: [ rowEntity ]
      })
    })
  }

  removeRow = (index) => {
    const { rows } = this.state

    this.setState({
      rows: update(rows, {
        $splice: [[ index, 1 ]]
      })
    })
  }

  addNewTeam = () => {
    console.log(3333)
  }


  render() {
    const { rows } = this.state
    const { teams } = this.props


    if (!teams) {
      return
    }

    return (
      <div>
        <div styleName="title">{ '21 Игра | 12.08.16' }</div>
        <div styleName="tableContainer">
          <table styleName="table">
            <thead>
              <tr>
                <th>
                  <Flex align="center">
                    <Box>{ 'Название команды' }</Box>
                    <Box>
                      <Icon styleName="addTeamIcon" name="plus-square" onClick={ this.addNewTeam } />
                    </Box>
                  </Flex>
                </th>
                {
                  [1,2,3,4,5,6,7].map((item, index) => (
                    <th key={ index }>{ `Раунд ${item}` }</th>
                  ))
                }
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                rows.map((row, rowIndex) => {
                  const { teamId, rounds } = row
                  const teamIdLink = ValueLink.state(this, 'rows').at(rowIndex).at('teamId')

                  return (
                    <tr key={ rowIndex }>
                      <td width="180px">
                        <Select
                          name="team"
                          value={ teamIdLink.value }
                          clearable={ false }
                          options={ teams }
                          onChange={ ::teamIdLink.set }
                        />
                      </td>
                      {
                        rounds.map(({ score }, roundIndex) => {
                          const scoreLink = ValueLink.state(this, 'rows').at(rowIndex).at('rounds').at(roundIndex).at('score')

                          return (
                            <td key={ roundIndex }>
                              <Input
                                styleName="input"
                                h={30}
                                type="text"
                                name="username"
                                valueLink={ scoreLink }
                              />
                            </td>
                          )
                        })
                      }
                      <td>
                        <Indent px={5}>
                          <Icon styleName="removeRowIcon" name="trash" onClick={ () => this.removeRow(rowIndex) } />
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
          <Flex justify="space-between">
            <Box>
              <Flex>
                <Box mr={1}>
                  1111
                </Box>
                <Box>
                  <Button success h={30} onClick={ this.addRow }>{ 'Добавить строку' }</Button>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Box>
                  <Button success h={24}>{ 'Сохранить' }</Button>
                </Box>
                <Box ml={1}>
                  <Button danger h={24}>{ 'Отмена' }</Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Indent>
      </div>
    )
  }
}

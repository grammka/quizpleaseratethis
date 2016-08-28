import React from 'react'
import update from 'react/lib/update'
import ValueLink from 'valuelink'
import { Flex, Box } from 'reflexbox'
import actions from 'core/actions'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Icon } from 'react-fa'
import moment from 'moment'
import debounce from 'debounce'
import notify from 'react-notify-me'

import CSSModules from 'react-css-modules'
import style from './style'

import Select from 'react-select'
import Input from 'components/Input'
import Indent from 'components/Indent'
import DatePicker from 'components/DatePicker'
import Button from '@wombocompo/button'


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
      team: null,
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

  constructor({ rowEntity, data }) {
    super()

    this.selectedTeams = data && data.rows.map(({ team }) => team.label) || []
    this.dirtyData = []

    this.state = {
      id: data && data.id || null,
      createdAt: data && moment(data.createdAt) || null,
      rows: data && data.rows || [ rowEntity ],
    }
  }

  componentWillMount() {
    actions.teams.list({
      subset: 'list'
    })
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

  filterOptions = (options, filter) => {
    let filteredOptions = options.filter((option) => this.selectedTeams.indexOf(option.label) < 0)

    // Filter by label
    if (filter !== undefined && filter != null && filter.length > 0) {
      filteredOptions = filteredOptions.filter((option) => RegExp(filter, 'ig').test(option.label))

      // Append Addition option
      if (filteredOptions.length != 1) {
        filteredOptions.push({
          label:  <span><Icon className={ style.addTeamIcon } name="plus" /> { filter }</span>,
          value:  filter,
          create: true,
        })
      }
    }

    return filteredOptions
  }

  // updateScore = debounce((score, value) => {
  //   actions.score.update({
  //     params: {
  //       scoreId: score.id
  //     },
  //     body: {
  //       score: value
  //     },
  //     onResponse: () => {
  //       notify({
  //         content: 'Изменения сохранены',
  //         type: 'success'
  //       })
  //     }
  //   })
  // }, 500)

  addDirty = (score, value) => {
    score.dirty = true
  }

  submit = async (event) => {
    event.preventDefault()

    let { id, createdAt, rows } = this.state

    rows = await Promise.all(rows.map((row) => {
      return new Promise((fulfill) => {
        if (row.team.create) {
          actions.teams.create({
            body: {
              name: row.team.value
            },
            onResponse: ({ body }) => {
              row.team = {
                label: body.name,
                value: body.id
              }

              fulfill(row)
            }
          })
        } else {
          fulfill(row)
        }
      })
    }))

    rows = rows.map(({ team, rounds }) => ({
      teamId: team.value,
      rounds
    }))

    if (id) {
      const score = [].concat.apply([], rows.map(({ rounds }) => rounds.filter(({ dirty }) => dirty)))

      actions.games.update({
        params: {
          gameId: id
        },
        body: {
          id,
          createdAt: createdAt.format(),
          score
        },
        onResponse: () => {
          notify({
            content: 'Изменения сохранены',
            type: 'success'
          })
        }
      })
    }
    else {
      actions.games.create({
        body: {
          createdAt: createdAt.format(),
          rows
        }
      })
    }
  }


  render() {
    const { id: gameId, createdAt, rows }  = this.state
    const { teams } = this.props

    const createdAtLink   = ValueLink.state(this, 'createdAt')
    const editing         = !!gameId


    if (!teams) {
      return
    }

    return (
      <form onSubmit={ this.submit }>
        <div styleName="title">
          <DatePicker
            initValue={ createdAt }
            valueLink={ createdAtLink }
          />
        </div>
        <div styleName="tableContainer">
          <table styleName="table">
            <thead>
              <tr>
                <th>{ 'Название команды' }</th>
                {
                  [1,2,3,4,5,6,7].map((item, index) => (
                    <th key={ index }>{ `Раунд ${item}` }</th>
                  ))
                }
                <th>{ 'Итого' }</th>
                {
                  !editing && (
                    <th></th>
                  )
                }
              </tr>
            </thead>
            <tbody>
              {
                rows.map((row, rowIndex) => {
                  const { team, rounds } = row
                  const teamLink = ValueLink.state(this, 'rows').at(rowIndex).at('team')

                  return (
                    <tr key={ rowIndex }>
                      <td width="180px">
                        <Select
                          name="team"
                          value={ teamLink.value }
                          options={ teams }
                          clearable={ false }
                          noResultsText={ false }
                          filterOptions={ this.filterOptions }
                          onChange={ ::teamLink.set }
                        />
                      </td>
                      {
                        rounds.map((score, roundIndex) => {
                          const scoreLink = ValueLink.state(this, 'rows').at(rowIndex).at('rounds').at(roundIndex).at('score')

                          return (
                            <td key={ roundIndex }>
                              <Input
                                styleName="input"
                                h={30}
                                type="text"
                                name="username"
                                valueLink={ scoreLink.onChange((value) => editing && this.addDirty(score, value)) }
                              />
                            </td>
                          )
                        })
                      }
                      <td>
                        { rounds.reduce((sum, { score }) => sum + +(score || 0), 0) }
                      </td>
                      {
                        !editing && (
                          <td>
                            <Indent px={5}>
                              <Icon styleName="removeRowIcon" name="trash" onClick={ () => this.removeRow(rowIndex) } />
                            </Indent>
                          </td>
                        )
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

        <div styleName="footer">
          <Flex justify="space-between">
            <Box>
              <Flex>
                <Box>
                  <Button success h={24} onClick={ this.addRow }>{ 'Добавить строку' }</Button>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Box>
                  <Button type="submit" success h={24}>{ 'Сохранить' }</Button>
                </Box>
                <Box ml={1}>
                  <Link to="/">
                    <Button danger h={24}>{ 'Отмена' }</Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </div>

      </form>
    )
  }
}

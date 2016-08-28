import React from 'react'
import actions from 'core/actions'
import { connect } from 'react-redux'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Indent from 'components/Indent'
import EditGameTable from 'components/EditGameTable'


@connect((state) => {
  const result = {}

  if (state.games && state.games.editing && state.games.editing.data) {
    const { id, createdAt, rounds, teams } = state.games.editing.data 

    result.editData = {
      id, 
      createdAt,
      rows: teams.map((team, index) => ({
        team: {
          label: team.name,
          value: team.id
        },
        rounds: rounds.map(({ score }) => score[index])
      }))
    }
  }

  return result
})
@CSSModules(style)
export default class CreateGame extends React.Component {
  componentWillMount() {
    const { params: { gameId } } = this.props
    
    actions.games.get({
      subset: 'editing',
      params: {
        gameId
      }
    })
  }
  
  
  render() {
    const { editData } = this.props


    return editData && (
      <Center>
        <Indent pt={30} pb={50}>
          <EditGameTable data={ editData } />
        </Indent>
      </Center>
    )
  }
}

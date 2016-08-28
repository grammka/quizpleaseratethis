import React from 'react'
import actions from 'core/actions'
import { connect } from 'react-redux'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Indent from 'components/Indent'
import TeamsPositionTable from 'components/TeamsPositionTable'
import GameTable from 'components/GameTable'

import Header from './Header'


@connect((state) => {
  const result = {}

  result.loggedIn = state.users.me && state.users.me.data

  if (state.games && state.games.list && state.games.list.data) {
    result.games = state.games.list.data.map((game) => {
      const data =  game.teams.map((team, index) => {
        const score = game.rounds.sort((a, b) => {
          return a.index > b.index
        }).map((round) => {
          return round.score.filter((score) => score.team_id == team.id)[0].score
        })

        const total = score.reduce((sum, curr) => sum + curr, 0)

        return [ index + 1, team.name ].concat([ ...score, total ])
      })

      return {
        id: game.id,
        name: game.name,
        createdAt: game.createdAt,
        data
      }
    })
  }

  return result
})
@CSSModules(style)
export default class Home extends React.Component {
  componentWillMount() {
    actions.games.list({
      subset: 'list'
    })
  }


  render() {
    const { loggedIn, games } = this.props


    if (!games) {
      return
    }

    return (
      <div>
        {
          loggedIn && (
            <Header />
          )
        }

        <Center>
          <Indent pt={30} pb={50}>
            {/* <TeamsPositionTable data={ teamsData } showMore /> */}

            <Indent mt={40}>
              {
                games.map((game, index) => {
                  const title = `Игра ${ games.length - index }`

                  return (
                    <Indent key={ index } mt={ index && 40 }>
                      <GameTable { ...game } title={title} />
                    </Indent>
                  )
                })
              }
            </Indent>
          </Indent>
        </Center>
      </div>
    )
  }
}

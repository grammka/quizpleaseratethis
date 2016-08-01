import React from 'react'
import actions from 'core/actions'
import { connect } from 'react-redux'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Indent from 'components/Indent'
import TeamsPositionTable from 'components/TeamsPositionTable'
import GameTable from 'components/GameTable'
import EditGameTable from 'components/EditGameTable'


@connect((state) => {
  const result = {}

  if (state.games && state.games.list && state.games.list.data) {
    result.games = state.games.list.data.map((game) => {
      return game.teams.map((team, index) => {
        const score = game.rounds.sort((a, b) => {
          return a.index > b.index
        }).map((round) => {
          return round.score.filter((score) => score.team_id == team.id)[0].score
        })

        const total = score.reduce((sum, curr) => sum + curr, 0)

        return [ index + 1, team.name ].concat([ ...score, total ])
      })
    })
  }

  return result
})
@CSSModules(style)
export default class Home extends React.Component {
  static defaultProps = {
    teamsData: [
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 }
    ],
    gameData: [
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100],
      [1, 'Foo', 1, 2, 3, 4, 5, 6, 7, 100]
    ]
  }

  componentWillMount() {
    actions.games.list({
      subset: 'list'
    })
  }


  foooo = () => {
    actions.games.create({
      subset: 'list',
      strategy: 'merge',
      body: {
        name: 'New game',
        teams: [
          {
            teamName: 'Team 1',
            rounds: [
              { score: 6 },
              { score: 3 },
              { score: 4 },
              { score: 18 },
              { score: 1 },
              { score: -5 },
              { score: 12 },
            ]
          },
          {
            teamName: 'Team 2',
            rounds: [
              { score: 6 },
              { score: 2 },
              { score: 3 },
              { score: 11 },
              { score: 2 },
              { score: 5 },
              { score: 6 },
            ]
          },
          {
            teamName: 'Team 3',
            rounds: [
              { score: 4 },
              { score: 1 },
              { score: 1 },
              { score: 15 },
              { score: 2 },
              { score: 6 },
              { score: 18 },
            ]
          }
        ]
      }
    })
  }


  render() {
    const { teamsData, gameData, games } = this.props

    if (!games) {
      return
    }

    console.log(555, games)


    return (
      <Center>
        <button onClick={ this.foooo }>Foooooo!!!</button>

        <Indent pt={30} pb={50}>
          {
            games.map((game, index) => {
              return (
                <Indent key={ index } mt={ index && 40 }>
                  <GameTable data={ game } />
                </Indent>
              )
            })
          }
        </Indent>

        <Indent pt={30} pb={50}>
          <TeamsPositionTable data={ teamsData } showMore />

          <Indent mt={40}>
            {
              [1].map((game, index) => {
                return (
                  <Indent key={ index } mt={ index && 40 }>
                    <EditGameTable data={ gameData } />
                  </Indent>
                )
              })
            }
          </Indent>

          <Indent mt={40}>
            {
              [1,2,3,4,5,6].map((game, index) => {
                return (
                  <Indent key={ index } mt={ index && 40 }>
                    <GameTable data={ gameData } />
                  </Indent>
                )
              })
            }
          </Indent>
        </Indent>
      </Center>
    )
  }
}

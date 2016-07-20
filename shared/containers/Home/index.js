import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Indent from 'components/Indent'
import TeamsPositionTable from 'components/TeamsPositionTable'
import GameTable from 'components/GameTable'
import EditGameTable from 'components/EditGameTable'


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

  render() {
    const { teamsData, gameData } = this.props


    return (
      <Center>
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

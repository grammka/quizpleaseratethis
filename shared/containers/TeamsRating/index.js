import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Indent from 'components/Indent'
import TeamsPositionTable from 'components/TeamsPositionTable'


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
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
      { name: 'Foo', rank: 'генералы', playedGamesCnt: 18, pointsSum: 345, pointsAvg: 45, winPercent: 93 },
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
    ]
  }

  render() {
    const { teamsData } = this.props


    return (
      <Center>
        <Indent pt={30} pb={50}>
          <TeamsPositionTable data={ teamsData } />
        </Indent>
      </Center>
    )
  }
}

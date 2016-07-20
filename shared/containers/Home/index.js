import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Indent from 'components/Indent'
import GameTable from 'components/GameTable'


@CSSModules(style)
export default class Home extends React.Component {
  static defaultProps = {
    data: [
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
    const { data } = this.props


    return (
      <Center>
        <Indent pt={30} pb={50}>
          {
            [1,2,3,4,5,6].map((game, index) => {
              return (
                <Indent key={ index } mt={ index && 40 }>
                  <GameTable data={ data } />
                </Indent>
              )
            })
          }
        </Indent>
      </Center>
    )
  }
}

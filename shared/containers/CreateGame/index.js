import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Indent from 'components/Indent'
import EditGameTable from 'components/EditGameTable'


@CSSModules(style)
export default class CreateGame extends React.Component {
  render() {
    return (
      <Center maxWidth={900}>
        <Indent pt={30} pb={50}>
          <EditGameTable />
        </Indent>
      </Center>
    )
  }
}

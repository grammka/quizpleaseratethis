import React from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'reflexbox'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Button from 'components/Button'


@connect((state) => {
  return {}
})
@CSSModules(style)
export default class HomeHeader extends React.Component {
  render() {
    return (
      <div styleName="root">
        <Center>
          <Flex justify="flex-end">
            <Box>
              <Link to="/games/create">
                <Button success h={26}>{ 'Добавить игру' }</Button>
              </Link>
            </Box>
          </Flex>
        </Center>
      </div>
    )
  }
}

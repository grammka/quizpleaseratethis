import React from 'react'
import { Flex, Box } from 'reflexbox'
import ValueLink from 'valuelink'
import actions from 'core/actions'
import cookie from 'react-cookie'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Indent from 'components/Indent'
import Input from 'components/Input'
import Button from '@wombocompo/button'


@CSSModules(style)
export default class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    const { username, password } = this.state

    event.preventDefault()

    actions.users.auth({
      body: {
        username,
        password
      },
      onResponse: ({ body }) => {
        const year = 365 * 24 * 60 * 60
        
        cookie.save('token', body.token, {
          hostOnly: true,
          maxAge: year,
        })
      }
    })
  }


  render() {
    const linked = ValueLink.all(this, 'username', 'password')


    return (
      <Center>
        <Flex align="center" justify="center">
          <Box>
            <div styleName="container">
              <Indent p={30}>
                <form onSubmit={ this.handleSubmit }>
                  <div styleName="title">{ 'Авторизация' }</div>

                  {/* Using for preventing autocomplete in Chrome */}
                  <input styleName="hidden-input" type="password" name="password" />

                  <Input
                    h={50}
                    type="text"
                    label={ 'Логин' }
                    name="username"
                    valueLink={ linked.username }
                  />

                  <Indent mt={20}>
                    <Input
                      h={50}
                      type="password"
                      label={ 'Пароль' }
                      name="password"
                      valueLink={ linked.password }
                    />
                  </Indent>

                  <Indent mt={20}>
                    <Button type="submit" h={50}>{ 'Войти' }</Button>
                  </Indent>
                </form>
              </Indent>
            </div>
          </Box>
        </Flex>
      </Center>
    )
  }
}

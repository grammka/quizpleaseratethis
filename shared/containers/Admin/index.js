import React from 'react'
import ValueLink from 'valuelink'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'
import Content from 'components/Content'
import Indent from 'components/Indent'
import Input from 'components/Input'


@CSSModules(style)
export default class Admin extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = () => {

  }

  
  render() {
    const linked = ValueLink.all(this, 'username', 'password')
    
    return (
      <Center>
        <Indent pt={30} pb={50}>
          <Content>
            <Indent p={15}>
              <form onSubmit={ this.handleSubmit }>
                <table styleName="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>{ 'Команда' }</th>
                      <th>{ 'Раунд 1' }</th>
                      <th>{ 'Раунд 2' }</th>
                      <th>{ 'Раунд 3' }</th>
                      <th>{ 'Раунд 4' }</th>
                      <th>{ 'Раунд 5' }</th>
                      <th>{ 'Раунд 6' }</th>
                      <th>{ 'Раунд 7' }</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      [1,2,3,4].map((row, index) => {
                        return (
                          <tr key={ index }>
                            <td></td>
                            <td>{ 'Команда' }</td>
                            {
                              [1,2,3,4,5,6,7].map((cell, index) => {
                                return (
                                  <td key={ index }>
                                    <Input
                                      styleName="input"
                                      h={50}
                                      type="text"
                                      label={ 'Foo' }
                                      name="username"
                                      valueLink={ linked.username }
                                    />
                                  </td>
                                )
                              })
                            }
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </form>
            </Indent>
          </Content>
        </Indent>
      </Center>
    )
  }
}

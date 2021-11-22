import React, { Children } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Button } from 'semantic-ui-react'

const Header = (props) => {
  return (
    <Menu color = {'blue'} style={{marginTop: "10px"}}>
      <Menu.Item href={'/'}>CrowdCoin</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item href={'/campaigns/new'} icon="add" />
      </Menu.Menu>
    </Menu>
  )
}

export default Header

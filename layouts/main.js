import React from "react"
import Link from 'next/link'
import Router from 'next/router'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import ListItem from 'react-md/lib/Lists/ListItem'
import FontIcon from 'react-md/lib/FontIcons'
import MenuButton from 'react-md/lib/Menus/MenuButton'


class NavigationLink extends React.Component {
  render () {
    const { href, as, children, ..._props } = this.props
    return (
      <div {..._props} style={{padding: 0}}>
        <Link href={href} as={as}>
          <a className='md-list-tile md-list-tile--mini' style={{width: '100%', overflow: 'hidden'}}>
            {children}
          </a>
        </Link>
      </div>
    )
  }
}


function handleRoute (href) {
  return (e) => {
    e.preventDefault()
    Router.push(href)
  }
}

function customFunction(){
    alert('How are you ?');
}


var LayoutMain = React.createClass ({
    
    render(){
    
    const menuButton = (
      <MenuButton
          id="vert-menu"
          icon
          buttonChildren="more_vert"
          className="menu-example"
          tooltipLabel="Open some menu"
        >
        
          <ListItem primaryText="Home" onClick={handleRoute('/')} />
          <ListItem primaryText="About" onClick={handleRoute('/about')} />
          <ListItem primaryText="Call function" onClick={customFunction} />
          <ListItem primaryText="Item Four" />
        </MenuButton>
    )
    
        return (
            <div>
            <NavigationDrawer
                navItems={[
                    <ListItem
                      key='0'
                      component={NavigationLink}
                      href='/'
                      leftIcon={<FontIcon>inbox</FontIcon>}
                      tileClassName='md-list-tile--mini'
                      primaryText={'Root'}
                    />,
                    <ListItem
                      key='1'
                      component={NavigationLink}
                      href='/non-existing-page'
                      leftIcon={<FontIcon>star</FontIcon>}
                      tileClassName='md-list-tile--mini'
                      primaryText={'404 page'}
                    />
                ]}
                contentClassName='md-grid'
                // mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                // tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
                toolbarTitle='Hello, World!'
                toolbarActions={menuButton}
            >
                <div className="content" style={{flex: 1}}>
                    {this.props.children}
                </div>
            </NavigationDrawer>
            
            </div>
        )
    }
})

module.exports = LayoutMain;



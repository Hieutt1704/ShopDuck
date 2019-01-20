import React, { Component } from 'react'
import { ihome } from '../IconManager'

class Header extends Component {
    render() {
        return (
            <header style={styles.header}>
                <img src={ihome} alt="home" style={{ height: 80, width: 150 }} />
                <div style={{ height: 60, width: 150, backgroundColor: '#a00404' }}>
                </div>
            </header>
        )
    }
}

export default Header

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: 100,
        backgroundColor: '#d30e0e',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 100,
        paddingLeft: 100,
    },
    headerItem: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
    },
    title: {
        marginRight: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey'
    },
    viewLogo: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    logo: {
        marginRight: 5,
        height: 25,
        width: 25
    },
    textLogo: {
        marginRight: 15,
        fontSize: 14,
        color: 'black'
    },
    phone: {
        marginRight: 15,
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    borderPhone: {
        marginRight: 15,
        backgroundColor: 'grey',
        width: 2,
        height: 15
    }
}
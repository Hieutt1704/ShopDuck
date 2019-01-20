import React, { Component } from 'react'
import Header from '../components.js/Header'
import HeaderTitle from '../components.js/HearderTitle'

class BaseView extends Component {
    render() {
        const { children } = this.props
        return (
            <div style={styles.container}>
                <HeaderTitle />
                <Header />
                {children}
            </div>
        )
    }
}

export default BaseView

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
}
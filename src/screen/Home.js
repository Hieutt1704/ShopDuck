import React, { Component } from 'react'
import BaseView from '../views/BaseView'

class Home extends Component {
    render() {
        return (
            <BaseView>
                <p>Dung ham</p>
            </BaseView>
        )
    }
}

export default Home

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
}
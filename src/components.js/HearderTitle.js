import React, { Component } from 'react'
import { ilogo, iphone } from '../IconManager'

class HeaderTitle extends Component {
    render() {
        return (
            <header style={styles.header}>

                <div style={styles.headerItem}>
                    <p style={styles.title}>He Thong Shop Duck</p>

                    <div style={styles.viewLogo}>
                        <img src={ilogo} alt="logo" style={styles.logo} />
                        <p style={styles.textLogo}>Shop Duck</p>
                    </div>

                    <div style={styles.viewLogo}>
                        <img src={ilogo} alt="logo" style={styles.logo} />
                        <p style={styles.textLogo}>Dien thoai Xanh</p>
                    </div>

                    <div style={styles.viewLogo}>
                        <img src={ilogo} alt="logo" style={styles.logo} />
                        <p style={styles.textLogo}>iSchool</p>
                    </div>

                    <div style={styles.viewLogo}>
                        <img src={ilogo} alt="logo" style={styles.logo} />
                        <p style={styles.textLogo}>Tin tuc</p>
                    </div>
                </div>

                <div style={styles.headerItem}>
                    <p style={styles.textLogo}>Khuyen mai</p>

                    <p style={styles.textLogo}>Tra gop</p>

                    <p style={styles.textLogo}>Tuyen dung</p>

                    <div style={{ marginTop: 4 }}>{iphone}</div>
                    <p style={styles.phone}>1900.1000</p>

                    <div style={styles.borderPhone} />

                    <div style={{ marginTop: 4 }}>{iphone}</div>
                    <p style={styles.phone}>1900.0001</p>
                </div>

            </header>
        );
    }
}

export default HeaderTitle

const styles = {
    header: {
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
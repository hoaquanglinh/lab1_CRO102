import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './PH43159/Header'
import SectionView from './PH43159/SectionView'
import TextInput from './PH43159/TextInput'
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* <Header iconLeft={require('./assets/img/back.png')} iconRight={require('./assets/img/man.png')} title={"Center"}/>
            <Header iconLeft={require('./assets/img/back.png')} iconRight={require('./assets/img/man.png')} title={"Header"}/>
            <Header iconLeft={require('./assets/img/back.png')} iconRight={null} title={null}/> */}
            {/* <SectionView /> */}
            <TextInput/>
        </View>
    )
}

export default App

const styles = StyleSheet.create({})
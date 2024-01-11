import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppMapView from './AppMapView';
import Header from './Header';
import SearchBar from './SearchBar';

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.headerContainer} >
                <Header />
                <SearchBar searchedLocation={(loc) => console.log(loc)} />
            </View>
            <AppMapView />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        zIndex: 10,
        padding: 10,
        width: '100%',
        // paddingHorizontal: 2
    }
})

export default HomeScreen;

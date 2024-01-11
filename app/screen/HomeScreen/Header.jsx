import React from 'react';
import {useUser} from '@clerk/clerk-expo'
import {View, StyleSheet, Text, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

const Header = () => {
    const {user} = useUser()

    return (
        <View style={styles.container} >
            <Image source={{uri: user?.imageUrl}} style={{
                width: 45,
                height: 45,
                borderRadius: 99
            }} />
            <Image source={require('../../../assets/images/logo.png')} style={{
                width: 45,
                height: 45,
                objectFit: 'cover'
            }} />

            <MaterialIcons name="filter-alt" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: Colors.TRASNPARENT_WHITE
    }
})

export default Header;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../utils/Colors';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({searchedLocation}) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 15,
            paddingHorizontal: 5,
            backgroundColor: Colors.WHITE,
            borderRadius: 6
        }}>
            <Ionicons name='location-sharp' size={24} color={Colors.GRAY} style={{paddingTop: 10}} />
            <GooglePlacesAutocomplete
            placeholder='Search For Charging Station.'
            fetchDetails={true}
            onPress={(data, details = null) => {
                searchedLocation(details?.geometry?.location)
            }}
            onFail={(err) => console.log(err)}
            query={{
                key: 'AIzaSyC9_nxcPvw07rYeicvTwIeD10O6y8YFi3M',
                language: 'en',
            }}
        />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchBar;

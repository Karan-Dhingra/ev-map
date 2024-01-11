import React, { useContext } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MapViewStyle from '../../utils/MapViewStyle.json'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { UserLocationContext } from '../../contexts/UserLocationContext';

const AppMapView = () => {
    const {location,setLocation} = useContext(UserLocationContext)

    if(location?.coords?.latitude)
        return (
            <View>
                <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                // showsUserLocation={location}
                region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.421
                }}
                customMapStyle={MapViewStyle}
            >
                <Marker coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                }}>
                    <Image source={require('../../../assets/images/car-marker.png')} style={{width: 60, height: 60}} />
                </Marker>
            </MapView>
            </View>
        );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
})

export default AppMapView;

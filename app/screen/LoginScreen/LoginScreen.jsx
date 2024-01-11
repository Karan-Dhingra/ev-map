import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Colors from '../../utils/Colors';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from './../../../hooks/warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const handleLogin = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
            // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../../assets/images/logo.png')} />
            <Image source={require('../../../assets/images/ev-charging.webp')} style={styles.bgImage} />

            <View style={{padding: 20}}>
                <Text style={styles.heading}>Your Ultimate EV Charging Station Finer App</Text>
                <Text style={styles.description}>Find EV Charging Station near you, plan trip and so much more in just one click.</Text>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={{color: Colors.WHITE, textAlign: 'center', fontFamily: 'Outfit', fontSize: 17}}>Login With Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    logoImage: {
        width: 60,
        height: 60,
        objectFit: 'contain'
    },
    bgImage: {
        height: 200,
        width: '100%',
        marginTop: 20,
        objectFit: 'cover'
    },
    heading:{
        fontSize: 25,
        fontFamily: 'Outfit-bold',
        marginTop: 20,
        textAlign: 'center',
    },
    description:{
        fontSize: 17,
        fontFamily: 'Outfit',
        marginTop: 15,
        color: Colors.GRAY,
        textAlign: 'center',
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        display: 'flex',
        borderRadius: 99,
        marginTop: 40
    }
})

export default LoginScreen;

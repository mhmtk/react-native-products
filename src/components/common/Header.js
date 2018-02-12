//import libs
import React from 'react';
import { Text, View } from 'react-native';

//make the comp
const Header = (props) => { 
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 25
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 20,    
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};
//make component available to other parts of app
export { Header };

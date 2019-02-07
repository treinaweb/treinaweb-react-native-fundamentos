import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';

class TextCounter extends Component{
    render(){
        return (
            <View>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    style={{borderColor: 'gray', borderWidth: 1}}
                />
                <Text>Total: 20/100</Text>
            </View>
        );
    }
}

export default TextCounter;
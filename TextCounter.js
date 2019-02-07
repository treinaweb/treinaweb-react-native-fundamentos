import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';

class TextCounter extends Component{
    state = {
        text: 'abc'
    }

    render(){
        const { state } = this;
        return (
            <View>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    value={state.text}
                    style={{borderColor: 'gray', borderWidth: 1}}
                />
                <Text>Total: { state.text.length }/100</Text>
            </View>
        );
    }
}

export default TextCounter;
import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';

class TextCounter extends Component{
    static defaultProps = {
        limit: 20
    }

    state = {
        text: ''
    }

    handleChange = (text) => {
        if(text.length <= this.props.limit){
            this.setState({text});
        } 
    }

    render(){
        const { state, props } = this;
        return (
            <View>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    value={state.text}
                    onChangeText={this.handleChange}
                    style={{borderColor: 'gray', borderWidth: 1}}
                />
                <Text>Total: { state.text.length }/{ props.limit }</Text>
            </View>
        );
    }
}

export default TextCounter;
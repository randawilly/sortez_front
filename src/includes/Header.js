import React, { Component } from 'react';
import {
  View,
  Platform,
  TextInput
} from 'react-native';

import CustomTextInputStyle from './CustomTextInputStyle';
import { TextField } from 'react-native-material-textfield';

export default class CustomTextInput extends Component {

  render() {
    if(Platform.OS === 'ios') {
      return(
        <View style={[CustomTextInputStyle.mainBlock, this.props.containerStyle]}>
          <View style={CustomTextInputStyle.textboxBlock}>
            <TextInput
              textColor={Colors.brandText}
              style={[CustomTextInputStyle.textInput,this.props.style]}
              labelFontSize={12}
              autoCapitalize={false}
              editable={this.props.editable}
              value={this.props.value}
              onChangeText={this.props.onChangeText}
              placeholder={this.props.placeHolder}
              placeholderTextColor={Colors.placeHolderText}
              autoFocus={this.props.autoFocus} />
          </View>
        </View>
      )
    } else {
      return(
        <View style={[this.props.containerStyle, CustomTextInputStyle.mainBlock]}>
          <TextField
            textColor={Colors.brandText}
            style={[CustomTextInputStyle.textInputAndroid,this.props.style ]}
            labelFontSize={12}
            value={this.props.value}
            editable={this.props.editable}
            activeLineWidth={1}
            autoCapitalize={false}
            labelTextStyle={{fontFamily: 'Roboto-Regular'}}
            tintColor={Colors.brandSecondaryText}
            onChangeText={this.props.onChangeText}
            renderAccessory={this.renderIcon.bind(this)}
            label={this.props.placeHolder}
            placeholderTextColor={Colors.placeHolderText}
            autoFocus={this.props.autoFocus} />
        </View>
      )
    }
  }
}
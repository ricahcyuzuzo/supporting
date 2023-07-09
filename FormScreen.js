import {StyleSheet, Text, TextInput, TouchableOpacity, View,  } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FormScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);

  return (
    <View>
        <TextInput placeholder='Names Input' onChangeText={(val) => setName(val)} style={styles.textInput} />
        { validated && name.length === 0 ? <Text style={{ color: 'red', width: '90%', alignSelf: 'center' }}>Names input should not be empty</Text> : null }
        <TextInput placeholder='Phone Input' onChangeText={(val) => setPhone(val)} keyboardType='phone-pad' maxLength={10} style={[styles.textInput, { marginTop: 10, }]} />
        { validated && phone.length === 0 ? <Text style={{ color: 'red', width: '90%', alignSelf: 'center' }}>Phone input should not be empty</Text> : null }
        <TextInput placeholder='Password' onChangeText={(val) => setPassword(val)} secureTextEntry={true} maxLength={10} style={[styles.textInput, { marginTop: 10, }]} />
        { validated && password.length === 0 ? <Text style={{ color: 'red', width: '90%', alignSelf: 'center' }}>Password input should not be empty</Text> : null }
        <View style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
        }}>
            <BouncyCheckbox
                size={25}
                fillColor="blue"
                style={{
                    marginBottom: 10,
                }}
                unfillColor="#FFFFFF"
                text="Checkbox 1"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked) => {
                    setSelection(isChecked);
                }}
            />
            <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="#FFFFFF"
                text="Checkbox 2"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked) => {
                    setSelection(isChecked);
                }}
            />
        </View>
        <TouchableOpacity
            onPress={() => {
                setValidated(true)
            }} 
            activeOpacity={.6} 
            style={{
                marginTop: 40,
                width: '90%',
                height: 50,
                borderRadius: 10,
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
            }}
          >
            <Text style={{ color: 'white' }}>Check</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FormScreen

const styles = StyleSheet.create({
    textInput: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginTop: 30,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
      },
})
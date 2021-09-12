import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';


export default function PerfilButton({ chave, value, onChangeText }) {
    const [estado, setEstado] = useState(0);

    return (
        <View>
            <TouchableOpacity onPress={() => { estado == 0 ? setEstado(1) : setEstado(0) }}>
                {estado == 0
                    ?
                    <>
                        <View style={styles.containerKey}>
                            <Text style={styles.key}>{chave}:</Text>
                            <Text style={styles.value}>{value}</Text>
                        </View>
                    </>

                    :
                    <>
                        <View style={styles.containerKey}>
                            <Text style={styles.key}>{chave}: </Text>
                            <TextInput style={styles.input} placeholder={value} onChangeText={onChangeText}/>
                        </View>
                    </>
                }
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerKey:{
        padding: 20,
        flexDirection: 'row',
        borderColor: '#151515',
        borderBottomWidth: 0.5,
    },
    value: {
        textAlign: 'right',
        flex: 4,
        textAlignVertical: 'center',
    },
    key: {
        flex: 3,
        textAlignVertical: 'center',
    },
    input: {
        borderColor: '#151515',
        borderWidth: 0.5,
        padding: 3,
        borderRadius: 10,
        backgroundColor: '#eee'
    },
});
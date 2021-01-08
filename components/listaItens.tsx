import React from 'react';
import {Text, View} from "react-native";

export default function ListaItens(props) {

    const produtos = props.produtos;

    return (

        <View>
            {produtos.map((item, index) => (
                <Text key={index}>{item.name}</Text>
            ))}
        </View>

    )

}

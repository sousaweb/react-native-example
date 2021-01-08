import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components";

export default function MeuHeader(props) {

    const MeuHeaderTexto = styled.Text`
      color: ${props => props.cor};
      font-size: 20px
    `;

    return (
        <MeuHeaderTexto cor={'#CC0000'}>{props.texto}</MeuHeaderTexto>
    )
}

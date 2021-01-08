import React, {useState} from "react";
import MeuHeader from "./meu-header";
import {Text, TextInput} from "react-native";
import ListaItens from "./listaItens";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components";

export default function HomeScreen(props) {

    const [visivel, setVisivel] = useState(true);
    const [nome, setNome] = useState('');

    const {navigation} = props;

    const [produtos, setProdutos] = useState([
        {name: 'Arroz'},
        {name: 'Carne'},
        {name: 'Feijão'},
        {name: 'Batata'},
    ]);

    const MinhaView = styled.View`
      flex: 1;
      background-color: #fff;
      align-items: center;
      justify-content: center;
    `;

    if (visivel) {
        return (
            <MinhaView>
                <MeuHeader texto={'Movida React Native!'}/>
                <MeuHeader texto={'Movida PHP!'}/>
                <MeuHeader texto={'Movida Java'}/>
                <TextInput placeholder={'Digite seu nome'}/>
                <Text onPress={() => {

                    navigation.navigate('Login');

                    const newProdutos = [...produtos, {name: nome}];

                    setProdutos(newProdutos);

                }}>Adicionar</Text>


                <ListaItens produtos={produtos}/>


                <StatusBar style="auto"/>
            </MinhaView>
        )
    } else {
        return (
            <Text onPress={() => setVisivel(true)}>Visivel = true</Text>
        )
    }

}

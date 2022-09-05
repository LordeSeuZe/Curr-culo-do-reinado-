//importr modulos
import React from "react";
//importar componentes (recursos visuais) do react-native
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// funções principal (primeira tela)
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>Formulário</Text>

      <Text style={styles.labelText}>Nome</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu Nome" />

      <Text style={styles.labelText}>E-mail</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu E-mail" />

      <Text style={styles.labelText}>Data de nascimento</Text>
      <TextInput style={styles.textInput} placeholder="DD/MM/AAAA" />

      <Text style={styles.labelText}>RA</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu RA" />

      <Text style={styles.labelText}>Curso</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu Curso" />

      <Text style={styles.labelText}>CPF</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu CPF" />

      <Text style={styles.labelText}>Período</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu Período" />

      <Text style={styles.labelText}>Telefone</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu Telefone" />

      <Text style={styles.labelText}>Endereço</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu Endereço" />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.labelBtn}> SALVAR </Text>
      </TouchableOpacity>
    </View>
  );
}
//View, funciona como o body do HTML
//Text é um texto colocado no app
//TextInput entrada de texto
//StyleSheet para colocar o estilo no app
//ScrollView é um View com scroll
const styles = StyleSheet.create({
  container: {
    paddingTop: 26, //espaçamento do top
    paddingLeft: 10, // espaçamento da esquerda
    paddingBottom: 26, // espaçmento por de baixo
    backgroundColor: "#000000", // cor de fundo
    height: "100%", // Altura
  },
  labelTitle: {
    fontSize: 36, // tamanho da fonte
    fontWeight: "850",
    color: "#1eff00",
  },
  labelText: {
    paddingTop: 5,
    fontSize: 22,
    fontWeight: "100",
    color: "#1eff00",
  },
  textInput: {
    fontSize: 18,
    color: "#16ba00",
    backgroundColor: "#041a01",
    width: "90%",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#083602",
    padding: 2,
  },
  btn: {
    width: "90%",
    height: 21,
    marginTop: 10,
  },
  labelBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "#1eff00",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "850",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#083602",
  },
});

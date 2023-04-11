import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [destino, setDestino] = useState("");
  const [passageiro, setPassageiro] = useState([]);
  const [novoPassageiro, setNovoPassageiro] = useState("");
  const [reserva, setReserva] = useState(null);

  function AddPassageiro() {
    setPassageiro([
      ...passageiro,
      {
        key: Math.random().toString(),
        name: novoPassageiro,
        destino: destino,
      },
    ]);
    setNovoPassageiro("");
  }

  function ReservaPassageiro(passageiro) {
    setReserva(passageiro);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}><Text style={styles.title}>Compartilhamento de Caronas</Text></View>
      <View style={styles.inputContainer}>
        <AntDesign name="search1" size={24} color="black" style={styles.icone} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu destino"
          value={destino}
          onChangeText={setDestino}
        />
      </View>
      <View style={styles.passageiroContainer1}>
        <View style={styles.passageiroInputContainer}>
          <AntDesign name="user" size={24} color="black" style={styles.icone} />
          <TextInput
            style={styles.passageiroInput}
            placeholder="Digite o nome do passageiro"
            value={novoPassageiro}
            onChangeText={setNovoPassageiro}
          />
        </View>
        <TouchableOpacity style={styles.addBotao} onPress={AddPassageiro}>
          <AntDesign name="pluscircle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={passageiro}
        renderItem={({ item }) => (
          <View style={styles.passageiroContainer}>
            <View>
              <Text style={styles.passageiro}>{item.name}</Text>
              <Text style={styles.destino}>
                Destino: {item.destino}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.reservaButao}
              onPress={() => ReservaPassageiro(item)}
            >
              <Text style={styles.reservaButaoTexto}>Reservar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {reserva && (
        <View style={styles.reservaContainer}>
          <Text style={styles.reservaTitle}>Reserva confirmada:</Text>
          <Text style={styles.reservaPassageiro}>{reserva.name}</Text>
          <Text style={styles.reservaDestino}>
            Destino: {reserva.destino}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "royalblue",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 23,
    paddingTop: 27,
    fontFamily: 'monospace',
  },
  titleBox:{
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#dcdcdc",
    marginTop: 28,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#dcdcdc"
  },
  icone: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  passageiroContainer1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  passageiroInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
    backgroundColor: "#dcdcdc"
  },
  passageiroInput: {
    flex: 1,
    height: 40,
  },
  addBotao: {
    backgroundColor: "royalblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#dcdcdc",
  },
  passageiroContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: "#dcdcdc"
  },
  passageiro: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  destino: {
    fontSize: 14,
  },
  reservaButao: {
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  reservaButaoTexto: {
    color: "white",
  },
  reservaContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
    backgroundColor: "#dcdcdc"
  },
  reservaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reservaPassageiro: {
    fontSize: 16,
    marginBottom: 5,
  },
  reservaDestino: {
    fontSize: 14,
  },
});

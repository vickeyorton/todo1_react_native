import React, { useState } from "react";
import {
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from "react-native";

function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  const addList = () => {
    setTask((task) => [...task, text]);
  };

  const deleteOperation = (data) => {
    // i.preventdefault();

    const name = data.data.name;
    setTask(task.filter((item) => item.name !== name));
    alert(`${data.data.name} Deleted Successfully`);
  };

  return (
    <ScrollView>
      <View style={styles.app}>
        <View style={styles.title}>
          <Text style={styles.header}>ToDo App</Text>
        </View>
        <View style={styles.inline}>
          <TextInput
            style={styles.input}
            placeholder="Type here Task!"
            onChangeText={(text) => setText({ name: text })}
            // onChangeText={(text) => setText(text)}
            defaultValue={text}
          />

          <TouchableHighlight style={styles.col30} onPress={() => addList()}>
            <View style={styles.button}>
              <Text>Touch Here</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.padding20}>
          <Text style={styles.header}>ToDo List</Text>
        </View>
        <View>
          {task.map((data, index) => {
            return (
              <View key={index} style={styles.list}>
                <Text style={styles.whiteText}>{data.name}</Text>
                <TouchableHighlight
                  style={styles.right}
                  name={data.name}
                  onPress={() => deleteOperation({ data })}
                >
                  <Image
                    name={data.name}
                    source={{
                      uri:
                        "https://cdn.nohat.cc/thumb/f/720/comvecteezy581933.jpg"
                    }}
                    style={styles.delete}
                  />
                </TouchableHighlight>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    minWidth: "90%"
  },
  title: {
    padding: "10px"
  },
  header: {
    fontSize: "24px",
    fontWeight: "600"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  input: {
    height: 40,
    border: "1px solid #000",
    padding: 10,
    width: "70%"
  },
  button: {
    height: 40,
    padding: 10,
    backgroundColor: "#d0d0d0",
    flex: 1
    // width: "min-content"
  },
  inline: {
    display: "flex"
  },
  col30: {
    width: "30%"
  },
  padding20: {
    padding: 20
  },
  list: {
    padding: 10,
    width: "max-content",
    backgroundColor: "#4630EB",
    color: "#fff",
    margin: "5px",
    minWidth: "200px",
    minHeight: "40px",
    borderRadius: "4px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  delete: {
    height: 20,
    width: 20,
    color: "#fff",
    textAlign: "right"
  },
  right: {
    display: "flex",
    alignItems: "flex-end",
    marginLeft: "auto"
  },
  whiteText: {
    color: "#fff"
  }
});

export default App;

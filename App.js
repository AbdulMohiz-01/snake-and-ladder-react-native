import React, { useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const App = () => {
  const [playerPosition, setPlayerPosition] = useState(0);

  const throwDice = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    setPlayerPosition((prevPosition) => prevPosition + diceRoll);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Board.png")}
        style={styles.board}
      >
        <Image source={require("./assets/player.png")} style={styles.playerImage} />
      </ImageBackground>
      <View style={styles.gameInfo}>
        <Text style={styles.infoText}>Snake and Ladder Board</Text>
        <Text style={styles.infoText}>Your Position: {playerPosition}</Text>
        <TouchableOpacity style={styles.button} onPress={throwDice}>
          <Text style={styles.buttonText}>Throw the Dice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const playerSize = 25; // Adjust the player image size as needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    width: "80%", // Adjust the board's width as needed
    aspectRatio: 1, // Maintain a square aspect ratio
    alignItems: "center",
    justifyContent: "center",
    margin: 20, // Add margin around the board
  },
  playerImage: {
    width: playerSize,
    height: playerSize + 12,
    position: "absolute",
    bottom: 0,
    left: 23,
    // opacity: 0.2,
  },
  gameInfo: {
    padding: 20,
    alignItems: "center",
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "lightgreen",
  },
  buttonText: {
    fontSize: 16,
    color: "green",
  },
});

export default App;

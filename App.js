import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style.js";
import { snakeAndLadders, initialCordinates, boxCordinates } from "./conf.js";

/**
 * The main component of the Snake and Ladder game.
 * @returns {JSX.Element} The JSX element of the game.
 */
const App = () => {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [playerCordinates, setPlayerCordinates] = useState(initialCordinates);
  const [diceRoll, setDiceRoll] = useState(0);
  const [win, setWin] = useState(false);

  useEffect(() => {
    movePlayer();
  }, [diceRoll, playerPosition]);

  /**
   * Rolls the dice and updates the player position.
   */
  const throwDice = () => {
    const newDiceRoll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(newDiceRoll);
    setPlayerPosition((prevPosition) => prevPosition + newDiceRoll);
  };

  /**
   * Moves the player to the new position based on the dice roll and the snake and ladder positions.
   */
  const movePlayer = () => {
    if (playerPosition > 35) {
      setPlayerPosition(0);
      setWin(true);
      return;
    }
    if (snakeAndLadders[playerPosition]) {
      setPlayerPosition(Number(snakeAndLadders[playerPosition]));
    }
    let position = playerPosition;
    const row = Math.floor(position / 5);
    const column = position % 5;
    setPlayerCordinates(boxCordinates[row][column]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Board.png")}
        style={styles.board}
      >
        <Image
          source={require("./assets/player.png")}
          style={[
            styles.playerImage,
            { left: playerCordinates.left, bottom: playerCordinates.bottom },
          ]}
        />
      </ImageBackground>
      <View style={styles.gameInfo}>
        <Text style={styles.infoText}>Snake and Ladder Board</Text>
        <Text style={styles.infoText}>Your Position: {playerPosition}</Text>
        <Text style={styles.rollText}>{win ? "You Won!" : diceRoll}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (win) {
              setWin(false);
              setPlayerPosition(0);
              setPlayerCordinates(initialCordinates);
            } else {
              throwDice();
            }
          }}
        >
          <Text style={styles.buttonText}>
            {win ? "Play Again" : "Throw Dice"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

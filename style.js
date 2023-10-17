import { StyleSheet } from "react-native";
import { playerSize } from "./conf";

/**
 * Styles for the game board and UI elements.
 * @typedef {Object} Styles
 * @property {Object} container - Styles for the container view.
 * @property {number} container.flex - Flex value for the container view.
 * @property {string} container.backgroundColor - Background color for the container view.
 * @property {string} container.alignItems - Alignment for the container view.
 * @property {string} container.justifyContent - Justification for the container view.
 * @property {Object} board - Styles for the game board view.
 * @property {number} board.width - Width of the game board.
 * @property {number} board.height - Height of the game board.
 * @property {string} board.alignItems - Alignment for the game board view.
 * @property {string} board.justifyContent - Justification for the game board view.
 * @property {string} board.position - Positioning for the game board view.
 * @property {number} board.left - Left offset for the game board view.
 * @property {Object} playerImage - Styles for the player image view.
 * @property {number} playerImage.width - Width of the player image view.
 * @property {number} playerImage.height - Height of the player image view.
 * @property {string} playerImage.position - Positioning for the player image view.
 * @property {Object} gameInfo - Styles for the game info view.
 * @property {number} gameInfo.padding - Padding for the game info view.
 * @property {string} gameInfo.alignItems - Alignment for the game info view.
 * @property {Object} infoText - Styles for the game info text.
 * @property {number} infoText.fontSize - Font size for the game info text.
 * @property {number} infoText.marginBottom - Bottom margin for the game info text.
 * @property {Object} button - Styles for the game button.
 * @property {number} button.padding - Padding for the game button.
 * @property {number} button.borderRadius - Border radius for the game button.
 * @property {number} button.borderWidth - Border width for the game button.
 * @property {string} button.borderColor - Border color for the game button.
 * @property {string} button.backgroundColor - Background color for the game button.
 * @property {Object} buttonText - Styles for the game button text.
 * @property {number} buttonText.fontSize - Font size for the game button text.
 * @property {string} buttonText.color - Color for the game button text.
 * @property {Object} rollText - Styles for the roll text.
 * @property {number} rollText.fontSize - Font size for the roll text.
 * @property {string} rollText.fontFamily - Font family for the roll text.
 * @property {string} rollText.color - Color for the roll text.
 * @property {number} rollText.marginBottom - Bottom margin for the roll text.
 */
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0f0",
      alignItems: "center",
      justifyContent: "center",
    },
    board: {
      width: 400,
      height: 600,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      left: -5,
    },
    playerImage: {
      width: playerSize,
      height: playerSize + 22,
      position: "absolute",
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
    rollText: {
      fontSize: 60,
      fontFamily: "monospace",
      color: "green",
      marginBottom: 10,
    },
  });
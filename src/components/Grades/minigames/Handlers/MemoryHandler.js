import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 6.2.2
import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component.js";
import { BodyText } from "../../../body-text.component.js";
import { Spacer } from "../../../spacer.component.js";
import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal.js";
import { Image } from "expo-image";
const ASSETS_FILEPATH = "../../../../../assets/";

//@param objectData passed from IndividualLessonHandler
const MemoryHandler = ({ objectData, imageMap }) => {

  const { t } = useTranslation();
  const [cardsArray, setCardsArray] = useState(null);

  const [currentSelection, setCurrentSelection] = useState([]);
  const [successfullyMatchedPairs, setSuccessfullyMatchedPairs] = useState([]);
  const [arrayIsLocked, setArrayIsLocked] = useState(false); //to track if user interactions are locked
  const [score, setScore] = useState(0);

  const [completionModalVisible, setCompletionModalVisible] = useState(false);

  //for the completion modal
  useEffect(() => {
    if(cardsArray) {
      if (score === cardsArray.length / 2) {
        setCompletionModalVisible(true);
      }
    }
  }, [score, cardsArray]);

  //to initially randomly sort the array
  useEffect(() => {
    console.log(objectData.content);
    const cardsArrayShuffled = [...objectData.content];
    cardsArrayShuffled.sort(() => Math.random() - 0.5); //shuffle array

    setCardsArray(cardsArrayShuffled);
  }, []);

  //to check if we have a match within currentSelection
  useEffect(() => {
    if (currentSelection.length === 2) {
      setArrayIsLocked(true);//we don't want users interacting with more than two cards at a time

      if (currentSelection[0].name === currentSelection[1].name) { //a match

        setSuccessfullyMatchedPairs(previousMatchedPairsArray => {//performing safe array state mutation
          return [...previousMatchedPairsArray, currentSelection[0].name]
        });
        setScore(prevScore => prevScore + 1); //score increment for matched pair

      }

      //all elements are locked for .25 seconds to prevent unwanted user interactions
      const timer = setTimeout(() => {
        setCurrentSelection([]);
        setArrayIsLocked(false); //unlock after timeout
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [currentSelection]);

/*   const resetCards = () => {
    setCardsArray(prevCardsArray => prevCardsArray.sort(() => Math.random() - 0.5)); //randomizing array again
    setCurrentSelection([]);
    setSuccessfullyMatchedPairs([]);
    setScore(0);
    setArrayIsLocked(false);
  } */

    //we memoize the cards array to cache previous card renders
  const renderCardsArray = useMemo(() => {
    if (!cardsArray) { return null; }
    //.map() extracts the individual card and the index
    //if the card is already matched or if it is in our currentSelection, isOpen evaluates to true.
    //Documentation for .some(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    return cardsArray.map((card, index) => {
        return (
            <Card
              index={index}
              key={index}
              name={card.name}
              image={card.image}
              imageDownloadURL={card.imageDownloadURL}
              imageBlurHash={card.imageBlurHash}
              isOpen={successfullyMatchedPairs.includes(card.name) || currentSelection.some(card => card.index === index)}
              onPress={() => checkCurrentSelection(index, card.name)}
              arrayIsLocked={arrayIsLocked}
            />
        );
    });
  }, [cardsArray, successfullyMatchedPairs, currentSelection, arrayIsLocked]);

  const checkCurrentSelection = (index, name) => {
    if (!successfullyMatchedPairs.includes(name) && !arrayIsLocked) {
      setCurrentSelection(prev => [...prev, { index: index, name: name }]);
    }
  };

  return (
    <ImageBackground source={require("../../../../../assets/memorybg.jpg")} 
    style={styles.container} 
    imageStyle= {{ opacity: 0.7 }}
    >

      <View style={{ alignSelf: "center", width: "80%", position: "absolute", 
                     top: 25, backgroundColor: "#fff8e7", padding: 20, borderRadius: 20 }}>
        <BodyText size="title">{objectData.prompt}</BodyText>
        <Spacer size="medium" />
        {/* marked for translation */}
        <TitleText size="caption">{t("minigames:memoryhint")}</TitleText>
      </View>

      <View style={styles.grid}>
        {renderCardsArray}
      </View>

      <Score score={score} />

        {/* marked for translation */}
      <CompletionModal 
        prompt={t("minigames:memoryprompt")} 
        score={score} startCompletionProcess={completionModalVisible}>
      </CompletionModal>
    </ImageBackground>
  );
}

//card is the individual card inside of the minigame. Each card tracks its own state via isOpen
//note: see renderCardsArray for params
const Card = ({ index, name, image, imageDownloadURL, imageBlurHash, isOpen, onPress, arrayIsLocked }) => {
  //blockPNG refers to the image at assets/block.png in firebase storage
  const blockPNG = "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fblock.png?alt=media&token=502d0477-07f5-4084-95a3-28d492793425"
  const blockBlurHash = "UBO-r[9u0hNd~BWBRkof5Xoes.af^*a|WCay";

  const content = useMemo(() => {
    if(image) { //now checking content type to be displayed within the card
      return (
        <Image 
          key={index}
          source={{ uri: imageDownloadURL }} 
          placeholder={imageBlurHash}
          style={{ width: 80, height: 80, borderRadius: 4 }}
        />
    )} else {
      return (
          <TitleText size="button" color="secondary">
            {name}
          </TitleText>
    )}
  }, [image, imageDownloadURL, imageBlurHash])

  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => pressIndividualCard(isOpen, arrayIsLocked, onPress)}
    >

      <Image
        source={{ uri: blockPNG }}
        placeholder={blockBlurHash}
        style={{ width: 80, height: 80, position: 'absolute' }}
      />
      {isOpen ? (
        content
      ) : (
        <Ionicons name="flower-outline" size={55} color="#fff8e7" />
      )}

    </TouchableOpacity>
)} //end of Card component

function pressIndividualCard(isOpen, arrayIsLocked, onPress) {
  if (!isOpen && !arrayIsLocked) {
    onPress(); // Call the onPress function passed from props
  }
};

//a view to display the current score and CompletionModal upon completion.
const Score = ({ score }) => {
  return (
    <View style={[styles.score_container, {width: "20%"}]}>
      <Text style={styles.score}>{score}</Text>
    </View>
  )};

export default MemoryHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  body: {
    flex: 8,
    padding: 10,
    marginTop: 20,
  },
  card: {
    margin: '1%', // Slightly space out the items
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    width: 80,
    height: 80,
  },
  card_text: {
    fontSize: 50,
    fontWeight: "bold",
  },
  score_container: {
    position: "absolute",
    bottom: 80,
    width: "45%",
    alignItems: "center",
    backgroundColor: "#fff8e7",
    borderRadius: 10,
    padding: 10
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // This will distribute space evenly between the items horizontally.
    width: '100%' // Ensure the grid takes full width available.
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
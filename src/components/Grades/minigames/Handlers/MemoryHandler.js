import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 6.2.2
import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component.js";
import { BodyText } from "../../../body-text.component.js";
import { Spacer } from "../../../spacer.component.js";
import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal.js";

//@param data passed from IndividualLessonHandler
//@param imageMap
const MemoryHandler = ({ data, imageMap }) => {
  const { t } = useTranslation();
  const cardsArray = data.content;

  const [currentSelection, setCurrentSelection] = useState([]);
  const [successfullyMatchedPairs, setSuccessfullyMatchedPairs] = useState([]);
  const [arrayIsLocked, setArrayIsLocked] = useState(false); //to track if user interactions are locked
  const [score, setScore] = useState(0);

  const [completionModalVisible, setCompletionModalVisible] = useState(false);

  //for the completion modal
  useEffect(() => {
    if (score === cardsArray.length / 2) {
      setCompletionModalVisible(true);
    }
  }, [score]);

  //to initially randomly sort the array
  useEffect(() => {
    cardsArray.sort(function (a, b) {return Math.random() - 0.5;});
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

      //all elements are locked for .5 seconds to prevent unwanted user interactions
      const timer = setTimeout(() => {
        setCurrentSelection([]);
        setArrayIsLocked(false); //unlock after timeout
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentSelection]);

  //to reset the array and all state variables
  const resetCards = () => {
    cardsArray.sort(function (a, b) {return Math.random() - 0.5;}); //randomizing array again
    setCurrentSelection([]);
    setSuccessfullyMatchedPairs([]);
    setScore(0);
    setArrayIsLocked(false);
  }

  //card is the individual card inside of the minigame. Each card tracks its own state via isOpen
  //note: see renderCardsArray for params
  const Card = ({ index, name, image }) => {

    //if the card is already matched or if it is in our currentSelection, isOpen evaluates to true.
    //Documentation for .some(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    const isOpen = successfullyMatchedPairs.includes(name) || currentSelection.some(card => card.index === index);

    //called by the card's TouchableOpacity component
    const pressCard = () => {
      if (!isOpen && !successfullyMatchedPairs.includes(name) && !arrayIsLocked) {
        setCurrentSelection((previousSelectionArray) => { //safe array state mutation to add the clicked card to the selection
          return [...previousSelectionArray, { index: index, name: name }]
        });
      }
    }; //end of pressCard()

    let content;
    if(image) { //now checking content type to be displayed within the card
      content = (
        <Image source={{ uri: imageMap[image] }} style={{ width: 80, height: 80 }}/>
    )} else {
      content = (
          <TitleText size="button" color="secondary">
            {name}
          </TitleText>
    )}

    return (
      <TouchableOpacity 
            style={styles.card}
            onPress={() => {
              pressCard();
          }}>

        <ImageBackground source={{ uri: imageMap["assets/block.png"] }} style={{ width: 80, height: 80 }}>
    
          {isOpen ? content : (
              <Ionicons name={"help-outline"} size={80} color={"#fff8e7"} />
          )}

        </ImageBackground>

      </TouchableOpacity>
  )} //end of Card component


  //a view to display the current score and CompletionModal upon completion.
  const Score = ({ score }) => {
    return (
      <View style={[styles.score_container, {width: "20%"}]}>
        <Text style={styles.score}>{score}</Text>
      </View>
    )};

  const renderCardsArray = () => {
    //.map() extracts the individual card and the index
    return cardsArray.map((card, index) => {
      let imageCheckedForNull = "";
      card.image ? imageCheckedForNull = card.image : imageCheckedForNull = "";
      
      return (
          <Card
            index={index}
            key={index}
            name={card.name}
            image={imageCheckedForNull}
          />
      );
    });
  }

  return (
    <ImageBackground source={{ uri: imageMap["assets/beach.jpg"] }} 
    style={styles.container} 
    imageStyle= {{ opacity: 0.7 }}
    >

      <View style={{ alignSelf: "center", width: "80%", position: "absolute", 
                     top: 25, backgroundColor: "#fff8e7", padding: 20, borderRadius: 20 }}>
        <BodyText size="title">{data.description}</BodyText>
        <Spacer size="medium" />
        {/* marked for translation */}
        <TitleText size="caption">Hint: Match images with words.</TitleText>
      </View>

      <View style={styles.grid}>
        {renderCardsArray()}
      </View>

      <Score score={score} />

      {/* Start Over button */}
      <TouchableOpacity
        style={[styles.score_container, { bottom: 25, borderRadius: 30, }]}
        onPress={() => {
          resetCards();
        }}
      >
        <BodyText size="subtitle">
          {t("common:restart")}
        </BodyText>
      </TouchableOpacity>

        {/* marked for translation */}
      <CompletionModal 
        prompt={"Good job completing this memory minigame!\nGo back to the lesson to continue learning."} 
        score={score} visible={completionModalVisible}>
      </CompletionModal>
    </ImageBackground>
  );
}

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
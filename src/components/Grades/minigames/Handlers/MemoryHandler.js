import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 6.2.2
import { Translation } from "react-i18next";
import { TitleText } from "../../../title-text.component.js";
import { BodyText } from "../../../body-text.component.js";
import { Spacer } from "../../../spacer.component.js";

export class MemoryHandler extends React.Component {

  constructor(props) {
    //console.log("Constructor => ", props);
    super(props);

    //binding this as a "parameter" conditional to rerender to each function
    this.renderCardRow = this.renderCardRow.bind(this);
    this.resetCards = this.resetCards.bind(this);

    //for shuffling array
    Array.prototype.shuffle = function () {
      var i = this.length,
        j,
        temp;
      if (i == 0) return this;
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
      return this;
    };
    console.log("==> ", this.props.data.content);
    let cards = this.props.data.content;

    //new cards attribute on the this object
    this.cards = cards;

    //mapping a id to each element
    this.cards.map((obj) => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;

      obj.is_open = false;
    });

    //we shuffle cards
    this.cards = this.cards.shuffle();

    //defining another attribute of the this object
    this.state = {
      current_selection: [],
      selected_pairs: [],
      score: 0,
      cards: this.cards,
    };

  } //end of constructor

  render() {
    return (
      // <Text> Hello </Text>
      <View style={styles.container}>
        <View style={{ alignSelf: "center", width: "80%" }}>
          <BodyText size="subtitle">{this.props.data.description}</BodyText>
          <Spacer size="medium" />
          {/* marked for translation */}
          <TitleText size="caption">Hint: Match images with words.</TitleText>
        </View>

        {/* come back to this */}
        <View style={styles.body}>{this.renderRows.call(this)}</View>
        <Score score={this.state.score} />

        {/* Start Over button */}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
          onPress={this.resetCards}
        >
          <BodyText size="subtitle">
            <Translation>{(t) => t("common:restart")}</Translation>
          </BodyText>
        </TouchableOpacity>
      </View>
    );
  }

  //called when we press "Start over"
  resetCards() {
    let cards = this.cards.map((obj) => {
      obj.is_open = false; //all cards are set to closed status
      return obj;
    });

    cards = cards.shuffle();

    //wipes state
    this.setState({
      current_selection: [],
      selected_pairs: [],
      cards: cards,
      score: 0,
    });
  }

  renderRows() {
    let contents = this.getRowContents(this.state.cards); //rowified contents
    console.log("Contents: ", contents);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          {this.renderCardRow(cards)}
        </View>
      );
    });
  }

  //called by renderRows()
  renderCardRow(cards) {
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          name={card.name}
          type={card.type}
          image={card.image}
          is_open={card.is_open}

          /* clickCard is like onClick? Check docs */
          clickCard={this.clickCard.bind(this, card.id)}

          imageMap={this.props.imageMap}
        />
      );
    });
  }

  //called by renderCardRow()
  //@param id the card being clicked
  clickCard(id) {
    let selected_pairs = this.state.selected_pairs;
    let current_selection = this.state.current_selection;
    let score = this.state.score;

    //cards is the entire 1D array array. findIndex() iterates through and finds a match
    let index = this.state.cards.findIndex((card) => {
      return card.id == id;
    });

    let cards = this.state.cards;

    //
    if (cards[index].is_open == false && selected_pairs.indexOf(cards[index].name) === -1) {
      cards[index].is_open = true;

      current_selection.push({
        index: index,
        name: cards[index].name,
      });

      if (current_selection.length == 2) {
        if (current_selection[0].name == current_selection[1].name) { //checking match
          score += 1;
          selected_pairs.push(cards[index].name);
          console.log("Successfully matched pairs", selected_pairs);
        } else {
          cards[current_selection[0].index].is_open = false;

          setTimeout(() => { //wait half a second and then flip both cards over
            cards[index].is_open = false;
            this.setState({
              cards: cards,
            });
          }, 500);
        }

        current_selection = [];
      }

      this.setState({
        score: score,
        cards: cards,
        current_selection: current_selection,
      });
    }
  }

  //called by renderRows()
  getRowContents(cards) {
    let contents_r = [];
    let contents = [];
    let count = 0;
    cards.forEach((item) => {
      count += 1;
      contents.push(item); //pushing onto current row
      if (count == 4) { //move to the next row
        contents_r.push(contents);
        count = 0;
        contents = [];
      }
    });

    return contents_r;
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let CardSource = Ionicons;
    let icon_name = "help-outline";
    let icon_color = "#fff8e7";

    if (this.props.is_open && this.props.type) {
      return (
        <ImageBackground
          source={{ uri: this.props.image }}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5,
            marginLeft: 5,
            width: "100%",
            height: undefined,
            aspectRatio: 1,
          }}
        >
          <Image source={{ uri: this.props.imageMap[this.props.image] }} style={{ width: 55, height: 55 }} />
        </ImageBackground>
      );
    } else if (this.props.is_open) {
      return (
        <ImageBackground
          source={{ uri: this.props.imageMap["assets/block.png"] }}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5,
            marginLeft: 5,
            width: "100%",
            height: undefined,
            aspectRatio: 1,
          }}
        >
          <TitleText size="button" color="secondary">
            {this.props.name}
          </TitleText>
        </ImageBackground>
      );
    }

    return (
      <ImageBackground
        source={{ uri: this.props.imageMap["assets/block.png"] }}
        style={{
          flex: 1,
          alignItems: "center",
          marginRight: 5,
          marginLeft: 5,
          justifyContent: "center",
          width: "100%",
          height: undefined,
          aspectRatio: 1,
        }}
      >
        {/* CardSource is defined as Ionicon which is a library of vector icons. we take an icon_name of 'help-outline' */}
        {/* which is a question mark */}
        <TouchableOpacity activeOpacity="0.5" onPress={this.props.clickCard}>
          <CardSource name={icon_name} size={50} color={icon_color} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

class Score extends React.Component {
  render() {
    return (
      // <Text> Hello </Text>
      <View style={styles.score_container}>
        <Text style={styles.score}>{this.props.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignSelf: "stretch",
    backgroundColor: "#fff8e7",
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card_text: {
    fontSize: 50,
    fontWeight: "bold",
  },
  score_container: {
    flex: 2,
    alignItems: "center",
    padding: 20,
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

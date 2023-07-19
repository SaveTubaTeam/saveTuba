import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 6.2.2
import { renderToString } from "react-dom/server";
import { Translation } from "react-i18next";


import { TitleText } from "../../../title-text.component.js";
import { BodyText } from "../../../body-text.component.js";
import { Spacer } from "../../../spacer.component.js";


export class MemoryHandler extends React.Component {

  constructor(props) {
    console.log("Constructor");
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.resetCards = this.resetCards.bind(this);

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
    console.log("Here 1");
    let cards = this.props.data.content;

    this.cards = cards;

    this.cards.map((obj) => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;

      obj.is_open = false;
    });

    this.cards = this.cards.shuffle();
    this.state = {
      current_selection: [],
      selected_pairs: [],
      score: 0,
      cards: this.cards,
    };
  }

  restart() {
    console.log("Here 2");
    return <Translation>{(t) => t("common:restart")}</Translation>;
  }

  render() {
    console.log("Here 3");
    // const restart = renderToString(this.restart());
    return (
      <Text> Hello </Text>
      // <View style={styles.container}>
      //   <View style={{ alignSelf: "center", width: "80%" }}>
      //     <BodyText size="subtitle">{this.props.data.description}</BodyText>
      //     <Spacer size="medium" />
      //     <TitleText size="caption">Hint: Match images with words.</TitleText>
      //   </View>
      //   <View style={styles.body}>{this.renderRows.call(this)}</View>
      //   <Score score={this.state.score} />
      //   <TouchableOpacity
      //     style={{
      //       justifyContent: "center",
      //       alignItems: "center",
      //       paddingBottom: 20,
      //     }}
      //     onPress={this.resetCards}
      //   >
      //     <BodyText size="subtitle">
      //       <Translation>{(t) => t("common:restart")}</Translation>
      //     </BodyText>
      //   </TouchableOpacity>
      // </View>
    );
  }

  resetCards() {
    console.log("Here 4");
    let cards = this.cards.map((obj) => {
      obj.is_open = false;
      return obj;
    });

    cards = cards.shuffle();

    this.setState({
      current_selection: [],
      selected_pairs: [],
      cards: cards,
      score: 0,
    });
  }

  renderRows() {
    console.log("Here 5");
    let contents = this.getRowContents(this.state.cards);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          {this.renderCards(cards)}
        </View>
      );
    });
  }

  renderCards(cards) {
    console.log("Here 6");
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          name={card.name}
          type={card.type}
          image={card.image}
          is_open={card.is_open}
          clickCard={this.clickCard.bind(this, card.id)}
        />
      );
    });
  }

  clickCard(id) {
    console.log("Here 7");
    let selected_pairs = this.state.selected_pairs;
    let current_selection = this.state.current_selection;
    let score = this.state.score;

    let index = this.state.cards.findIndex((card) => {
      return card.id == id;
    });

    let cards = this.state.cards;

    if (
      cards[index].is_open == false &&
      selected_pairs.indexOf(cards[index].name) === -1
    ) {
      cards[index].is_open = true;

      current_selection.push({
        index: index,
        name: cards[index].name,
      });

      if (current_selection.length == 2) {
        if (current_selection[0].name == current_selection[1].name) {
          score += 1;
          selected_pairs.push(cards[index].name);
        } else {
          cards[current_selection[0].index].is_open = false;

          setTimeout(() => {
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

  getRowContents(cards) {
    console.log("Here 8");
    let contents_r = [];
    let contents = [];
    let count = 0;
    cards.forEach((item) => {
      count += 1;
      contents.push(item);
      if (count == 4) {
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
    console.log("Here 9");
    let CardSource = Ionicons;
    let icon_name = "help-outline";
    let icon_color = "#fff8e7";

    if (this.props.is_open && this.props.type) {
      return (
        <ImageBackground
          source={require("../../../../../assets/block.png")}
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
          <Image source={this.props.image} style={{ width: 55, height: 55 }} />
        </ImageBackground>
      );
    } else if (this.props.is_open) {
      return (
        <ImageBackground
          source={require("../../../../../assets/block.png")}
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
      <Text> Hello </Text>
      // <ImageBackground
      //   source={require("../../../../../assets/block.png")}
      //   style={{
      //     flex: 1,
      //     alignItems: "center",
      //     marginRight: 5,
      //     marginLeft: 5,
      //     justifyContent: "center",
      //     width: "100%",
      //     height: undefined,
      //     aspectRatio: 1,
      //   }}
      // >
      //   <TouchableOpacity activeOpacity="0.5" onPress={this.props.clickCard}>
      //     <CardSource name={icon_name} size={50} color={icon_color} />
      //   </TouchableOpacity>
      // </ImageBackground>
    );
  }
}

class Score extends React.Component {
  render() {
    console.log("Here 10");
    return (
      <Text> Hello </Text>
      // <View style={styles.score_container}>
      //   <Text style={styles.score}>{this.props.score}</Text>
      // </View>
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

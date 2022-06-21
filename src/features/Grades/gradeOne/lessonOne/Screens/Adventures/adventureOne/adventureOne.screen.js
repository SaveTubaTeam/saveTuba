import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableHighlight,
} from "react-native";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons"; // 6.2.2

export class AdventureOne extends React.Component {
  constructor(props) {
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

    let sources = {
      fontawesome: FontAwesome,
      entypo: Entypo,
      ionicons: Ionicons,
    };

    let cards = [
      {
        src: "entypo",
        name: "flower",
        color: "#37b24d",
      },
      {
        src: "entypo",
        name: "moon",
        color: "#ffd43b",
      },
      {
        src: "entypo",
        name: "drop",
        color: "blue",
      },
      {
        src: "ionicons",
        name: "boat",
        color: "deepskyblue",
      },
      {
        src: "ionicons",
        name: "cart",
        color: "grey",
      },
      {
        src: "ionicons",
        name: "trash",
        color: "grey",
      },
      {
        src: "ionicons",
        name: "planet",
        color: "brown",
      },
      {
        src: "ionicons",
        name: "car",
        color: "rebeccapurple",
      },
    ];

    let clone = JSON.parse(JSON.stringify(cards));

    this.cards = cards.concat(clone);
    this.cards.map((obj) => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;
      obj.src = sources[obj.src];
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>{this.renderRows.call(this)}</View>
        <Score score={this.state.score} />
        <Button
          onPress={this.resetCards}
          title="Начать заново"
          color="#748816"
        />
      </View>
    );
  }

  resetCards() {
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
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          src={card.src}
          name={card.name}
          color={card.color}
          is_open={card.is_open}
          clickCard={this.clickCard.bind(this, card.id)}
        />
      );
    });
  }

  clickCard(id) {
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
    let CardSource = FontAwesome;
    let icon_name = "question-circle";
    let icon_color = "#393939";

    if (this.props.is_open) {
      CardSource = this.props.src;
      icon_name = this.props.name;
      icon_color = this.props.color;
    }

    return (
      <View style={styles.card}>
        <TouchableHighlight
          onPress={this.props.clickCard}
          activeOpacity={0.75}
          underlayColor={"#f1f1f1"}
        >
          <CardSource name={icon_name} size={50} color={icon_color} />
        </TouchableHighlight>
      </View>
    );
  }
}

class Score extends React.Component {
  render() {
    return (
      <View style={styles.score_container}>
        <Text style={styles.score}>{this.props.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  body: {
    flex: 18,
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
  },
  card: {
    flex: 1,
    alignItems: "center",
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

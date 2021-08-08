import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import moment, { Moment } from "moment";

const TextClock = () => {
  const [time, setTime] = useState<Moment>(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, [setTime]);

  let hour = time.hour() % 12;
  const minute = time.minute();
  const isQuarter = minute === 15 || minute === 45;
  const isHalf = minute === 30;
  const isTen = minute === 10 || minute === 50;
  const isTwenty = minute === 20 || minute === 40;
  const isPast = minute <= 30 && (isQuarter || isHalf || isTen || isTwenty);
  const isTo = minute > 30 && (isQuarter || isHalf || isTen || isTwenty);
  const twenty = minute > 20 && minute < 30;
  const thirty = minute > 30 && minute < 40;
  const forty = minute > 40 && minute < 50;
  const fifty = minute > 50;
  const oh = minute > 0 && minute <= 9;
  const teen = minute >= 13 && minute <= 19;

  if (isTo) hour = hour + 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHighlighted}>It</Text>
      <Text style={styles.textHighlighted}>is</Text>
      <Text style={isQuarter ? styles.textHighlighted : styles.textPlain}>
        Quarter
      </Text>
      <Text style={isHalf ? styles.textHighlighted : styles.textPlain}>
        Half
      </Text>
      <Text style={isTen ? styles.textHighlighted : styles.textPlain}>Ten</Text>
      <Text style={isTwenty ? styles.textHighlighted : styles.textPlain}>
        Twenty
      </Text>
      <Text style={isPast ? styles.textHighlighted : styles.textPlain}>
        Past
      </Text>
      <Text style={isTo ? styles.textHighlighted : styles.textPlain}>To</Text>
      <Text style={hour === 1 ? styles.textHighlighted : styles.textPlain}>
        One
      </Text>
      <Text style={hour === 2 ? styles.textHighlighted : styles.textPlain}>
        Two
      </Text>
      <Text style={hour === 3 ? styles.textHighlighted : styles.textPlain}>
        Three
      </Text>
      <Text style={hour === 4 ? styles.textHighlighted : styles.textPlain}>
        Four
      </Text>
      <Text style={hour === 5 ? styles.textHighlighted : styles.textPlain}>
        Five
      </Text>
      <Text style={hour === 6 ? styles.textHighlighted : styles.textPlain}>
        Six
      </Text>
      <Text style={hour === 7 ? styles.textHighlighted : styles.textPlain}>
        Seven
      </Text>
      <Text style={hour === 8 ? styles.textHighlighted : styles.textPlain}>
        Eight
      </Text>
      <Text style={hour === 9 ? styles.textHighlighted : styles.textPlain}>
        Nine
      </Text>
      <Text style={hour === 10 ? styles.textHighlighted : styles.textPlain}>
        Ten
      </Text>
      <Text style={hour === 11 ? styles.textHighlighted : styles.textPlain}>
        Eleven
      </Text>
      <Text style={hour === 0 ? styles.textHighlighted : styles.textPlain}>
        Twelve
      </Text>
      <Text style={minute === 0 ? styles.textHighlighted : styles.textPlain}>
        O'clock
      </Text>
      <Text style={twenty ? styles.textHighlighted : styles.textPlain}>
        Twenty
      </Text>
      <Text style={thirty ? styles.textHighlighted : styles.textPlain}>
        Thirty
      </Text>
      <Text style={forty ? styles.textHighlighted : styles.textPlain}>
        Forty
      </Text>
      <Text style={fifty ? styles.textHighlighted : styles.textPlain}>
        Fifty
      </Text>
      <Text style={oh ? styles.textHighlighted : styles.textPlain}>Oh</Text>
      <Text
        style={
          minute % 10 === 1 && minute !== 11
            ? styles.textHighlighted
            : styles.textPlain
        }
      >
        One
      </Text>
      <Text
        style={
          minute % 10 === 2 && minute !== 12
            ? styles.textHighlighted
            : styles.textPlain
        }
      >
        Two
      </Text>
      <Text
        style={
          minute % 10 === 3 && !teen ? styles.textHighlighted : styles.textPlain
        }
      >
        Three
      </Text>
      <Text
        style={
          minute % 10 === 4 && !isQuarter
            ? styles.textHighlighted
            : styles.textPlain
        }
      >
        Four
      </Text>
      <Text
        style={
          minute % 10 === 5 && !isQuarter
            ? styles.textHighlighted
            : styles.textPlain
        }
      >
        Five
      </Text>
      <Text
        style={minute % 10 === 6 ? styles.textHighlighted : styles.textPlain}
      >
        Six
      </Text>
      <Text
        style={minute % 10 === 7 ? styles.textHighlighted : styles.textPlain}
      >
        Seven
      </Text>
      <Text
        style={minute % 10 === 8 ? styles.textHighlighted : styles.textPlain}
      >
        Eight
      </Text>
      <Text
        style={minute % 10 === 9 ? styles.textHighlighted : styles.textPlain}
      >
        Nine
      </Text>
      <Text style={minute === 11 ? styles.textHighlighted : styles.textPlain}>
        Eleven
      </Text>
      <Text style={minute === 12 ? styles.textHighlighted : styles.textPlain}>
        Twelve
      </Text>
      <Text style={minute === 13 ? styles.textHighlighted : styles.textPlain}>
        Thir
      </Text>
      <Text
        style={teen && !isQuarter ? styles.textHighlighted : styles.textPlain}
      >
        Teen
      </Text>
      <StatusBar backgroundColor="blue" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    backgroundColor: "#f0f",
    alignItems: "center",
    justifyContent: "center",
  },
  textPlain: {
    width: "30%",
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 5,
  },
  textHighlighted: {
    width: "30%",
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    paddingVertical: 5,
  },
});

export default TextClock;

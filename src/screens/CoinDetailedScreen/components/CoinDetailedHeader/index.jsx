import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";

const CoinDetailedHeader = (props) => {
  const { image, symbol, marketCapRank } = props;
  return (
    <View>
      <View style={styles.headerContainer}>
        <Ionicons name="chevron-back-sharp" size={30} color="white" />
        <View style={styles.tickerContainer}>
          <Image source={{ uri: image }} style={{ width: 15, height: 15 }} />
          <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
          <View style={styles.rankContainer}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              #{marketCapRank}
            </Text>
          </View>
        </View>
        <EvilIcons name="user" size={30} color="white" />
      </View>
    </View>
  );
};

export default CoinDetailedHeader;

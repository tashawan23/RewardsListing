import React from "react";
import { Alert, Image, Text, View, TouchableOpacity } from "react-native";
import { mvs } from "react-native-size-matters";
import { styles } from "./styles";

export const GiftCard = (props) => {
  const { name, price, image, description, categories } = props;

  const onSelectCard = (name, price, description) => {
      const subText = description ? `${description} \n\n Add ${name} $${price} to cart?` : `Add ${name} $${price} to cart?`
    Alert.alert('Add to Cart', subText, [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK" },
    ]);
  };

  return (
    <TouchableOpacity
      style={{ paddingVertical: mvs(10) }}
      onPress={() => onSelectCard(name, price, description)}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: `${image}` }} style={styles.image} />
        <View style={{ flexGrow: 1, width: 0 }}>
          <Text style={styles.name}>{name}</Text>
          {description && (
              <View
              style={{ flexDirection: 'row' }}
          > 
              <Text style={styles.description} numberOfLines={3}>{description}</Text>
              </View>
          )}
          <Text style={styles.price}>${price}</Text>
          <View style={{ flexDirection: "row", flexWrap: 1 }}>
            {categories.map((cat, index) => {
              return (
                <View style={styles.category} key={index}>
                  <Text style={styles.categoryText}>{cat}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

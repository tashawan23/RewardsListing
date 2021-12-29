import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StatusBar, ActivityIndicator } from "react-native";
import { GiftCard } from "./components/GiftCard";
import { styles } from "./styles";

export const ListingPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      let data = await getListings();
      data = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      setListings(data);
    }
    fetchListings();
  }, []);

  const getListings = async () => {
    try {
      const response = await fetch(
        "https://interview-api.vercel.app/api/giftcard/"
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  const renderItem = (item) => {
    return (
      <GiftCard
        key={item.id}
        name={item.name}
        image={item.imageUrls[0]}
        price={item.price}
        categories={item.categories}
        description={item.shortDescription}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" hidden={false} translucent={true} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Gift Card Listings</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.scrollHeader}>Awesome Gift Card</Text>
        { listings.length == 0 && <ActivityIndicator/>}
        <FlatList
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          data={listings}
          renderItem={({ item }) => renderItem(item)}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Gift Card Listings</Text>
      </View>
    </View>
  );
};

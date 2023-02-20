import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  const [nftData, setNFTData] = useState(NFTData); //array of all of our nfts
  //creating a function to handle the search
  const handleSearch = (value) => {
    if (!value.length) {
      return setNFTData(NFTData);
    }
    //but if the users types something in the search field, we can filter through the NFTData
    //here we're looping over all the nft's and we're only keeping the ones that includes the value of our search term
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    //if there's at least one element that exists
    if (filteredData.length) {
      setNFTData(filteredData);
    } else {
      setNFTData(NFTData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        {/* this view below will contain our nftlist  */}
        <View style={{ zIndex: 1 }}>
          {/* flatlist accepts a data property which in this case is our NFT data.. */}
          <FlatList
            //here we change it to the dynamic state nftData rather than the static NFTData
            data={nftData}
            //here we render each nft object item of the nftdata in a nftcard component
            renderItem={({ item }) => <NFTCard data={item} />}
            //below we pass a key to each item like when we pass a key to a mapped element in react by accepting a callback function and returning something
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        {/* this view below will serve as a background color that is going to be displayed behind our nft list. */}
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {/* now we'll  create two views to divide our screen which we serve as the background color behind the nft list */}
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View stye={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

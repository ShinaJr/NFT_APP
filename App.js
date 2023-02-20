import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/Navigation";
import { useFonts } from "expo-font";

export default function App() {
  //initializing the fonts we want to use
  const [fontsLoaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
//since the fonts are not loaded initially we can do the following
if(!fontsLoaded){
  return null;
}
//else 
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

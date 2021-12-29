import { ScaledSheet, mvs, ms } from "react-native-size-matters";
export const styles = ScaledSheet.create({
  separator:{
    borderBottomColor: "black",
    borderBottomWidth: 1.5,
    opacity: 0.1,
  },
  content: {
      marginHorizontal: ms(20),
      marginTop: mvs(20),
      flex: 1,
      marginBottom: mvs(80),
  },
  header: {
      paddingTop: mvs(60),
      paddingBottom: mvs(20),
      backgroundColor: "#212121",
      justifyContent: 'center',
      alignItems: 'center',
  },
  headerText: {
      color: "white",
      fontSize: ms(18),
      fontWeight: 'bold',
  },
  footer: {
    backgroundColor: "#212121",
    paddingTop: mvs(20),
    paddingBottom: mvs(40),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignContent: 'center',
  },
  footerText: {
      color: 'white',
      fontSize: ms(14),
      textAlign: 'center',
  },
  scrollHeader: {
      fontSize: ms(20),
      fontWeight: 'bold',
      paddingBottom: mvs(20),
  }
});

import { ScaledSheet, mvs, ms } from "react-native-size-matters";
export const styles = ScaledSheet.create({
  name:{
      fontSize: ms(16),
      fontWeight: 'bold',
      marginBottom: mvs(10),
  },
  price: {
      fontSize: ms(14),
      marginBottom: mvs(10),
  },
  category: {
      paddingVertical: mvs(3),
      backgroundColor: '#d6d4d4',
      paddingHorizontal: ms(8),
      borderRadius: 5,
      marginRight: ms(8)
  },
  categoryText: {
    fontSize: ms(14),
  },
  image: {
    width: ms(65),
    height: ms(65),
    marginRight: ms(10),
    alignSelf: 'center',
  },
  description: {
    marginBottom: mvs(10),
    fontSize: ms(14)
  }
});

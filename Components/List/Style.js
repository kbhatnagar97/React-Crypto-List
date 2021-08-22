const { white } = require("react-native-paper/lib/typescript/styles/colors");

module.exports = {
  row: {
    flexDirection: 'row',
    height: 'auto',
    padding: 10,
    marginBottom: 2,
    backgroundColor: 'black',
  },

  redText: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
  greenText: {
    color: 'green',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },

  textName: {
    flex: 1,
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
  },

  textPrice: {
    textAlign: 'right',
    flex: 1,
    color: 'white',
    fontSize: 20,
  },
};

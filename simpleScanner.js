import React from 'react';
import { BarCodeScanner, Permissions } from 'expo';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 24
  }
});
export default class SimpleScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scannedCode: null,
    scannedType: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scannedCode: data, scannedType: type });
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Image source={require('./assets/icon.png')} />
        <Text>Scan a membership card to view its info:</Text>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={{ width: 250, height: 250 }}
        />
        <Text>{this.state.scannedCode}</Text>
        <Button title="Save Code" onPress={() => alert('Not yet implemented.')} />
      </View>
    );
  }
}

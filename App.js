import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={ require('./assets/img/bg.jpg') }
            style={styles.banner}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en Paris?</Text>
          <ScrollView horizontal>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad1.jpg') }/>
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad2.jpg') }/>
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad3.jpg') }/>
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad4.jpg') }/>
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={ require('./assets/img/actividad5.jpg') }/>
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Los mejores Alojamientos</Text>
          <View>
            <View>
              <Image 
                style={styles.mejor}
                source={ require('./assets/img/mejores1.jpg') }/>
            </View>
            <View>
              <Image 
                style={styles.mejor}
                source={ require('./assets/img/mejores2.jpg') }/>
            </View>
            <View>
              <Image 
                style={styles.mejor}
                source={ require('./assets/img/mejores3.jpg') }/>
            </View>
          </View>

          <Text style={styles.titulo}>Hospedajes en LA</Text>
          <View style={styles.listado}>
            <View style={styles.listadoItem}>
              <Image 
                style={styles.hospedaje}
                source={ require('./assets/img/hospedaje1.jpg') }/>
                <Text>Casa 3 recamaras</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image 
                style={styles.hospedaje}
                source={ require('./assets/img/hospedaje2.jpg') }/>
                <Text>Casa 3 recamaras</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image 
                style={styles.hospedaje}
                source={ require('./assets/img/hospedaje3.jpg') }/>
                <Text>Casa 3 recamaras</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image 
                style={styles.hospedaje}
                source={ require('./assets/img/hospedaje4.jpg') }/>
                <Text>Casa 3 recamaras</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  contenedor: {
    marginHorizontal: 10
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejor: {
    width: '100%',
    height: 200,
    marginTop: 20
  },
  hospedaje: {
    width: '100%',
    height: 200,
    marginTop: 20
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  }
});

export default App;

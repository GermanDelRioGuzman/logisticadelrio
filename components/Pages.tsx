import React, {useRef,useState} from "react";
import { Dimensions,ScrollView, View,Alert, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, TextInput } from "react-native";
import WhatsAppButton from "../components/WhatsAppButton";


const Pages = () => {

  const { width, height } = Dimensions.get("window"); // Obtén las dimensiones de la pantalla

  const scrollViewRef = useRef();
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [0,700,1400,2100,2800]; 

  const goToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection < sections.length) {
      scrollViewRef.current.scrollTo({
        x:width * nextSection,
      });
      setCurrentSection(nextSection);
    }
  };


  return (
    <>
    <ScrollView 
      ref={scrollViewRef}
      horizontal={true} // Scroll horizontal
      nestedScrollEnabled={true}
      style={styles.horizontalScroll}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}>

      <ScrollView style={styles.verticalScroll}>
      
      {/* Sección 1 */}
        <View style={styles.section}>
          <TouchableOpacity >
            <ImageBackground
              source={require("../assets/1.png")}
              style={[styles.background, {width, height}]}
              resizeMode="contain" // Ajusta la imagen para que no se distorsione
            >
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Sección 2 */}
        <View style={styles.section}>
        <TouchableOpacity >
            <ImageBackground
              source={require("../assets/2.png")}
              style={[styles.background, {width, height}]}
              resizeMode="contain" // Ajusta la imagen para que no se distorsione
            >
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Sección 3 */}
        <View style={styles.section}>
        <TouchableOpacity >
            <ImageBackground
              source={require("../assets/3.png")}
              style={[styles.background, {width, height}]}
              resizeMode="contain" // Ajusta la imagen para que no se distorsione
            >
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Sección 4 */}
        <View>
          
          <ImageBackground
                source={require("../assets/4.png")}
                style={[styles.background, {width, height}]}
                resizeMode="contain" // Ajusta la imagen para que no se distorsione
              >
                <WhatsAppButton></WhatsAppButton>
          </ImageBackground>
        
        </View>
      </ScrollView>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%", // Ocupa todo el ancho del contenedor padre
    marginBottom: 0, // Espaciado entre secciones

  },
  horizontalScroll: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  verticalScroll: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row', // Permite desplazar contenido horizontal y luego vertical.
    flexWrap: "nowrap",
  },
  imageContainer:{
    justifyContent: "center",
    alignItems: "center",
  },
  innerBox: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  background: {
    width: "100%", // Ocupa el ancho completo del contenedor
    height:"100%",
    aspectRatio: 16 / 9, // Relación de aspecto (ajusta según tu imagen)
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"black",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente para el texto
    padding: 10,
    borderRadius: 10,
  },
  textInput: {
    width: 500, // ancho de cuadro del texto
    height: 100, // Altura del cuadro de texto
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 15,
    opacity: 0.8,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Pages;
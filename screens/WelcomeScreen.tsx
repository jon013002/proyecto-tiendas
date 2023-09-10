import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        {/* Imagen de Bienvenida */}
        <ImageBackground style={{
          height: height / 2.5,
        }}
        resizeMode="contain" 
        source={require("../assets/images/welcome-img.png")} 
        />

        {/* Espacio debajo de la imagen */}
        <View 
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}
        >
          <Text style={{
            fontSize: FontSize.xxLarge,
            color: Colors.primary,
            fontFamily: Font["poppins-bold"],
            textAlign: "center",
          }}>
            Inserta un texto xd
          </Text>

          <Text style={{
            fontSize: FontSize.small,
            color: Colors.text,
            fontFamily: Font["poppins-regular"],
            textAlign: "center",
            marginTop: Spacing * 2,
          }}>
            Inserta otro texto pero más vergas xd
          </Text>
        </View>

        {/* En este apartado se encuentran los botones */}
        <View style={{
          paddingHorizontal: Spacing * 2,
          paddingTop: Spacing * 6,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          {/* Primer Boton */}
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
          >
            <Text style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              fontSize: FontSize.medium,
              textAlign: "center",
            }}
            >
              Iniciar Sesión
            </Text>
          </TouchableOpacity>

          {/* Segundo Boton */}
          <TouchableOpacity
            onPress={() => navigate("Register")}
            style={{
              backgroundColor: "black",
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: "48%",
              borderRadius: Spacing,
              
            }}
          >
            <Text style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              fontSize: FontSize.medium,
              textAlign: "center",
            }}
            >
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});

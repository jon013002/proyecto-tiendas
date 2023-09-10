import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      {/* Contenedor general */}
      <View 
        style={{
          padding: Spacing * 2,
        }}
      >
        {/* Contenedor de titulos */}
        <View 
          style={{
            alignItems: "center",
          }}
        >
          <Text 
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Crea una cuenta
          </Text>
          <Text 
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.small,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Inicia ahora y sé parte de nuestra comunidad.
          </Text>
        </View>

        {/* Contenedor de Inputs */}
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          {/* Input Email */}
          <AppTextInput placeholder="Correo Electrónico" />

          {/* Input Contraseña */}
          <AppTextInput placeholder="Contraseña" />

          {/* Input Validar Contraseña */}
          <AppTextInput placeholder="Confirma tu contraseña" />
        </View>

        {/* Boton para loguearse  */}
        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary, 
            marginVertical: Spacing,
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
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Crear cuenta
          </Text>
        </TouchableOpacity>

        {/* Boton para registrarse  */}
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Ya tengo una cuenta
          </Text>
        </TouchableOpacity>

        {/* Contenedor de apps para hacer login */}
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            O continúa con
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {/* Primer app */}
            <TouchableOpacity 
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons 
                name="logo-google" 
                color={Colors.text} 
                size={Spacing * 2}
              />
            </TouchableOpacity>

            {/* Segunda app */}
            <TouchableOpacity 
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons 
                name="logo-facebook" 
                color={Colors.text} 
                size={Spacing * 2}
              />
            </TouchableOpacity>

            {/* Tercera app */}
            <TouchableOpacity 
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons 
                name="logo-twitter" 
                color={Colors.text} 
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

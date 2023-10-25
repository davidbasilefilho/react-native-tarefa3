import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "./src/pages/Home";
import Fotos from "./src/pages/Fotos";
import Cadastro from "./src/pages/Cadastro";
import Localizacao from "./src/pages/Localizacao";

const Menu = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Menu.Navigator>
                <Menu.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Página Inicial",
                        //headerStyle: {
                        //backgroundColor: "#333",
                        //},
                        headerTintColor: "#020617",
                    }}
                />

                <Menu.Screen
                    name="Fotos"
                    component={Fotos}
                    options={{
                        title: "Fotos",
                    }}
                />

                <Menu.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        title: "Cadastro",
                    }}
                />

                <Menu.Screen
                    name="Localização"
                    component={Localizacao}
                    options={{
                        title: "Localização",
                    }}
                />
            </Menu.Navigator>
        </NavigationContainer>
    );
}

import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
const bgImg = require("../../assets/discordlogbg.png");
const logoImg = require("../../assets/discordloglogo.png");

export function Screen() {
    return (
        <View style={styles.container}>
            <View style={styles.quad} />
            <View style={styles.quad2}>
                <Image source={logoImg} style={styles.iconImage} resizeMode="contain" />
            </View>
            <View style={styles.quad3}>
                <Image source={bgImg} style={styles.bgImage} resizeMode="cover" />
            </View>
            <View style={styles.quad4Container}>
                <View style={styles.quad4}>
                    <Text style={styles.quad4Text}>Bem-vindo (ou vinda) ao Discord</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.quad5Container} onPress={() => console.log("Vasco")}>
                <View style={styles.quad5}>
                    <Text style={styles.buttonText}>Registre-se</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.quad6} />
            <TouchableOpacity style={styles.quad7Container} onPress={() => console.log("Fluminense")}>
                <View style={styles.quad7}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.quad8} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C1B21",
    },
    quad: {
        backgroundColor: "#1C1B21",
        flex: 2.3,
    },
    quad2: {
        backgroundColor: "#1C1B21",
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center",
    },
    iconImage: {
        width: "220%",
        height: "220%",
    },
    quad3: {
        backgroundColor: "white",
        flex: 10.2,
        justifyContent: "center",
        alignItems: "center",
    },
    bgImage: {
        width: "100%",
        height: "100%",
    },
    quad4Container: {
        flex: 2,
    },
    quad4: {
        backgroundColor: "#1C1B21",
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    quad4Text: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 11,
    },
    quad5Container: {
        flex: 1.1,
        padding: 30,
        marginBottom: 0,
    },
    quad5: {
        backgroundColor: "#5864F4",
        flex: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    quad6: {
        backgroundColor: "#1C1B21",
        flex: 0.2,
        marginTop: -22,
    },
    quad7Container: {
        flex: 1.1,
        padding: 30,
        marginTop: -30,
    },
    quad7: {
        backgroundColor: "#363A43",
        flex: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    quad8: {
        backgroundColor: "#1C1B21",
        flex: 0.1,
    },
    buttonText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold"
    },
});

export default Screen;

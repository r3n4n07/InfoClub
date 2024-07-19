import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listaJogadoresConvocados: {
        marginVertical: 12,
        marginHorizontal: 18,
        alignItems: 'center',
    },
    escudoPais: {
        height: 26,
        width: 26,
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    imagemJogadoresConvocados: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'rgba(191, 201, 202, 0.5)',
    },
    nomeJogadoresConvocados: {
        fontSize: 14,
        color: '#fff'
    },
})
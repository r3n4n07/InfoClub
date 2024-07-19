import { StyleSheet, Dimensions} from "react-native";

// Captura o tamanho da tela do celular
const { height } = Dimensions.get('window'); 

export const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#1b86ee'
    },
    containerSuperior: {
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        backgroundColor: '#001B48',
        height: '50%',
        borderWidth: 2,
        borderColor: '#FFD700',
        borderTopWidth: 0
    },
    containerBarraDePesquisa: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 12,
        marginBottom: 0
    },
    barraDePesquisa: {
        width: '80%',
        borderRadius: 6
    },
    containerEscudoEClassificacao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 0,
        paddingVertical: 6
    },
    containerEscudo: {
        alignItems: 'center',
        marginHorizontal: 6
    },
    escudo: {
        width: 65,
        height: 65,
        marginHorizontal: 6,
        padding: 6
    },
    scrollNomeClube: {
        width: 90,
        height: 40
    },
    nomeClube: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    },
    scrollClassificacao: {
        borderWidth: 0,
        borderRightWidth: 0,
        backgroundColor: 'rgba(191, 201, 202, 0.4)',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    containerClassificacao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textosClassificacao: {
        minWidth: 20,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 3,
        color: '#fff'
    },
    resultadosUltimosJogos: {
        flexDirection: 'row',
        height: '50%'
    },
    containerProximo: {
        marginVertical: 6
    },
    containerTituloProximoJogo: {
        marginBottom: 12,
        marginLeft: 12
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    },
    containerInformacoesProximoJogo: {
        backgroundColor: 'rgba(191, 201, 202, 0.9)',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '80%',
        height: height * 0.20,
        borderRadius: 12,
        padding: 12
    },
    containerSkeletonInformacoesProximoJogo: {
        backgroundColor: 'rgba(191, 201, 202, 0.9)',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 12
    },
    containerEscudosProximoJogo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    containerEscudoProximoJogo: {
        alignItems: 'center',
        width: '33.33%',
    },
    escudoProximoJogo: {
        width: 80,
        height: 80
    },
    nomeClubeProximoJogo: {
        color: '#000',
        fontSize: 14,
        fontWeight: '900'
    },
    xInformacoesProximoJogo: {
        fontSize: 50,
        color: '#000'
    },
    containerDataProximoJogo: {
        alignItems: 'center'
    },
    dataProximoJogo: {
        fontWeight: '700',
        fontSize: 16,
        color: '#000'
    },
    containerInferior: {
        backgroundColor: '#001B48',
        height: '50%',
        borderTopLeftRadius: 180,
        borderTopRightRadius: 180,
        borderWidth: 2,
        borderColor: '#FFD700',
        borderBottomWidth: 0,
        zIndex: -1
    },
    containerJogadoresConvocados: {
        marginVertical: 16
    },
    containerTituloJogadoresConvocados: {
        marginBottom: 6,
        marginTop: 6,
        alignItems: 'center'
    },
    containerListaDeJogadoresConvocados: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: "center",
        width: '75%',
        height: 120
    },
    containerTituloUltimoJogo: {
        marginBottom: 20,
        marginLeft: 12
    },
    containerImagemVideoUltimoJogo: {
        height: 150,
        width: 250,
        alignSelf: 'center',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: 'rgba(191, 201, 202, 0.5)',
        backgroundColor: 'rgba(191, 201, 202, 0.5)'
    },
    imagemVideoUltimoJogo: {
        borderRadius: 12,
        width: '100%',
        height: "100%"
    }
});

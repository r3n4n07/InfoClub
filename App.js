import axios from 'axios';
import { useRef, useState } from 'react';
import { Text, View, StatusBar, ScrollView, FlatList, Image, Animated, Easing, TouchableOpacity, Alert, Linking, Dimensions } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// Componentes
import ListaVaziaJogadoresConvocados from './src/componentes/listaVaziaJogadoresConvocados';
import ListaJogadoresConvocados from './src/componentes/ListaJogadoresConvocados';

// Styles
import { styles } from './styles';

// Captura o tamanho da tela do celular
const { height } = Dimensions.get('window'); 


export default function App() {

  const animacaoBotao = useRef(new Animated.Value(0)).current;
  const [carregando, setCarregando] = useState(false);
  const [clube, setClube] = useState('');
  const [dados, setDados] = useState({
    JogadoresConvocados: [],
    capaVideoUltimoJogo: "https://",
    infoProximoJogo: ["?", "?"],
    derrotas: "?",
    empates: "?",
    escudoClube: "https://cdn-icons-png.flaticon.com/128/15709/15709995.png",
    escudoClubeCasa: "https://cdn-icons-png.flaticon.com/128/15709/15709995.png",
    escudoClubeVisitante: "https://cdn-icons-png.flaticon.com/128/15709/15709995.png",
    gols: "?:?",
    jogos: "?",
    nomeClube: "?",
    nomeTimeCasa: "?",
    nomeTimeVisitante: "? ",
    pontos: "?",
    posicao: "?",
    linkVideoUltimoJogo: "",
    vitorias: "?",
    ultimosJogos: [
      "?",
      "?",
      "?",
      "?",
      "?"
    ]
  });

  // Define o estilo de animação para o botão, aplicando uma rotação de 0 a 360 graus
  const estiloAnimacaoBotao = {
    transform: [
      {
        rotate: animacaoBotao.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
        }),
      }
    ]
  }

  // Inicia a animação do botão, configurando uma rotação contínua de 0 a 360 graus
  const iniciarAnimacao = () => {
    Animated.loop(
      Animated.timing(animacaoBotao, {
        toValue: 360,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }

  // Para a animação do botão, redefinindo o valor da rotação para 0 graus
  const pararAnimacao = () => {
    animacaoBotao.setValue(0);
  }

  // Função que faz a requisição para obter as informações do clube
  const buscarInfoClubes = async () => {
    try {
      if (clube.trim() !== "") {
        iniciarAnimacao();
        setCarregando(true);
        const resposta = await axios.get(`http://192.168.0.10:5010/WebScraping/${clube}`, { timeout: 60000 });
        if (resposta.data.status === 200) {
          setDados({ ...resposta.data.dados });
        } else {
          Alert.alert("Atenção", resposta.data.mensagem, [{ text: "Ok" }]);
        }
      } else {
        Alert.alert("Atenção", "Preencha o campo de pesquisa.", [{ text: "Ok" }]);
      }
    } catch (error) {
      Alert.alert("Error", error.message, [{ text: 'Ok' }])
    } finally {
      pararAnimacao();
      setCarregando(false);
    }
  }

  // Abre o vídeo do último jogo
  const videoUltimoJogo = () => {
    if (dados.linkVideoUltimoJogo) {
      Linking.openURL(dados.linkVideoUltimoJogo)
    } else {
      Alert.alert("Atenção", "O vídeo não está disponível", [{ text: "Ok" }])
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={"rgba(0, 27, 72, 0.6)"} />
        <View style={styles.containerSuperior}>
          <View style={styles.containerBarraDePesquisa}>
            <Searchbar placeholder='Pesquisar' style={styles.barraDePesquisa} onChangeText={setClube} />
            <Animated.View style={estiloAnimacaoBotao}>
              <IconButton icon={'soccer'} size={66} iconColor='#FFD700' onPress={() => { buscarInfoClubes() }} />
            </Animated.View>
          </View>
          <View style={styles.containerEscudoEClassificacao}>
            {!carregando ?
              <>
                <View style={styles.containerEscudo}>
                  <Image source={{ uri: dados.escudoClube }} style={styles.escudo} />
                  <ScrollView style={styles.scrollNomeClube}>
                    <Text style={styles.nomeClube}>{dados.nomeClube}</Text>
                  </ScrollView>
                </View>
                <ScrollView style={styles.scrollClassificacao}>
                  <View style={styles.containerClassificacao}>
                    <View>
                      <Text style={styles.textosClassificacao}>Pos</Text>
                      <Text style={styles.textosClassificacao}>{dados.posicao}</Text>
                    </View>
                    <View>
                      <Text style={styles.textosClassificacao}>Pts</Text>
                      <Text style={styles.textosClassificacao}>{dados.pontos}</Text>
                    </View>
                    <View>
                      <Text style={styles.textosClassificacao}>J</Text>
                      <Text style={styles.textosClassificacao}>{dados.jogos}</Text>
                    </View>
                    <View>
                      <Text style={styles.textosClassificacao}>V</Text>
                      <Text style={styles.textosClassificacao}>{dados.vitorias}</Text>
                    </View>
                    <View>
                      <Text style={styles.textosClassificacao}>E</Text>
                      <Text style={styles.textosClassificacao}>{dados.empates}</Text>
                    </View>
                    <View>
                      <Text style={styles.textosClassificacao}>D</Text>
                      <Text style={styles.textosClassificacao}>{dados.derrotas}</Text>
                    </View>
                    <View>
                      <Text style={styles.textosClassificacao}>Gols</Text>
                      <Text style={styles.textosClassificacao}>{dados.gols}</Text>
                    </View>
                    <View>
                      <Text style={styles.textosClassificacao}>Últimos jogos</Text>
                      <View style={styles.resultadosUltimosJogos}>
                        {
                          dados.ultimosJogos.map((item, index) => (
                            <Text key={index} style={styles.textosClassificacao}>{item}</Text>
                          ))
                        }
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </>
              :
              <>
                <View style={styles.containerEscudo}>
                  <SkeletonPlaceholder borderRadius={4} highlightColor='#001B48' backgroundColor='#BFC9CA' speed={900}>
                    <SkeletonPlaceholder.Item width={80} height={80} borderRadius={70} />
                  </SkeletonPlaceholder>
                  <ScrollView style={styles.scrollNomeClube}>
                    <SkeletonPlaceholder borderRadius={4} highlightColor='#001B48' backgroundColor='#BFC9CA' speed={900}>
                      <SkeletonPlaceholder.Item width={90} height={20} borderRadius={4} marginTop={6} />
                    </SkeletonPlaceholder>
                  </ScrollView>
                </View>
                <ScrollView style={styles.scrollClassificacao}>
                  <SkeletonPlaceholder borderRadius={4} highlightColor='#001B48' backgroundColor='#BFC9CA' speed={900}>
                    <SkeletonPlaceholder.Item width={'100%'} height={50} borderRadius={4} />
                  </SkeletonPlaceholder>
                </ScrollView>
              </>
            }
          </View>
          <View style={styles.containerProximo}>
            <View style={styles.containerTituloProximoJogo}>
              <Text style={styles.titulo}>PRÓXIMO JOGO</Text>
            </View>
            {!carregando ?
              <View style={styles.containerInformacoesProximoJogo}>
                <View style={styles.containerEscudosProximoJogo}>
                  <View style={styles.containerEscudoProximoJogo}>
                    <Image source={{ uri: dados.escudoClubeCasa }} resizeMode='cover' style={styles.escudoProximoJogo} />
                    <Text style={styles.nomeClubeProximoJogo} numberOfLines={1}>{dados.nomeTimeCasa}</Text>
                  </View>
                  <Text style={styles.xInformacoesProximoJogo}>
                    X
                  </Text>
                  <View style={styles.containerEscudoProximoJogo}>
                    <Image source={{ uri: dados.escudoClubeVisitante }} resizeMode='cover' style={styles.escudoProximoJogo} />
                    <Text style={styles.nomeClubeProximoJogo} numberOfLines={1}>{dados.nomeTimeVisitante}</Text>
                  </View>
                </View>
                <View style={styles.containerDataProximoJogo}>
                  <Text style={styles.dataProximoJogo}>{dados.infoProximoJogo[0] /* Data */}</Text>
                  <Text style={styles.dataProximoJogo}>{dados.infoProximoJogo[1] /* Horário */}</Text>
                </View>
              </View>
              :
              <View style={styles.containerSkeletonInformacoesProximoJogo}>
                <SkeletonPlaceholder borderRadius={4} highlightColor='#001B48' backgroundColor='#BFC9CA' speed={900}>
                  <SkeletonPlaceholder.Item width={'100%'} height={height * 0.18} borderRadius={4} />
                </SkeletonPlaceholder>
              </View>
            }
          </View>
        </View>
        <View style={styles.containerInferior}>
          <View style={styles.containerJogadoresConvocados}>
            <View style={styles.containerTituloJogadoresConvocados}>
              <Text style={styles.titulo}>JOGADORES CONVOCADOS</Text>
            </View>
            <View style={styles.containerListaDeJogadoresConvocados}>
              {!carregando ?
                <FlatList
                  horizontal
                  data={dados.JogadoresConvocados}
                  renderItem={({ item }) => (<ListaJogadoresConvocados {...item} />)}
                  ListEmptyComponent={<ListaVaziaJogadoresConvocados />}
                />
                :
                <SkeletonPlaceholder borderRadius={4} highlightColor='#001B48' backgroundColor='#BFC9CA' speed={900}>
                  <SkeletonPlaceholder.Item width={100} height={100} borderRadius={50} />
                </SkeletonPlaceholder>
              }
            </View>
          </View>
          <View>
            <View style={styles.containerTituloUltimoJogo}>
              <Text style={styles.titulo}>ÚLTIMO JOGO</Text>
            </View>
            <TouchableOpacity style={styles.containerImagemVideoUltimoJogo} onPress={() => { videoUltimoJogo() }}>
              {!carregando ?
                <Image source={{ uri: dados.capaVideoUltimoJogo }} resizeMode='cover' style={styles.imagemVideoUltimoJogo} />
                :
                <SkeletonPlaceholder borderRadius={10} highlightColor='#001B48' backgroundColor='#BFC9CA' speed={900} >
                  <SkeletonPlaceholder.Item width={'100%'} height={"100%"} borderRadius={10} />
                </SkeletonPlaceholder>
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}




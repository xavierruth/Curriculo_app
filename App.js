import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons';
// Página Inicial
const PaginaInicial = () => {

    const abrirLinkedin = () => {
      Linking.openURL('https://www.linkedin.com/in/ruthxavier/');
    };
  
    const abrirGithub = () => {
      Linking.openURL('https://github.com/xavierruth');
    };
  
     const abrirBehance = () => {
        Linking.openURL('https://www.behance.net/xavierruth'); 
    };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <Image
           source={{uri:'https://i.ibb.co/VMzRjPR/Imagem-do-Whats-App-de-2024-04-01-s-21-06-58-630388a7.jpg'}}
           style={styles.image} />
        <View style={styles.box}>
          <Text style={styles.titulo}>Olá, eu sou a Ruth Xavier!</Text>
          <Text style={styles.texto}>Sou UI/UX Designer e também curto muito o Front-end!</Text>
          <Text style={styles.texto}>Quer saber mais sobre mim? Te convido a explorar esse app ♥</Text>
          <Text style={styles.titulo}>Vamos nos conectar!</Text>

          <TouchableOpacity onPress={abrirBehance} style={styles.botao}>
            <FontAwesome name="behance" size={24} color="#950877" />
            <Text style={styles.botaoTexto}>Behance</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={abrirGithub} style={styles.botao}>
            <FontAwesome name="github" size={24} color="#950877" />
            <Text style={styles.botaoTexto}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={abrirLinkedin} style={styles.botao}>
            <FontAwesome name="linkedin" size={24} color="#950877" />
            <Text style={styles.botaoTexto}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Página Sobre Mim
const Pagina1 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Sobre Mim</Text>
          <Text style={styles.texto}>
            Eu sou a Ruth Marianne S. B. Xavier, mas você pode me chamar apenas por Marianne ou Mari. Tenho 26 anos e amo cozinhar, Sailor Moon, ouvir música de todos os gêneros e jogos de simulação de vida. Adoro criar, desenhar e posso dizer que sou entusiasta por tecnologia e design.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

//Página Formação e Cursos
const Pagina2 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Formação</Text>
          <Text style={styles.texto}>
            Graduanda em Pedagogia na UFPE e em Análise e desenvolvimento de sistemas na Faculdade SENAC Pernambuco. Tenho por objetivo desenvolver projetos integrando tecnologia e educação.
          </Text>
          <Text style={styles.titulo}>Cursos</Text>
          <Text style={styles.texto}>
            Tenho interesses em diversas áreas, seja em gestão, ui/ux e até mesmo em front-end. Portanto, ao longo do tempo fiz alguns cursos e selecionei para adicionar aqui os mais recentes!
          </Text>
          <Text style={styles.texto}>Fundamentos de Gestão de Backlog</Text>
          <Text style={styles.texto}>Formação Design System</Text>
          <Text style={styles.texto}>Gestão Ágil: Explorando conceitos da agilidade</Text>
          <Text style={styles.texto}>Product Management: agilize o desenvolvimento de produtos</Text>
          <Text style={styles.texto}>Tipografia: conceitos e prática</Text>
          <Text style={styles.texto}>Cores no design: teoria e prática</Text>
          <Text style={styles.texto}>Fundamentos do design da experiência do usuário (UX)</Text>
          <Text style={styles.texto}>Iniciar o processo de design de UX: criar empatia, definir e idealizar</Text>
          <Text style={styles.texto}>Criar wireframes e protótipos de baixa fidelidade</Text>
          <Text style={styles.texto}>Conduzir pesquisas de UX e testar os primeiros conceitos</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Pagina3 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Projetos</Text>
          <Text style={styles.texto}>Apé Startup</Text>
          <Text style={styles.texto}>RideShare</Text>
          <Text style={styles.texto}>DetetiveZ</Text>
          <Text style={styles.texto}>Conteúdo da Página 3</Text>
          <Text style={styles.titulo}>Reconhecimentos e prêmios</Text>
          <Text style={styles.texto}>1ª lugar - Squad RideShare TADS025</Text>
          <Text style={styles.texto}>Finalista Desafio de Turismo Gastronômico - Turistech Hub & Embratur LAB</Text>
          <Text style={styles.texto}>3º lugar - Early Stage da incubadora i.d.e.i.a.S</Text>
          <Text style={styles.texto}>Destaque na Residência Demoday Rise Up do Porto Digital</Text>
          <Text style={styles.texto}>3º lugar - Startup Way da incubadora i.d.e.i.a.S</Text>
          <Text style={styles.texto}>Finalista - Early Stage</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Pagina4 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Habilidades</Text>
          <Text style={styles.texto}>Habilidades que adquiri ao longo do curso de Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.titulo}>Hard Skills</Text>
          <Text style={styles.texto}>HTML5</Text>
          <Text style={styles.texto}>CSS3</Text>
          <Text style={styles.texto}>JavaScript</Text>
          <Text style={styles.texto}>MySQL</Text>
          <Text style={styles.texto}>Linguagem C</Text>
          <Text style={styles.texto}>Figma</Text>
          <Text style={styles.texto}>Adobe Photoshop</Text>
          <Text style={styles.texto}>Adobe Premier</Text>
          <Text style={styles.texto}>Adobe Illustrator</Text>
          <Text style={styles.texto}>Canva</Text>
          <Text style={styles.texto}>Metodologia Scrum</Text>
          <Text style={styles.texto}>Jira</Text>
          <Text style={styles.titulo}>Soft Skills</Text>
          <Text style={styles.texto}>Trabalho em equipe</Text>
          <Text style={styles.texto}>Comunicação</Text>
          <Text style={styles.texto}>Organização</Text>
          <Text style={styles.texto}>Criatividade</Text>
          <Text style={styles.texto}>Liderança</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      case 'Página 4':
        return <Pagina4 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Currículo: Ruth Xavier</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <FontAwesome name="bars" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Sobre Mim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Formação e Cursos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Projetos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 4')}>
            <Text style={styles.menuItemText}>Habilidades</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE7F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B674AB',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    margin: 10,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 15,
  },
  menu: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FDE7F5',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#DB7DD9',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: '90%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#95277c',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#37002b',
    marginBottom: 10,
  },
  scrollView: {
    width: '100%',
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBD0EF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  image:{
    width:150,
    height:150,
    borderRadius:30,
    borderColor: '#fff',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  const meals = [
    { id: '1', time: '20:00', title: 'X-tudo', insideDiet: false },
    { id: '2', time: '16:00', title: 'Whey protein com leite', insideDiet: true },
    { id: '3', time: '12:30', title: 'Salada cesar com frango', insideDiet: true },
    { id: '4', time: '08:00', title: 'Vitamina de banana com aveia', insideDiet: true },
  ];

  return (
    <View style={styles.container}>
      {/* Texto "MyFitness" fixo no topo, à esquerda */}
      <View style={styles.titleText}>
        <Text style={styles.titleTextStyle}>MyFitness</Text>
      </View>

      {/* Ícone do Usuário fixo no topo */}
      <View style={styles.userIcon}>
        <Text style={styles.userIconText}>A</Text>
      </View>

      {/* Container principal */}
      <View style={styles.mainContent}>
        {/* Card com informações das refeições */}
        <View style={styles.header}>
          <Text style={styles.title}>90,86%</Text>
          <Text style={styles.subtitle}>das refeições dentro da dieta</Text>
          <TouchableOpacity
            style={styles.statsButton}
            onPress={() => router.push('/StaticScreem')} // Rota corrigida
          >
            <Text style={styles.statsButtonText}>➔</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de nova refeição */}
        <TouchableOpacity style={styles.newMealButton}>
          <Text style={styles.newMealButtonText}>+ Nova refeição</Text>
        </TouchableOpacity>

        {/* Lista de refeições */}
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.mealItem}>
              <Text style={styles.mealTime}>{item.time}</Text>
              <Text style={styles.mealTitle}>{item.title}</Text>
              <View
                style={[
                  styles.mealIndicator,
                  { backgroundColor: item.insideDiet ? '#32B768' : '#F75A68' },
                ]}
              />
            </View>
          )}
          ListHeaderComponent={<Text style={styles.date}>12.08.22</Text>}
          style={styles.mealList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  mainContent: {
    flex: 1,
    padding: 16,
    paddingTop: 80, // Aumentando o padding para mover o card para baixo
  },
  titleText: {
    position: 'absolute',
    top: 30, // Mesma altura do ícone
    left: 16,
    zIndex: 10, // Garante que o texto fique acima de tudo
  },
  titleTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B873F',
  },
  userIcon: {
    position: 'absolute',
    top: 30, // Mesma altura do texto
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1B873F',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Garante que fique acima de tudo
  },
  userIconText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#E5F6EB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B873F',
  },
  subtitle: {
    fontSize: 14,
    color: '#52665A',
    marginTop: 4,
  },
  statsButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  statsButtonText: {
    fontSize: 20,
    color: '#1B873F',
  },
  newMealButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  newMealButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  mealList: {
    flex: 1,
  },
  date: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
  },
  mealTime: {
    fontSize: 14,
    color: '#333',
    marginRight: 16,
  },
  mealTitle: {
    flex: 1,
    fontSize: 16,
  },
  mealIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});

export default HomeScreen;














import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const StatisticsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Seta de retorno */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>90,86%</Text>
        <Text style={styles.subtitle}>das refeições dentro da dieta</Text>
      </View>

      {/* Texto "Seus dados diários" */}
      <Text style={styles.dailyDataText}>Seus dados diários</Text>

      {/* Estatísticas */}
      <View style={styles.statisticsContainer}>
        {/* Primeira linha - Cartão 1 */}
        <View style={styles.statBoxFullWidth}>
          <Text style={styles.statNumber}>22</Text>
          <Text style={styles.statLabel}>
            melhor sequência de pratos dentro da dieta
          </Text>
        </View>

        {/* Segunda linha - Cartão 2 */}
        <View style={styles.statBoxFullWidth}>
          <Text style={styles.statNumber}>109</Text>
          <Text style={styles.statLabel}>refeições registradas</Text>
        </View>

        {/* Terceira linha - Dois cartões menores */}
        <View style={styles.row}>
          <View style={[styles.statBox, styles.halfBox, { backgroundColor: '#E5F6EB' }]}>
            <Text style={styles.statNumber}>99</Text>
            <Text style={styles.statLabel}>refeições dentro da dieta</Text>
          </View>
          <View style={[styles.statBox, styles.halfBox, { backgroundColor: '#FDE8E4' }]}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>refeições fora da dieta</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#E5F6EB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    marginTop: 48, // Espaço para a seta
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B873F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#52665A',
    textAlign: 'center',
    marginTop: 4,
  },
  dailyDataText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  statisticsContainer: {
    flex: 1,
  },
  statBoxFullWidth: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16, // Espaçamento entre os cartões
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statBox: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfBox: {
    flex: 1,
    marginHorizontal: 4, // Espaço entre os dois cartões
    aspectRatio: 1, // Garante formato quadrado
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default StatisticsScreen;










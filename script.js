import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => { /* Add back navigation logic here */ }}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filter By:</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => handleFilter('A to Z')} style={[styles.option, filter === 'A to Z' && styles.activeOption]}>
          <Text style={styles.optionText}>A to Z</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilter('Z to A')} style={[styles.option, filter === 'Z to A' && styles.activeOption]}>
          <Text style={styles.optionText}>Z to A</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilter('Role')} style={[styles.option, filter === 'Role' && styles.activeOption]}>
          <Text style={styles.optionText}>Role</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: '#444',
  },
  backText: {
    color: '#ffb700',
    fontSize: 18,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  options: {
    width: '80%',
  },
  option: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  activeOption: {
    backgroundColor: '#444',
  },
});

export default Filter;
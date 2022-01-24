import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  FlatList,
  Keyboard,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/Card';

type SkillData = {
  id: string;
  name: string;
};

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<Array<SkillData>>([]);
  const [greetting, setGreettings] = useState('');

  function handleNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    if (newSkill.length > 0) {
      setMySkills(prevState => [...prevState, data]);
      setNewSkill('');
    }

    Keyboard.dismiss();
  }

  function handleRemoveSkill(id: string) {
    setMySkills(prevState => prevState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreettings('Good morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreettings('Good afternoon!');
    } else {
      setGreettings('Good night!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="welcome">
        Welcome!{' '}
      </Text>
      <Text style={styles.greetting}>{greetting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={setNewSkill}
        testID="input-new"
      />
      <Button
        onPress={handleNewSkill}
        activeOpacity={0.7}
        title="Add"
        testID="button-add"
      />
      <Text style={[styles.title, styles.subtitle]}>My Skills</Text>
      {mySkills[0]?.id && (
        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          testID="flat-list-skills"
          renderItem={({item}) => (
            <SkillCard
              title={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'ios' ? 70 : 30,
    backgroundColor: '#121015',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  greetting: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 32,
    borderRadius: 7,
  },
  subtitle: {marginTop: 50, marginBottom: 30},
});

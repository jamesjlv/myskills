import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  title: string;
}

export function SkillCard({title, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{title}</Text>
    </TouchableOpacity>
  );
}

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button({ title, onPress, variant = 'primary', className = '' }) {
	const base = 'px-4 py-3 rounded-xl items-center justify-center';
	const variants = {
		primary: 'bg-primary',
		secondary: 'bg-card',
		ghost: 'bg-transparent',
	};
	return (
		<TouchableOpacity onPress={onPress} className={`${base} ${variants[variant] || ''} ${className}`}>
			<Text className="text-white font-semibold">{title}</Text>
		</TouchableOpacity>
	);
}
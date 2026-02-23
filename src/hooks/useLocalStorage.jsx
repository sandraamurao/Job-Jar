import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error("Error loading from localStorage: ", error);
			return initialValue;
		}
	});

	// Save to localStorage whenever value changes
	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error("Error saving to localStorage: ", error);
		}
	}, [key, value]);

	return [value, setValue];
}

export default useLocalStorage;

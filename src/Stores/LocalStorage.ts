export const saveToLocalStorage = (key: string, value: string): void => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

export const getFromLocalStorage = (key: string): string | null => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error('Error retrieving from localStorage:', error);
        return null;
    }
}

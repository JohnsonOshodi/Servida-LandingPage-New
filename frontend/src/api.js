const API_BASE_URL = process.env.REACT_APP_API_URL;

// Fetch cleaners
export const fetchCleaners = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cleaners`);
        if (!response.ok) throw new Error("Failed to fetch cleaners");
        return await response.json();
    } catch (error) {
        console.error("Error fetching cleaners:", error);
        return [];
    }
};

// Example of another API request (e.g., getting a single cleaner)
export const fetchCleanerById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cleaners/${id}`);
        if (!response.ok) throw new Error("Failed to fetch cleaner");
        return await response.json();
    } catch (error) {
        console.error("Error fetching cleaner:", error);
        return null;
    }
};

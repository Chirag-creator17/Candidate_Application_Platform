const API_URL = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

export const fetchJobResults = async ({limit, offset}) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": limit,
        "offset": offset
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching job results:', error);
    }
};
const API_URL = 'http://localhost:8000';

export async function login(email:string, password:string): Promise<any> {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
}
export async function register(name:string, email:string, password:string): Promise<any> {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password }),
    });

    if (!response.ok) {
        throw new Error('Resgister failed');
    }

    return response.json();
}

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getAll =  async <T,>(endpoint:string):Promise<T> => {
    const response = await fetch(baseUrl + endpoint)
        .then((response) => response.json() );
    return response as T
}
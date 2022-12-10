const api_endpoint_prod = "https://kirjat.fly.dev";
const api_endpoint_dev = "http://localhost:8080";

export const api_endpoint = false ? api_endpoint_dev : api_endpoint_prod;

export type Meta = {
    endpoints: string[],
    stats: {
        pages_cached: number
    },
    app_version: string,
    app_license: string
};
export async function get_meta(): Promise<Meta> {
    let fetch_url = `${api_endpoint}`;
    try {
        let result = await fetch(fetch_url);
        let json = await result.json();
        return json;
    }
    catch(err) {
        console.error(err);
        throw error(500, err + "");
    }
}
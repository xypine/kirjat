import type {PageServerLoad} from "./$types";
import { error } from '@sveltejs/kit';
import { dev } from "$app/environment";
import { api_endpoint } from "$lib/api";

export async function load({ url }): Promise<PageServerLoad> {
    let names: string = url.searchParams.get('names');
    console.log("names:", names);
    let fetch_url = `${api_endpoint}/api/v3/search?names=${names}`;
    console.log("requesting", fetch_url, "...");
    try {
        let result = await fetch(fetch_url);
        let json = await result.json();
        let resorted = names.split(",").map((name)=>{
            name = name.trim();
            return [name, json[name]];
        });
        return { result: resorted };
    }
    catch(err) {
        console.error(err);
        throw error(500, err + "");
    }
}
import { get_meta } from "$lib/api";
import type { LayoutServerLoad } from "./$types";


export async function load({ url }): Promise<LayoutServerLoad> {
    let meta;
    try {
        meta = await get_meta();
    }
    catch(err) {
        console.warn("error fetching server metadata:", err);
    }
    return {meta};
}
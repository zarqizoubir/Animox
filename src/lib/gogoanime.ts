import { ResponseType, fetch } from '@tauri-apps/api/http';

// const client = await getClient();

class Gogoanime {
    base: string = "https://api.consumet.org/anime/gogoanime"

    async recent_episodes(page = 1) {
        const data = (await fetch(`${this.base}/recent-episodes?page=${page}`, {
            method: "GET",
            responseType: ResponseType.JSON
        })).data
        return data;
    }

    async top_aired() {
        const data = (await fetch(`${this.base}/top-airing`, {
            method: "GET",
            responseType: ResponseType.JSON
        })).data
        return data;
    }

    async anime_info(id: string) {
        const data = (await fetch(`${this.base}/info/${id}`, {
            method: "GET",
            responseType: ResponseType.JSON
        })).data
        return data;
    }

    async randomCh() {
        const url = "https://api.consumet.org/manga/mangadex/read/5f7891b4-f048-4516-9c75-7bcd6dbd1451";
        const data = (await fetch(url, {
            method: "GET",
            responseType: ResponseType.JSON
        })).data
        return data;
    }
}

export const gogoanime = new Gogoanime()
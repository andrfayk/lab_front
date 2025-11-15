import type { Photo } from "~/types/photo";

export default {
    async getPhotos(): Promise<Photo[]> {
        return $fetch('http://localhost:8000/api/photos')
    }
}
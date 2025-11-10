import { EntityManager } from "typeorm";
import { Song } from "../entities/Song";



export class SongRepository {

    private manager: EntityManager

    constructor(manager:EntityManager){
        this.manager = manager
    }

    create = (data: Partial<Song>): Song => {
        return this.manager.create(Song,data)
    }

    save = async (song: Song):Promise<Song> => {
        return await this.manager.save(Song,song)
    }

    getUser = async (songId:string): Promise<Song | null> =>{
        return await this.manager.findOne(Song,{
            where: {
                song_id: songId
            }
        })
    }

    getSongByName = async (name:string, artist:string): Promise <Song | null> => {
        return await this.manager.findOne (Song, {
            where: {
                name,
                artist
    }})
    }  



}
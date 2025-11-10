import {Column, Entity, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity('song')
export class Song {

    @PrimaryColumn({nullable: false})
    song_id: string

    @Column({nullable:false})
    name:string

    @Column ({nullable:false})
    artist: string

    @Column({nullable: false})
    album:string

    constructor(
        song_id:string, name:string, artist:string, album:string
    ){
        this.song_id = randomUUID()
        this.name = name
        this.artist = artist
        this.album = album
        
    }
}
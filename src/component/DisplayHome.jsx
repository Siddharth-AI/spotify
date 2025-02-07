import { albumsData, songsData } from "../assets/assets";
import { AlbumItem } from "./AlbumItem";
import { Navbar } from "./Navbar";
import { SongItem } from "./SongItem";

export const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today&#39;s biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

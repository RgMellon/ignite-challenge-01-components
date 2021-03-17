import { useState } from "react";
import { Button } from "./Button";

import { GenreResponseProps } from "../App";

type SideBarProps = {
  genres: GenreResponseProps[];
  handleSelect: (id: number) => void;
  selectedGenreId: number;
};

export function SideBar({
  genres,
  handleSelect,
  selectedGenreId,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSelect(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

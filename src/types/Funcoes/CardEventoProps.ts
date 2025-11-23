import type { CardEventoType } from "../CardEvento";

export type CardEventoProps = {
  evento: CardEventoType;
  isInscrito: boolean;
  onInscrever: (id_evento: number) => void; 
  onRemover: (id_evento: number) => void;   
};

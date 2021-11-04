import { Category } from "./category";

export interface Product {
  id : number;
  date_creation : Date;
  date_modif : Date;
  nom: string;
  qt: number;
  disponible : boolean;
  categories: Category;
}

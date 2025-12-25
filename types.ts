
export type Category = 
  | 'sofas'
  | 'chairs' 
  | 'coffee_table' 
  | 'conference_table' 
  | 'high_table' 
  | 'cafe_table' 
  | 'bar_stools';

export type SubCategory = 'lounge' | 'cafe' | 'none';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: Category;
  subCategory?: SubCategory;
  image: string;
  features?: string[];
}

export interface Project {
  name: string;
  description: string;
  category: 'Commercial' | 'Residential' | 'Hospitality' | 'Collections';
  image: string;
  client?: string;
}

export interface NavItem {
  label: string;
  id: 'home' | 'products' | 'gallery' | 'about' | 'contact';
}

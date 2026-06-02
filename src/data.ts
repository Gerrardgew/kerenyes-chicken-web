import { LayoutGrid, Flame, Beer, Coffee, Star } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'ayam' | 'paket' | 'minuman' | 'snack';
  image: string;
  isBestSeller?: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'Semua', icon: LayoutGrid },
  { id: 'ayam', name: 'Ayam Goreng', icon: Flame },
  { id: 'paket', name: 'Paket Hemat', icon: Star },
  { id: 'minuman', name: 'Minuman', icon: Coffee },
  { id: 'snack', name: 'Snack', icon: Beer },
];

export const MENU_DATA: MenuItem[] = [
  {
    id: '1',
    name: 'KerenYES Original Crispy',
    description: 'Ayam goreng original dengan bumbu rahasia yang meresap sampai ke tulang.',
    price: 18000,
    category: 'ayam',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Paket KerenYES 1',
    description: 'Nasi + Ayam Original + Es Teh Manis.',
    price: 25000,
    category: 'paket',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'KerenYES Fire Wing',
    description: 'Sayap ayam krispi dengan balutan saus pedas level 1-5.',
    price: 22000,
    category: 'ayam',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    name: 'Tahu / Tempe Geprek',
    description: 'Tahu atau tempe goreng dengan sambal bawang pedas.',
    price: 8000,
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '5',
    name: 'Es Teh Manis Jumbo',
    description: 'Kesegaran teh pilihan dengan ukuran jumbo.',
    price: 6000,
    category: 'minuman',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
  },
];

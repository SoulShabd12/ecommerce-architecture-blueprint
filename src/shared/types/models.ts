// Product Model
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

// User Model
export interface User {
  id: string;
  email: string;
  role: 'customer' | 'admin';
}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



interface ProductType { 
    id: number;
    uploaded_images: [
        {
            id: number;
            image: string;
            product: number;
        }
    ];
    user: {
        id: number;
        username: string;
        email: string;
        
    };
    title: string;
    description: string;
    price: string;
    currency: string;
    itemVisibility: string;
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://web-production-a55a3.up.railway.app/api/',
        // prepareHeaders(headers) {
        //     headers.set('Authorization', `Bearer ${localStorage.getItem('token') || ''}`);
        //     return headers;
        // }
    }),
    endpoints(builder) { 
        return {
            fetchProducts: builder.query<ProductType[], void>({
                query() {
                    return 'products/';
                }
            }),
            fetchProduct: builder.query<ProductType, number>({
                query(id) {
                    return `products/${id}`;
                }
            }),
        }
    }
});

export const { useFetchProductsQuery,useFetchProductQuery } = productsApi;
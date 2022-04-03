export type Product = {
    id: string
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
    quantity: number;
    disable: boolean;
    rating: { rate: number, count: number }
}

export type SearchProp = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type themeChange = {
    theme: any

}
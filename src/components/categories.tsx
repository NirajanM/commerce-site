import Card from "./card";


interface ICategoriesProps {
}
const categories = [
    {
        route: '/category/smartphones',
        title: "smartphones",
        src: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    },
    {
        route: '/category/laptops',
        title: "laptops",
        src: "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
    },
    {
        route: '/category/fragrances',
        title: "fragrances",
        src: "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
    },
    {
        route: '/category/skincare',
        title: "skincare",
        src: "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
    },
    {
        route: '/category/groceries',
        title: "groceries",
        src: "https://i.dummyjson.com/data/products/22/thumbnail.jpg"
    },
    {
        route: '/category/home-decoration',
        title: "home-decoration",
        src: "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
    },
    {
        route: '/category/furniture',
        title: "furniture",
        src: "https://i.dummyjson.com/data/products/31/thumbnail.jpg"
    },
    {
        route: '/category/tops',
        title: "tops",
        src: "https://i.dummyjson.com/data/products/36/thumbnail.jpg"
    },
    {
        route: '/category/womens-dresses',
        title: "womens-dresses",
        src: "https://i.dummyjson.com/data/products/44/thumbnail.jpg"
    },
    {
        route: '/category/womens-shoes',
        title: "womens-shoes",
        src: "https://i.dummyjson.com/data/products/48/thumbnail.jpg"
    },
    {
        route: '/category/mens-shirts',
        title: "mens-shirts",
        src: "https://i.dummyjson.com/data/products/54/thumbnail.jpg"
    },
    {
        route: '/category/mens-shoes',
        title: "mens-shoes",
        src: "https://i.dummyjson.com/data/products/58/thumbnail.jpg"
    },
    {
        route: '/category/mens-watches',
        title: "mens-watches",
        src: "https://i.dummyjson.com/data/products/61/thumbnail.jpg"
    },
    {
        route: '/category/womens-watches',
        title: "womens-watches",
        src: "https://i.dummyjson.com/data/products/70/thumbnail.jpg"
    },
    {
        route: '/category/womens-bags',
        title: "womens-bags",
        src: "https://i.dummyjson.com/data/products/74/thumbnail.jpg"
    },
    {
        route: '/category/womens-jewellery',
        title: "womens-jewellery",
        src: "https://i.dummyjson.com/data/products/77/thumbnail.jpg"
    },
    {
        route: "/category/sunglasses",
        title: "sunglasses",
        src: "https://i.dummyjson.com/data/products/84/thumbnail.jpg"
    },
    {
        route: "/category/automotive",
        title: "automotive",
        src: "https://i.dummyjson.com/data/products/87/thumbnail.jpg"
    },
    {
        route: "/category/motorcycle",
        title: "motorcycle",
        src: "https://i.dummyjson.com/data/products/92/thumbnail.jpg"
    },
    {
        route: "/category/lighting",
        title: "lighting",
        src: "https://i.dummyjson.com/data/products/99/thumbnail.jpg"
    }
];
const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
    return (
        <div className='grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2 md:gap-3 md:p-3 xl:gap-12 xl:py-12 xl:px-12 p-2'>
            {categories.map((product) => {
                return (
                    <Card name={product.title} route={product.route} src={product.src} />
                );
            })}
        </div>
    );
};

export default Categories;

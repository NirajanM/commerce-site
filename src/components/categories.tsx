import Card from "./card";


interface ICategoriesProps {
}
const categories = [
    {
        route: '/category/smartphones',
        title: "smartphones",
    },
    {
        route: '/category/laptops',
        title: "laptops",
    },
    {
        route: '/category/fragrances',
        title: "fragrances",
    },
    {
        route: '/category/skincare',
        title: "skincare",
    },
    {
        route: '/category/groceries',
        title: "groceries",
    },
    {
        route: '/category/home-decoration',
        title: "home-decoration",
    },
    {
        route: '/category/furniture',
        title: "furniture",
    },
    {
        route: '/category/tops',
        title: "tops",
    },
    {
        route: '/category/womens-dresses',
        title: "womens-dresses",
    },
    {
        route: '/category/womens-shoes',
        title: "womens-shoes",
    },
    {
        route: '/category/mensshirts',
        title: "mens-shirts",
    },
    {
        route: '/category/mens-shoes',
        title: "mens-shoes",
    },
    {
        route: '/category/mens-watches',
        title: "mens-watches",
    },
    {
        route: '/category/womens-watches',
        title: "womens-watches",
    },
    {
        route: '/category/womensbags',
        title: "womens-bags",
    },
    {
        route: '/category/womens-jewellery',
        title: "womens-jewellery",
    },
    {
        route: "/category/sunglasses",
        title: "sunglasses",
    },
    {
        route: "/category/automotive",
        title: "automotive",
    },
    {
        route: "/category/motorcycle",
        title: "motorcycle",
    },
    {
        route: "/category/lighting",
        title: "lighting",
    }
];
const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-2 md:gap-3 md:p-3 lg:gap-12 lg:py-12 lg:px-12 p-2'>
            {categories.map((product) => {
                return (
                    <Card name={product.title} route={product.route} />
                );
            })}
        </div>
    );
};

export default Categories;

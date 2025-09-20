export const productService = {
  getAll: jest.fn().mockResolvedValue([
    {
      id: 1,
      title: 'Produto Teste',
      price: 99.9,
      description: 'Descrição teste',
      category: 'Categoria',
      image: 'https://fakestoreapi.com/img/test.jpg',
    },
  ]),
};

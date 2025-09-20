
# EcomApp - Mobile

Mini-app de e-commerce desenvolvido em **React Native CLI**, simulando uma loja com catálogo de produtos, detalhes e carrinho de compras.

## Tecnologias Utilizadas

- React Native CLI  
- TypeScript  
- Redux Toolkit para gerenciamento de estado global do carrinho  
- Styled Components para estilização  
- FastImage para carregamento eficiente de imagens  
- Jest + @testing-library/react-native (cobertura unitária no CatalogScreen)  
- React Navigation (Native Stack)  
- Linter e Prettier configurados

## Funcionalidades

- Listagem de produtos provenientes da Fake Store API  
- Visualização detalhada de produto com título, imagem, descrição e preço  
- Adição de produtos ao carrinho e gerenciamento de quantidade  
- Carrinho de compras com total por item e total geral  
- Mensagem de carrinho vazio com botão para voltar ao catálogo  
- Navegação entre catálogo → detalhes → carrinho  
- Deep Linking configurado (`meuapp://produto/:id`)  

## Estrutura do Projeto

```

src/
├── api/                # Serviços e chamadas à Fake Store API
├── features/           # Funcionalidades isoladas
│   ├── catalog/        # Catálogo de produtos
│   ├── productDetail/  # Tela de detalhes do produto
│   └── cart/           # Carrinho de compras e slices do Redux
├── hooks/              # Custom hooks
├── navigation/         # Configuração do React Navigation
├── shared/             # Utilitários e componentes compartilhados
├── store/              # Redux store e slices
├── types/              # Tipagens TypeScript
└── App.tsx             # Entry point do app

````

## Instalação

```bash
# Clonar repositório
git clone https://github.com/seuusuario/ecomapp.git
cd ecomapp

# Instalar dependências
yarn install
# ou npm install

# Instalar pods no iOS
cd ios && pod install && cd ..
````

## Execução do App

```bash
# Android
yarn android

# iOS
yarn ios
```

## Testes Unitários

* Implementados com **Jest** e **React Native Testing Library**
* Cobertura atualmente focada em **CatalogScreen**

```bash
yarn test
```

## Otimizações de Performance

* **Memoização de componentes**: `React.memo` aplicado em ProductCard, ProductInfo, CartItemDetail e EmptyCart
* **Memoização de callbacks**: `useCallback` para funções passadas como props
* **FlatList otimizado**: `initialNumToRender`, `maxToRenderPerBatch` e `windowSize` ajustados
* **FastImage** usado para cache e carregamento eficiente de imagens
* Evita criação de componentes inline no render de listas ou cabeçalhos
* Redux Toolkit para gerenciamento global do carrinho

## Boas práticas implementadas

* Arquitetura **feature-based**
* Tipagem TypeScript consistente
* Componentes reutilizáveis e isolados
* Acessibilidade básica
* Deep Linking funcional
* Linter e Prettier integrados

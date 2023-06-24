# Files organizations

```g
src
|-- components
|   |-- Button.js
|   |-- Input.js
|   |-- ...
|-- features
|   |-- Home
|   |   |-- HomePage.js
|   |   |-- HomeHeader.js
|   |   |-- ...
|   |-- About
|   |   |-- AboutPage.js
|   |   |-- AboutSidebar.js
|   |   |-- ...
|-- App.js
```

```mermaid
graph TD
    R[src]
    A[App.js]
    B[components]
    C[features]
    D[Button.js]
    E[Input.js]
    F[Home]
    G[About]
    H[HomePage.js]
    I[AboutPage.js]
    J[HomeHeader.js]
    K[AboutSidebar.js]
    R --> A
    R --> B
    R --> C
    B --> D
    B --> E
    C --> F
    C --> G
    F --> H
    F --> J
    G --> I
    G --> K
```

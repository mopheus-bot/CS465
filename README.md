# Full-Stack Development (MEAN)
CS465

1) Architecture

  a) The frontend development in this full stack project involved both traditional server-rendered pages with Express HTML and JavaScript, as well as a more dynamic, client-rendered SPA using Angular. Express HTML and JavaScript provided a straightforward approach to serving static content and handling basic interactions, ideal for customer-facing pages that did not require complex state management. However, the SPA approach allowed for enhanced interactivity and dynamic content loading without page reloads, making it more suitable for the administrative side of the application, where users interact frequently with data and require a responsive interface. The SPA’s component-based structure in Angular also made it easier to modularize and reuse code.

  b) The backend used a NoSQL MongoDB database due to its flexibility and efficiency in handling JSON-like data, making it ideal for a dynamic, document-based application. MongoDB is schema-less, meaning we could adapt the data structure as the project evolved without needing to alter a rigid schema. This flexibility is particularly useful in applications where different types of data may need to be stored for different parts of the app, and it allowed for quick data retrieval and scalability—both important for a full-stack web application.

2) Functionality

  a) JSON, or JavaScript Object Notation, is a lightweight data format that is language-agnostic, making it ideal for data exchange between the frontend and backend. Unlike JavaScript, JSON is a data format that doesn’t contain functions, only key-value pairs. In this project, JSON served as the communication format between the client and server, allowing structured data (such as trip details or user information) to be transferred seamlessly from the backend to the frontend and vice versa.

  b) During the development process, I refactored code to streamline various components, such as creating a reusable Trip Card component for displaying trips. By encapsulating the trip information in this component, I was able to use it consistently across multiple views without duplicating code. This refactoring improved efficiency and made the application easier to maintain. Additionally, reusable UI components like form controls or navigation bars simplified the UI, enhancing the user experience by providing a consistent design and improving the development experience by reducing redundant code.

3) Testing

  a) API testing in a full-stack application involves methods for verifying endpoints, typically using HTTP methods like GET, POST, PUT, and DELETE. Each endpoint represents a specific route that the frontend uses to interact with backend data. For instance, a GET request retrieves data, while a POST request might create new data in the database. Adding security layers, such as authentication, increases testing complexity since requests require proper credentials or tokens. In this project, I used tools like Postman for manual endpoint testing and Angular’s testing framework to verify secure interactions between the frontend and backend. Understanding these methods and endpoints, along with implementing authentication strategies, is crucial in ensuring secure and reliable data transfer in a full-stack application.

4) Reflection

  a) This course has greatly advanced my professional skills in building scalable web applications, deepening my understanding of both client- and server-side development. Working with a full-stack environment strengthened my proficiency with frameworks like Angular and Express, while also helping me learn how to structure and manage data effectively with MongoDB. These skills, along with an understanding of RESTful APIs and secure authentication methods, have made me a more competitive candidate in the tech industry. Developing reusable components and leveraging best practices in architecture have improved my ability to design efficient, maintainable code, which is invaluable in any web development role.

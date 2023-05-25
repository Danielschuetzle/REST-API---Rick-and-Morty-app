# 🚀 Rick and Morty Character Encyclopedia

An interactive encyclopedia of characters from the TV Show Rick and Morty, built using the Rick and Morty API. 

## 🌟 Features

- **Dynamic Character Cards**: Our app features a rich set of details about each character, such as their picture, name, status (Alive, Dead, or Unknown), species, and a list of episodes they appear in. Character cards are created dynamically based on the data fetched from the API.

- **Data Fetching and Storage**: We fetch character data from the API in batches of 20, and create a card for each character to be displayed in the cardContainer. The app optimizes loading performance by only fetching data as needed, reducing overhead and enhancing user experience.

- **Easy Navigation with Pagination**: Want to explore more characters? Use the simple 'Next' and 'Previous' buttons to navigate between different pages of characters. Our app also provides a current page indicator so you always know where you are.

- **Real-Time Character Search**: Looking for your favorite character? Just type their name in our Search bar and hit 'Enter'. Our app provides real-time search results, updating as you type, making it easier to find characters.

- **Code Refactoring and Modularity**: To ensure code quality and maintainability, we've refactored our codebase into modular components. This not only makes our code easier to understand and manage, but also facilitates future enhancements and customizations.

## 🚀 Getting Started

1. Clone this repository: `git clone <repository-url>`.
2. Navigate to the project directory: `cd <directory-name>`.
3. Install the required dependencies: `npm install`.
4. Start the application: `npm start`.

The application should now be running on your local server at `http://localhost:3000`.

## 🧑‍💻 Using the App

- **Browsing characters**: Simply scroll through the character cards on the home page.
- **Using pagination**: Navigate between different pages of characters using the 'Next' and 'Previous' buttons.
- **Searching for characters**: Type a character's name into the search bar and hit 'Enter'. The app will update to display only characters that match the search query.

## 🙌 Contributing

Interested in making a contribution? Here's how:

1. Fork this repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature/my-new-feature`.
5. Submit a pull request.

For major changes, please open an issue first to discuss what you would like to change.

## 🔐 License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License

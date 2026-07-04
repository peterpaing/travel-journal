# Travel Journal 🌍

A simple React project built to practice **data-driven rendering**, **component composition**, and **props** by creating a travel journal application.

## 📖 Overview

This project displays a collection of travel destinations using reusable React components. The application reads travel data from a separate JavaScript file and dynamically renders travel cards using the `map()` method.

The project was created as a practice exercise to strengthen understanding of React fundamentals, especially building user interfaces from data rather than hardcoding content.

## ✨ Features

* Dynamic rendering using JavaScript's `map()` method
* Reusable React components
* Props and prop spreading (`...props`)
* External links to Google Maps locations
* Responsive layout design
* Custom styling with CSS
* Data separation from UI components

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* JSX
* CSS3
* Vite

## 📁 Project Structure

```text
src/
├── assets/
│   ├── globe.png
│   └── marker.png
├── components/
│   ├── Header.jsx
│   └── Main.jsx
├── App.jsx
├── data.js
├── index.css
└── main.jsx
```

## 🚀 How It Works

The application imports travel data from `data.js` and uses the `map()` method to create a card component for each destination.

```javascript
const card = data.map(item => {
    return (
        <Cards
            key={item.id}
            {...item}
        />
    )
})
```

This demonstrates the concept of **data-driven UI**, where the interface is generated dynamically from data structures instead of manually creating each component.

## 🌎 Destinations Included

* Mount Fuji, Japan
* Sydney Opera House, Australia
* Geirangerfjord, Norway

Each travel card contains:

* Destination image
* Country name
* Google Maps link
* Travel dates
* Description

## 📦 Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd travel-journal
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

## 🎯 Concepts Practiced

This project was built to practice:

* React functional components
* Component composition
* Props
* Prop spreading
* Rendering lists with `map()`
* Using unique keys
* Data-driven rendering
* Project organization
* Responsive CSS styling

## 🔮 Future Improvements

* Add more travel destinations
* Fetch travel data from an API
* Add filtering and search functionality
* Implement dark mode
* Add animations and transitions
* Improve accessibility

## 👨‍💻 Author

Created as a React learning project to practice building data-driven user interfaces.

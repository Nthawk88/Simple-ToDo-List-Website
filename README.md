# ToDo List Application

A simple and clean web-based ToDo List application built with HTML, CSS, and JavaScript.

## Features

- ✅ Add new tasks with due dates
- 📅 Date-based task management
- 🔍 Filter tasks
- 🗑️ Delete individual tasks
- 🧹 Delete all tasks at once
- 📊 Task status tracking
- 📱 Responsive design

## Project Structure

```
codingcamp-21-jul-25-Nthawk88/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## How to Run

### Option 1: Direct File Opening (Simplest)
1. Navigate to the project folder
2. Double-click `index.html` to open it in your default browser

### Option 2: Local Server (Recommended)
Using Python (if installed):
```bash
cd "C:\Users\darna\OneDrive - Bina Nusantara\Documents\Projects\Revou Mini Project ToDo List\codingcamp-21-jul-25-Nthawk88"
python -m http.server 5500
```
Then open `http://localhost:5500` in your browser.

Using Node.js (via npx):
```bash
cd "C:\Users\darna\OneDrive - Bina Nusantara\Documents\Projects\Revou Mini Project ToDo List\codingcamp-21-jul-25-Nthawk88"
npx --yes http-server -p 5500
```
Then open `http://localhost:5500` in your browser.

### Option 3: VS Code Live Server
1. Open the project folder in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: PowerShell
```bash
start index.html
```
(Run this command inside the project folder)

## How to Use

1. **Adding Tasks**: Enter a task description and select a due date, then click the "+" button
2. **Filtering**: Click the "FILTER" button to organize your tasks
3. **Deleting**: Use the delete button next to individual tasks or "DELETE ALL" to clear everything
4. **Status**: Track your task completion status

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive design
- **JavaScript**: Interactive functionality and DOM manipulation

## Browser Compatibility

This application works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Development

This project was created as part of the Revou Mini Project coding camp. It demonstrates fundamental web development concepts including DOM manipulation, event handling, and local storage.

## License

This project is open source and available under the MIT License.

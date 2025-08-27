/*Base layout */
body {
    font-family: times new roman;
    background-color: #0d0d0d; /* deep black */
    color: #d4d4d4; /* silver */
    padding: 2rem;
}

/*Headings */
h1, h2, h3 {
    color: #ffd700; /* gold */
    margin-bottom: 1rem;
}

/*Paragraphs */
p {
    color: #ffd700; /* gold */
    margin-bottom: 1rem;
}

/*Buttons */
Button {
    background-color: #b22222; /* firebrick red */
    color: #fff;
    Border: 2px solid #ffd700; /* gold border */
    Padding: 0.6rem 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s ease;
}

Button:hover {
    background-color: #8b0000; /* dark red */
}

/*Links */
a {
    color: #ffd700; /* gold */
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}

/*Optional: Add a subtle border or container */
.conntainer {
    border: 1px solid #444; /* dark gray border */
    padding: 1.5rem;
    background-color: #1a1a1a; /* very dark gray */
    border-radius: 8px;
}
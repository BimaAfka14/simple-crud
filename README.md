<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1>Simple CRUD App (No Database)</h1>
    <p>
      This is a simple CRUD (Create, Read, Update, Delete) web application built
      using Tailwind CSS for styling. The app demonstrates basic CRUD
      operations, but all the data is stored in memory within the browser,
      meaning it will reset upon refreshing the page.
    </p>
    <h2>Features</h2>
    <ul>
      <li>Create: Add new items to the list.</li>
      <li>Read: View the list of items.</li>
      <li>Update: Edit the details of existing items.</li>
      <li>Delete: Remove items from the list.</li>
      <li>
        Local Storage: The data is stored in the browser's local storage, so it
        persists even after the page is refreshed.
      </li>
    </ul>
    <h2>Tech Stack</h2>
    <ul>
      <li>Frontend: Vanilla JavaScript, HTML, Tailwind CSS</li>
      <li>Backend: No backend (no database connection)</li>
    </ul>
    <h2>Setup</h2>
    <ol>
      <li>
        Clone the repository to your local machine:
        <pre><code>git clone https://github.com/BimaAfka14/simple-crud.git</code></pre>
      </li>
      <li>
        Navigate to the project directory:
        <pre><code>cd simple-crud</code></pre>
      </li>
      <li>
        Open the <code>index.html</code> file in your web browser.
        <p>
          You can simply open the file by dragging index.html to your browser or
          by using a live server extension if you're using VSCode or other
          editors.
        </p>
      </li>
      <li>Start using the CRUD application!</li>
    </ol>
    <h2>How It Works</h2>
    <ul>
      <li>
        The data is stored in an in-memory array, and operations such as adding,
        updating, and deleting modify this array.
      </li>
      <li>
        All state management is handled within the client-side JavaScript,
        meaning no persistent storage (such as databases or localStorage) is
        used.
      </li>
      <li>
        Tailwind CSS is used to style the components for a responsive and modern
        interface.
      </li>
    </ul>
    <h2>Tailwind Setup</h2>
    <p>
      Tailwind CSS is included via CDN in the <code>index.html</code> file for
      ease of setup. You can switch to a custom build if necessary.
    </p>
    <pre><code>link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"</code></pre>
    <p>
      If you wish to customize Tailwind, you can generate your own
      tailwind.config.js and use a PostCSS pipeline, but for simplicity, this
      project uses the CDN version.
    </p>
    <h2>Usage</h2>
    <ol>
      <li>
        Add new items by filling in the form and clicking the "Add" button.
      </li>
      <li>View the list of added items below the form.</li>
      <li>Edit an item by clicking the "Edit" button next to it.</li>
      <li>Delete an item by clicking the "Delete" button.</li>
    </ol>
  </body>
</html>

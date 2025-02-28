import React from "react";

export default function About() {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 " style={{ fontSize:"3em", marginTop:"1.5em" }}>About Us!</h2>
      <div className="card p-4 shadow-sm">
        <div className="card-body">
          <p className="card-text">
            Designed and developed by{" "}
            <strong style={{ color:"blue" }}>Mr. Viswajit Vijay Mavalankar</strong> in year{" "}
            <strong style={{ color:"blue" }}>2024</strong>.
          </p>
          <p className="card-text">
            This app delivers the latest top headlines and breaking news across
            various categories, including entertainment, science, technology,
            health, sports, and business. By leveraging the{" "}
            <strong style={{ color:"blue" }}>News API</strong>, it ensures real-time updates from trusted
            news sources around the globe, keeping you informed of current
            events as they happen.
          </p>
          <strong><h4 className="mt-4 mb-3 text-primary">Key Features:</h4></strong>
          <ol className="mb-0">
            <li>
              <strong>Real-Time News Updates:</strong> Get the most recent news
              articles instantly, thanks to the integration with the{" "}
              <strong>News API</strong>, which guarantees fresh and accurate
              content.
            </li>
            <li>
              <strong>Category-Based Browsing:</strong> Easily navigate through
              different news categories to find articles that match your
              interests.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> A clean and intuitive
              design allows for seamless browsing and reading, providing a
              smooth and engaging user experience.
            </li>
            <li>
              <strong>Optimized for Performance:</strong> Fast loading times and
              efficient data handling ensure that you can read the news without
              delays.
            </li>
            <li>
              <strong>Responsive Design:</strong> The app is fully optimized for
              use on desktops, tablets, and smartphones, providing a consistent
              experience across all devices.
            </li>
            <li>
              <strong>Pagination and Navigation:</strong> Effortlessly move
              through multiple pages of articles using the "Next" and "Previous"
              buttons, so you never miss any important updates.
            </li>
            <li>
              <strong>Image Handling:</strong> High-quality images are displayed
              with each news article, and default images are provided when none
              are available to maintain a visually appealing layout.
            </li>
          </ol>
          <p className="mt-4 text-center mb-0">
            <strong style={{ color:"blue", fontSize:"1.2em" }}>
              Stay informed, stay connected, and explore the world of news with
              this comprehensive and dynamic app.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

import "./App.css";

function App() {
  return (
    <>
      <nav className="flex p-4 justify-between items-center bg-red-400 border-t-8 border-blue-500 text-white">
        <ul className="flex w-96 justify-between text-l items-center text-gray-700">
          <li className="text-2xl text-white">
            <p>Kalvium</p>
          </li>

          <li>
            <p>About Us</p>
          </li>

          <li>
            <p>Contact Us</p>
          </li>

          <li>
            <p>Courses</p>
          </li>
        </ul>

        <button className="mr-4 border-2 border-white rounded-md px-4 py-2 text-sm">
          Login
        </button>
      </nav>

      <div>
        <div className="mx-20">
          <button className="bg-blue-500 p-2 rounded-md font-semibold text-white m-4">
            Button One
          </button>

          <div className="mx-4 text-red-500 p-2 border-2 border-red-400 rounded">
            <span className="font-semibold text-red-600">Alert!</span> This is
            awesome
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
            alt=""
            className="p-4"
          />

          <div className="flex-col justify-center">
            <p className="font-semibold text-xl"> Kalvium Store</p>
            <p>You have a new Course!</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-200 flex justify-center p-4">
        &copy; 2021 Copyright Kalvium
      </footer>
    </>
  );
}

export default App;

import React from "react";

function Footer() {
  return (
    <footer class="flex flex-col space-y-10 justify-center m-10">
      <div class="flex justify-center space-x-5">
        <a
          href="https://github.com/Raseen2004/CardSilder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/github.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/raseen2004/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a
          href="mailto:raseen429@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/gmail-new.png" />
        </a>
      </div>
      <p class="text-center text-gray-700 font-medium">Made with ❤ by Raseen</p>
    </footer>
  );
}

export default Footer;

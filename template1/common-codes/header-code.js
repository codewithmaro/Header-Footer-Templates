const header = document.getElementById('header');

header.innerHTML = `
     <header>
          <ul id="menu">
               <li><a href="../homepage/homepage.html">Home</a></li>
               <li><a href="../about-us/about.html">About Us</a></li>
               <li><a href="#">Contact Us</a></li>
               <li><a href="../feedback-form/feedback-form.html">Leave us a Feedback</a></li>
          </ul>
     </header>
`;

document.body.appendChild(header.content);

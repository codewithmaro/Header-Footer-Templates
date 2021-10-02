const footer = document.getElementById('footer');

footer.innerHTML = `
     <footer>
          <div id="logo">
               <a href="../homepage/homepage.html">logo</a> <!-- Homepage Path -->
          </div>

          <div class="vertical-line"></div>

          <div id="links">
               <p>Links</p>
               <hr>
               <ul>
                    <li><a href="../about-us/about.html">About Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
               </ul>
          </div>

          <div class="vertical-line"></div>

          <div id="contact-us">
               <p>Contact Us</p>
               <hr>
               <div>
                    <a href="tel:+919876543210"> <!-- Phone No. -->
                         <i class="fas fa-mobile" id="phone"></i>
                    </a>
                    <a href="mailto:#"> <!--Mail ID-->
                         <i class="fas fa-envelope" id="email"></i>
                    </a>
                    <a href="https://github.com/rohithpala" target="_blank"> <!--Github Profile Link-->
                         <i class="fab fa-github" id="github"></i>
                    </a>
                    <a href="https://wa.me/+919876543210" target="_blank"> <!-- Whatsapp No. -->
                         <i class="fab fa-whatsapp" id="whatsapp"></i>
                    </a>
                    <a href="https://instagram.com/coding_with_maro" target="_blank"> <!-- Instagram Link -->
                         <i class="fab fa-instagram" id="instagram"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank"> <!-- Youtube Channel Link -->
                         <i class="fab fa-youtube" id="youtube"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rohithpala" target="_blank"> <!-- Linkedin Profile Link -->
                         <i class="fab fa-linkedin" id="linkedin"></i>
                    </a>
               </div>
          </div>
     </footer>
`;

document.body.append(footer)

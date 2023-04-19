let footer=$(`
<footer class="footer">
    <div class="container p-4">
        <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
                <p class="tag" >"Develop a passion for learning. If you do, you will never cease to grow."
                </p>
                <div class="rounded-social-buttons tag">
                    <a class="social-button" href="#" target="_blank">
                    
                    <img src="media/twitter.png" class="social-icons">

                    </a>
                    <a class="social-button" href="" target="_blank" >
                    
                    <img src="media/facebook.png" class="social-icons">
                    </a>
                    <a class="social-button" href="" target="_blank" >
                    
                    <img src="media/instagram.svg" class="social-icons">
                    
                    </a>      
                    <a class="social-button" href="#" target="_blank">
                    <img src="media/gmail.svg" class="social-icons"> 
                    </a>
                </div>
            </div>
        
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <div class="form-style-6">
                    <h6 class="display">Get in Touch</h6>
                    <form>
                    <input type="text" name="field1" placeholder="Your Name" required />
                    <input type="email" name="field2" placeholder="Email Address" required/>
                    <textarea name="field3" placeholder="Type your Message"></textarea>
                    <input type="submit" value="Send" />
                    </form>
                </div>
               </div>
            </div>
        </div>
    </div>
    <div class="container p-4">
        <div class="row">
            <div class="aboutus">  
                <div>  
                            
                            <a href="#" class="heading"><h6>  Get to Know Us</h6></a>
                            <a href="#"><li>  About Us</li>   </a>
                            <a href="#"><li>  Careers</li>   </a>
                            <a href="#"><li>  Press Releases</li></a>   
                            <a href="#"><li>  Recent Activity</li>   </a>
                </div>  
                <div>  
                           
                            <a href="#" class="heading"><h6>  Connect with Us</h6> </a>
                            <a href="#"><li>  Facebook</li>   </a>
                            <a href="#"><li>  Instagram</li>   </a>
                            <a href="#"><li>  Twitter</li>  </a>
                            <a href="#"><li>  Mail</li></a>
                </div>  
                <div>  
                            
                            <a href="#" class="heading"><h6> Navigate</h6>  </a>
                            <a href="#"><li>Home</li>  </a>
                            <a href="#"><li>Login</li>  </a>
                            <a href="#"><li>new</li>  </a>
                            <a href="#"><li>Spare Parts</li>  </a>
                            <a href="#"> <li> 3-D view</li>  </a>
                            <a href="#"> <li> Cart</li>  </a>
            
                </div>  
                <div>  
                            
                            <a href="#" class="heading"><h6>  Let Us Help You</h6>  </a>
                            <a href="#"><li>  COVID-19 </li>  </a>
                            <a href="#"> <li>  Sell under Amazon Accelerator</li>  </a>
                            <a href="#"> <li>  Returns Centre</li>  </a>
                            <a href="#"> <li>  100% Purchase Protection</li>  </a>
                            <a href="#"> <li>  Caronwheel App Download</li>  </a>
                            <a href="#"> <li>  Help</li>  </a>
            
                </div>  

                    
            
            </div>

        </div>
        <div class="row">
            <div  class="lower-footer">
                <a href="#">Conditions of Use & Sale  </a>
                <a href="#">Privacy Notice  </a>
                <a href="#">Interest-Based Ads </a>
               
            </div>  
        </div>
    </div>
</footer>
`);
$(function(){
    let bodyfun=$(`#footy-footer`);
    bodyfun.append(footer);
});

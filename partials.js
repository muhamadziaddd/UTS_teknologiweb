function Navbar() {
  return (
      <div className="header-wrapper">
        <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-between">
                <div className="header-logo">
                    <div className="logo">
                        <a href="index.html"><img src="assets/images/logo/logo_black.png" alt=""/></a>
                    </div>
                </div>

                <div class="main-menu menu-color--black menu-hover-color--golden">
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="shop-full-width.html">Shop</a></li>
                            <li><a href="product-details-default.html">Product Details</a></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>

                <ul className="header-action-link action-color--black action-hover-color--golden">
                  <li>
                    <a href="#search">
                      <i className="icon-magnifier"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

function Footer() {
    return (
    <><footer class="footer-section footer-bg">
            <div class="footer-wrapper">
                <div class="footer-top">
                    <div class="container">
                        <div class="row mb-n6">
                            <div class="col-lg-3 col-sm-6 mb-6">
                                <div class="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up"
                                    data-aos-delay="0">
                                    <h5 class="title">INFORMATION</h5>
                                    <ul class="footer-nav">
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="contact-us.html">Contact</a></li>
                                        <li><a href="#">Returns</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 mb-6">
                                <div class="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up"
                                    data-aos-delay="200">
                                    <h5 class="title">MY ACCOUNT</h5>
                                    <ul class="footer-nav">
                                        <li><a href="my-account.html">My account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="faq.html">Frequently Questions</a></li>
                                        <li><a href="#">Order History</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 mb-6">
                                <div class="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up"
                                    data-aos-delay="400">
                                    <h5 class="title">CATEGORIES</h5>
                                    <ul class="footer-nav">
                                        <li><a href="#">Decorative</a></li>
                                        <li><a href="#">Kitchen utensils</a></li>
                                        <li><a href="#">Chair & Bar stools</a></li>
                                        <li><a href="#">Sofas and Armchairs</a></li>
                                        <li><a href="#">Interior lighting</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 mb-6">
                                <div class="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up"
                                    data-aos-delay="600">
                                    <h5 class="title">ABOUT US</h5>
                                    <div class="footer-about">
                                        <p>We are a team of designers and developers that create high quality Magento,
                                            Prestashop, Opencart.</p>

                                        <address class="address">
                                            <span>Address: Your address goes here.</span>
                                            <span>Email: demo@example.com</span>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-center">
                    <div class="container">
                        <div class="row mb-n6">
                            <div class="col-xl-3 col-lg-4 col-md-6 mb-6">
                                <div class="footer-social" data-aos="fade-up" data-aos-delay="0">
                                    <h4 class="title">FOLLOW US</h4>
                                    <ul class="footer-social-link">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-6 col-md-6 mb-6">
                                <div class="footer-newsletter" data-aos="fade-up" data-aos-delay="200">
                                    <h4 class="title">DON'T MISS OUT ON THE LATEST</h4>
                                    <div class="form-newsletter">
                                        <form action="#" method="post">
                                            <div class="form-fild-newsletter-single-item input-color--golden">
                                                <input type="email" placeholder="Your email address..." required />
                                                    <button type="submit">SUBSCRIBE!</button>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div>
                            <div class="col-auto mb-6">
                                <div class="footer-payment">
                                    <div class="image">
                                        <img src="assets/images/company-logo/payment.png" alt=""/>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer><button class="material-scrolltop" type="button"></button><div class="modal fade" id="modalAddcart" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col text-right">
                                        <button type="button" class="close modal-close" data-bs-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true"> <i class="fa fa-times"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="modal-add-cart-product-img">
                                                    <img class="img-fluid"
                                                        src="assets/images/product/default/home-1/default-1.jpg" alt="" />
                                                    </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="modal-add-cart-info"><i class="fa fa-check-square"></i>Added to cart
                                                    successfully!</div>
                                                <div class="modal-add-cart-product-cart-buttons">
                                                    <a href="cart.html">View Cart</a>
                                                    <a href="checkout.html">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 modal-border">
                                        <ul class="modal-add-cart-product-shipping-info">
                                            <li> <strong><i class="icon-shopping-cart"></i> There Are 5 Items In Your
                                                Cart.</strong></li>
                                            <li> <strong>TOTAL PRICE: </strong> <span>$187.00</span></li>
                                            <li class="modal-continue-button"><a href="#" data-bs-dismiss="modal">CONTINUE
                                                SHOPPING</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div class="modal fade" id="modalQuickview" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col text-right">
                                        <button type="button" class="close modal-close" data-bs-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true"> <i class="fa fa-times"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="product-details-gallery-area mb-7">
                                            <div class="product-large-image modal-product-image-large swiper-container">
                                                <div class="swiper-wrapper">
                                                    <div class="product-image-large-image swiper-slide img-responsive">
                                                        <img src="assets/images/product/default/home-1/default-1.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-large-image swiper-slide img-responsive">
                                                        <img src="assets/images/product/default/home-1/default-2.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-large-image swiper-slide img-responsive">
                                                        <img src="assets/images/product/default/home-1/default-3.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-large-image swiper-slide img-responsive">
                                                        <img src="assets/images/product/default/home-1/default-4.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-large-image swiper-slide img-responsive">
                                                        <img src="assets/images/product/default/home-1/default-5.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-large-image swiper-slide img-responsive">
                                                        <img src="assets/images/product/default/home-1/default-6.jpg" alt="" />
                                                        </div>
                                                </div>
                                            </div>
                                            <div
                                                class="product-image-thumb modal-product-image-thumb swiper-container pos-relative mt-5">
                                                <div class="swiper-wrapper">
                                                    <div class="product-image-thumb-single swiper-slide">
                                                        <img class="img-fluid"
                                                            src="assets/images/product/default/home-1/default-1.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-thumb-single swiper-slide">
                                                        <img class="img-fluid"
                                                            src="assets/images/product/default/home-1/default-2.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-thumb-single swiper-slide">
                                                        <img class="img-fluid"
                                                            src="assets/images/product/default/home-1/default-3.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-thumb-single swiper-slide">
                                                        <img class="img-fluid"
                                                            src="assets/images/product/default/home-1/default-4.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-thumb-single swiper-slide">
                                                        <img class="img-fluid"
                                                            src="assets/images/product/default/home-1/default-5.jpg" alt="" />
                                                        </div>
                                                    <div class="product-image-thumb-single swiper-slide">
                                                        <img class="img-fluid"
                                                            src="assets/images/product/default/home-1/default-6.jpg" alt="" />
                                                        </div>
                                                </div>
                                                <div class="gallery-thumb-arrow swiper-button-next"></div>
                                                <div class="gallery-thumb-arrow swiper-button-prev"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="modal-product-details-content-area">
                                            <div class="product-details-text">
                                                <h4 class="title">Nonstick Dishwasher PFOA</h4>
                                                <div class="price"><del>$70.00</del>$80.00</div>
                                            </div>
                                            <div class="product-details-variable">
                                                <div class="variable-single-item">
                                                    <span>Color</span>
                                                    <div class="product-variable-color">
                                                        <label for="modal-product-color-red">
                                                            <input name="modal-product-color" id="modal-product-color-red"
                                                                class="color-select" type="radio" checked />
                                                                <span class="product-color-red"></span>
                                                            </label>
                                                        <label for="modal-product-color-tomato">
                                                            <input name="modal-product-color" id="modal-product-color-tomato"
                                                                class="color-select" type="radio" />
                                                                <span class="product-color-tomato"></span>
                                                            </label>
                                                        <label for="modal-product-color-green">
                                                            <input name="modal-product-color" id="modal-product-color-green"
                                                                class="color-select" type="radio" />
                                                                <span class="product-color-green"></span>
                                                            </label>
                                                        <label for="modal-product-color-light-green">
                                                            <input name="modal-product-color"
                                                                id="modal-product-color-light-green" class="color-select"
                                                                type="radio" />
                                                                <span class="product-color-light-green"></span>
                                                            </label>
                                                        <label for="modal-product-color-blue">
                                                            <input name="modal-product-color" id="modal-product-color-blue"
                                                                class="color-select" type="radio" />
                                                                <span class="product-color-blue"></span>
                                                            </label>
                                                        <label for="modal-product-color-light-blue">
                                                            <input name="modal-product-color"
                                                                id="modal-product-color-light-blue" class="color-select"
                                                                type="radio" />
                                                                <span class="product-color-light-blue"></span>
                                                            </label>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center flex-wrap">
                                                    <div class="variable-single-item ">
                                                        <span>Quantity</span>
                                                        <div class="product-variable-quantity">
                                                            <input min="1" max="100" value="1" type="number" />
                                                            </div>
                                                    </div>

                                                    <div class="product-add-to-cart-btn">
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add To
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-product-about-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste
                                                    laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam
                                                    in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel
                                                    recusandae</p>
                                            </div>
                                            <div class="modal-product-details-social">
                                                <span class="title">SHARE THIS PRODUCT</span>
                                                <ul>
                                                    <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                                                    <li><a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                                    </li>
                                                    <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></> 
    );
}

export {Navbar, Footer};
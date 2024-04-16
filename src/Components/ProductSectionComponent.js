import ModalProductComponent from "./ModalProductComponent";

const ProductSectionComponent = () => {
    return (
        <>
        <ModalProductComponent />
        <section className="py-5">
        <header>
            <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
            <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </header>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-primary">Sale</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
              <p className="small text-muted">$300</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
              <p className="small text-muted">$25</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-info">New</div>
                <a className="d-block" href="detail.html">
                  <img className="img-fluid w-100" src="img/product-4.jpg" alt="..." />
              </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-danger">Sold</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-5.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Red digital smartwatch</a></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-6.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Nike air max 95</a></h6>
              <p className="small text-muted">$300</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-7.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Joemalone Women prefume</a></h6>
              <p className="small text-muted">$25</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="position-relative mb-3">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-8.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Apple Watch</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
        </div>
      </section>
      </>
    );
}

export default ProductSectionComponent;
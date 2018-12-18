import React, { Component } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import bannerImg from '../../assets/Banner.png';

class Sponsor extends Component {
  render() {
    return (
      <div>
        <div className="bg-secondary container-fluid">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center flex-wrap pb-4 pt-5">
              <img src={bannerImg} className="img-responsive" style={{ width: "80%", height: "auto" }} />
            </div>
          </div>
        </div>
        <div className="container text-center mt-4">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-danger font-weight-bold">
                Sponsorship Opportunities </h1>
              <p>Be part of partnering with Christ Fellowship to equip and train senior pastors and ministry leaders to fulfill the great
commission, while gaining exposure to a large network of church teams.
Christ Fellowship Conference will draw hundreds
of church leaders from across the country and around the world. You’ll have the opportunity to expand your reach by connecting with life giving churches who are eager to grow and partner with ministries and organizations who can help them achieve their vision.</p>
              <hr className="w-75 mt-5 pb-5"></hr>
              <h4 className="font-weight-bold">Click below if you're interested in partnering with us.</h4>
              <a className="btn btn-outline-primary text-primary font-weight-bold btn-lg text-uppercase" target="_blank" href="https://gochristfellowship.formstack.com/forms/conference_sponsorship_inquiry">Sponsorship Inquiry</a>
            </div>
          </div>
        </div>
        <div className="container page-tabs-container mt-5">
          <h1 className="text-center">
            Packages
          </h1>
          <div className="child-container active" data-child-id="packages">
            <div className="row py-3">
              <div className="py-2 col">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="bg-warning text-white text-right">
                        <th></th>
                        <th className="text-center">GOLD | $10,000</th>
                        <th className="text-center">SILVER | $5,000</th>
                        <th className="text-center">BRONZE | $1,000</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Verbal mention by Christ Fellowship Leadership in Ministry-Related Breakout</th>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center table-secondary"></td>
                        <td className="text-center table-secondary"></td>
                      </tr>
                      <tr>
                        <th scope="row">60 Second Video Spot before General Session</th>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center table-secondary"></td>
                        <td className="text-center table-secondary"></td>
                      </tr>
                      <tr>
                        <th scope="row">Exhibition Space</th>
                        <td className="text-center">Prime Space</td>
                        <td className="text-center">Standard Space</td>
                        <td className="text-center table-secondary"></td>
                      </tr>
                      <tr>
                        <th scope="row">Logo Recognition on Venue Banners</th>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center table-secondary"></td>
                        <td className="text-center table-secondary"></td>
                      </tr>
                      <tr>
                        <th scope="row">Ad in Conference Guide</th>
                        <td className="text-center">Full-Page Ad</td>
                        <td className="text-center">Half-Page Ad</td>
                        <td className="text-center">Quarter-Page Ad</td>
                      </tr>
                      <tr>
                        <th scope="row">Pre-service slide (in rotation before session)</th>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center table-secondary"></td>
                      </tr>
                      <tr>
                        <th scope="row">Logo Recognition on Christ Fellowship Conference Website</th>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Complimentary Passes to Conference</th>
                        <td className="text-center">6 Passes</td>
                        <td className="text-center">4 Passes</td>
                        <td className="text-center">1 Pass</td>
                      </tr>
                      <tr>
                        <th scope="row">Access to Sponsorship Lounge</th>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Lunch provided for Exhibitors</th>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center"><i className="fas fa-check text-success fa-lg"></i></td>
                        <td className="text-center table-secondary"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-75"></hr>
          <h1 className="text-center">
            Ad Specs
          </h1>
          <div className="child-container active" data-child-id="ad-specs">
            <div className="row">
              <div className="py-2 col">
                <img src="https://rockcon.gocf.org/content/assets/2019/AdSpecs.jpg" width="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col pb-3">
                <p><span className="text-primary">Note:</span> Half page and quarter page ads will have a white border around them to seperate them from the edge of the page and/or other ads. Full page ads will be full bleed</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm">
                <h3 className="text-uppercase text-primary font-weight-bold">
                  AD FILE FORMATS </h3>
                <p>The preferred file format is CMYK press PDF, with all fonts embedded or converted to outlines. CMYK JPGs or TIFFs at 300ppi are also accepted. All spot colors should be converted to CMYK. Full page ads should include bleed (trim marks are not necessary). Half and quarter page ads should be built to actual dimensions. Black text should be 100% black only (not a CMYK mix). Low-res and web quality files cannot be accepted.</p>
              </div>
              <div className="col-12 col-sm">
                <h3 className="text-uppercase text-primary font-weight-bold">Other Assets</h3>
                <p>If your sponsorship includes these other opportunities, please provide the correct assets as noted below:</p><p><span className="text-primary">Logo:</span> AI or EPS vector file</p><p><span className="text-primary">Pre-service Slides:</span> 1920px x 1080px JPG</p><p><span className="text-primary">Video:</span> Length of 60 seconds or less; Aspect Ratio of 16 x 9; Format of Dropbox Link</p>
              </div>
            </div>
          </div>
          <hr className="w-75"></hr>
          <h1 className="text-center">
            Exhibit Space Specs
          </h1>
          <div className="child-container active" data-child-id="exhibit">
            <div className="row">
              <div className="py-2 col">
                <p>
                  Exhibits will be open throughout the Conference. Please make sure there is at least one person manning the booth at all time. The exhibits will be placed in high traffic areas for optimal exposure.  </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm">
                <h3 className="text-uppercase text-primary font-weight-bold">GOLD SPONSOR EXHIBIT SPACE</h3>
                <ul>
                  <li>8ft x 10ft Area</li>
                  <li>8ft Table &amp; Black Table Cloth</li>
                  <li>Power Outlet</li>
                  <li>Access to Wi-Fi</li>
                </ul>
              </div>
              <div className="col-12 col-sm">
                <h3 className="text-uppercase text-primary font-weight-bold">SILVER SPONSOR EXHIBIT SPACE</h3>
                <ul>
                  <li>6ft Table &amp; Black Table Cloth</li>
                  <li>Power Outlet</li>
                  <li>Access to Wi-Fi</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="py-2 col">
                <h3 className="text-danger text-uppercase font-weight-bold">
                  Set-Up & Tear-Down </h3>
                <h4 className="text-warning">
                  Conference Dates: <small className="text-dark">February 6-7</small> </h4>
                <h4 className="text-warning">
                  Set-Up Times: <small className="text-dark">Tuesday, February 5, 9AM-9PM</small></h4>
                <h4 className="text-warning">
                  Tear-Down Times: <small className="text-dark">Thursday, February 7, 9:30PM-11:30PM & Friday, February 8, 9AM-1PM</small></h4>
              </div>
            </div>
            <div className="row">
              <div className="py-2 col">
                <h3 className="text-danger text-uppercase font-weight-bold">Shipping &amp; Storage</h3>
                <p>
                  Christ Fellowship will be happy to receive packages for vendors. Please make sure to email VonaeA@cftoday.org with expected delivery date and tracking information. We ask that shipments do not arrive prior to January 31. </p>
                <p>
                  5343 Northlake Blvd<br></br>
                  Attn: Vonae Ayoub, Conference Sponsorship<br></br>
                  Palm Beach Gardens, FL 33418</p>
              </div>
            </div>
          </div>
          <hr className="w-75"></hr>
          <h1 className="text-center">
            FAQs
          </h1>
          <div className="child-container active" data-child-id="faq">
            <div className="row">
              <div className="py-2 col">
                <div>
                  <h4 className="text-success font-weight-bold">What is the projected number of attendees?</h4>
                  <p>1,000 attendees</p>
                </div>
                <div>
                  <h4 className="text-success font-weight-bold">Will we be able to select our Exhibition Location?</h4>
                  <p>We will assign the exhibits to Sponsors based on Sponsorship Level. You will receive assignment upon arrival.</p>
                </div>
                <div>
                  <h4 className="text-success font-weight-bold">What is the Sponsorship Lounge?</h4>
                  <p>The lounge is a place for yopu to connect with other sponsors, grab a snack, and take a break from the Conference.</p>
                </div>
                <div>
                  <h4 className="text-success font-weight-bold">When will people have time to view exhibits?</h4>
                  <p>The schedule has allotted time for viewing exhibits before session and in-between sessions and breakouts.</p>
                </div>
                <div>
                  <h4 className="text-success font-weight-bold">If I am an exhibitor working an exhibit booth, do I automatically have access to the Conference?</h4>
                  <p>To gain access to the Conference, you will need to have a Complimentary Pass or purchase a ticket at christfellowshipconference.com.&nbsp;&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-75"></hr>
        <div className="container mb-5 page-tabs-container ">
          <div className="row">
            <div className="col border-danger p-3 text-center">
              <a className="btn font-weight-bold btn-outline-secondary text-secondary" href="https://rockcon.gocf.org/content/assets/2019/sponsor_packages.pdf" target="_blank">Download PDF Version</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsor;
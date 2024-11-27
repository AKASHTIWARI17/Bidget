import Layout from '@/components/Layout/Layout'
import Breadcrumb from '@/components/common/Breadcrumb'
import React from 'react'

function Faq() {
  return (
    <Layout>
        <Breadcrumb pageName="FAQ" />
        <section className="faq-section pt-110">
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-4 order-lg-1 order-2">
        <div className="faq-left-area">
          <div className="article">
            <div className="article-header">
              <h5>Most Popular Articles</h5>
            </div>
            <ul className="article-body">
              <li>
                <h6>01. Tips For Winning</h6>
                <p>“Lorem ipsum dolor sit amet, consectetur adi scing elit, sed do eiusmod tempor incididunt   ut labore et dolore</p>
              </li>
              <li>
                <h6>02. How to Win Bid</h6>
                <p>“Lorem ipsum dolor sit amet, consectetur adi scing elit, sed do eiusmod tempor incididunt   ut labore et dolore</p>
              </li>
            </ul>
          </div>
          <div className="qsn-area">
            <h5>HAVE ANY QUESTIONS?</h5>
            <form className="qsn-form">
              <div className="form-inner">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Type your name " />
              </div>
              <div className="form-inner">
                <textarea name="message" rows={5} placeholder="Type your question" defaultValue={""} />
              </div>
              <button className="qsn-send-btn">Submit Now</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-8 order-lg-2 order-1">
        {/* faq */}
        <div className="faq-wrap">
          <div className="faq-item">
            <h5 className="accordion-button" id="heading01" data-bs-toggle="collapse" data-bs-target="#collapse01" aria-controls="collapse01">
              <span className="faq-serial">01</span> Posuere vestibulum duis aliquam magnis laoreet?
            </h5>
            <div id="collapse01" className="accordion-collapse collapse show">
              <div className="faq-body">
                You configure credit limits when you create packages in Offer Design. When a customer purchases a package, the credit limits defined in the package apply to the customer's services. See Creating packages customer purchases.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading02" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse02" aria-controls="collapse02">
              <span className="faq-serial">02</span> We help to create visual strategies?
            </h5>
            <div id="collapse02" className="accordion-collapse collapse">
              <div className="faq-body">
                Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading03" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse03" aria-controls="collapse03">
              <span className="faq-serial">03</span> Questionnaire on online shopping behavior during COVID-19
            </h5>
            <div id="collapse03" className="accordion-collapse collapse">
              <div className="faq-body">
                Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading04" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse04" aria-controls="collapse04">
              <span className="faq-serial">04</span> How do I know if I'm the high bidder?
            </h5>
            <div id="collapse04" className="accordion-collapse collapse">
              <div className="faq-body">
                Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading05" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse05" aria-controls="collapse05">
              <span className="faq-serial">05</span> How will I know if my bid was successful?
            </h5>
            <div id="collapse05" className="accordion-collapse collapse">
              <div className="faq-body">
                Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.
              </div>
            </div>
          </div>
          <div className="faq-item">
            <h5 id="heading06" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse06" aria-controls="collapse06">
              <span className="faq-serial">06</span> What happens if I bid on the wrong lot?
            </h5>
            <div id="collapse06" className="accordion-collapse collapse">
              <div className="faq-body">
                Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, libero ex hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit amet condimentum erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </Layout>
  )
}

export default Faq
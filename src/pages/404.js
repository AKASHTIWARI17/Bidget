import Layout from '@/components/Layout/Layout'
import Breadcrumb from '@/components/common/Breadcrumb'
import Link from 'next/link'
import React from 'react'

function CustomError() {
  return (
    <Layout>
        <Breadcrumb pageName="404" pageTitle="404" />
        <div className="error-wrapper-start mt-110">
  <div className="container">
    <div className="col-lg-12"> 
      <div className="error-content text-center">
        <div className="error-illustration">
          <img src="assets/images/shape/404-vactor.png" alt="" className="img-fluid" />
        </div>
        <div className="error-texts mx-auto">
          <h2>Oops... Page Not Found!</h2>
          <p>The page you are looking for may have been renamed or does nost exist in this server 
            you will be redirected to homepage shortly</p>
          <div className="back-btn">
            <Link legacyBehavior href="/"><a  className="alpha-btn-md-dark">Back Home</a></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default CustomError

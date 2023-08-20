import React from 'react';
import Layout from "../components/layout";
import BtnBack from "../components/btn-back";

const AboutPage = () => {
    return (
        <Layout>
            <BtnBack/>
            <div className={'about-page'}>
                <h3>About Page</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                    eum excepturi hic laborum officiis placeat reiciendis rem sequi vel velit.
                    Consectetur natus quia sunt. Eligendi ipsa nemo quos saepe voluptate.</p>
            </div>
        </Layout>
    );
};

export default AboutPage;
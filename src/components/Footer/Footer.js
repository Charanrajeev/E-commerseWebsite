import React from 'react';
import '../../App.css';

function Footer() {
  return (
    <div className='container-footer'>
        <div className='container-foot-one'>
            <h2>KFC Restaurent</h2>
            <div className='container-foot-one-one'>
                <div>
                    <img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png'></img>
                </div>
                <div>
                <img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png'></img>
                </div>
                <div>
                <img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png'></img>
                </div>
            </div>
        </div>
        <div className='container-footer-second'>
            <div className='container-footer-second-item'>
                <h3>Resources</h3>
                <div>World Famous Gardens</div>
                <div>Website</div>
                <div>Mobile Apps</div>
            </div>
            <div className='container-footer-second-item'>
                <h3>PRICES</h3>
                <div>Dry Fruits</div>
                <div>Fruits</div>
                <div>Veg and Non Veg</div>

            </div>
            <div className='container-footer-second-item'>
                <h3>Company</h3>
                <div>Market</div>
                <div>Store</div>
                <div>Production</div>
            </div>
            <div className='container-footer-second-item'>
                <h3>SOCIAL</h3>
                <div>Facebook</div>
                <div>Instagram</div>
                <div>Whatsapp</div>
                <div>Twiter</div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './Footer.css'
import logo from '../../Screenshot 2022-04-30 033448.png'

export default function Footer() {
    const hrStyle = {
        color: 'rgb(197, 195, 195)',
        width: '95%',
        margin: 'auto'
    }
    return (
        <footer>
            <div id="footer-1">
                <div id="footer-1_txt">
                    <div id="footer-1_headtxt">Teach the world online</div>
                    <div id="footer-1_bodytxt">Create an online video course, reach students across the globe, and earn money</div>
                </div>
                <div id="footer-1_button"><button>Teach on Udemy</button></div>
            </div>
            <hr style={hrStyle} />
            <div id="footer-2">
                <div id="footer-2_txt">
                    Top companies choose <span id="udemy">Udemy Business</span> to build in-demand career skills.
                </div>
                <div id="footer-2_logos">
                    <div id="footer-2_logo-1"><img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nashdaq" heigth="44" width="115" /></div>
                    <div id="footer-2_logo-2"><img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Volkswagon" heigth="44" width="44" /></div>
                    <div id="footer-2_logo-3">
                        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="box" heigth="44" width="67" />
                    </div>
                    <div id="footer-2_logo-4">
                        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="nettapp" heigth="44" width="115" />
                    </div>
                    <div id="footer-2_logo-5"><img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="eventbrite" heigth="44" width="115" /></div>
                </div>
            </div>
            <hr style={hrStyle} />
            <div id="footer-3">
                <div id="footer-3-divisions">
                    <div id="footer-3-box-1">
                        <ul id="box-1">
                            <li>Udemy Business</li>
                            <li>Teach on Udemy</li>
                            <li>Get the app</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div id="footer-3-box-2">
                        <ul id="box-2">
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Help and Support</li>
                            <li>Affiliate</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                    <div id="footer-3-box-3">
                        <ul id="box-3">
                            <li>Terms</li>
                            <li>Privacy policy</li>
                            <li>Sitemap</li>
                            <li>Accessibility statement</li>
                        </ul>
                    </div>
                    <div id="footer-3-box-4"><button><i class="fa fa-globe"></i>English</button></div>
                </div>
            </div>
            <div id="footer-4">
                <img src={logo} alt="udemy" height="100" width="150" />
                <div class="copy">
                    @copy 2022 Udemy, Inc.
                </div>
            </div>

        </footer>
    )
}

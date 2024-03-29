import Data from '../Data.json';
import '../styles/Home.css'

const Home = () => {
  let img=1;
  return (
    <section className="home_section" id="home">
        <div className="home_content">
            <div className="home_brandname">{Data.landingPage.Banner_Section.section_brand_name}</div>
            <h2 className="home_title"><span className='titleclr'>Fertility Care</span> - Your Journey Towards A Loving Parenthood</h2>
            <p className="home_desc">{Data.landingPage.Banner_Section.section_desc}</p>
            <div className="home_book_app">{Data.landingPage.Banner_Section.section_btn_text}</div>
            <div className="home_icons">
            {Data.landingPage.Banner_Section.section_icons.map(item=>{
                return <img key={img++} src={require("../assests/Icons/"+item)} alt=""/>
            })}
            </div>
        </div>
        <div className="home_banner_img">
          <img src={require("../assests/Photos/bnnaer_img.png")} alt="" />
        </div>
    </section>
  )
}

export default Home;
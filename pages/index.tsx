
import items from "../assets/items"
import Head from 'next/head';
import SocialLink from '../components/SocialLink';
const IndexPage = () => {    
   return ( 
<>
<Head>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jean Khawand</title>
        <meta name="description" content="Jean Khawand Links"/>
        <meta property="og:url" content="https://www.jeankhawand.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Jean Khawand"/>
        <meta property="og:description" content="Jean Khawand"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="https://www.jeankhawand.com"/>
        <meta property="twitter:url" content="https://www.jeankhawand.com"/>
        <meta name="twitter:title" content="Jean Khawand"/>
        <meta name="twitter:description" content="Jean Khawand"/>
</Head>
<section className="pt-16 bg-blueGray-50">
  <div className="w-full lg:w-4/12 px-4 mx-auto">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-10 py-2 flex justify-center">
            <div className="relative">
              <img
                alt="Jean Khawand"
                src="/images/profile.png"
                className="rounded-full max-w-full h-auto w-32 h-32"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
            Jean Khawand
          </h3>
          <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
            Paris, France
          </div>
          <div className="mb-2 text-blueGray-600 mt-2">
            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
            Software Engineer
          </div>
          <div className="mb-2 text-blueGray-600 mt-2">
            <i className="fas fa-message-quote mr-2 text-lg text-blueGray-400" />
            Changing the status quo 🚀
          </div>
        </div>  
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        {items.map((item, i) => {
          return (
            <SocialLink
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              color={item.color}
              link={item.link}
              icon={item.icon}
            ></SocialLink>
          );
        })}
        </div>
      </div>
    </div>
  </div>
</section>
</>


)
    }

export default IndexPage
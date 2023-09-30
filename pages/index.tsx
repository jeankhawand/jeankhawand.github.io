
import items from "../assets/items"
import schema from "../assets/schema"
import Head from 'next/head';
import SocialLink from '../components/SocialLink';
const IndexPage = () => {    
   return ( 
<>
<Head>
        <meta charSet="utf-8"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="monetization" content="$ilp.uphold.com/AP3WxENXk6jn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jean Khawand</title>
        <link rel="icon" sizes="192x192" href="/images/icon_192x192.png"/>
        <meta name="rating" content="General"/>
        <meta name="description" content="Jean's Links"/>
        <meta property="og:url" content="https://www.jeankhawand.com"/>
        <meta property='og:image' content="https://www.jeankhawand.com/images/og-image.png"/>
        <meta property='og:image:url' content="https://www.jeankhawand.com/images/og-image.png"/>
        <meta property="og:image:secure_url" content="https://www.jeankhawand.com/images/og-image.png" />
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:title" content="Jean's Links"/>
        <meta itemProp="name" content="Jean Khawand" />
        <meta itemProp="headline" content="Jean's Links" />
        <meta itemProp="description" content="Jean's Links" />
        <meta itemProp="image" content="https://www.jeankhawand.com/images/og-image.png" />
        <meta itemProp="author" content="Jean Khawand" />
        <meta property="og:description" content="Jean's Links"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image" content="https://www.jeankhawand.com/images/og-image.png"/>
        <meta property="twitter:domain" content="jeankhawand.com"/>
        <meta property="twitter:url" content="https://www.jeankhawand.com"/>
        <meta name="twitter:title" content="Jean's Links"/>
        <meta name="twitter:description" content="Jean's Links"/>
</Head>
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
            <script data-goatcounter="https://ar2am.jeankhawand.com/count"
        async src="//gc.zgo.at/count.js"></script>
<section className="pt-16 bg-blueGray-50">
  <div className="w-full lg:w-4/12 px-4 mx-auto">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-5 py-2 flex justify-center">
            <div className=" rounded-full relative">
              <img
                alt="Jean Khawand"
                src="/images/profile.png"
                className="rounded-full w-32 h-32"
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
            <i className="fas fa-quote-left mr-2 text-lg text-blueGray-400" />
            Challenging the status quo 🚀 
          </div>
        </div>  
        <div className="mt-5 py-5 border-t border-blueGray-200 text-center">
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
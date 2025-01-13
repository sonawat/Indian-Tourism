import React from "react";
import "./Abhi.css";

const Abhi = () => {
  const images = [
    "https://live.staticflickr.com/4138/4826945575_fc2954268a_o.jpg",
    "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
    "https://wallpapers.com/images/featured/delhi-w4r3uroiak1in74w.jpg",
    "https://c4.wallpaperflare.com/wallpaper/829/637/65/cityscapes-delhi-wallpaper-preview.jpg",
    "https://plus.unsplash.com/premium_photo-1661962392861-c3cb1cf6dd82?fm=jpg&q=60&w=3000",
    "https://plus.unsplash.com/premium_photo-1697730489433-4a5fe8a77f96?fm=jpg&q=60&w=3000",
    "https://wallpaperaccess.com/full/1616130.jpg",
    "https://cdn.mos.cms.futurecdn.net/DhZTz6LwB2rroQcyCKme7g.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/87/42/67/1000_F_287426729_qbmatCI3Tc8XIQ5hjUJriYZOZlVUOnb4.jpg",
"https://as1.ftcdn.net/v2/jpg/02/68/02/44/1000_F_268024402_A4K09EAon3St4R26oQhB4qr6V4OqPO2P.jpg",
"https://as2.ftcdn.net/v2/jpg/05/09/56/59/1000_F_509565900_IUrV9R8TlYdDAoagNuklwtVYv3SevsYC.jpg",
"https://as2.ftcdn.net/v2/jpg/10/46/40/15/1000_F_1046401546_evQXy4eIuWURr7ohXh4A014FEBcAdhPB.jpg",
"https://as1.ftcdn.net/v2/jpg/10/06/11/08/1000_F_1006110880_hS7217YwEuYNizpA3HWcs5T5A52klb4B.jpg",
"https://as1.ftcdn.net/v2/jpg/10/79/14/78/1000_F_1079147832_gFVXDqAADYr6RA6273YBrGOisfL3iUwG.jpg",
"https://as1.ftcdn.net/v2/jpg/08/23/51/52/1000_F_823515250_pJ9S4zGXvvhmmFoSYvoNRJ0qvLD9a8ch.jpg",
"https://as1.ftcdn.net/v2/jpg/10/72/14/32/1000_F_1072143218_3Idd0LLailuU6GfZ7nazM3OyiHO2Wcyn.jpg",
"https://as2.ftcdn.net/v2/jpg/02/96/15/77/1000_F_296157719_pE7CdukTlYlklMi7TKsjnHacA6uaDYLs.jpg",
"https://www.treebo.com/blog/wp-content/uploads/2018/06/Webp.net-compress-image-1-3.jpg",
"https://pbs.twimg.com/media/F_teDBwbQAA3l5d.jpg:large",
"https://www.treebo.com/blog/wp-content/uploads/2018/07/Webp.net-compress-image-23-2.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6c2i1_pfKPRbGnyZGWjrUvb8Y4_MzRsqH2g&s",
"https://live.staticflickr.com/7902/33636893978_58dfdf8647_b.jpg",
"https://c8.alamy.com/comp/2T9WAH4/modern-chennai-city-photography-chennai-metro-station-2T9WAH4.jpg",
"https://www.holidify.com/images/cmsuploads/compressed/Valluvar_Kottam_at_Night_20190222095525jpg",
"https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
"https://as2.ftcdn.net/v2/jpg/02/41/35/75/1000_F_241357502_Rix9R1EjcHclXIhoL0AX7gbLRaFOpI26.jpg",
"https://as1.ftcdn.net/v2/jpg/03/75/39/10/1000_F_375391022_kOptbiBsW8GogWe73jvJ40zQGo7U90rk.jpg",
"https://as2.ftcdn.net/v2/jpg/09/54/75/79/1000_F_954757939_tjNF2BDAuGPnrAFbeJQRswzzNdItpUNP.jpg",
"https://as2.ftcdn.net/v2/jpg/07/81/03/19/1000_F_781031922_nYq0sE02Sppeqzcgyo05XGZxKpkDKweN.jpg",
"https://wallpapers.com/images/hd/kolkata-green-palace-mo6pd2rka4a2rznd.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgf_4Ukx3Nfu7Uf9yQ-AiwLfw0r0KMPEE1A&s",
"https://wallpapers.com/images/hd/kolkata-cityscape-at-dusk-n9ie9n4vq1d27ird.jpg",
"https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww",
"https://plus.unsplash.com/premium_photo-1697730329150-c02859ad5440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1598431416722-eefb0a65a1a4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://plus.unsplash.com/premium_photo-1691031429594-83d6103ec104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1629887424001-c1442e96b73d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://plus.unsplash.com/premium_photo-1694475360082-ddd496b750d4?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://plus.unsplash.com/premium_photo-1691031428262-dc0194553516?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxhbXJpdHNhcnxlbnwwfHwwfHx8MA%3D%3D",
"https://images.unsplash.com/photo-1726392681426-3a35e21230de?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxhbXJpdHNhcnxlbnwwfHwwfHx8MA%3D%3D",
"https://wallpapers.com/images/hd/jal-mahal-water-palace-jaipur-nighttime-uhki0tnbfn2lgovf.jpg",
"https://wallpapercave.com/wp/wp2395231.jpg",
"https://wallpapers.com/images/featured/jaipur-yo6kan12f4lycuy0.jpg",
"https://thumbs.dreamstime.com/b/world-trade-park-jaipur-rajasthan-india-192941284.jpg",
"https://img.staticmb.com/mbcontent/images/crop/uploads/2022/10/Aerial-view-of-the-North-and-South-blocks-of-World-Trade-Park-Jaipur_0_1200.jpg",
"https://www.shutterstock.com/image-photo/albert-hall-museum-located-rajasthan-600nw-2398530819.jpg",
"https://static.toiimg.com/thumb/51212242.cms?resizemode=75&width=1200&height=900",
"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/11/12200513/Untitled-design-2024-01-12T200454.995.jpg",
"https://e1.pxfuel.com/desktop-wallpaper/714/550/desktop-wallpaper-someshwar-beach-mangalore.jpg",
"https://c8.alamy.com/comp/2XA31EP/mangalore-india-december-25-2024-thousand-pillars-jain-temple-ancient-temple-located-in-moodbidri-and-visited-by-devotees-and-tourist-2XA31EP.jpg",
"https://www.india.com/wp-content/uploads/2024/08/pur-beach.jpg",
"https://s3.india.com/wp-content/uploads/2024/05/Feature-Image-_-Mangalore-1.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Kq6KpQVtKuoHYKBX02RsQlZM09ZlGXT5EA&s",
"https://im.hunt.in/cg/mangalore/City-Guide/abtmang.jpg",
"https://s7ap1.scene7.com/is/image/incredibleindia/kudroli-gokarnath-temple-mangalore-karnataka-tri-hero?qlt=82&ts=1727164706134",
"https://mangalorecity.in/wp-content/uploads/2020/01/mangalorecity.jpg",
"https://media.tacdn.com/media/attractions-splice-spp-674x446/07/7e/57/dc.jpg",
"https://saffronholidays.in/wp-content/uploads/2024/06/15-The-Statue-of-Unity-A-Tribute-to-Unity-and-Heritage.jpg.webp",
"https://media1.thrillophilia.com/filestore/toh89nba5fiz41ks12ct7q39n0zf_1580985999_31546232517_de3fb13545_b.jpg?w=753&h=450&dpr=2.0",
"https://www.gujarattourism.com/content/dam/gujrattourism/images/destinations/bhavnagar/attractions/religious-sites/swaminarayan-temple-sarangpur/swaminarayan-temple-sarangpur7.jpg",
"https://www.theindia.co.in/_next/image?url=https%3A%2F%2Fapi.theindia.co.in%2Fstorage%2Fimage%2Fplaces%2FSU1HXzIwMTUwMjE3Mzc1NTIzNjYx.jpg&w=3840&q=75",
"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/3c/39/eb.jpg",
"https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/19/11bb23ea7c906f3445f9b9ff66f483ff_1000x1000.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7oTosrkAnxEfOhNZLazePg_hEJ_9yM8yqQ&s",
"https://i.pinimg.com/originals/cf/28/98/cf2898747a6d6a65170b724b5ee9755f.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gJywgdq4BJL34hM1WVnBiGa-wnOL52T2u2KaehS0MkK8prrepiM0vjuvAHar-1OBh34&usqp=CAU",
"https://www.travelandtourworld.com/wp-content/uploads/2024/11/freepik__candid-image-photograph-63-1.jpg",
"https://c1.wallpaperflare.com/preview/384/392/906/ocean-sea-water-ocean-water.jpg",
"https://w0.peakpx.com/wallpaper/77/694/HD-wallpaper-sunrise-beach-coconut-nature-new-rk-beach-road-visakhapatnam-vizag.jpg",
"https://i.pinimg.com/736x/c8/44/dc/c844dc8a778947e24db06f7c75d43dd6.jpg",
"https://c0.wallpaperflare.com/preview/466/81/205/india-visakhapatnam-vizag-steel-plant.jpg",
"https://www.novotel-visakhapatnam.com/wp-content/uploads/sites/24/2022/10/slideshow-home-1-2200x1200.jpg"
  ];

  return (
    <div>
    
      <div className="masonry">
        {images.map((src, index) => (
          <div key={index} className="item">
            <img src={src} alt={`Mockup ${index + 1}`} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Abhi;

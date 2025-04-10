import React from 'react';
import { useState, useMemo } from 'react';
import './CarouselCard.css';
import CardDescriptor from './CardDescriptor';

function CarouselCard({ imagePath }) {
  const [hover, setHover] = useState(false);

  // const images = [
  //   "https://occ-0-1000-2567.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWjEKPJyG0OPzWCNEZYI1KtqIHtSaZPBYozT_lhs2bpaYSt4-GlPuYsJ2i8v-5_D5cyO9NbYpZV73ojsAv6pR49uMC54zyC32_w.jpg?r=291",
  //   "https://occ-0-1000-2567.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ5jjipLSWDBj4_6_AmxNPh9QnzMlGHpJ52eeA_cSdgo10TEXKEOEcpv2DWpHwq-hVgXCRow-X8-qGe8QAynzGu8nuxeBF_9mOG_gvP6ooIt2jQl1codE0y6tWKkB8FwBRtlLPkoTwQ1EzpLv-uBUwFDTdj7JnhhDU2sYuRkRG1LB2oK_OErlPyaoWNAbbd8AOP4AseFJdm670nQ6WjFjfOD1jRhqoXFe_VIg3Wmh5xH1e9xEeuu81_y80b29djySoO98t4Re_FBXzxy9pdDA1FC_MLmf-kXySKR9eWwGxkp22ZoR0Og5E_T8BrWfeBgnim2TOYqeclcRD0TJtoF3RT5lGRD71HK2TqhK9iKz63XxTZTK5c.jpg?r=e6c"
  // ];

  // const selectedImage = useMemo(() => {
  //   const randomIndex = Math.floor(Math.random() * images.length);
  //   return images[randomIndex];
  // }, []);

  return (
    <div className="carouselCardContainer"
         onMouseLeave={() => setHover(false)}
    >
      <img
        className="cardImage"
        src={imagePath}
        alt="Carousel"
        loading="lazy"
        onMouseEnter={() => setHover(true)}
      />
      {hover && <CardDescriptor />}
    </div>
  );
}

export default React.memo(CarouselCard);

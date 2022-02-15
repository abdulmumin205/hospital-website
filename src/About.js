import React from "react";
import image from "./images/feature-img-1.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="headline">about us</h1>
      <p className="sub-head">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        saepe?
      </p>
      <div className="about">
        <img src={image} alt="featured-image" />
        <div className="about-text">
          <h2>Award winning hospital</h2>
          <p>
            Lorem ipsum dolor sit amet, ea eum labitur scsstie percipitoleat
            fabulas complectitur deterruisset at pro. Odio quaeque reformidans
            est eu, expetendis intellegebat has ut, viderer invenire ut his. Has
            molestie percipit an. Falli volumus efficiantur sed id, ad vel
            noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto
            at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et
            jority have suffered alteration. Odio quaeque reformidans est eu,
            expetendis intellegebat has ut, viderer invenire ut his. Has
            molestie percipit an. Falli volumus efficiantur sed id, ad vel
            noster propriae. ebat has ut, viderer invenire ut his. Has molestie
            percipit an. Falli volumus efficiantur sed id, ad vel noster
            propriae Ius ut etiam vivendo, graeci iudicabit constituto at mea.
            No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et amet
            vidisse mentitumsstie percipitoleat fabulas.
          </p>

          <p>
            Lorem ipsum dolor sit amet, ea eum labitur scsstie percipitoleat
            fabulas complectitur deterruisset at pro. Odio quaeque reformidans
            est eu, expetendis intellegebat has ut, viderer invenire ut his. Has
            molestie percipit an. Falli volumus efficiantur sed id, ad vel
            noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto
            at mea. No soleat fabulas prodesset vel, ut quo solum dicunt. Nec et
            jority have suffered alteration. Odio quaeque reformidans est eu,
            expetendis intellegebat has ut, viderer invenire ut his. Has
            molestie percipit an..
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

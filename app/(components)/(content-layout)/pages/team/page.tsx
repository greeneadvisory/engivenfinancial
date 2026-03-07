"use client"
import SpkTeamcards from "@/shared/@spk-reusable-components/spk-pages/spk-teamcards";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface TeamProps {}

const Team : FC<TeamProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title="Pages-Team" />

                <Pageheader title="Pages" currentpage="Team" activepage="Team" />

            {/* <!-- Page Header Close --> */}
          {/* <!-- Start:: row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                        <SpkTeamcards Navigate="#!" Role="Director" Title="Hadley Kylin" Imgsrc="../../assets/images/faces/1.jpg" Color="primary" Imageclass="mb-3" />
                    </div>
                    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                         <SpkTeamcards Navigate="#!" Role="Manager" Title="Ethan Mitchell" Imgsrc="../../assets/images/faces/2.jpg" Color="primarytint1color " Imageclass="mb-3" />
                    </div>
                    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                        <SpkTeamcards Navigate="#!" Role="Creative Director" Title="Iliana Lilly" Imgsrc="../../assets/images/faces/3.jpg" Color="primarytint2color " Imageclass="mb-3" />
                    </div>
                    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                        <SpkTeamcards Navigate="#!" Role="Board Director" Title="Jasmine Della" Imgsrc="../../assets/images/faces/4.jpg" Color="primarytint3color " Imageclass="mb-3" />
                    </div>
                    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                        <SpkTeamcards Navigate="#!" Role="Board Director" Title="Aurora Reed" Imgsrc="../../assets/images/faces/5.jpg" Color="secondary" Imageclass="mb-3" />
                    </div>
                    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                        <SpkTeamcards Navigate="#!" Role="Board Director" Title="Ava Taylor" Imgsrc="../../assets/images/faces/6.jpg" Color="success" Imageclass="mb-3" />
                    </div>
                    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                        <SpkTeamcards Navigate="#!" Role="Board Director" Title="Spencer Robin" Imgsrc="../../assets/images/faces/7.jpg" Color="primary" Imageclass="mb-3" />
                    </div>
                    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                         <SpkTeamcards Navigate="#!" Role="Board Director" Title="Owen Foster" Imgsrc="../../assets/images/faces/8.jpg" Color="primarytint1color " Imageclass="mb-3" />
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}
</Fragment>
);
};

export default Team;
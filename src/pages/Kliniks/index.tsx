import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import KlinikaSearch from "./KlinikaSearch";

const klinikalar = [
  {
    name: "Toshkent terapev knlinikasi",
    manzil: "Toshkent shahar, Yunusobod tumani, Mustaqillik ko'cha, 38-uy",
    image: "http://localhost:3000/static/med-image.jpg",
    yonalishlar: ["terapev", "koz", "lor"],
  },
  {
    name: "Toshkent terapev knlinikasi",
    manzil: "Toshkent shahar, Yunusobod tumani, Mustaqillik ko'cha, 38-uy",
    image: "http://localhost:3000/static/med-image.jpg",
    yonalishlar: ["terapev"],
  },
  {
    name: "Toshkent terapev knlinikasi",
    manzil: "Toshkent shahar, Yunusobod tumani, Mustaqillik ko'cha, 38-uy",
    image: "http://localhost:3000/static/med-image.jpg",
    yonalishlar: ["terapev", "koz", "lor", "urologiya"],
  },
  {
    name: "Toshkent terapev knlinikasi",
    manzil: "Toshkent shahar, Yunusobod tumani, Mustaqillik ko'cha, 38-uy",
    image: "http://localhost:3000/static/med-image.jpg",
    yonalishlar: ["terapev", "lor"],
  },
  {
    name: "Toshkent terapev knlinikasi",
    manzil: "Toshkent shahar, Yunusobod tumani, Mustaqillik ko'cha, 38-uy",
    image: "http://localhost:3000/static/med-image.jpg",
    yonalishlar: ["terapev", "koz", "lor"],
  },
];

const klinikData = [...klinikalar, ...klinikalar, ...klinikalar];

export const getKlinikById = (id: number) => {
  return klinikData[id];
};

interface IProps extends RouteComponentProps {}
// @ts-nocheck
const KlinakaWebsite = (props: IProps) => {
  console.log(props);
  //   const getAbsolutePath = (extraPath) => {
  //     return;
  //   };
  return (
    <div>
      <h1>KlinakaWebsite</h1>
      <KlinikaSearch />

      <div className="d-flex flex-wrap justify-content-center">
        {klinikData.map((klinika, idx) => {
          return (
            <Link to={`${props.match.path}/${idx}`}>
              <div style={{ maxWidth: 300 }} className="w-100 m-2">
                <img src={klinika.image} className="mw-100" />
                <h3>{klinika.name}</h3>
                <p>
                  {klinika.yonalishlar.map((yonalish) => {
                    return <i className="m-1">{yonalish}</i>;
                  })}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(KlinakaWebsite);

import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { getKlinikById } from "../Kliniks";
import { FaClinicMedical } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
// styles
import "./styles.css";

interface IProps extends RouteComponentProps {}

const OneKlinikPage = (props: IProps) => {
  //   @ts-ignore
  const klinikId = props.match.params.klinikId;
  console.log("klinikId ", klinikId);

  const klinik = getKlinikById(klinikId);

  if (!klinik) {
    return <div>Klinika topilmadi</div>;
  }
  return (
    <div>
      <div className="main__kilink__header d-md-flex justify-content-center">
        <div className="main__img__wrapper flex-grow-1 mb-2 mb-md-0">
          <img
            src={klinik.image}
            alt={klinik.name}
            className="clinik__main__image"
          />
        </div>
        <div className="kilink__info__wrapper p-2 p-sm-3 p-md-4 flex-grow-1">
          <h1 className="d-flex h3 mb-1">
            <FaClinicMedical
              className="mr-1 mt-1 d-inline-block vertical-center flex-shrink-0"
              size={25}
              color="green"
            />
            {klinik.name}
          </h1>
          <p className="d-flex mb-1">
            <MdLocationOn
              className="mr-1 mt-1 d-inline-block vertical-center flex-shrink-0"
              size={25}
              color="green"
            />
            {klinik.manzil}
          </p>
          <p className="d-flex mb-0 align-items-end">
            <FaHandHoldingMedical size={25} color="green" />
            <span>
              {klinik.yonalishlar.map((yonalish) => {
                return <i className="m-2 p">{yonalish}</i>;
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(OneKlinikPage);

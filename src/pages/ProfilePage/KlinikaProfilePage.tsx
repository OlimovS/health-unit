import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { getKlinikById } from "../Kliniks";
import { FaClinicMedical } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";

// styles
import "./styles.css";

interface IProps extends RouteComponentProps {}

const KlinikProfilePage = (props: IProps) => {
  //   @ts-ignore
  const klinikId = props.match.params.klinikId;
  console.log("klinikId ", klinikId);

  const klinik = getKlinikById(0);

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
          <p className="d-flex mb-1 align-items-end">
            <FaHandHoldingMedical size={25} color="green" />
            <span>
              {klinik.yonalishlar.map((yonalish) => {
                return <i className="m-2 p">{yonalish}</i>;
              })}
            </span>
          </p>
          <p className="d-flex mb-1">
            <AiFillPhone
              className="mr-1 mt-1 d-inline-block vertical-center flex-shrink-0"
              size={25}
              color="green"
            />
            +998 99 123 45 67
          </p>
        </div>
      </div>
      <div className="mx-auto mt-4" style={{ width: 500 }}>
        <Tabs>
          <TabList>
            <Tab>Postlar</Tab>
            <Tab>Meetinglar</Tab>
            <Tab>Ilmiy ishlar</Tab>
            <Tab>Sozlamalar</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>Postlar</p>
            </TabPanel>
            <TabPanel>
              <p>Meetinglar</p>
            </TabPanel>
            <TabPanel>
              <p>Ilmiy ishlar</p>
            </TabPanel>
            <TabPanel>
              <p>Umumiy sozlamalar</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default withRouter(KlinikProfilePage);

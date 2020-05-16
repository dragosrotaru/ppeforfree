import React, {useState} from "react";
import moment from "moment";
import {Modal as AntDModal} from "antd";
import {Col, Row, Typography} from "antd";
import {EyeTwoTone} from "@ant-design/icons";
import "./style.css";

const {Paragraph} = Typography;

type Props = {
  id?: string;
  name?: string;
  description?: string;
  locations?: string[];
  isPublic?: boolean;
  foundedOn?: string;
  memberCount?: number;
  memberCountIncreaseWeekly?: number;
  postCountIncreaseDaily?: number;
  postCountIncreaseMonthly?: number;
};

type RowValueProps = {
  title?: string;
  value?: string;
};

const RowValue = ({title, value}: RowValueProps) => (
  <Row>
    <Col span={12}>
      <Paragraph>
        <strong>{title}</strong>
      </Paragraph>
    </Col>
    <Col span={12}>
      <Paragraph>{value}</Paragraph>
    </Col>
  </Row>
);

const SiteLink = ({id}: {id: string}) => (
  <a href={`https://facebook.com/groups/${id}`} target="_blank" rel="noopener noreferrer">
    Visit site
  </a>
);

export const DetailModal = ({
  id,
  name,
  description,
  locations,
  isPublic,
  foundedOn,
  memberCount,
  memberCountIncreaseWeekly,
  postCountIncreaseDaily,
  postCountIncreaseMonthly,
}: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div>
        <span className="button" onClick={showModal}>
          <EyeTwoTone />
        </span>
      </div>
      <AntDModal
        title={name}
        visible={modalVisible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={null}
      >
        <Row>
          <Col>
            {description && <Paragraph>{description}</Paragraph>}
            {id && (
              <Paragraph className="text-align-center">
                <SiteLink id={id} />
              </Paragraph>
            )}
            {locations && <Paragraph>Locations: {locations}</Paragraph>}
          </Col>
        </Row>
        <RowValue title="Created on:" value={moment(foundedOn).format("YYYY-MM-DD")} />
        <RowValue title="Members:" value={memberCount?.toString()} />
        <RowValue
          title="New members this week:"
          value={memberCountIncreaseWeekly?.toString()}
        />
        <RowValue title="Posts today:" value={postCountIncreaseDaily?.toString()} />
        <RowValue
          title="Posts this month:"
          value={postCountIncreaseMonthly?.toString()}
        />
      </AntDModal>
    </>
  );
};

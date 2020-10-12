import React from "react";
import { Card, Table } from "antd";
import Title from "../Title";
import { PlusCircleOutlined } from "@ant-design/icons";
import { string, func, array } from "prop-types";
import "./styles.scss";

const CustomTable = ({ title, onClick, dataSource, columns }) => {
    return (
        <Card
            title={
                <Title
                    title={title}
                    icon={<PlusCircleOutlined style={{ fontSize: 24 }} onClick={onClick} />}
                />
            }
        >
            <Table dataSource={dataSource} columns={columns} />
        </Card>
    );
};

CustomTable.propTypes = {
    title: string.isRequired,
    onClick: func.isRequired,
    dataSource: array.isRequired,
    columns: array.isRequired
}

export default CustomTable;
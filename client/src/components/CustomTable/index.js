import React from "react";
import { Table, Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { string, func, array } from "prop-types";
import "./styles.scss";

const CustomTable = ({ tooltip, onClick, dataSource, columns }) => {
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
            <Tooltip title={tooltip}>
                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    style={{ float: "right", margin: 20 }}
                    onClick={onClick}
                    icon={<PlusOutlined />}
                />
            </Tooltip>
        </div>
    );
};

CustomTable.propTypes = {
    onClick: func.isRequired,
    dataSource: array.isRequired,
    columns: array.isRequired,
    tooltip: string
}

export default CustomTable;
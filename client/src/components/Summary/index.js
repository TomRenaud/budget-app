import React from "react";
import { Card, Statistic } from "antd";
import {
    ArrowUpOutlined,
    ArrowDownOutlined,
    CloseOutlined,
    EditOutlined
} from "@ant-design/icons";
import { number, array, func } from "prop-types";
import "./styles.scss";

const Summary = ({ wages, credit, debit, balance, actions, onRemoveCredit  }) => {
    return (
        <div className="container-summary">
            <div className="container-wages">
                {
                    wages.map((salary, i) =>
                        <Card
                            key={i}
                            title={`Revenu ${i + 1}`}
                            className="card-salary"
                            actions={[
                                <CloseOutlined key="close" onClick={() => onRemoveCredit(salary)} />,
                                <EditOutlined key="edit" disabled />
                            ]}
                        >
                            <Statistic key={i} value={salary} precision={2} suffix="€" />
                        </Card>
                    )
                }
                { actions }
            </div>
            <div className="container-summary-details">
                <Card className="card-detail">
                    <Statistic
                        title="Crédit"
                        value={credit}
                        precision={2}
                        valueStyle={{ color: "#3f8600" }}
                        prefix={<ArrowUpOutlined />}
                        suffix="€"
                    />
                </Card>
                <Card className="card-detail">
                    <Statistic
                        title="Solde"
                        value={balance}
                        precision={2}
                        valueStyle={{ color: Math.sign(balance) > -1 ? "#3f8600" : "red" }}
                        prefix={Math.sign(balance) > -1 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="€"
                    />
                </Card>
                <Card className="card-detail">
                    <Statistic
                        title="Débit"
                        value={debit}
                        precision={2}
                        valueStyle={{ color: "red" }}
                        prefix={<ArrowDownOutlined />}
                        suffix="€"
                    />
                </Card>
            </div>
        </div>
    );
};

Summary.propTypes = {
    wages: array.isRequired,
    debit: number.isRequired,
    balance: number.isRequired,
    onRemoveCredit: func.isRequired,
    credit: number,
    actions: array
};

export default Summary;
import React, { useState } from "react";
import Title from "../Title";
import { InputNumber, Modal, DatePicker, Button, Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import moment from "moment";
import 'moment/locale/fr';
import { bool, func, array } from "prop-types";
import "./styles.scss";

const { Option } = Select;
const currentMonth = moment().format('MM');
const currentYear = moment().format('YYYY');
const defaultDate = moment(`${currentMonth}/05/${currentYear}`, "MM/DD/YYYY");

const ChargesModal = ({ isVisible, onCancel, categories, onOk }) => {
    const [charge, setCharge] = useState({
        date: defaultDate
    });
    return (
        <Modal
            title={<Title title="Nouvelle charge" icon={<CloseOutlined onClick={onCancel} />} />}
            visible={isVisible}
            closable={false}
            footer={
                <div>
                    <Button
                        disabled={Object.keys(charge).length !== 3}
                        onClick={() => onOk({ id: Date.now(), ...charge })}
                    >
                        Ajouter
                    </Button>
                </div>
            }
        >
            <div className="container-item">
                <span><strong>Date de prélèvement :</strong></span>
                <DatePicker
                    style={{ width: 300 }}
                    format="DD/MM/YYYY"
                    defaultValue={defaultDate}
                    onChange={date => setCharge({ ...charge, date })}
                />
            </div>
            <div className="container-item">
                <span><strong>Catégorie :</strong></span>
                <Select
                    placeholder="Sélectionnez une catégorie"
                    style={{ width: 300 }}
                    onChange={(_, opt) => setCharge({
                        ...charge,
                        category: opt.children
                    })}
                >
                    {
                        categories.map((c, i) => <Option key={i} value={c.value}>{c.label}</Option>)
                    }
                </Select>
            </div>
            <div className="container-item">
                <span><strong>Montant (€) :</strong></span>
                <InputNumber
                    style={{ width: 300 }}
                    placeholder="1000"
                    formatter={value => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={(amount) => setCharge({ ...charge, amount })}
                />
            </div>
        </Modal>
    )
};

ChargesModal.propTypes = {
    isVisible: bool.isRequired,
    onCancel: func.isRequired,
    onOk: func.isRequired,
    categories: array.isRequired
}

export default ChargesModal;
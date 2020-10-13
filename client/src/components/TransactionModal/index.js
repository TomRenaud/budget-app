import React, { useState } from "react";
import {Modal, DatePicker, Button, Select, InputNumber} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Title from "../Title";
import moment from "moment";
import 'moment/locale/fr';
import { bool, func, array } from "prop-types";

const { Option } = Select;

const TransactionModal = ({ isVisible, onCancel, categories, onOk }) => {
    const [transaction, setTransaction] = useState({});
    return (
        <Modal
            title={
                <Title
                    title="Nouvelle dépense"
                    icon={<CloseOutlined onClick={onCancel} />}
                />
            }
            visible={isVisible}
            closable={false}
            footer={
                <div>
                    <Button
                        disabled={Object.keys(transaction).length !== 3}
                        onClick={() => onOk(transaction)}
                    >
                        Ajouter
                    </Button>
                </div>
            }
        >
            <div className="container-item">
                <span><strong>Date :</strong></span>
                <DatePicker
                    style={{ width: 300 }}
                    format="DD/MM/YYYY"
                    defaultValue={moment()}
                    onChange={(_, date) => setTransaction({ ...transaction, date })}
                />
            </div>
            <div className="container-item">
                <span><strong>Catégorie :</strong></span>
                <Select
                    placeholder="Sélectionnez une catégorie"
                    style={{ width: 300 }}
                    onChange={(_, opt) => setTransaction({
                        ...transaction,
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
                    onChange={(amount) => setTransaction({ ...transaction, amount })}
                />
            </div>
        </Modal>
    )
}

TransactionModal.propTypes = {
    isVisible: bool.isRequired,
    onCancel: func.isRequired,
    onOk: func.isRequired,
    categories: array.isRequired
}

export default TransactionModal;
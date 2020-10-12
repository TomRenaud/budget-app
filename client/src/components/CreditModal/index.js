import React, { useState } from "react";
import { bool, func } from "prop-types";
import { InputNumber, Modal} from "antd";

const CreditModal = ({ isVisible, onOK, onCancel }) => {
    const [credit, setCredit] = useState();
    return (
        <Modal
            title="Nouveau revenu"
            visible={isVisible}
            onOk={() => onOK(credit)}
            onCancel={onCancel}
            okButtonProps={{ disabled: !credit }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span><strong>Montant (€) :</strong></span>
                <InputNumber
                    style={{ width: 300 }}
                    placeholder="1000"
                    formatter={value => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={(amount) => setCredit(amount)}
                />
            </div>
        </Modal>
    );
};

CreditModal.propTypes = {
    isVisible: bool.isRequired,
    onOK: func.isRequired,
    onCancel: func.isRequired
};

export default CreditModal;
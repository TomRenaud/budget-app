import React, { useEffect, useState } from "react";
import { Collapse, Tooltip } from 'antd';
import { PlusCircleOutlined } from "@ant-design/icons";
import TransactionModal from "../components/TransactionModal";
import ChargesModal from "../components/ChargesModal";
import CustomTable from "../components/CustomTable";
import CreditModal from "../components/CreditModal";
import Summary from "../components/Summary";
import { useDispatch, useSelector } from "react-redux";
import { setBackup } from "../actions/home";
import {
    transactionsColumns,
    chargesColumns,
    chargesCategories,
    transactionsCategories
} from "../config/tables";
import "../styles/home.scss";

const Home = () => {
    // SELECTORS
    const backup = useSelector(state => state.backup);

    // SUMMARY
    const [summary, setSummary] = useState({
        credit: 0,
        debit: 0,
        balance: 0,
        wages: [],
        charges: [],
        transactions: []
    });

    const { credit, debit, balance, wages, charges, transactions } = summary;

    // MODALS
    const [isTransactionModalVisible, setIsTransactionModalVisible] = useState(false);
    const [isChargesModalVisible, setIsChargesModalVisible] = useState(false);
    const [isVisibleCreditModal, setIsVisibleCreditModal] = useState(false);

    useEffect(() => {
        if(Object.keys(backup).length === 6) {
            setSummary(backup);
        }
    }, [backup]);

    const dispatch = useDispatch();
    const { Panel } = Collapse;

    const updateSummary = (obj) => {
        setSummary({ ...summary, ...obj });
        dispatch(setBackup({ ...summary, ...obj }));
    };

    const addNewCharge = (charge) => {
        const newDebit = debit + charge.amount;
        const newBalance = credit - newDebit;
        updateSummary({
            debit: newDebit,
            balance: newBalance,
            charges: [
                ...charges,
                {
                    ...charge,
                    key: charges.length
                }
            ]
        });
        setIsChargesModalVisible(false);
    };

    const addNewTransaction = (transaction) => {
        const newDebit = debit + transaction.amount;
        const newBalance = credit - newDebit;
        updateSummary({
            debit: newDebit,
            balance: newBalance,
            transactions: [
                ...transactions,
                {
                    ...transaction,
                    key: transactions.length
                }
            ]
        });
        setIsTransactionModalVisible(false);
    };

    const addNewCredit = (amount) => {
        const newWages = [...wages, amount];
        updateSummary({
            wages: newWages,
            credit: newWages.reduce((sum, salary) => sum + salary)
        });
        setIsVisibleCreditModal(false);
    };

    const removeSalary = (amount) => {
        const diff = credit - amount;
        const updatedWages = wages.filter(salary => salary !== amount)
        updateSummary({
            credit: diff,
            wages: updatedWages
        });
    };

    return (
        <div>
            <Summary
                wages={wages}
                balance={balance}
                credit={credit}
                debit={debit}
                onRemoveCredit={removeSalary}
                actions={[
                    <Tooltip key="new_credit" title="Ajouter un revenu">
                        <PlusCircleOutlined
                            style={{ fontSize: 24, margin: 10 }}
                            onClick={() => setIsVisibleCreditModal(true)}
                        />
                    </Tooltip>
                ]}
            />
            <Collapse className="container-collapse-table" defaultActiveKey={['1']}>
                <Panel header="Charges" key="1">
                    <CustomTable
                        title="Charges"
                        dataSource={charges}
                        columns={chargesColumns}
                        onClick={() => setIsChargesModalVisible(!isChargesModalVisible)}
                    />
                </Panel>
            </Collapse>
            <Collapse className="container-collapse-table" defaultActiveKey={['1']}>
                <Panel header="Dépenses" key="1">
                    <CustomTable
                        title="Dépenses"
                        dataSource={transactions}
                        columns={transactionsColumns}
                        onClick={() => setIsTransactionModalVisible(!isTransactionModalVisible)}
                    />
                </Panel>
            </Collapse>
            <TransactionModal
                categories={transactionsCategories}
                isVisible={isTransactionModalVisible}
                onCancel={() => setIsTransactionModalVisible(false)}
                onOk={addNewTransaction}
            />
            <ChargesModal
                categories={chargesCategories}
                isVisible={isChargesModalVisible}
                onCancel={() => setIsChargesModalVisible(false)}
                onOk={addNewCharge}
            />
            <CreditModal
                isVisible={isVisibleCreditModal}
                onCancel={() => setIsVisibleCreditModal(false)}
                onOK={addNewCredit}
            />
        </div>
    );
};

export default Home;
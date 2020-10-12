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
    const backupFromStore = useSelector(state => state.backup);

    // BACKUP
    const [_backup, _setBackup] = useState({});

    // MODALS
    const [isTransactionModalVisible, setIsTransactionModalVisible] = useState(false);
    const [isChargesModalVisible, setIsChargesModalVisible] = useState(false);
    const [isVisibleCreditModal, setIsVisibleCreditModal] = useState(false);

    // DATASOURCE
    const [chargesDataSource, setChargesDataSource] = useState( []);
    const [transactionsDataSource, setTransactionsDataSource] = useState( []);

    // SUMMARY DATA
    const [credit, setCredit] = useState(0);
    const [debit, setDebit] = useState( 0);
    const [balance, setBalance] = useState( 0);
    const [wages, setWages] = useState( []);

    const dispatch = useDispatch();
    const { Panel } = Collapse;

    useEffect(() => {
        dispatch(setBackup(_backup));
    }, [_backup]);

    useEffect(() => {
        backupFromStore.credit && setCredit(backupFromStore.credit);
        backupFromStore.debit && setDebit(backupFromStore.debit);
        backupFromStore.balance && setBalance(backupFromStore.balance);
        backupFromStore.wages && setWages(backupFromStore.wages);
        backupFromStore.charges && setChargesDataSource(backupFromStore.charges);
        backupFromStore.transactions && setTransactionsDataSource(backupFromStore.transactions);
        //setBackup(backupFromStore);
    }, [backupFromStore]);

    useEffect(() => {
        const diff = credit - debit
        setBalance(diff);
        _setBackup({ ..._backup, balance: diff });
    }, [credit, debit]);

    useEffect(() => {
        if(wages.length) {
            const sum = wages.reduce((sum, salary) => sum + salary);
            setCredit(sum);
            _setBackup({ ..._backup, credit: sum });
        }
    }, [wages]);

    const addNewCharge = (charge) => {
        const newDebit = debit + charge.amount
        setDebit(newDebit);
        setChargesDataSource([
            ...chargesDataSource,
            {
                ...charge,
                key: chargesDataSource.length
            }
        ]);
        _setBackup({
            ..._backup,
            debit: newDebit,
            charges: [
                ..._backup.charges,
                {
                    ...charge,
                    key: chargesDataSource.length
                }
            ]
        });
        setIsChargesModalVisible(false);
    };

    const addNewTransaction = (transaction) => {
        const newDebit = debit + transaction.amount
        setDebit(newDebit);
        setTransactionsDataSource([
            ...transactionsDataSource,
            {
                ...transaction,
                key: transactionsDataSource.length
            }
        ]);
        _setBackup({
            ..._backup,
            debit: newDebit,
            transactions: [
                ..._backup.transactions,
                {
                    ...transaction,
                    key: transactionsDataSource.length
                }
            ]
        });
        setIsTransactionModalVisible(false);
    };

    const addNewCredit = (amount) => {
        setWages([...wages, amount]);
        _setBackup({ ..._backup, wages: [...wages, amount] });
        setIsVisibleCreditModal(false);
    };

    const removeSalary = (amount) => {
        const diff = credit - amount;
        const updatedWages = wages.filter(salary => salary !== amount)
        setWages(updatedWages);
        setCredit(diff);
        _setBackup({
            ..._backup,
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
                        dataSource={chargesDataSource}
                        columns={chargesColumns}
                        onClick={() => setIsChargesModalVisible(!isChargesModalVisible)}
                    />
                </Panel>
            </Collapse>
            <Collapse className="container-collapse-table" defaultActiveKey={['1']}>
                <Panel header="Dépenses" key="1">
                    <CustomTable
                        title="Dépenses"
                        dataSource={transactionsDataSource}
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
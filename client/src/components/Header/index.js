import React from 'react';
import { BankOutlined, CloudUploadOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import {useDispatch, useSelector} from 'react-redux';
import { saveBackup, importBackup } from "../../services/API";
import { setBackup } from "../../actions/home";
import './css/menu.scss';

export const Header = () => {

  const dispatch = useDispatch();
  const backup = useSelector(state => state.backup);

  const handleImportBackup = async () => {
      const res = await importBackup();
      dispatch(setBackup(res));
  };

  return (
      <div className="container-header">
          <div className="container-header-title">
              <BankOutlined style={{ fontSize: 24 }}/>
              <h1 className="header-app">Budget App</h1>
          </div>
          <div className="container-header-actions">
              <CloudDownloadOutlined style={{ fontSize: 24, margin: 10 }} onClick={handleImportBackup} />
              <CloudUploadOutlined style={{ fontSize: 24, margin: 10 }} onClick={() => saveBackup(backup)} />
          </div>
      </div>
  );
};

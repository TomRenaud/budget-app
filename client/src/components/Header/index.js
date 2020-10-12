import React from 'react';
import { Button, Tooltip } from "antd";
import { BankOutlined, SaveOutlined, CloudDownloadOutlined } from "@ant-design/icons";
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
              <BankOutlined style={{ fontSize: 24, color: "#fff" }} />
              <h1 className="header-app">Budget App</h1>
          </div>
          <div className="container-header-actions">
              <Tooltip title="Importer">
                  <Button
                      size="large"
                      type="primary"
                      shape="circle"
                      icon={<CloudDownloadOutlined />}
                      onClick={handleImportBackup}
                  />
              </Tooltip>
              <Tooltip title="Enregistrer">
                  <Button
                      size="large"
                      type="primary"
                      shape="circle"
                      icon={<SaveOutlined />}
                      onClick={() => saveBackup(backup)}
                  />
              </Tooltip>
          </div>
      </div>
  );
};
